import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

import estudiantesRoutes from "./routes/estudiantes.routes";
import preguntasRoutes from "./routes/preguntas.routes";
import pruebasRoutes from "./routes/pruebas.routes";
import resultadosRoutes from "./routes/resultados.routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("HI");
});

app.use("/estudiantes", estudiantesRoutes);
app.use("/pruebas", pruebasRoutes);
app.use("/preguntas", preguntasRoutes);
app.use("/respuestas", resultadosRoutes);

export default app;
