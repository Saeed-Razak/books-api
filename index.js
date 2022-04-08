const express =require("express")
const booksRoute = require("./routes/booksRoute")

const app = express()
//middlewares
app.use(express.json())

app.use(booksRoute)


// home route
app.get("/", (req, res)=>{
    res.json("WELCOME TO OUR LIBRARY")
})


const PORT = 3000;

app.listen(PORT,()=>{
    console.log("server is working")
})