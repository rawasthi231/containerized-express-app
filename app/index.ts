import express from "express";

import router from "./routes";

import { HTTP_STATUS } from "./utils/httpStatusCodes";

class Server {
  public app: express.Application;
  private port: number;
  constructor() {
    this.port = process.env.PORT ? parseInt(process.env.PORT) : 5000;
    this.app = express();
    this.middlewares();
    this.routes();
  }
  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private routes(): void {
    // Add a ping route
    this.app.get("/ping", (_: express.Request, res: express.Response) => {
      res.status(200).send("PONG 🏓");
    });
    // Add the router to the app
    this.app.use("/", router);
    // Add a catch-all route
    this.app.use((_: express.Request, res: express.Response) => {
      res.status(HTTP_STATUS.NOT_FOUND.code).send("You are lost 🧭");
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const server = new Server();

server.listen();
