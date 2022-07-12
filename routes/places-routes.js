const express = require("express");
const {
  getPlacesById,
  getPlaceByUserId,
  createPlace,
} = require("../controllers/places-controller");

const router = express.Router();

router.get("/:pid", getPlacesById);
router.get("/users/:uid", getPlaceByUserId);
router.post("/", createPlace);

module.exports = router;
