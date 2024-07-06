import express from "express";
const router = express.Router();
import { trasacao, carregaPagina } from "./src/controllers/homeController.js";
import logMiddlewares from "./middlewares/logMiddlewares.js";
router.use(express.urlencoded({ extended: true })); //permite receber os dados

router.use(logMiddlewares);
router.get("/", carregaPagina);
router.post("/", trasacao);

export default router;
