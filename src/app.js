import "dotenv/config";


import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import router from "./routes/index.js";



const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// CORS
app.use(cors({
  origin: "*",
  credentials: true,
}));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/api-docs.json", (_req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

//routes
app.use("/api", router)

//Base route
app.get("/", (_req, res) => {
  res.send("✅ Academic Grades API funcionando correctamente");
});

//Swagger
swaggerDocs(app, PORT)

