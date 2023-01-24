import React from 'react';

function About() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <TextField helperText="" id="demo-helper-text-aligned" label="from" />
        <TextField
          helperText=""
          id="demo-helper-text-aligned-no-helper"
          label="to"
        />
      </Box>
      <Box sx={{ minWidth: 100 }}>
        <TextField
          fullWidth
          id="standard-search"
          label="流出用距離(m)"
          type="search"
          variant="standard"
          margin=""
        />
        <TextField
          fullWidth
          id="standard-search"
          label="漂着判定回数"
          type="search"
          variant="standard"
          margin=""
        />

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
      </Box>
      <Box sx={{ minWidth: 100 }}>
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
      <Box sx={{ minWidth: 100 }}>
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
      <Box sx={{ minWidth: 100 }}>
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
        <Button variant="contained" className="lead text-center m-4">
          CSV
        </Button>
      </p>
    </>
  );
}

export default About;
