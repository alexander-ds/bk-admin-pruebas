import express from "express";
import resultadosController from "../controllers/resultados.controller";
const router = express.Router();

router.get("/", resultadosController.consultar);
router.post("/", resultadosController.ingresar);
router
  .route("/:id")
  .get(resultadosController.consultarDetalle)
  .put(resultadosController.actualizar)
  .delete(resultadosController.borrar);

export default router;
