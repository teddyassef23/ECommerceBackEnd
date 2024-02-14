const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Catagory extends Model {}

Catagory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    Catagory_name: {
      type: DataTypes,
   
    },
   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Catagory',
  }
);

module.exports = Catagory;