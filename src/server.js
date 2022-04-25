const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const route = require("./routes")

const app = express()

app.use(morgan("combined"))
app.use(cors())
app.use(express.json())
app.use(route)

app.listen(3000, ()=>{
    console.log("Server is running in port 3000")
})
