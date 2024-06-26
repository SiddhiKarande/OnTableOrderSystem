import { Router } from "express";
import orderService from "./order.services";
import { ResponseHandler } from "../utility/response-handler";
import { Route } from "../routes/routes.types";

const router = Router();

// Route to place an order
router.post("/placeOrder", async (req, res, next) => {
  try {
    const { orderDetails } = req.body;
    const order = await orderService.placeOrder(orderDetails);

    res.send(order);
    console.log(req.body);
  } catch (error) {
    next(error);
  }
});

router.get("/allOrders", async (req, res, next) => {
  try {
    const orders = await orderService.displayAllOrders();
    res.send(new ResponseHandler(orders));
  } catch (error) {
    next(error);
  }
});

router.patch("/increaseCounter/:itemId", async (req, res, next) => {
  try {
    const itemId = req.params.itemId;
    await orderService.increaseCounterById(itemId);

    res.send(new ResponseHandler(null));
  } catch (error) {
    next(error);
  }
});

export default new Route("/order", router);
