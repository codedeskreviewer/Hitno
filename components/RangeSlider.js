import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styles from '../styles/Home.module.css';

function valuetext(value) {
  return `${value} €`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState(['0', '100']);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  

  return (
    <Box sx={{ width: 335 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div className={styles.from_to_wrapper}>
        <div className={styles.from_price}>{value[0]} €</div>
        <div className={styles.to_price}>{value[1]} €</div>
      </div>
    </Box>
  );
}
