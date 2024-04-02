import express from "express"
import { users } from "./controllers/users.js"
import parser from "body-parser"

const app = express()

app.use(parser.json())
app.use("/users",users)

app.listen(3000)

