import mongoose from "mongoose";

export interface IUser {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    role: string,
    country: string
    countryCode: number,
    number: number 
}

export const userSchema = new mongoose.Schema<IUser> ({
    first_name: { type: String, required: true },
    last_name: { type: String },
    email: { type: String, lowercase: true, trim: true, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    country: { type: String },
    countryCode: { type: Number },
    number: { type: Number },
    // deletedAt: { type: Date }
  },
  { 
    versionKey: false, 
    timestamps: true
  }
);