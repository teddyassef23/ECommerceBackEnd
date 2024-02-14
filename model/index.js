const prodact = require('./catagoty.js');
const catagory = require('./catagoty.js');
const tag = require('./tag.js');
const prodactTag = require('./prodacTag.js');

catagory.hasMany(prodact, {
  foreignKey: 'catagory_id',
  onDelete: 'CASCADE',
});

prodact.belongsTo(catagory, {
  foreignKey: 'catagory_id',
});

prodact.hasMany(prodactTag, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

prodactTag.belongsTo(prodact, {
  foreignKey: 'prodatct_id',
});

tag.hasMany(prodactTag, {
  foreignKey: 'id',
});

prodactTag.belongsTo(tag, {
  foreignKey: 'tag_id',
})


module.exports = { prodact, catagory, prodactTag,catagory };
