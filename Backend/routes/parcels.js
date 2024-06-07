const express = require("express");
const router = express.Router();
const Parcel = require("../models/Parcel");

// ADD PARCEL

router.post("/", async (req, res) => {
  const newParcel = Parcel(req.body);
  try {
    const parcel = await newParcel.save();
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL PARCELS

router.get("/", async (req, res) => {
  try {
    const parcels = await Parcel.find().sort({ createdAt: -1 });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE PARCEL

router.put("/:id", async (req, res) => {
  try {
    const parcel = await Parcel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ONE PARCEL

router.get("/find/:id", async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    res.status(200).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET USERS PARCEL

router.post("/me", async (req, res) => {
  try {
    const parcels = await Parcel.find({ senderemail: req.body.email }).sort({
      createdAt: -1,
    });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE SHIFT

router.delete("/:id", async (req, res) => {
  try {
    await Parcel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Parcel has been deleted!" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
