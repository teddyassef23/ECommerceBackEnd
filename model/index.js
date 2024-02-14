const prodact = require('./prodact');
const catagory = require('./catagoty');
const tag = require('./tag.js');
const prodactTag = require('./prodacTag');

// prodact.belongsTo(catagory, {
//   foreignKey: 'catagory_id',
// });

catagory.hasMany(prodact, {
  foreignKey: 'catagory_id',
  onDelete: 'CASCADE',
});



prodactTag.belongsTo(tag, {
  foreignKey: 'tag_id',
})




tag.hasMany(prodactTag, {
  foreignKey: 'tag_id',
});

prodact.hasMany(prodactTag, {
  foreignKey: 'prodatct_id',
  onDelete: 'CASCADE',
});

prodactTag.belongsTo(prodact, {
  foreignKey: 'prodatct_id',
});


module.exports = { prodact, catagory, prodactTag,catagory };
