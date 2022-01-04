import React, { useState, useEffect } from 'react';
import { ProjectData, RewardData, SingleProjectProps } from '../types';
import Service from '../services';
import { useParams, Link } from 'react-router-dom';
import RewardContainer from './RewardContainer'

const SingleProject = ({
    id,
    creatorId,
    title,
    currFunds,
    goal,
    type,
    rewards
}: SingleProjectProps) => {


    return (
      <div className="SingleProject">
          <h1>{title}</h1>
          <h4>{rewards.map(reward => {
            return <RewardContainer key={reward.id} id={reward.id} price={reward.price} description={reward.description}/>
          })}</h4>
          <Link to={`/projects/${id}/checkout`}>
              <button>Checkout</button>
            </Link>
      </div>
    );
}

export default SingleProject;