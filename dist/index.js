"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const sessionAuth = __importStar(require("./middleware/sessionAuth"));
const routes = __importStar(require("./routes"));
// initialize configuration
dotenv_1.default.config();
// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;
const app = (0, express_1.default)();
// Configure Express to use EJS
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Configure session auth
sessionAuth.register(app);
// Configure routes
routes.register(app);
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
// import dotenv from 'dotenv';
// import log4js from 'log4js';
// import { createExpressServer } from 'routing-controllers';
// import { UserController } from './controller/user-controller';
// import path from 'path';
// dotenv.config();
// const logger = log4js.getLogger();
// logger.level = process.env.LOG_LEVEL;
// const port = process.env.PORT;
// const app = createExpressServer({
//   controllers: [UserController]
// });
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map