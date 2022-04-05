import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { getBriefList } from '../../services/BriefDataService';
import { IBrief } from '../../interfaces/Brief';
import Brief from '../Brief/Brief';
import { styles } from './styles';

const BriefList: React.FC = () => {
  const [briefList, setBriefList] = useState<IBrief[]>([]);

  useEffect(() => {
    getBriefList()
      .then((response: IBrief[]) => setBriefList(response));
  }, []);

  return (
    <Box sx={styles.Box}>
      {briefList.length && briefList.map((brief) => (
        <Brief brief={brief} />
      ))}
    </Box>
  );
};

export default BriefList;
