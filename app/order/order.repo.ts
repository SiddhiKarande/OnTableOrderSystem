import OrderModel from './order.schema';
import { OrderedItem } from './order.types';

const saveOrder = async (order: OrderedItem) => {
  try {
    const newOrder = await OrderModel.create(order);
    return newOrder;
  } catch (error) {
    throw error; // Handle errors appropriately in your application
  }
};

//to display orders
const getOrder = () => OrderModel.find();

//increment order counter
const increaseCounter = (itemId: string) => {
  return OrderModel.updateMany({ _id: itemId }, { $inc: { counter: 1 } });
};


export default {
  saveOrder,
  getOrder,
  increaseCounter,
  
};
