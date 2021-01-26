const express = require ("express")
const app = express()
const connectDB = require("./config/connectDB")
app.use(express.json())

//connect DB
connectDB()

//routes
app.use("/persons",require("./routes/person"))

//run the server
const port = process.env.PORT || 5000
app.listen(port,err=>
    err? console.log("erreur"):console.log('Server is running...')
    )