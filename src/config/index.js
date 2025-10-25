import dotenv from 'dotenv';
dotenv.config();

export const config = {
  baseUrl: process.env.BASE_URL,
  apiKey: process.env.COINRANKING_API_KEY
};
