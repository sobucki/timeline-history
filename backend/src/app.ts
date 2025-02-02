import express from "express";
import personaRoutes from "./routes/persona-routes";

const app = express();
app.use(express.json());

app.use("/api/persona", personaRoutes);

export default app;
