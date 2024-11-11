import dotenv from "dotenv";
import app from "./app";
import { AppDataSource } from "./db/conexion";
const config = dotenv.config();

async function main() {
  let puerto = Number(process.env.PORT_APP);

  puerto = puerto || 3000;
  try {
    await AppDataSource.initialize();
    console.log("--------------\nBBDD conectada\n--------------");
    app.listen(puerto, () => {
      console.log("******************\nServer run in port\n==>    " + puerto+"    <==\n******************");
    });
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
}
main();
