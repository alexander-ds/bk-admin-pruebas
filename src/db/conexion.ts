import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Estudiante } from "../models/estudiantes.model";
import { Pregunta } from "../models/preguntas..model";
import { Prueba } from "../models/pruebas.model";
import { Resultado } from "../models/resultados.model";
const config = dotenv.config();
export const AppDataSource = new DataSource({
  type: "mssql",
  host: process.env.HOST_BBDD,
  port: Number(process.env.PORT_BBDD),
  username: process.env.USER_BBDD,
  password: process.env.PASSWRD_BBDD,
  logging: true,
  entities: [Estudiante,Pregunta,Prueba,Resultado],
  subscribers: [],
  migrations: [],
  synchronize: true,
  options: {
    encrypt: false,
  },
});
