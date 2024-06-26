import {z} from 'zod';

const menuItemSchema = z.object({
    itemName: z.string(),
  itemPrice: z.number(),
  counter: z.number(),
  estimatedTime: z.number(),
  recipe: z.string(),
});

export type MenuItem = z.infer<typeof menuItemSchema>;

export interface MenuResponse {
	[key: string]: {
		statusCode: number;
		message: string;
	};
}