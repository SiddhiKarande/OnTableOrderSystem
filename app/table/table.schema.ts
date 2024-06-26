import { Schema, Document, model } from "mongoose";

interface Table extends Document {
  qr: number;
}

// Define the Mongoose schema
const tableSchema = new Schema<Table>({
  qr: {
    type: Number,
    required: true,
    unique: true,
  },
});

// Create and export the Mongoose model based on the schema
const TableSchema = model<Table>("Table", tableSchema);

export default TableSchema;
