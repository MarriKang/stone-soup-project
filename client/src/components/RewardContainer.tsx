import React from 'react';
import { RewardContainerProps } from '../types';

const RewardContainer = ({
  id,
  price,
  description
}: RewardContainerProps) => {

    return (
      <div className="RewardContainer">
        <h1>{price}</h1>
      </div>
    );
}

export default RewardContainer;