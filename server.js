import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello There this is backend of chirag project</h1>");
});

app.get("/api/v1/checkingServer", (req, res) => {
  res.send("Successfully Connected to Backend Server 2");
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
