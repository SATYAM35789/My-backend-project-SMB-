import dotenv from "dotenv";

dotenv.config(); // By doing this, we can access all the variables in the .env file using process.env.VARIABLE_NAME

export const DB_URL = process.env.DB_URL; 