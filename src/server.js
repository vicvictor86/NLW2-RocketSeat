//servidor
const express = require("express")
const server = express()

const {
       pageLanding,
       pageStudy,
       pageGiveClases,
       saveClasses
} = require("./pages")

//configurar nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    nochace: true,
})

server
//receber os dados do req.body
.use(express.urlencoded( {extended: true} ))
//configurar arquivos estáticos (css,scripts, imagens))
.use(express.static("public"))
//rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClases)
.post("/save-classes",saveClasses)
//start do servidor
.listen(5500)