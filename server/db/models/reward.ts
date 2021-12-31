'use strict';
import {
  Model
} from 'sequelize';

interface RewardAttributes {
  price: number,
  description: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Reward extends Model<RewardAttributes> implements RewardAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    price!: number;
    description!: string;
    static associate(models: any) {
      // define association here
      Reward.belongsTo(models.Project);
      Reward.hasMany(models.User);
    }
  };
  Reward.init({
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