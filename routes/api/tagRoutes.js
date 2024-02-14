const router = require('express').Router();
// use object destructuring to import our two models by name
const { tag } = require('../../model');

// GET all tag
router.get('/', async (req, res) => {
  try {

    const tagData = await tag.findAll({
      include: [{ model: prodactTag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single tag by tag ID
router.get('/:id', async (req, res) => {
  try {
    const tagData = await tag.findByPk(req.params.id, {
      include: [{ model: Tag }],
    });

    if (!tagData) {
      res.status(404).json({ message: '#' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a tag
router.post('/', async (req, res) => {
  try {
    const locationData = await tag.create({
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a card
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: '#' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
