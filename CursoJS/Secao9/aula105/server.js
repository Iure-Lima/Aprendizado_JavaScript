import express from "express";
const app = express();
import routes from "./router.js";

app.use(routes);

app.listen(3001, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
