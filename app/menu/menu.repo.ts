import MenuItemModel from "./menu.schema";
import { MenuItem } from "./menu.type";

//used to display all items on menu
const getMenu = () => MenuItemModel.find();

//used to increase the count of item
const increaseCounter = (itemId: string) => {
  return MenuItemModel.updateMany({ _id: itemId }, { $inc: { counter: 1 } });
};

//create
const createMenuItem = async (
  menuItemData: Partial<MenuItem>
): Promise<MenuItem> => {
  try {
    const newItem = new MenuItemModel(menuItemData);

    const savedItem = await newItem.save();

    return savedItem.toObject();
  } catch (error) {
    throw error;
  }
};

export default {
  getMenu,
  createMenuItem,
  increaseCounter,
};
