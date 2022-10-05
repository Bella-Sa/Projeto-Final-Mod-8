const { DataTypes } = require("sequelize");
const sequelize = require("../infra/dbSequelize");

const CarsModel = sequelize.define(
  "DbCars", {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    modelo:{
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    marca:{
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cor: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    preco:{
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    createdAt:{
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
  },
    updatedAt:{
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },

  },  
  {
    tableName: "DbCars",
    schema: "public",
  }

);

module.exports = CarsModel;
