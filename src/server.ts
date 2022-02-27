import "reflect-metadata";
import express from "express";

import "./database";
import { router } from "./routes";

const app = express();

// Configuração para poder enviar e receber JSONs
app.use(express.json());
app.use(router);

/* Listen deve sempre ser a ultima linha do código,
pois "ouvir" o servidor é a ultima coisa que ele deve fazer depois de tudo estar configurado */
app.listen(3333, () => console.log("🚀 listening..."));
