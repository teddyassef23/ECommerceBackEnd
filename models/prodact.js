const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Prodacts extends Model {}

Prodacts.init(
  {
    id: {
     type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    prodact_name: {
      type : DataTypes.stringify,
      allowNull: false,
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      },
  
    stack: {
      type:DataTypes.INTEGER,
      allowNull: false,
      },
  
      catagory_id: {
      type : DataTypes.INTEGER,
      references: {
        
        model: 'catagory',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Prodacts',
  }
);

module.exports = Prodacts;