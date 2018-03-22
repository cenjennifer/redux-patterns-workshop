import {multiMiddleware} from "./multi.middleware";
import {apiMiddleware} from "./api.middleware";

export const coreMiddleware = [multiMiddleware, apiMiddleware];
