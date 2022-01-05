'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Reward extends sequelize_1.Model {
        static associate(models) {
            // define association here
            Reward.belongsTo(models.Project);
        }
    }
    ;
    Reward.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Reward',
    });
    return Reward;
};
