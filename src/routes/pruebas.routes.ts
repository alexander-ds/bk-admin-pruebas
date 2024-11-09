import express from "express";
import pruebasController from "../controllers/pruebas.controller";
const router = express.Router();

router.get("/", pruebasController.consultar);
router.post("/", pruebasController.ingresar);
router
  .route("/:id")
  .get(pruebasController.consultarDetalle)
  .put(pruebasController.actualizar)
  .delete(pruebasController.borrar);

export default router;
