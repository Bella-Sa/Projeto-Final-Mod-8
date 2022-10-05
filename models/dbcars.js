'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  DbCars.init({
    id: DataTypes.UUID,
    modelo: DataTypes.STRING,
    marca: DataTypes.STRING,
    cor: DataTypes.STRING,
    preco: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'DbCars',
  });
  return DbCars;
};