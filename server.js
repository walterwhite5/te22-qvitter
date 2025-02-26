import "dotenv/config"
import express from "express"
import nunjucks from "nunjucks"
import indexRouter from "./routes/index.js"
import bodyParser from "body-parser"
import logger from "morgan"

const app = express()

app.use("/", indexRouter)
app.use(logger("dev"))

const port = 3000

nunjucks.configure("views", {
    autoescape: true,
    express: app,
})

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})