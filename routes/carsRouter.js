const { Router } = require("express");
const router = Router();
const { createCars, getAllCars, getCarsByMarca, updateCars, removeCars } = require("../controllers/carsController");

router.post("/", createCars);

router.get("/", getAllCars);

router.get("/:id", getCarsByMarca);

router.patch("/:id", updateCars);

router.delete("/:id", removeCars);


module.exports = router;

