import express from "express"

export const users = express.Router()

users.get("/", (req,res) => res.send("Express Dev!"))

