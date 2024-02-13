const prodact = require('./prodact');
const catagory = require('./catagoty');
const tag = require('./tag');
const prodactTag = require('./prodacTag');

catagory.hasMany(prodact, {
  foreignKey: 'id',
 
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
  foreignKey: 'prodact_id',
});

tag.hasMany(prodactTag, {
  foreignKey: 'id',
});

prodactTag.belongsTo(tag, {
  foreignKey: 'tag_id',
})


module.exports = { prodact, catagory};//,prodactTag,catagory };
