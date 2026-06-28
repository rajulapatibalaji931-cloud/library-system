const Book = require("../models/Book");

// ===============================
// Get All Books
// GET /api/books
// ===============================
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// Add New Book
// POST /api/books
// ===============================
exports.addBook = async (req, res) => {
  try {
    const {
      title,
      author,
      category,
      quantity,
      description,
      image,
    } = req.body;

    const book = new Book({
      title,
      author,
      category,
      quantity,
      available: quantity,
      description,
      image,
    });

    await book.save();

    res.status(201).json({
      success: true,
      message: "Book Added Successfully",
      book,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// Get Single Book
// GET /api/books/:id
// ===============================
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book Not Found",
      });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// Update Book
// PUT /api/books/:id
// ===============================
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Book Updated Successfully",
      updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// Delete Book
// DELETE /api/books/:id
// ===============================
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Book Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// Issue Book
// POST /api/books/issue/:id
// ===============================
exports.issueBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book Not Found",
      });
    }

    if (book.available <= 0) {
      return res.status(400).json({
        message: "Book Not Available",
      });
    }

    book.available -= 1;

    await book.save();

    res.status(200).json({
      success: true,
      message: "Book Issued Successfully",
      book,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// Return Book
// POST /api/books/return/:id
// ===============================
exports.returnBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book Not Found",
      });
    }

    if (book.available < book.quantity) {
      book.available += 1;
    }

    await book.save();

    res.status(200).json({
      success: true,
      message: "Book Returned Successfully",
      book,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};