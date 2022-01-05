import React from 'react';
import { SingleProjectProps } from '../types';
import Service from '../services';
import { Link } from 'react-router-dom';
import RewardContainer from './RewardContainer'

const SingleProject = ({
    id,
    creatorId,
    creatorName,
    title,
    currFunds,
    goal,
    type,
    rewards
}: SingleProjectProps) => {
    const formattedFunds = currFunds.toLocaleString();
    const formattedGoal = goal.toLocaleString();

    return (
      <div className="SingleProject">
          <h1>{title}</h1>
          <h4>Created by: </h4>
          <h2>{formattedFunds} out of {formattedGoal} raised</h2>
          <h3>Reward tiers</h3>
          <div className="reward-container">{rewards.map(reward => {
            return <RewardContainer key={reward.id} id={reward.id} price={reward.price} description={reward.description}/>
          })}</div>
          <Link to={`/projects/${id}/checkout`}>
              <button>Checkout</button>
            </Link>
      </div>
    );
}

export default SingleProject;