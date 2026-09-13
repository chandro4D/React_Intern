const express = require("express");

const {
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController");

const router = express.Router();


// CREATE
router.post("/", createProduct);


// GET ALL
router.get("/", getAllProducts);


// GET SINGLE
router.get("/:id", getProduct);


// UPDATE
router.put("/:id", updateProduct);


// DELETE
router.delete("/:id", deleteProduct);


module.exports = router;