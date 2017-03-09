'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Listing', {
    id: {
      type:  DataTypes.INTEGER ,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: DataTypes.TEXT,
  },{
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName:true,
    tableName:'things'

  });
};
