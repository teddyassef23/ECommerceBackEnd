const prodact = require('./prodact');
// const catagory = require('./catagoty');
// const tag = require('./tag');
// const prodactTag = require('./prodacTag');

catagory.hasMany(prodact, {
  foreignKey: 'catagory_id',
 
  onDelete: 'CASCADE',
});

prodact.belongsTo(catagory, {
  foreignKey: 'catagory_id',
});



// prodact.hasMany(prodactTag, {
//   foreignKey: 'caprodact_id',
//   onDelete: 'CASCADE',
// });

// prodactTag.belongsTo(prodact, {
//   foreignKey: 'prodact_id',
// });




// tag.hasMany(prodactTag, {
//   foreignKey: 'Tag_id',
 
//   onDelete: 'CASCADE',
// });

// prodactTag.belongsTo(prodact, {
//   foreignKey: 'prodact_id',
// });

module.exports = { prodact};//,prodactTag,catagory };
