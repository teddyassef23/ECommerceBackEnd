const router = require('express').Router();
// use object destructuring to import our two models by name
const { prodact, prodact } = require('../../models/index');

// GET all prodact
router.get('/', async (req, res) => {
  try {
   
    const prodactData = await prodact.findAll({
      include: [{ model: prodact }],
    });
    res.status(200).json(prodactData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single prodact by prodact ID
router.get('/:id', async (req, res) => {
  try {
    const prodactData = await prodact.findByPk(req.params.id, {
      include: [{ model: prodact }],
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

    const locationData = await prodact.create({
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
    const prodactData = await prodact.destroy({
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
