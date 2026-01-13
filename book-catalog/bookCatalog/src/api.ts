import axios from "axios"
import type { BookPayLoad } from "./types"

const api = axios.create({
    baseURL: "https://crudcrud.com/api/29837da6bb8748498445d15f78999619"
})

//buscar todos os livros
export const getBooks = () => api.get<BookPayLoad[]>("/books")

//adicionar um livro
export const addBook = (book: BookPayLoad) => api.post("/books", book)

//remover um livro
export const removeBook = (id: string) =>api.delete(`/books/${id}`)

// atualizar um Livro
export const updateBook =  (id: string, book: Omit<BookPayLoad, "_id"> ) => 
    api.put(`/books/${id}`, book)