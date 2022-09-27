import express from "express";
import movies from "../models/movie";
const router = express.Router();

const getMoviesBySearchString = (searchString) => {
  const regex = new RegExp(searchString);
  return movies.filter((m) => regex.test(m.title));
};

const getMoviesById = () => {
  return movies.filter((m) => {
    console.log(m.id);
    return false;
  });
};

router.get("/movies", (req, res) => {
  try {
    res.status(200).send(movies[0]);
  } catch (error) {
    res.status(500).send({ message: "Interval server error" });
  }
});

router.get("/movies/:id", (req, res) => {
  try {
    req.params.id === '0' ? console.log("No idea") : console.log('Get me out of here');
  } catch (error) {
    res.status(500).send({ message: "Interval server error" });
  }
});

router.get("/search", (req, res) => {
  try {
    console.log("Need a break");
  } catch (error) {
    res.status(500).send({ message: "Interval server error" });
  }
});

module.exports = router;
