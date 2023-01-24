import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function Float() {
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">フロート名</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={float}
          label="Float"
          onChange={handleFloatChange}
        >
          <MenuItem value={10}>フロート1</MenuItem>
          <MenuItem value={20}>フロート2</MenuItem>
          <MenuItem value={30}>フロート3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Float;
