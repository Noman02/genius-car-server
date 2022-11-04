const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("genius car server is running");
});

app.listen(port, () => {
  console.log(`genius car server is running on${port}`);
});
