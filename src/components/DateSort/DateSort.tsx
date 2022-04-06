import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styles } from './styles';
import { BriefDateOptionsList } from '../../constants/BriefDates';

interface Props {
  dateSort: string;
  onDateSortChange(value: string): void;
}

const DateSort: React.FC<Props> = ({ dateSort, onDateSortChange }) => {
  const onChange = (event: SelectChangeEvent): void => {
    onDateSortChange(event.target.value);
  };

  return (
    <FormControl sx={styles.FormControl}>
      <InputLabel id="date-sort-select-label">Order by</InputLabel>
      <Select
        labelId="date-sort-select-label"
        id="date-sort-select"
        value={dateSort}
        label="Order by"
        onChange={onChange}
      >
        {BriefDateOptionsList.map(
          (date) => <MenuItem key={date.value} value={date.value}>{date.label}</MenuItem>,
        )}
      </Select>
    </FormControl>
  );
};

export default DateSort;
