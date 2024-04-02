import express from "express"
import { prisma } from "../lib/prisma.js"

export const users = express.Router()

users.get("/", async (req,res) => {
    let limit = req.query.limit
    let page = req.query.page
    const users = await prisma.users.findMany({
        take: limit && parseInt(limit),
        skip: page && parseInt(page)
    })
    res.json(users)
})

users.post('/', async (req,res) => {
    await prisma.users.create({
        data: req.body
    })
    res.sendStatus(201)
})



