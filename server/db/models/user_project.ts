'use strict';
import {
  Model
} from 'sequelize';

interface User_ProjectAttributes {
  userType: string,
  amntPaid: number
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User_Project extends Model<User_ProjectAttributes> implements User_ProjectAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    userType!: string;
    amntPaid!: number;
    static associate(models: any) {
      // define association here
    }
  };
  User_Project.init({
    userType: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["creator", "investor"]]
      }
    },
    amntPaid: {
      type: DataTypes.NUMBER
    }
  }, {
    sequelize,
    modelName: 'User_Project',
  });
  return User_Project;
};