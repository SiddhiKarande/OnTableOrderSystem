import { orderedItemSchema, OrderedItem } from "./order.types";
import orderRepo from "./order.repo";
import { orderResponses } from "./order.responses";

const placeOrder = async (
  // table_number: number,
  orderDetails: OrderedItem["orderDetails"]
) => {
  try {
    const order: OrderedItem = {
      // table_number,
      orderDetails,
      // status: "new", //for now
    };

    // Use the repository function to save the order
    const savedOrder = await orderRepo.saveOrder(order);
    const { _id, ...formattedOrder } = savedOrder;
    console.log(formattedOrder);
    return formattedOrder;
  } catch (error) {
    throw error; // Handle errors appropriately in your application
  }
};

const displayAllOrders = async () => {
  try {
    const orders = await orderRepo.getOrder(); // Assuming getAllOrders() is the correct method in your repository
    if (!orders) throw orderResponses.ORDER_NOT_FOUND;

    // Remove _id field from each order before returning
    const ordersWithoutIds = orders.map(({ _id, ...order }) => order);
    console.log(orders);
    return ordersWithoutIds;
  } catch (e) {
    throw e;
  }
};

const increaseCounterById = async (itemId: string) => {
  try {
    await orderRepo.increaseCounter(itemId);
  } catch (error) {
    throw error;
  }
};

export default {
  placeOrder,
  displayAllOrders,
  increaseCounterById,
};
