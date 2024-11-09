import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

const config = dotenv.config()

import estudiantesRoutes from "./routes/estudiantes.routes";
import preguntasRoutes from "./routes/preguntas.routes";
import pruebasRoutes from "./routes/pruebas.routes";
import respuestasRoutes from "./routes/respuestas.routes";

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.send("HI");
});

app.use("/estudiantes", estudiantesRoutes);
app.use("/pruebas",pruebasRoutes);
app.use("/preguntas",respuestasRoutes);
app.use("/respuestas",respuestasRoutes);

let puerto = Number(process.env.PORT_APP)

puerto = puerto || 3000 ;

app.listen(puerto, () => {
    console.log("Server run in port: "+puerto);
});