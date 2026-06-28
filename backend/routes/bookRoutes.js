const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {

    getBooks,

    getBookById,

    addBook,

    updateBook,

    deleteBook,

    issueBook,

    returnBook

} = require("../controllers/bookController");

// =================================
// GET ALL BOOKS
// =================================
router.get("/", getBooks);

// =================================
// GET SINGLE BOOK
// =================================
router.get("/:id", getBookById);

// =================================
// ADD BOOK
// =================================
router.post("/", authMiddleware, addBook);

// =================================
// UPDATE BOOK
// =================================
router.put("/:id", authMiddleware, updateBook);

// =================================
// DELETE BOOK
// =================================
router.delete("/:id", authMiddleware, deleteBook);

// =================================
// ISSUE BOOK
// =================================
router.post("/issue/:id", authMiddleware, issueBook);

// =================================
// RETURN BOOK
// =================================
router.post("/return/:id", authMiddleware, returnBook);

module.exports = router;