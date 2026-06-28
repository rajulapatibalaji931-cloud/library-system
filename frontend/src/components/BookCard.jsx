function BookCard({ book, onIssue }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
        width: "250px"
      }}
    >
      <img
        src={book.image}
        alt={book.title}
        width="100%"
        height="180"
      />

      <h3>{book.title}</h3>

      <p>
        <strong>Author:</strong> {book.author}
      </p>

      <p>
        <strong>Category:</strong> {book.category}
      </p>

      <p>
        <strong>Available:</strong> {book.available}
      </p>

      <button
        onClick={() => onIssue(book._id)}
        disabled={book.available === 0}
      >
        {book.available === 0
          ? "Not Available"
          : "Issue Book"}
      </button>
    </div>
  );
}

export default BookCard;