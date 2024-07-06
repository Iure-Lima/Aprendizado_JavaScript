import express from "express";
const router = express.Router();
import { trasacao, carregaPagina } from "./src/controllers/homeController.js";
router.use(express.urlencoded({ extended: true })); //permite receber os dados

router.get("/", carregaPagina);
router.post("/", trasacao);

export default router;
