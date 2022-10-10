import { config } from "dotenv";
import express, { Application } from "express";

config();

const app: Application = express();
const port = process.env.API_PORT

app.listen(port)