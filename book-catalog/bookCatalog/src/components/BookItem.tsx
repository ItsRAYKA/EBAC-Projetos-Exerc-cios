import type { BookPayLoad } from "../types";

interface BookItemProps {
  book: BookPayLoad;
  onRemove: (id: string) => void;
  onToggleStatus: (book: BookPayLoad) => void;
}
export function BookItem({ book, onRemove, onToggleStatus }: BookItemProps) {
  return (
    <li>
      <div className="info">
        <strong>{book.title}</strong> - {book.author} (
        <span
          className={book.status === "Lido" ? "status-lido" : "status-nao-lido"}
        >
          {book.status}
        </span>
        )
      </div>
      {book._id && (
        <div className="actions">
          <button className="btn-remove" onClick={() => onRemove(book._id!)}>
            Remover
          </button>
          <button className="btn-toggle" onClick={() => onToggleStatus(book)}>
            {book.status === "Lido"
              ? "Marcar como Não Lido"
              : "Marcar como Lido"}
          </button>
        </div>
      )}
    </li>
  );
}

export default BookItem;
