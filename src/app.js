const express = require("express");
const TodoRouter = require('./Todolist/todo.router').router

const app = express();

app.use(express.json());

app.use("/hola", (req, res) => {
  res.json({ message: "Peticion con use", method: req.method });
});


app.use('/api/v1', TodoRouter)


app.listen(8000, () => {
  console.log("Server started at port 8000");
});