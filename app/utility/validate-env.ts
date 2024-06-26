import { z } from "zod";
import { config } from "dotenv";

const validator = z.object({
  PORT: z.coerce.number(),
  MONGO_URI: z.string(),
});

export const validateENV = () => {
  try {
    config();
    validator.parse(process.env);
  } catch (e) {
    throw { message: "ENV IS NOT CONFIGURED CORRECTLY...", error: e };
  }
};

type Env = z.infer<typeof validator>;

declare global {
  //   namespace Express {
  //     export interface Request {
  //       payload?: any;
  //     }
  //   }
  namespace NodeJS {
    export interface ProcessEnv extends Env {}
  }
}

export default {};
