import { Router } from "express";
import { searchTerm } from "../controllers/search-term-controller";

const router = Router();

router.get("/", searchTerm);

export default router;
