const express = require("express");
const app = express();
const axios = require("axios");
const Redis = require("redis");

const redisClient = Redis.createClient();
const start = async () => {
  await redisClient.connect();
};

start();
const DEFAULT_EXPIRATION = 3600; // ? seconds

app.get("/photos", async (req, res) => {
  try {
    const photos = await redisClient.get("photos");

    if (photos !== null) {
      return res.json(JSON.parse(photos));
    } else {
      const albumId = req.query.albumId;
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/photos",
        {
          params: { albumId },
        }
      );
      await redisClient.setEx(
        "photos",
        DEFAULT_EXPIRATION,
        JSON.stringify(data)
      );
      res.json(data);
    }
  } catch (error) {
    res.json({ error });
  }
});

app.get("/photos/:id", async (req, res) => {
  try {
    const photos = await redisClient.get("photosId");
    if (photos !== null) return res.json(JSON.parse(photos));

    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
    );
    redisClient.setEx("photosId", DEFAULT_EXPIRATION, JSON.stringify(data));
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

app.listen(3000, () => {
  console.log("Server is up on port 3000...");
});
