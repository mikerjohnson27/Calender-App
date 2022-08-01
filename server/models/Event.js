const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {

}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    end: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tag_ref: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Tag',
        key: 'id',
      },
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Event',
  }
);

module.exports = Event;