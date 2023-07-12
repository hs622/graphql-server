import mongoose from "mongoose";

interface DBO {
  username: String;
  password: String;
  dbname: String;
}

export const createConnection = async (
  options: DBO
): Promise<typeof mongoose> => {
  return await mongoose
    .connect(
      "mongodb+srv://" + options.username + ":" + options.password + "@mycluster.j9x9zgh.mongodb.net/" + options.dbname
    )
    .catch((err) => {
      throw err;
    });
};
