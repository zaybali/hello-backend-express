import express from "express";

const app = express();
const port = 3001;

app.use((req, res, next) => {
  console.log("Inside Middleware");
  next();
})

app.get("/", (req, res) => {
  console.log("request received", req.url);
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/users", (req, res) => {
  res.send("User list");
})