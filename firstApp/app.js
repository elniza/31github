const express = require("express")
const app = express();
const port = process.env.PORT || 4000; 

app.get("/messages", (req,res) => {
  res.send('Hello world!')
});



app.listen(4000, () => {
  console.log('Server started on port 4000')
});