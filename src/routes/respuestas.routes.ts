import express from "express";
import respuestasController from "../controllers/respuestas.controller";
const router = express.Router();

router.get("/", respuestasController.consultar);
router.post("/", respuestasController.ingresar);
router
  .route("/:id")
  .get(respuestasController.consultarDetalle)
  .put(respuestasController.actualizar)
  .delete(respuestasController.borrar);

export default router;
