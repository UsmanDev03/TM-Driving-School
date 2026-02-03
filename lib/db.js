// lib/db.js
import mysql from 'mysql2/promise';

export const db = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'driving_school',
    });
    return connection;
  } catch (error) {
    console.error("Database Connection Error:", error);
    throw error;
  }
};