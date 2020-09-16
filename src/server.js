const express = require("express");

const app = express();

// Set static folder

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
