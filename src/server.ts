import app from "@/app";
import { logger } from "@utils/logger";
import { NODE_ENV } from "@config";
import { MONGODB_URI, PORT } from "@config";
import validateEnv from "@utils/validateEnv";
import routes from "./routes";
import connectDatabase from "@/databases";

validateEnv();
connectDatabase(MONGODB_URI);

const version = "/v1";
routes.forEach((route) => {
  const path = version + route.path;
  app.use(path, route.func);
});



import * as dotenv from "dotenv";
dotenv.config();

import multer from "multer";

//const app = express();

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 1000000000, files: 2 },
});


app.listen(PORT, () => {
  logger.info(`======= ENV: ${NODE_ENV} =======`);
  logger.info(`🚀 App listening on the port http://192.168.29.245:${PORT}`);
});
