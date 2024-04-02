import express from "express"
import { prisma } from "../lib/prisma.js"

export const users = express.Router()

users.get("/", async (req,res) => {
    const users = await prisma.users.findMany()
    res.json(users)
})

users.post('/', async (req,res) => {
    await prisma.users.create({
        data: req.body
    })
    res.sendStatus(201)
})



