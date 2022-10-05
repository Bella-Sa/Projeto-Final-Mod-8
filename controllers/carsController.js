const { Op } = require("sequelize");

const CarsModel = require("../models/carsModel");

class CarsController {

    createCars(req, res) {
      const {uuid} = require("uuidv4");
      const data = { ...req.body, id: uuid() };
  
      CarsModel.create(data)
        .then(() => res.status(201).json(data))
        .catch((err) => res.status(500).json({ error: err }));
    }
  
    getAllCars(req, res) {
      const { marca } = req.query;
  
      const filter = marca
        ? {
            where: {
              marca: {
                [Op.iLike]: `%${marca}%`,
              },
            },
          }
        : {};
  
      CarsModel.findAll(filter)
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(500).json({ error: err }));
    }
  
    getCarsByMarca(req, res) {
      const { id } = req.params;
      CarsModel.findOne({ where: { id } })
        .then((result) => {
          if (result) {
            res.status(200).json(result);
          } else {
            res.status(404).json({ message: `car not found` });
          }
        })
        .catch((err) => res.status(500).json({ error: err }));
    }
  
    updateCars(req, res) {
      const { id } = req.params;
      CarsModel.update(req.body, { where: { id } })
      .then((result) => {
        if (result) {
          res.status(200).end();
        } else {
          res.status(404).json({ message: `car not found` });
        }
      })
        .catch((err) => res.status(500).json({ error: err }));
    }
  
    removeCars(req, res) {
      const { id } = req.params;
      CarsModel.destroy({ where: { id } })
        .then((result) => {
          if (result) {
            res.status(200).end();
          } else {
            res.status(404).json({ message: `car not found` });
          }
        })
        .catch((err) => res.status(500).json({ error: err }));
    }
  }
  



module.exports = new CarsController();
