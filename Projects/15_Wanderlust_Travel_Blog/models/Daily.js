const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Daily extends Model {}

Daily.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            // defaultValue: DataTypes.NOW,
        },
        places_visited: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        daily_notes: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image_location: {
            type:DataTypes.STRING,
            allowNull: true,
        },
        trip_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'trip',
                key: 'id',
            },
        },
        image_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'image',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'daily',
    }
);

module.exports = Daily;