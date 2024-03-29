const sequelize = require('../config/connection');
const {  prodact, prodactTag, catagory } = require('../models');

const readerSeedData = require('./catagorySeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const readers = await Reader.bulkCreate(readerSeedData, {
    individualHooks: true,
    returning: true,
  });

  for (const { id } of readers) {
    const newCatagory = await catagory.create({
      reader_id: id,
    });
  }

  process.exit(0);
};

seedDatabase();
