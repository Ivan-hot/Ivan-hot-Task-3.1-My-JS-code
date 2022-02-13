import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import * as sessionAuth from './middleware/sessionAuth';
import * as routes from './routes';

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

// Configure Express to use EJS
app.set('views', path.join(__dirname, 'views'));
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
