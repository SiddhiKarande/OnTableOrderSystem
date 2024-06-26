import tableRepo from "./table.repo";
import { Table } from "./table.type";
import { tableResponses } from "./table.response";

const findTable = async (qrCode: string): Promise<Table> => {
  const qr = parseInt(qrCode); // Parse QR code as number directly

  if (isNaN(qr)) {
    throw new Error("Invalid QR code");
  }

  try {
    const table = await tableRepo.getTable({ qr });
    if (table === null) throw tableResponses.TABLE_NOT_FOUND;
    return table;
  } catch (error) {
    console.error("Error finding table:", error);
    throw error;
  }
};

export default {
  findTable,
};
