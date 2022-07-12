const HttpError = require("../models/http-error");

const DUMMY_PLACE = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "On of the most famous Sky Scrapper in the world",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

const getPlacesById = (req, res, next) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACE.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError("Could not find a place, please provide id", 404);
  }

  res.json({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACE.find((p) => {
    return p.creator === userId;
  });
  if (!place) {
    throw new Error("Could not find a place, please provide user id", 404);
  }
  res.json({ place });
};

const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;

  const createPlace = {
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  DUMMY_PLACE.push(createPlace);

  res.status(201).json({ place: createPlace });
};

module.exports = { getPlacesById, getPlaceByUserId, createPlace };
