import Authors from "../models/Authors";
import Books from "../models/Books";
const createBook = async (title, authorId, genre, isbn, publication_year) => {
    try {
        const book = await Books.create({
            title,
            authorId,
            genre,
            isbn,
            publication_year
        });
        console.log("Book created successfully:", book.toJSON());
        return Books;
    } catch (err) {
        console.error("Error creating book:", err);
        return null;
    }
};
createBook("The Catcher in the Rye", 1, "Fiction", "9780316769488", 1951);

const findAllBooks = async () => {
    try {
        const books = await Books.findAll({ include: Authors });
        books.forEach(book => {
            console.log("-", Authors.name);
        });
        return books;
    } catch (err) {
        console.error("Error fetching books:", err);
        return null;
    }
};
const updateBook = async (bookId, newData) => {
    try {
      const book = await Books.findByPk(bookId);
      if (!book) {
        throw new Error('Book not found');
      }
  
      await book.update(newData);
  
      console.log(`Book with ID ${bookId} updated successfully`);
      return book;
    } catch (err) {
      console.error('Error updating book:', err);
      return null;
    }
  };
  
  updateBook(1, { title: 'New Title', genre: 'New Genre' });

  const deleteBook = async (bookId) => {
    try {
      const book = await Books.findByPk(bookId);
      if (!book) {
        throw new Error('Book not found');
      }
  
      await book.destroy();
  
      console.log(`Book with ID ${bookId} deleted successfully`);
      return true;
    } catch (err) {
      console.error('Error deleting book:', err);
      return false;
    }
}
deleteBook(1);

findAllBooks();