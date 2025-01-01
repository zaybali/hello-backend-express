import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("request received", req.url);
  res.send("Hello World");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.get("/users", (req, res) => {
  res.send("User list");
})