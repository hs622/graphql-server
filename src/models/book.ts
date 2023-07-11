import mongoose from "mongoose";

export interface IBook {
    title: string,
    description: string,
    releaseYear: string,
    publisher: string,
    totalNoOfPage: number
}

export const bookSchema = new mongoose.Schema<IBook> ({
    title: String,
    description: String,
    releaseYear: String,
    publisher: String,
    totalNoOfPage: Number
  },
  { 
    versionKey: false,
    timestamps: true
  }
);
