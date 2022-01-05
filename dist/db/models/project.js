'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Project extends sequelize_1.Model {
        static associate(models) {
            // define association here
            Project.belongsToMany(models.User, { through: "User_Project" });
            Project.hasMany(models.Reward);
        }
    }
    ;
    Project.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        creatorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creatorName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        currFunds: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        goal: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["in-progress", "expired"]]
            }
        },
        imageURL: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["game", "film", "book"]]
            }
        }
    }, {
        sequelize,
        modelName: 'Project',
    });
    return Project;
};
