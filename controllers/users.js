import express from "express"

export const users = express.Router()

users.get("/", (req,res) => {
    res.json({ users: ["John","Doe"] })
})

users.post("/", (req,res) => {
    console.log("user post: ", req.body)
    res.sendStatus(201)
})


