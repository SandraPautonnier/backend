const express = require("express");
const auth = require('auth');
const router = express.Router();
const multer = require('../middleware/multer-config');

const stuffCtrl = require("../controllers/stuff");

router.post("/", auth, multer, stuffCtrl.createThing);
router.put("/:id", auth, multer, stuffCtrl.modifyThing);
router.delete("/:id", auth, stuffCtrl.deleteThing);
router.get("/:id", auth, stuffCtrl.findOneThing);
router.get("/", auth, stuffCtrl.findAllThing);

module.exports = router;
