import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Hello Ji");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});
