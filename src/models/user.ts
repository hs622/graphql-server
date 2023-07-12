import mongoose from "mongoose";

export interface IUser {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  role: string,
  country: string
  countryCode: number,
  number: string 
}

export const userSchema = new mongoose.Schema<IUser> ({
    first_name: { type: String, required: true },
    last_name: { type: String },
    email: { type: String, unique: true, lowercase: true, trim: true, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    country: { type: String },
    countryCode: { type: Number },
    number: { type: String, unique: true }
  },
  { 
    versionKey: false, 
    timestamps: true
  }
);

export const User = {
  getAll: () => {
       
  }

}
  // getById: (id) => {
  //   /* fetching/transformation logic for a single user */
  // },
  // getByGroupId: (id) => {
  //   /* fetching/transformation logic for a group of users */
  // },