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
      type: DataTypes.STRING,
   
    },
   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'catagory',
  }
);

module.exports = Catagory;