const express = require("express");
const app = express();
const PORT = 3000;

//Route config
const questionRoute = require("./routes/questions");
app.use("/", questionRoute);

// Start the server
app.listen(PORT, () => {
  console.log(
    `Question Paper Generator app listening at http://localhost:${PORT}`
  );
});
