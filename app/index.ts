import express from "express";

import router from "./routes";

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
    this.app.use("/", router);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const server = new Server();

server.listen();
