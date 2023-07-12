import { IUser } from "../models/user";

const SALT = "naH1NuYn3T6SyOL";

export const generateTokens = (user: IUser): String => {
  return user.first_name;
};

export const getUserFromToken = (token: String): IUser|false => {
  return false;
};

const createAccessToken = () => {};

const createRefreshToken = () => {};
