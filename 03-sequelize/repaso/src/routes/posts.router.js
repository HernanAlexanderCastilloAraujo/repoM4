const { Router } = require("express");

const postsRouter = Router();

postsRouter.get("/", (req, res) => {
    res.status(200).send("the path for GET /posts works correctly");
})

module.exports = postsRouter;
