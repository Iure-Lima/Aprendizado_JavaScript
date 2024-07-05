import express from "express";
const router = express.Router();
import { trasacao, carregaForm } from "./controllers/homeController.js";
router.use(express.urlencoded({ extended: true })); //permite receber os dados

router.get("/", carregaForm);
router.post("/", trasacao);

export default router;
