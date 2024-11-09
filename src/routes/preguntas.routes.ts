import express from "express";
import preguntasController from "../controllers/preguntas.controller";
const router = express.Router();

router.get("/", preguntasController.consultar);
router.post("/", preguntasController.ingresar);
router
  .route("/:id")
  .get(preguntasController.consultarDetalle)
  .put(preguntasController.actualizar)
  .delete(preguntasController.borrar);

export default router;
