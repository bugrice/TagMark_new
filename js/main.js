/*모달창1 */
var btn = document.querySelector(".btnT");

var modal = document.querySelector(".modal1");

var span = document.querySelector(".close");

btn.addEventListener("click", function () {
  modal.style.display = "block";
});

span.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

/*모달창2 */

var btn1 = document.querySelector(".btnT1");

var modal1 = document.querySelector(".modal");

var span1 = document.querySelector(".close1");

btn1.addEventListener("click", function () {
  modal1.style.display = "block";
  modal.style.display = "none";
});

span1.addEventListener("click", function () {
  modal1.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
});




/*버튼 편집*/
document.addEventListener("DOMContentLoaded", (e) => {
  let icn = document.querySelector("#xi-pen");

  icn.addEventListener("mouseover", (e) => {
    e.target.setAttribute("class", "xi-pen");
  });

  icn.addEventListener("mouseout", (e) => {
    e.target.setAttribute("class", "xi-pen-o");
  });

  let idText = document.querySelector("#id span");

  icn.addEventListener("click", (e) => {
    idText.textContent = prompt("새로운 태그를 입력하세요");
  });

  let profileEditButton = document.querySelector("#profile_info button");
  let userInfo = document.querySelector("#user_info");
  let summary = document.querySelector("#summary");
  let changing = false;

  profileEditButton.addEventListener("click", (e) => {
    if (changing) {
      let _userInfo = userInfo.querySelector("input").value;
      let _summary = summary.querySelector("input").value;

      userInfo.innerHTML = _userInfo;
      summary.innerHTML = _summary;

      e.target.textContent = "태그 편집";
      changing = false;
    } else {
      let _userInfo = userInfo.textContent;
      let _summary = summary.textContent;

      userInfo.innerHTML = "<input value=" + _userInfo + "></input>"
      summary.innerHTML = "<input value=" + _summary + "></input>";

      e.target.textContent = "태그 편집 완료";
      changing = true;
    }
  })

});




/*입력 텍스트*/
document.addEventListener("DOMContentLoaded", (e) => {
  const inputText = document.getElementById("inputText");
  const savedText = document.getElementById("savedText");
  const clearButton = document.getElementById("btnT3");
  const modal1 = document.getElementById("Modal1");

  inputText.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const text = inputText.value;
      savedText.textContent = text;
      inputText.value = "";
    }
  });

  clearButton.addEventListener("click", () => {
    inputText.value = "";
    savedText.textContent = "";
    const modal1 = confirm("삭제하시겠습니까?");
  });

});



/*북마크 텍스트 추가*/
let rightBoxes = document.querySelectorAll(".right-box");

rightBoxes.forEach(function(rightBox) {
  let editIcon = rightBox.querySelector(".xi-pen");
  let deleteIcon = rightBox.querySelector(".xi-trash");
  let textElement = rightBox.querySelector(".text");

  editIcon.addEventListener("click", function() {
    let userInput = prompt("추가할 URL을 입력해주세요");

    if (userInput !== null) {
      if (textElement === null) {
        textElement = document.createElement("div");
        textElement.className = "text";
        rightBox.insertBefore(textElement, editIcon.nextSibling);
      }

      textElement.innerText = userInput;
    }
  });

  deleteIcon.addEventListener("click", function() {
    if (textElement !== null) {
      let confirmation = confirm("삭제하시겠습니까?");
      if (confirmation) {
        textElement.innerText = "";
      }
      
    }
  });
});

/*TOP버튼*/
window.addEventListener('scroll', function() {
  var topButton = document.getElementById('topButton');

  if (window.pageYOffset > 300) {
      topButton.style.display = 'block';
  } else {
      topButton.style.display = 'none';
  }
});
topButton.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});


// 아이콘 클릭 시 view 모드 변경
document.addEventListener("DOMContentLoaded", (e) => {
  const chmod2 = document.getElementById("app");
  const boxes2 = document.querySelectorAll(".right-box");

  boxes2.forEach(function(box2) {
    chmod2.addEventListener("click", function() {
      box2.classList.toggle("right-box1");
    });
  });

  // +버튼 눌렀을때 right-box생성
  const container = document.getElementById("container");
  const addButton = document.getElementById("bookmarkplus");

  addButton.addEventListener("click", function() {
    const newBox = document.createElement("div");
    newBox.classList.add("right-box");
    newBox.innerHTML = `
      <div class="text"></div>
      <div class="right-box-i">
        <i class="xi-pen">&nbsp;</i>
        <i class="xi-trash">&nbsp;</i>
      </div>
    `;
    container.appendChild(newBox);

    const addedRightBox = container.querySelector(".right-box");

    // addedRightBox를 사용하여 작업 처리
    const chmod1 = document.getElementById("app");
    chmod1.addEventListener("click", function(){
      addedRightBox.classList.toggle("right-box1"); // 클래스명 변경
    });
    

  });

});

//search창
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});