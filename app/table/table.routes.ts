import { Router } from "express";
import tableService from "./table.service";
import { ResponseHandler } from "../utility/response-handler";
import { Route } from "../routes/routes.types";

const router = Router();

router.get("/:qrCode", async (req, res, next) => {
  try {
    const qrCode = req.params.qrCode;
    const result = await tableService.findTable(qrCode);
    console.log(qrCode);
    res.send(new ResponseHandler(result));
  } catch (error) {
    next(error);
  }
});

export default new Route("/table", router);
