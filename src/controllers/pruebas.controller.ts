import { Request, Response } from "express";

class PruebasController {
  constructor() {}

  consultar(req: Request, res: Response) {
    try {
      res.send("consultar");
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }

  consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("consultar detalle");
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }

  ingresar(req: Request, res: Response) {
    try {
      res.send("ingresar");
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }

  actualizar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("actualizar");
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }

  borrar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("borrar");
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }
}
export default new PruebasController();
