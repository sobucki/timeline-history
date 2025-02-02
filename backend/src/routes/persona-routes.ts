import { Router } from "express";
import { getPersona } from "../controllers/persona-controller";

const router = Router();

router.get("/", getPersona);

export default router;
