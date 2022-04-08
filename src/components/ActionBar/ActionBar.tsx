import React from 'react';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styles } from './styles';
import StatusFilter from '../StatusFilter/StatusFilter';
import DateSort from '../DateSort/DateSort';

interface Props {
  statusFilter: string;
  dateSort: string;
  onStatusFilterChange(value: string): void;
  onDateSortChange(value: string): void;
}

const ActionBar: React.FC<Props> = ({
  statusFilter, dateSort, onStatusFilterChange, onDateSortChange,
}) => {
  const handleChangeStatusFilter = (status: string): void => {
    onStatusFilterChange(status);
  };
  const handleChangeDateSort = (date: string): void => {
    onDateSortChange(date);
  };

  return (
    <AppBar sx={styles.AppBar} elevation={3} position="fixed">
      <Toolbar sx={styles.Toolbar}>
        <Box>
          <TextField sx={styles.TextField} id="search" label="Search briefs" variant="outlined" />
          <StatusFilter statusFilter={statusFilter} onStatusFilterChange={handleChangeStatusFilter} />
          <DateSort dateSort={dateSort} onDateSortChange={handleChangeDateSort} />
        </Box>

        <Button variant="contained">New Brief</Button>
      </Toolbar>
    </AppBar>
  );
};

export default ActionBar;
