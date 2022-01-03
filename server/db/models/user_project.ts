'use strict';
import {
  Model
} from 'sequelize'

interface User_ProjectAttributes {
  ProjectId: number;
  UserId: number;
  amntPaid: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User_Project extends Model<User_ProjectAttributes> implements User_ProjectAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    ProjectId!: number;
    UserId!: number;
    amntPaid!: number;
    static associate(models: any) {
      // define association here
    }
  };
  User_Project.init({
    ProjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Projects',
        key: 'id'
      },
      unique: false
    },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        unique: false
      },
      amntPaid: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
  }, {
    sequelize,
    modelName: 'User_Project',
  });
  return User_Project;
};