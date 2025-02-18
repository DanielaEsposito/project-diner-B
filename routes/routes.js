const express = require('express');
const router = express.Router();
const controller = require("../controllers/controllers")
//! LISTA ROTTE

// index
router.get('/',controller.index);
// Show
router.get ("/:id", controller.show);
//Create
router.post ("/", controller.create);
//Update
router.put ("/:id",controller.update );
//Modify
router.patch ("/:id", controller.modify);
//Delete
router.delete ("/:id", controller.destroy);

module.exports= router