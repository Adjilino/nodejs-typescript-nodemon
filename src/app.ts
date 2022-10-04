import express, { Application, Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.get("/_healthcheck", (req: Request, res: Response) => {
    res.send("OK");
});

app.listen(process.env.PORT, function () {
    console.log(`App is listening on port ${process.env.PORT} !`);
});
