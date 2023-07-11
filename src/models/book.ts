import mongoose from "mongoose";

interface Book {
    title: string,
    description: string,
    releaseYear: string,
    publisher: string,
    totalNoOfPage: number
}

const bookSchema = new mongoose.Schema<Book> ({
    title: String,
    description: String,
    releaseYear: String,
    publisher: String,
    totalNoOfPage: Number
  },
  { versionKey: false, }
);
