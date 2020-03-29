$(document).ready(onReady);

function onReady() {
  $(".js-submit-btn").on("click", onSubmit);
  $(".js-clear-btn").on("click", clearInputFields);
  $(".js-btn-math").on("click", operatorID);
  console.log("hello");
}

let operator

function onSubmit() {
  event.preventDefault();
  const inputObject = {
    input1: parseInt($(".inputOne").val()),
    input2: parseInt($(".inputTwo").val()),
    // : operator
  };
  saveObject(inputObject);
  console.log(inputObject);
}

function saveObject(objectData) {
  $.ajax({
    method: "POST",
    url: "/answer",
    data: objectData
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}

function clearInputFields() {
  $(".input").val('');

  console.log("hello!!!");
}

function operatorID() {
  operator = event.target.id;

  console.log(operator);


}

