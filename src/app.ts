import express from "express";

import productRouter from "./routes/productRoutes";
const app = express();

// MIDDLEWARE
app.use(express.json({ limit: "10kb" }));

// ROUTES
app.use("/products", productRouter);
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Our Express Server!!!!");
});

export default app;
