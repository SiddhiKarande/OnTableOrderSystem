import menuRepo from "./menu.repo";
import { menuResponses } from "./menu.responses";
import { MenuItem } from "./menu.type";

const displayAllItems = async () => {
  try {
    const result = await menuRepo.getMenu();
    if (result === null) throw menuResponses.ITEM_NOT_FOUND;
    return result;
  } catch (e) {
    throw e;
  }
};

const insertMenuItem = async (
  menuItemData: Partial<MenuItem>
): Promise<MenuItem> => {
  try {
    // Check if required fields are present in the data
    if (
      !menuItemData.itemName ||
      !menuItemData.itemPrice ||
      !menuItemData.recipe
    ) {
      throw new Error("Missing required fields for menu item");
    }

    const newItem = await menuRepo.createMenuItem(menuItemData);
    return newItem;
  } catch (error) {
    throw error;
  }
};

const increaseCounterById = async (itemId: string): Promise<void> => {
  try {
    await menuRepo.increaseCounter(itemId);
  } catch (error) {
    throw error;
  }
};

export default {
  displayAllItems,
  insertMenuItem,
  increaseCounterById,
};
