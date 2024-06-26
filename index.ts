import { startServer } from "./app/app";
import { validateENV } from "./app/utility/validate-env";
validateENV();
startServer();
