import express from "express";
import personaRoutes from "./routes/persona-routes";
import searchRoute from "./routes/search-term-routes";

const app = express();
app.use(express.json());

app.use("/api/persona", personaRoutes);
app.use("/api/search", searchRoute);

export default app;
