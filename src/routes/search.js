import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { searchMock } from '../mock/search.js';
import TableContainer from '@material-ui/core/TableContainer';
import District from './../components/Form/district.js';

export default function Search() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();

  const [district, setDistrict] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [raft, setRaft] = React.useState('');
  const [float, setFloat] = React.useState('');

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleRaftChange = (event) => {
    setRaft(event.target.value);
  };
  const handleFloatChange = (event) => {
    setFloat(event.target.value);
  };

  return (
    <>
      <div className="container">
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
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">筏名</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={raft}
              label="Raft"
              onChange={handleRaftChange}
            >
              <MenuItem value={10}>筏名1</MenuItem>
              <MenuItem value={20}>筏名2</MenuItem>
              <MenuItem value={30}>筏名3</MenuItem>
            </Select>
          </FormControl>
        </Box>
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

        <p className="lead text-center p-4">
          <Button variant="contained" className="lead text-center m-4">
            検索
          </Button>
          <Button variant="contained" className="lead text-center m-4">
            登録
          </Button>
          {/* <Button variant="contained" className="lead text-center m-4">
            CSV
          </Button> */}
        </p>

        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>地区名</TableCell>
                <TableCell align="right">フロートID</TableCell>
                <TableCell align="right">流失状態</TableCell>
                <TableCell align="right">箇所名</TableCell>
                <TableCell align="right">筏名</TableCell>
                <TableCell align="right">日付</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchMock().map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
