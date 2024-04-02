import express from "express"
import { users } from "./controllers/users.js"

const app = express()

app.use("/users",users)

app.listen(3000)

