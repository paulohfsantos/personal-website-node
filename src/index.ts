import { config } from "dotenv";
import express, { Application } from "express";
import routes from "./routes";
import cors from "cors";

config();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: true }));

const port = process.env.API_PORT;

app.listen(port);