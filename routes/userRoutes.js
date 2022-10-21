const User = require("../models/user");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.json("WEE WE TESTING")
})

router.post("/", async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json({ msg: "retrieved", userData });
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router