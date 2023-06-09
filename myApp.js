import { Express } from "express";
var app = express();

function home(req, res) {
  var absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
}

function jason(req, res) {
  let respuesta;
  const mySecret = process.env["MESSAGE_STYLE"];
  if (mySecret === "uppercase") {
    respuesta = "Hello Json".toUpperCase();
  } else {
    respuesta = "Hello Json";
  }
  res.json({ message: respuesta });
}
function jsonJuan(req, res) {
  res.json({
    message: "Hello json",
  });
}

app.get("/json", jason);
app.get("/", home);
