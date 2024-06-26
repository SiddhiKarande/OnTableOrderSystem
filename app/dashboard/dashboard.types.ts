import { z } from "zod";

export const orderedItemSchema = z.object({
  table_number: z.number(),
  order_details: z.array(
    z.object({
      item_name: z.string(),
      quantity: z.number(),
    })
  ),
  status: z.enum(["new", "started", "complete"]),
});


export type OrderedItem = z.infer<typeof orderedItemSchema>;

export interface OrderResponse {
  [key: string]: {
    statusCode: number;
    message: string;
  };
}
