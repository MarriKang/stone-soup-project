import React from 'react';
import { ProjectContainerProps } from '../types';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

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

    return (
      <div className="ProjectContainer">
        <Link to={`/explore/${id}`}>
          <Card className="project-cards">
            <CardContent>
              <Typography variant="h4">{title}</Typography>
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