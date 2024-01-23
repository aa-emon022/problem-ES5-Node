import salesmanSchema from "../model/salesman";

import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const salesman = await salesmanSchema.find();
    res.json(salesman);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
