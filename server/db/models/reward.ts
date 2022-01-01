'use strict';
import {
  Model
} from 'sequelize';

interface RewardAttributes {
  id: number,
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
    id!: number;
    price!: number;
    description!: string;
    static associate(models: any) {
      // define association here
      Reward.belongsTo(models.Project);
      Reward.belongsToMany(models.User, {through: "User_Rewards", foreignKey: "reward_id"});
    }
  };
  Reward.init({
    id: {
      type: DataTypes.UUID,
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