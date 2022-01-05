import React from 'react';
import { SingleProjectProps } from '../types';
import Service from '../services';
import { Link } from 'react-router-dom';
import RewardContainer from './RewardContainer'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

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
    deleteProject,
    fact
}: SingleProjectProps) => {
    const formattedFunds = currFunds.toLocaleString();
    const formattedGoal = goal.toLocaleString();
    const progress = (currFunds/goal) * 100;

    return (
      <div className="SingleProject">
          <h1 className="project-title">{title}</h1>
          <h4 className="creator-name">Created by: {creatorName}</h4>
          <img src="/jazzcat_banner.jpg" alt="a cat playing the trumpet"/>
          <Box className="progress-bar-container">
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <h2>${formattedFunds} out of ${formattedGoal} raised</h2>
          <small><i>{fact}</i></small>
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