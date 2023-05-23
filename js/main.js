/*모달창 */
var btn = document.querySelector(".btnT");

var modal = document.querySelector(".modal");

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

var btn = document.querySelector(".btnT1");

var modal = document.querySelector(".modal");

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




