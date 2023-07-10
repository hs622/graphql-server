import { authors } from "../../models/author";
import { books } from "../../models/book";

export default {
    Query: {
        authors: () => {
            return authors.map((author: any) => {
                let book = books.filter((book) => book.authorId === author.id)
                return {
                    ...author,
                    books: book
                }
            });         
        },
        author: (_: any, args: any) => authors.find((author) => author.first_name === args.first_name),
        authorById: (_: any, args: any) => authors.find((author) => author.id === args.id),
    }
}