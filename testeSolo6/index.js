import express from "express"

const app = express();
const port = 4000;

// Definindo rota de CSS,Javascript etc....

app.use(express.static("public"))


app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.listen(port,(req,res)=>{
    console.log(`Server running on Port: ${port}`)
})


