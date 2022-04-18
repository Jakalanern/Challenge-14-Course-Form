// VARIABLES
let form = document.querySelector(".form");
let allInputs = document.querySelectorAll(".input");
let entries = [];
let courseCustomer = document.querySelector(".course_customer");
let courseName = document.querySelector(".course_name");
let courseAuthor = document.querySelector(".course_author");
let courseBox = document.querySelector(".course_box");
let image = document.querySelector(".image");
let alertText = document.querySelector(".alert_text");
let count = -1;

let customerName;
let course;
let authourName;
// MAIN

form.addEventListener("submit", function (e) {
  if (
    allInputs[0].value.length > 2 &&
    allInputs[1].value.length > 2 &&
    allInputs[2].value.length > 2
  ) {
    console.log("if");
    count++;
    e.preventDefault();
    image.src =
      "https://picsum.photos/450?random&t=" + new Date().getTime() + ")";

    let entry = {
      name: allInputs[0].value,
      course: allInputs[1].value,
      author: allInputs[2].value,
    };

    entries.push(entry);
    cloneCourse(entries);

    allInputs.forEach(function (input) {
      input.value = "";
      input.style.outline = "2px solid red";
    });
  } else {
    console.log("else");
    e.preventDefault();
    alert();
    allInputs.forEach(function (input) {
      input.value = "";
      input.style.outline = "2px solid red";
    });
  }
});

allInputs.forEach(function (input) {
  input.addEventListener("input", function () {
    if (input.value.length < 2) {
      input.style.outline = "2px solid red";
    } else if (input.value.length > 2) {
      input.style.outline = "2px solid limegreen";
    }
  });
});

// FUNCTIONS

function cloneCourse(entries) {
  newCourseBox = courseBox.cloneNode(true);
  courseBox.before(newCourseBox);

  customerName = entries[count].name;
  course = entries[count].course;
  authorName = entries[count].author;

  newCourseBox.children[1].children[1].innerHTML = customerName;
  newCourseBox.children[2].children[1].innerHTML = course;
  newCourseBox.children[3].children[1].innerHTML = authorName;

  newCourseBox.style.display = "flex";
}

function alert() {
  alertText.style.display = "initial";
  setTimeout(function () {
    alertText.style.display = "none";
  }, 1500);
}
