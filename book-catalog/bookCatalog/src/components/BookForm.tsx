import type { BookPayLoad } from "../types";
import { useState } from "react";

// Props que o BookForm recebe do App
interface BookFormProps {
    // Função passada pelo App 
    // Recebe um BookPayload e não retorna nada (void)
    onAdd:(book: BookPayLoad) => void
}

export function BookForm({onAdd}: BookFormProps) {
  // dados iniciais do formulário
  const [book, setBook] = useState<Omit<BookPayLoad, "id">>({
    title: "",
    author: "",
    status: "Não Lido",
  });

  //função que attualiza o estado book
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };
  //função chamada quando o usuário clica em adicionar
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //se o título ou o autor estiverem vazios, não faça nada e saia da função
    if (!book.title.trim() || !book.author.trim()) return;

    onAdd(book) //envia o livro sem id

    setBook({ title: "", author: "", status: "Não Lido" }); //limpa o formulário
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*Campo de texto para título*/}
      <input
        type="text"
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Título do Livro"
      />

      {/*Campo de texto para autor*/}
      <input
        type="text"
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Autor"
      />

      {/*Select para status*/}
      <select name="status" value={book.status} onChange={handleChange}>
        <option value="Não lido">Não Lido</option>
        <option value="Lido">Lido</option>
      </select>

      <button type="submit">Adicionar</button>
    </form>
  );
}
