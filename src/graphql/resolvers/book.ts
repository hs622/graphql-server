import { authors } from "../../models/author";
import { books } from "../../models/book";

export default {
    Query: {
        books: () => {
            return books.map((book: any) => {
                let author = authors.find((author) => author.id === book.authorId)
                return {
                    ...book,
                    author
                }
            });
        },
        book: (_: any, args: any) => {
            return books.find((book) => {
                if(book.title === args.title) {
                    let author = authors.find(author => author.id === book.authorId)
                    return {
                        ...book,
                        author
                    }
                }
            }) 
        },
    }
}