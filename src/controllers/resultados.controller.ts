import { Request, Response } from "express";
import { Resultado } from "../models/resultados.model";
import { Prueba } from "../models/pruebas.model";
import { Estudiante } from "../models/estudiantes.model";
import { Pregunta } from "../models/preguntas..model";

class ResultadosController {

  async consultar(req: Request, res: Response) {
    try {
      const data = await Resultado.find({
        relations: { IDEstudiante: true, IDPregunta: true, IDPrueba: true },
      });
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
      const data = await Resultado.findOne({
        where: { ID: id },
        relations: { IDEstudiante: true, IDPregunta: true, IDPrueba: true },
      });
      if (!data) {
        throw new Error("Resultado no encontrado");
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
      const { IDPrueba } = req.body;
      const prueba = await Prueba.findOneBy({ ID: IDPrueba });
      if (!prueba) {
        throw new Error("No existe esta prueba para asignar el resultado");
      }
      const { IDEstudiante } = req.body;
      const estudiante = await Estudiante.findOneBy({ ID: IDEstudiante });
      if (!estudiante) {
        throw new Error("No existe este estudiante para asignar el resultado");
      }
      const { IDPregunta } = req.body;
      const pregunta = await Pregunta.findOneBy({ ID: IDPregunta });
      if (!pregunta) {
        throw new Error("No existe este pregunta para asignar el resultado");
      }
      const data = await Resultado.save(req.body);
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
      const data = await Resultado.findOneBy({ ID: id });
      if (!data) {
        throw new Error("Resultado no encontrado");
      }
      await Resultado.update({ ID: id }, req.body);
      const dataActualizada = await Resultado.findOneBy({ ID: id });
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
      const data = await Resultado.findOneBy({ ID: id });
      if (!data) {
        throw new Error("Resultado no encontrado");
      }
      await Resultado.delete({ ID: id });
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }
}
export default new ResultadosController();
