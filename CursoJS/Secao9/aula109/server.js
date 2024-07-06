import express from "express";
const app = express();
import routes from "./router.js";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static(path.resolve(__dirname, "public")));
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");
app.use(routes);

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
