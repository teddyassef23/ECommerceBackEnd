const router = require('express').Router();
// use object destructuring to import our two models by name
const { catagory, prodact } = require('../../models/index');

// GET all catagory
router.get('/', async (req, res) => {
  try {
   
    const catagoryData = await catagory.findAll({
      include: [{ model: prodact }],
    });
    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single catagory by catagory ID
router.get('/:id', async (req, res) => {
  try {
    const catagoryData = await catagory.findByPk(req.params.id, {
      include: [{ model: prodact }],
    });

    if (!catagoryData) {
      res.status(404).json({ message: '#!' });
      return;
    }

    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a catagory
router.post('/', async (req, res) => {
  try {
    // Since the model will create a unique UUID value by default, we just need to provide the `id` of the prodact that will own this card
    const locationData = await catagory.create({
      // prodact_id: req.body.prodact_id,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a card
router.delete('/:id', async (req, res) => {
  try {
    const catagoryData = await catagory.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!catagoryData) {
      res.status(404).json({ message: '#' });
      return;
    }

    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
