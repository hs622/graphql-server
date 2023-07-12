import { model } from "mongoose";
import { IBook, bookSchema } from "./book";
import { IUser, userSchema } from "./user";

export const User = model<IUser>("user", userSchema);
export const Book = model<IBook>("book", bookSchema);
