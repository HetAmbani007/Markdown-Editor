const express = require("express");
const bodyParser = require("body-parser");
const { marked } = require("marked");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.post("/convert", (req, res) => {
  const { markdown } = req.body;
  if (!markdown) {
    return res.status(400).send({ error: "Markdown content is required" });
  }
  const html = marked(markdown, { sanitize: true });
  res.send({ html });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
