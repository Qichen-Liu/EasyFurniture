const express = require('express');
const router = express.Router();
const Furniture = require('../models/Furniture'); // Assuming you've defined your Furniture model

// Route to add furniture
router.post('/', async (req, res) => {
  try {
    const {
      user,
      title,
      content,
      price,
      address,
      contactMethod,
    } = req.body;

    const newFurniture = new Furniture({
      user,
      title,
      content,
      price,
      address,
      contactMethod,
    });

    const savedFurniture = await newFurniture.save();
    console.log(savedFurniture);

    res.status(201).json({ message: 'Furniture added successfully', furniture: savedFurniture });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add furniture', details: error.message });
  }
});

module.exports = router;
