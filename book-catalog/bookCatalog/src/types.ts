
export type BookStatus = "Lido" | "Não Lido"

export interface Book {
    _id: string;
    title: string;
    author: string,
    status: BookStatus;
}

export interface BookPayLoad {
    _id?: string,
    title: string,
    author: string,
    status: BookStatus
}