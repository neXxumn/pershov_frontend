import React, { memo, useState } from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { string } from 'prop-types';
import ExpandMore from './ExpandMore';

import './Card.css';

function RecipeReviewCard(props) {
  const { title, content, image } = props;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="image"
      />
      <CardContent>
        <Typography className="title" variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            {content}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

RecipeReviewCard.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: string.isRequired,
};

export default memo(RecipeReviewCard);
