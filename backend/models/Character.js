const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Character = sequelize.define('Character', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strength: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dexterity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  constitution: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  intelligence: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  wisdom: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  charisma: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Character;
