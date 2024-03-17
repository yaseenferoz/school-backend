// routes/form.js
const express = require('express');
const router = express.Router();
const Form = require('../models/form');

// POST /api/forms - Add a new form
router.post('/', async (req, res) => {
  try {
    const { label, type } = req.body;
    const newForm = new Form({ label, type });
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT /api/forms/:id - Update an existing form
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { label, type } = req.body;
    const updatedForm = await Form.findByIdAndUpdate(id, { label, type }, { new: true });
    res.json(updatedForm);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE /api/forms/:id - Delete a form by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Form.findByIdAndDelete(id);
    res.json({ message: 'Form deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/forms - Get all forms
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
