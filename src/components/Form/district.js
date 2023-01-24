import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function District() {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">地区名</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={district}
        label="District"
        onChange={handleDistrictChange}
      >
        <MenuItem value={10}>地区A</MenuItem>
        <MenuItem value={20}>地区B</MenuItem>
        <MenuItem value={30}>地区C</MenuItem>
      </Select>
    </FormControl>
  );
}

export default District;
