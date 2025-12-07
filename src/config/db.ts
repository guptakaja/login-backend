// import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
// dotenv.config();

// export const sequelize = new Sequelize(
//   process.env.DB_NAME as string,
//   process.env.DB_USER as string,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "postgres",
//   }
// );

import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});
