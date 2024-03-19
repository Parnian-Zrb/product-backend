import express from "express";
import cors from "cors";
import productRouter from "./routes/productRoutes";
const app = express();

// MIDDLEWARE
app.use(express.json({ limit: "10kb" }));
// Url Encoder, Allows express to parse data being sent from a form
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(
  cors({
    origin:
      // "http://localhost:5173",
      "https://prn-product-inventor.netlify.app",
  })
);
// ROUTES
app.use("/products", productRouter);
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Our Express Server");
});

export default app;
