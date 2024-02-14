const router = require('express').Router();
// use object destructuring to import our two models by name
const { prodacts } = require('../../model');

// GET all prodact
router.get('/', async (req, res) => {
  try {
   
    const prodactData = await prodact.findAll({
      include: [{ model: prodacts }],
    });
    res.status(200).json(prodactData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single prodact by prodact ID
router.get('/:id', async (req, res) => {
  try {
    const prodactData = await prodacts.findByPk(req.params.id, {
      include: [{ model: prodacts }],
    });

    if (!prodactData) {
      res.status(404).json({ message: '#' });
      return;
    }

    res.status(200).json(prodactData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a Prodact
router.post('/', async (req, res) => {
  try {

    const locationData = await prodacts.create({
      // prodact_id: req.body.prodact_id,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a prodact
router.delete('/:id', async (req, res) => {
  try {
    const prodactData = await prodacts.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!prodactData) {
      res.status(404).json({ message: '#!' });
      return;
    }

    res.status(200).json(prodactData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
