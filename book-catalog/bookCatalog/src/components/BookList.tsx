import { BookItem } from "./BookItem";
import type { BookPayLoad } from "../types";

interface BookListProps {
  books: BookPayLoad[];
  onRemove: (id: string) => void;
  onToggleStatus: (book: BookPayLoad) => void;
}

export function BookList({ books, onRemove, onToggleStatus }: BookListProps) {
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book._id ?? book.title}
          book={book}
          onRemove={onRemove}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </ul>
  );
}

export default BookList;
