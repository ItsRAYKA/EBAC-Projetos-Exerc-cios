import { useState, useEffect } from "react";
import "./App.css";
import { BookForm } from "./components/BookForm";
import { BookList } from "./components/BookList";
import type { BookPayLoad } from "./types";
import { getBooks, addBook, removeBook, updateBook } from "./api";

function App() {
  //estado para guardar livros
  const [books, setBooks] = useState<BookPayLoad[]>([]);

  //carregar livros da API ao iniciarr
  useEffect(() => {
    getBooks().then((res) => setBooks(res.data));
  }, []);
  //adicionar livro
  const handleAddBook = (newBook: BookPayLoad) => {
    addBook(newBook).then((res) => {
      setBooks((prev) => [...prev, res.data]); //adiciona novo livro a lista
    });
  };
  // atualizar livro
  const handleToggleStatus = (book: BookPayLoad) => {
    if (!book._id) return;

    const updatedBook: Omit<BookPayLoad, "_id"> = {
      title: book.title,
      author: book.author,
      status: book.status === "Lido" ? "Não Lido" : "Lido",
    };
    updateBook(book._id, updatedBook).then(() => {
      setBooks((prev) =>
        prev.map((b) =>
          b._id === book._id ? { ...b, status: updatedBook.status } : b
        )
      );
    });
  };

  const handleRemoveBook = (id: string) => {
    // remove o livro cujo índice é igual ao passado, mantendo os demais
    removeBook(id).then(() => {
      setBooks((prev) => prev.filter((book) => book._id !== id));
    });
  };

  return (
    <>
      <h1>Catálogo de Livros</h1>
      <BookForm onAdd={handleAddBook} />
      <BookList
        books={books}
        onRemove={handleRemoveBook}
        onToggleStatus={handleToggleStatus} // passa para o BookList
      />
    </>
  );
}

export default App;
