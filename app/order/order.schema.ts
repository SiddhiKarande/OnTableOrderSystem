import { Schema, Document, model } from "mongoose";

// Define the interface for the order details
interface OrderItem {
  item_name: string;
  quantity: number;
}

// Define the interface for the orders document
interface Order extends Document {
  // table_number: number;
  orderDetails: OrderItem[];
  // status: "new" | "started" | "complete";
}

const orderSchema = new Schema<Order>({
  // table_number: {
  //   type: Number,
  //   required: true,
  // },
  orderDetails: [
    {
      item_name: { type: String, required: true },
      quantity: { type: Number, required: true },
      // total_price: { type: Number, required: true },
    },
  ],

  // },
  // status: {
  //   type: String,
  //   enum: ["new", "started", "complete"],
  //   default: "new",
  // },
});

const OrderModel = model<Order>("Order", orderSchema);

export default OrderModel;
