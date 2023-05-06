const {Router} = require('express')
const usersRouter = require('./users.router')
const postRouter = require('./posts.router')
const {Page} = require('../db')



const router = Router()

router.use("/users", usersRouter)
router.use("/posts", postRouter)
router.post("/pages",async (req,res)=>{
const {title,users} = req.body
try {
const newPage = await Page.create({title})
await newPage.addUsers(users)
res.status(201).json(newPage)}
catch (error) {
res.status(400).json({error: error.message})
}
} )

module.exports = router

