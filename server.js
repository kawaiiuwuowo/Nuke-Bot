
const express = require("express")
const app = express()


app.get("/", (req, res) => {
  res.send("Hewoo!")
})



app.listen(3000, () => {
  console.log("Hewoo i am ready")
})
