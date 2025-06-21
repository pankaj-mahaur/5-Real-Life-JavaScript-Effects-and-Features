var istatus = document.querySelector("h4");

var addFriend = document.querySelector("#add");
var check = 0;

addFriend.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    addFriend.innerHTML = "Remove Friend";
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    addFriend.innerHTML = "Add Friend";
    check = 0;
  }
});

// 2nd Section

var sec = document.querySelector("#container");
var icon = document.querySelector("i");

sec.addEventListener("dblclick", function () {
  icon.style.transform = "translate(-50%, -50%) scale(1)";
  icon.style.opacity = 0.8;

  setTimeout(() => {
    icon.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    icon.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1500);
});

// 3rd section

var main = document.querySelector("#main");
var cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});

// 4th section

var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
  val.addEventListener("mouseenter", function () {
    val.childNodes[3].style.opacity = 1
  });
  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = 0
  });
  val.addEventListener("mousemove", function (dets) {
    val.childNodes[3].style.left = dets.x + "px";
    // val.childNodes[3].style.top = dets.x + "px";
  });

});
