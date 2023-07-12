import mongoose from "mongoose";

export interface IBook {
  title: string;
  description: string;
  releaseYear: string;
  publisher: string;
  totalNoOfPage: number;
}

export const bookSchema = new mongoose.Schema<IBook>(
  {
    title: { type: String, unique: true, lowercase: true, trim: true, required: true },
    description: { type: String, required: true },
    releaseYear: { type: String, required: true },
    publisher: { type: String, required: true },
    totalNoOfPage: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
