import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

/* routes */
import indexRoutes from "./routes/index.js";

/* init express */
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

/* settings */
app.set("port", process.env.PORT || 4000);
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

/* routes */
app.use(indexRoutes);

/* static files */
app.use(express.static(join(__dirname, "public")));

/* listenint to the server */
app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
