'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Listing', {
    id: {
      type:  DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: DataTypes.TEXT,
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    sale_trade: DataTypes.STRING,
    condition: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
    date_posted: DataTypes.DATEONLY

  },{
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName:true,
    tableName:'listings'

  });
};
