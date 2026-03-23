import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(
  cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
    methods: ["POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.post("/geo-query-ai", (req, res) => {
  const query = req.body.query;

  console.log("Query recibida:", query);

  if (typeof query !== "string" || query.trim() === "") {
    return res.status(400).json({ message: "Invalid query." });
  }

  res.status(200).json({ message: "Correct query.", receivedQuery: query });
});

export default app;