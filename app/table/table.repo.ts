import TableSchema from "./table.schema";
import { Table } from "./table.type";

const getTable = (query: Table) => TableSchema.findOne(query)

export default { getTable};