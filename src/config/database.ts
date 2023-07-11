import mongoose from "mongoose"

const createConnection = async (uri: string, options: {dbname: string} ): Promise<typeof mongoose> => {
    return await mongoose.connect(uri+options.dbname);
}

const checkConnection = () => {}
const closeConnection = () => {} 



export {
    createConnection,
    checkConnection,
    closeConnection,
}
