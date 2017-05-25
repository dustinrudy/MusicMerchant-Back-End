'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Zip', {
    id: {
      type:  DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    zip_code: DataTypes.INTEGER

  },{
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName:true,
    tableName:'zips'

  });
};