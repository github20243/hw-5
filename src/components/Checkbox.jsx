import React, { useState } from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel, Box, Typography } from '@mui/material';

const Checkbox = () => {
  const [checkbox, setCheckbox] = useState(false);

  const handleCheckbox = () => {
    setCheckbox((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '26vh',
        backgroundColor: checkbox ? 'black' : 'white',
        color: checkbox ? 'white' : 'black',
      }}
    >
      <Box>
        <Typography variant="h2">Учинчу уй тапшырма</Typography>
        <br />
        <FormControlLabel
          control={<MuiCheckbox checked={checkbox} onChange={handleCheckbox} />}
          label="Toggle background"
        />
      </Box>
      <br />
      <br />
      <br />
      <hr />
    </Box>
  );
};

export default Checkbox;
