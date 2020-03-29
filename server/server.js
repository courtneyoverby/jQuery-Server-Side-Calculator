const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000;

app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/answer", (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

// let val1 = parseInt(req.body.input1)
// let val2 = parseInt(req.body.input2)

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
