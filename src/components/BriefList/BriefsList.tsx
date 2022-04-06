import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getBriefList } from '../../services/BriefDataService';
import { IBrief } from '../../interfaces/Brief';
import Brief from '../Brief/Brief';
import { styles } from './styles';
import ActionBar from '../ActionBar/ActionBar';
import { BriefStatusesConfig } from '../../constants/BriefStatuses';
import { BriefDateOptionsConfig } from '../../constants/BriefDates';
import { getFilteredBriefListByStatus } from '../../services/BriefService';

const BriefList: React.FC = () => {
  const [briefList, setBriefList] = useState<IBrief[]>([]);
  const [filteredBriefList, setFilteredBriefList] = useState<IBrief[]>([]);
  const [statusFilter, setStatusFilter] = useState(BriefStatusesConfig.all.value);
  const [dateSort, setDateSort] = useState(BriefDateOptionsConfig.createdAt.value);

  useEffect(() => {
    getBriefList()
      .then((response: IBrief[]) => {
        setBriefList(response);
        setFilteredBriefList(getFilteredBriefListByStatus(response, BriefStatusesConfig.all.value));
      });
  }, []);

  const onFilterChange = (filterValue: string): void => {
    setStatusFilter(filterValue);
    setFilteredBriefList(getFilteredBriefListByStatus(briefList, filterValue));
  };

  const onSortChange = (sortValue: string): void => {
    setDateSort(sortValue);
    // toDo sort briefs
  };

  return (
    <>
      <ActionBar
        statusFilter={statusFilter}
        dateSort={dateSort}
        onStatusFilterChange={onFilterChange}
        onDateSortChange={onSortChange}
      />
      <Box sx={styles.Box}>
        {
          filteredBriefList?.length
            ? filteredBriefList.map((brief) => (<Brief key={brief.id} brief={brief} />))
            : <Typography>Briefs not found</Typography>
        }
      </Box>
    </>
  );
};

export default BriefList;
