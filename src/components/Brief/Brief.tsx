import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { IBrief } from '../../interfaces/Brief';
import { styles } from './styles';

interface Props {
    brief: IBrief;
}

const Brief: React.FC<Props> = ({ brief }) => (
  <Card sx={styles.Card}>
    <CardMedia
      component="img"
      height="194"
      image={brief.backgroundImageUrl}
    />
    <CardContent>
      <Typography>{brief.briefType}</Typography>
      <Typography>{brief.title}</Typography>
      <Typography>
        MEID:
        {brief.meId}
      </Typography>
    </CardContent>
  </Card>
);

export default Brief;
