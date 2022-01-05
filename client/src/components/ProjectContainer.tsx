import React from 'react';
import { ProjectContainerProps } from '../types';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

const ProjectContainer = ({
  id,
  title,
  currFunds,
  goal,
  imageUrl,
  type
}: ProjectContainerProps) => {
  const formattedFunds = currFunds.toLocaleString();
  const formattedGoal = goal.toLocaleString();
  const progress = (currFunds/goal) * 100;


    return (
      <div className="ProjectContainer">
        <Link to={`/explore/${id}`}>
          <Card className="project-cards">
            <CardMedia component="img" image="/jazzcat.jpg"/>
            <CardContent>
              <Typography variant="h4">{title}</Typography>
              <LinearProgress variant="determinate" value={progress} />
              <Typography variant="body1">
                <big><b>${formattedFunds}</b></big> out of <big><b>${formattedGoal}</b></big> raised
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </div>
    );
}

export default ProjectContainer;