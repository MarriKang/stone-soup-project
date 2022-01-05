import React from 'react';
import { RewardContainerProps } from '../types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const RewardContainer = ({
  id,
  price,
  description
}: RewardContainerProps) => {

    return (
      <div className="RewardContainer">
        <Card className="reward-cards">
            <CardContent>
                <Typography variant="h4">${price.toLocaleString()} Reward</Typography>
                <br/>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
        </Card>
      </div>
    );
}

export default RewardContainer;