import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function Location() {
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">箇所名</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Location"
          onChange={handleLocationChange}
        >
          <MenuItem value={10}>箇所1</MenuItem>
          <MenuItem value={20}>箇所2</MenuItem>
          <MenuItem value={30}>箇所3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Location;
