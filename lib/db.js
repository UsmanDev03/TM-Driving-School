import mysql from 'mysql2/promise';

export async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: "localhost", 
    database: "driving_school", 
    user: "root", 
    password: "", 
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    await dbconnection.end();
    return results;
  } catch (error) {
    if (dbconnection) await dbconnection.end();
    throw Error(error.message);
  }
}