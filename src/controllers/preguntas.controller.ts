import { Request, Response } from "express";
import { Pregunta } from "../models/preguntas..model";
import { Prueba } from "../models/pruebas.model";

class PreguntasController {

  async consultar(req: Request, res: Response) {
    try {
      const data = await Pregunta.find({ relations: { IDPrueba: true } });
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
      const data = await Pregunta.findOne({
        where: { ID: id },
        relations: { IDPrueba: true },
      });
      if (!data) {
        throw new Error("Pregunta no encontrado");
      }
      res.status(200).json({ data });
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }

  async ingresar(req: Request, res: Response) {
    try {
      const { IDPrueba } = req.body;
      const prueba = await Prueba.findOneBy({ ID: IDPrueba });
      if (!prueba) {
        throw new Error("No existe esta prueba para asignar la pregunta");
      }
      const data = await Pregunta.save(req.body);
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
      const { IDPrueba } = req.body;
      const prueba = await Prueba.findOneBy({ ID: IDPrueba });
      if (!prueba) {
        throw new Error("No existe esta prueba para asignar la pregunta");
      }
      const data = await Pregunta.findOneBy({ ID: id });
      if (!data) {
        throw new Error("Pregunta no encontrado");
      }
      await Pregunta.update({ ID: id }, req.body);
      const dataActualizada = await Pregunta.findOneBy({ ID: id });
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
      const data = await Pregunta.findOneBy({ ID: id });
      if (!data) {
        throw new Error("Pregunta no encontrado");
      }
      await Pregunta.delete({ ID: id });
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }
}
export default new PreguntasController();
