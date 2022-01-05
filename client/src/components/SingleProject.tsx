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
    description,
    type,
    rewards,
    deleteProject
}: SingleProjectProps) => {
    const formattedFunds = currFunds.toLocaleString();
    const formattedGoal = goal.toLocaleString();

    return (
      <div className="SingleProject">
          <h1 className="project-title">{title}</h1>
          <h4 className="creator-name">Created by: {creatorName}</h4>
          <h2>${formattedFunds} out of ${formattedGoal} raised</h2>
          <p>{description}</p>
          <h3>Reward tiers</h3>
          <div className="reward-container">{rewards.map(reward => {
            return <RewardContainer key={reward.id} id={reward.id} price={reward.price} description={reward.description}/>
          })}</div>
          {creatorId === 3 ? <div className="delete-container">
          <h4>This is your project! Would you like to</h4>
          <button className="delete-button" onClick={() => deleteProject()}>Delete it?</button>
          </div>
           : 
          <Link to={`/projects/${id}/checkout`}>
              <button className="fund-button">Fund this project</button>
            </Link>}
      </div>
    );
}

export default SingleProject;