import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const Spinner = () => {
  const [begin, setBegin] = useState(false);

  const handleSpinner = () => {
    setBegin((prev) => !prev);
  };

  return (
    <SpinnerContainer>
       <h2>Бешинчи уй тапшырма</h2>
      <Button onClick={handleSpinner} variant="contained" color="primary">
        {begin ? "STOP" : "START"}
      </Button>
      <br />
      {begin && <div className="loader"></div>}
      <br />
      <br />
      <hr />
    </SpinnerContainer>
  );
};

export default Spinner;

const SpinnerContainer = styled("div")`
  color: #23b3df;
  display: inline-block;
  position: relative;
  top: 20px;
  overflow: hidden; 

  .loader {
    position: absolute;
    top: 90px;
    left: 10%;
    transform: translate(-50%, -50%);
    width: 40px; 
    height: 40px;
    border-radius: 50%; 
    border: 4px solid blue; 
    border-top-color: transparent; 
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
