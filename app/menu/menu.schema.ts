import { Schema, Document, model } from "mongoose";

// Define the interface for the menu item document
interface MenuItem extends Document {
  itemName: string;
  itemPrice: number;
  counter: number;
  estimatedTime: number;
  recipe: string;
}

const menuItemSchema = new Schema<MenuItem>({
  itemName: {
    type: String,
    required: true,
  },
  itemPrice: {
    type: Number,
    required: true,
  },
  counter: {
    type: Number,
    default: 0, // Default value  = 0
  },
  estimatedTime: {
    type: Number,
    required: true,
  },
  recipe: {
    type: String,
    required: true,
  },
});

const MenuItemModel = model<MenuItem>("Menu", menuItemSchema);

export default MenuItemModel;
