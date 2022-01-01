'use strict';
import {
  Model
} from 'sequelize';

interface ProjectAttributes {
  id: number,
  creatorId: number,
  title: string,
  goal: number,
  endDate: Date,
  description: string,
  status: string,
  imageURL: string,
  type: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Project extends Model<ProjectAttributes> implements ProjectAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     id!: number;
     creatorId!: number;
     title!: string;
     goal!: number;
     endDate!: Date;
     description!: string;
     status!: string;
     imageURL!: string;
     type!: string
    static associate(models: any) {
      // define association here
      Project.belongsToMany(models.User, {through: "User_Project", foreignKey: "project_id"});
      Project.hasMany(models.Reward);
    }
  };
  Project.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    creatorId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    goal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATEONLY,
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