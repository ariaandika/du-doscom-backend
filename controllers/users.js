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

users.get('/:id', async (req,res) => {
    const id = parseInt(req.params.id)
    const user = await prisma.users.findFirst({
        where: { id },
    })

    if (!user) {
        res.status(404)
           .json({ error: true, message: "User tidak ditemukan" })
        return
    }

    res.json(user)
})

users.put('/:id', async (req,res) => {
    const id = parseInt(req.params.id)
    await prisma.users.update({
        data: req.body,
        where: { id }
    })
    res.sendStatus(200)
})


