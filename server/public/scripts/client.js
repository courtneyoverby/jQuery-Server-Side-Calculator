$(document).ready(onReady);

function onReady() {
  $(".js-submit-btn").on("click", onSubmit);
  $(".js-clear-btn").on("click", clearInputFields);
  $(".js-btn-math").on("click", operatorID);
  getObject();
}

let operator
let history = []

function onSubmit() {
  event.preventDefault();
  const inputObject = {
    input1: parseInt($(".inputOne").val()),
    input2: parseInt($(".inputTwo").val()),
    mathOperator: operator
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
      getObject();
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

function getObject () {
$.ajax({
  type: "GET",
  url: "/solutions"
}).then(function(response) {
  $(".js-calc-table").empty();
  for (let i = 0; i < response.length; i++) {
    let solution = response[i];
    $(".js-calc-table").append(`
              <tr>
                  <td>${solution.val1} ${solution.operator} ${solution.val2} = ${solution.answer}</td>
              </tr>
          `);
  }
});
}