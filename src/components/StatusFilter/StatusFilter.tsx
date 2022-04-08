import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styles } from './styles';
import { BriefStatusList } from '../../constants/BriefStatuses';

interface Props {
  statusFilter: string;
  onStatusFilterChange(value: string): void;
}

const StatusFilter: React.FC<Props> = ({ statusFilter, onStatusFilterChange }) => {
  const onChange = (event: SelectChangeEvent): void => {
    onStatusFilterChange(event.target.value);
  };

  return (
    <FormControl sx={styles.FormControl}>
      <InputLabel id="status-select-label">Status</InputLabel>
      <Select
        labelId="status-select-label"
        id="status-select"
        value={statusFilter}
        label="Status"
        onChange={onChange}
      >
        {BriefStatusList.map(
          (status) => (
            <MenuItem key={status.value} value={status.value}>{status.label}</MenuItem>
          ),
        )}
      </Select>
    </FormControl>
  );
};

export default StatusFilter;
