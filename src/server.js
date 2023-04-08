import express from "express";
import configViewengine from "./configs/Viewengine";
const app = express();
const port = 8080;

configViewengine(app);
app.get("/", (req, res) => {
  res.render("index.ejs");
});
// app.get("/about", (req, res) => {
//   res.send("Hello con đĩ! ");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//npm init
//npm install express
//npm install ejs
//npm install body-parser nodemon @babel/core @babel/node @babel/preset-env
//node app.js, npm start
