import {multiMiddleware} from "./multi.middleware";
import {apiMiddleware} from "./api.middleware";
import {loggerMiddleware} from "./logger.middleware";

export const coreMiddleware = [multiMiddleware, apiMiddleware, loggerMiddleware];
