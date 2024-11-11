import { Request, Response } from "express";
import { Estudiante } from "../models/estudiantes.model";

class EstudiantesController {

  async consultar(req: Request, res: Response) {
    try {
      const data = await Estudiante.find();
      res.status(200).json({ data });
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }

  async consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await Estudiante.findOneBy({ ID: id });
      if (!data) {
        throw new Error("Estudiante no encontrado");
      }
      res.status(200).json({ data });
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }

  async ingresar(req: Request, res: Response) {
    console.log(req.body);
    try {
      const data = await Estudiante.save(req.body);
      res.status(200).json({ data });
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }

  async actualizar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await Estudiante.findOneBy({ ID: id });
      if (!data) {
        throw new Error("Estudiante no encontrado");
      }
      await Estudiante.update({ ID: id }, req.body);
      const dataActualizada = await Estudiante.findOneBy({ ID: id });
      res.status(200).json({ dataActualizada });
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }

  async borrar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await Estudiante.findOneBy({ ID: id });
      if (!data) {
        throw new Error("Estudiante no encontrado");
      }
      await Estudiante.delete({ ID: id });
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }
}
export default new EstudiantesController();
