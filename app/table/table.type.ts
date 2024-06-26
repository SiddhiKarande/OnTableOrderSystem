import { z } from 'zod';

const TableSchema = z.object({
  qr: z.number(),
});

// Define a type based on the Zod schema
export type Table = z.infer<typeof TableSchema>;

export interface TableResponse {
	[key: string]: {
		statusCode: number;
		message: string;
	};
}