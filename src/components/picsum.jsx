import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

function PicSum() {
  const [photoUrl, setPhotoUrl] = useState('https://picsum.photos/200');
  const [isPaused, setIsPaused] = useState(false);


  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(() => {
        setPhotoUrl('https://picsum.photos/200');
      }, 4000);
    }

    return () => {
      clearInterval(intervalId);
    };

  }, [isPaused]);

  const handlePhotoClick = () => {
    if (!isPaused){ setIsPaused(true);}
    else {setIsPaused(false);}
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={handlePhotoClick}
      style={{ cursor: 'pointer' }}
      
    >
      <img src={photoUrl} alt="random photo" width="200" height="200" />
    </Box>
  );
}

export default PicSum;