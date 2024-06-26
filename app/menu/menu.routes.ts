import { Request, Router } from "express";
import menuServices from "./menu.services";
import { MenuItem } from "./menu.type";
import { ResponseHandler } from "../utility/response-handler";
import { Route } from "../routes/routes.types";

const router = Router();

router.get(
  "/allItems",
  async (req: Request<any, any, Partial<MenuItem>, any>, res, next) => {
    try {
      const result = await menuServices.displayAllItems();
      //   res.send(new ResponseHandler(result));
      console.log(result);
      res.send(result);
    } catch (e) {
      next(e);
    }
  }
);

router.post("/addItem", async (req: Request<any, any, Partial<MenuItem>, any>, res, next) => {
    try {
      const newItemData = req.body; // Assuming the request body contains the new menu item data
      const newItem = await menuServices.insertMenuItem(newItemData); // Call the service function to insert the item
      res.send(new ResponseHandler(newItem)); // Send a response with the inserted menu item
    } catch (error) {
      next(error); // Pass any errors to the error handling middleware
    }
  });

  router.patch("/increaseCounter/:itemId", async (req, res, next) => {
    try {
      const itemId = req.params.itemId;
      await menuServices.increaseCounterById(itemId);
  
      res.send(new ResponseHandler(null));
    } catch (error) {
      next(error);
    }
  });

export default new Route("/menu", router);
