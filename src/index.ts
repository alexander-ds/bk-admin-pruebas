import dotenv from "dotenv";
import app from "./app";
import { AppDataSource } from "./db/conexion";
const config = dotenv.config();

async function main() {
  let puerto = Number(process.env.PORT_APP);

  puerto = puerto || 3000;
  try {
    await AppDataSource.initialize();
    console.log("BBDD conectada");
    app.listen(puerto, () => {
      console.log("Server run in port: " + puerto);
    });
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
}
main();
