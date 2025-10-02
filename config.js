import {config} from 'dotenv';

config();

export const PORT = process.env.PORT;
export const DB_HOST = process.env.BD_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_USER = process.env.DB_USER;
export const DB_PASWORD = process.env.DB_PASWORD;
export const DB_DATABASE = process.env.DB_DATABASE;