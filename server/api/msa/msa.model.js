'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Msa', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        msa_code: DataTypes.INTEGER,
    }, {
        timestamps: true,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        tableName: 'msas'

    });
};