/** @format */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
const port = process.env.PORT || 5174;

app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

// Create order in Keeta (Keeta-only flow)
app.post("/api/keeta/orders", async (req, res) => {
  try {
    const { customer, address, items, notes, source } = req.body || {};

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "items is required" });
    }

    if (!process.env.KEETA_API_KEY) {
      return res.status(500).json({ error: "Missing KEETA_API_KEY" });
    }

    // Map items to Keeta schema if needed
    const mappedItems = items.map((item) => ({
      // Replace with your mapping to Keeta product identifiers if required
      item_id: item.keeta_item_id || item.id,
      quantity: item.quantity || 1,
      price: item.price,
      name_en: item.name_en,
      name_ar: item.name_ar,
    }));

    const payload = {
      source: source || "website",
      notes: notes || undefined,
      customer: customer || undefined,
      address: address || undefined,
      items: mappedItems,
    };

    const baseUrl = process.env.KEETA_BASE_URL || "https://api.keeta.example"; // placeholder
    const response = await axios.post(`${baseUrl}/v1/orders`, payload, {
      headers: {
        Authorization: `Bearer ${process.env.KEETA_API_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeout: 15000,
    });

    res.status(201).json(response.data);
  } catch (error) {
    const status = error.response?.status || 500;
    res.status(status).json({ error: error.response?.data || error.message });
  }
});

// Create order in Foodics
app.post("/api/foodics/orders", async (req, res) => {
  try {
    const {
      customer,
      address,
      items,
      notes,
      source,
    } = req.body || {};

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "items is required" });
    }

    if (!process.env.FOODICS_API_KEY) {
      return res.status(500).json({ error: "Missing FOODICS_API_KEY" });
    }

    // TODO: Map your local product IDs to Foodics product/variant IDs
    const mappedItems = items.map((item) => ({
      // Replace with your mapping logic/repo
      product_id: item.foodics_product_id || item.id,
      quantity: item.quantity || 1,
      price: item.price,
      // Add modifiers/options if needed
    }));

    // Build Foodics payload. Refer to Foodics API docs for fields.
    const payload = {
      type: "delivery", // or dinein/takeaway
      notes: notes || undefined,
      source: source || "website",
      customer: customer || undefined,
      address: address || undefined,
      items: mappedItems,
    };

    const response = await axios.post(
      (process.env.FOODICS_BASE_URL || "https://api.foodics.dev") + "/v2/orders",
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.FOODICS_API_KEY}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        timeout: 15000,
      }
    );

    res.status(201).json(response.data);
  } catch (error) {
    const status = error.response?.status || 500;
    res.status(status).json({
      error: error.response?.data || error.message,
    });
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Foodics bridge listening on http://localhost:${port}`);
});



