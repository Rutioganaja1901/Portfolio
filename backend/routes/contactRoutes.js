const router = require("express").Router()
const Contact = require("../models/Contact")

router.post("/", async (req, res) => {
  await Contact.create(req.body)
  res.json({ success: true })
})

module.exports = router
