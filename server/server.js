const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000;

app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({ extended: true }));

let answer;
let opsAndSolutions = [];

app.post("/answer", (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
let val1 = parseInt(req.body.input1)
let val2 = parseInt(req.body.input2)
let operator = req.body.mathOperator;
if(operator == '+') {
  addSomeNums(val1, val2)
} else if (operator == '*') {
  multiplySomeNums(val1, val2)
} else if (operator == '-') {
  subtractSomeNums(val1, val2)
} else if (operator == '/') {
  divideSomeNums(val1, val2)
} else {
  console.log('Not a valid equation!')
}

const operationsSolutions = {
  val1: val1,
  val2: val2,
  operator: operator,
  answer: answer
}
opsAndSolutions.push(operationsSolutions);

console.log(opsAndSolutions)

return opsAndSolutions
});



function addSomeNums(a, b) {
  answer = a+b;
  console.log(answer)
  return answer
}

function subtractSomeNums(a, b){
  answer = a-b;
  console.log(answer)
  return answer
}

function multiplySomeNums(a, b) {
  answer = a * b;
  console.log(answer)
  return answer
}

function divideSomeNums(a, b) {
  answer = a/b;
  console.log(answer)
  return answer
}

app.get("/solutions", (req, res) => {
  res.send(opsAndSolutions);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

