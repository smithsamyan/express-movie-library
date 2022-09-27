import express from "express";
const router = express.Router();

router.get("/movies", (req, res) => {
  try {
    res.status(200);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

router.get("/movies/:id", (req, res) => {
  try {
    res.status(200);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

router.get("/search", (req, res) => {
  try {
    res.status(200);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
