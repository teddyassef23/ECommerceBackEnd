const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProdactTag extends Model {}

ProdactTag.init(
  {
    id: {
      type : DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    prodatct_id: {
      type: DataTypes.INTEGER,
      references: {

        model: 'prodacts',
        key: 'id',
      },
    },

    tag_id: {
      type: DataTypes.INTEGER,
      references: {

        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'prodactTag',
  }
);

module.exports = ProdactTag;