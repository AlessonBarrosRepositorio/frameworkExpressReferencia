'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
   /
    static associate(models) {
      Usuario.hasMany(models.Tabela);
      Usuario.hasMany(models.Lixeira);
    }*/
  }
  Usuario.init({
    nome: DataTypes.TEXT,
    email: DataTypes.TEXT,
    celular: DataTypes.TEXT,
    senha: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};