import React, { useState } from 'react';
import { Slider, Switch, Button, Typography, Container, Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('xs')]: {
    width: '100%',
    margin: '0 auto',
  },
  [theme.breakpoints.up('sm')]: {
    width: '90%',
  },
  [theme.breakpoints.up('md')]: {
    width: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
}));

const Card = styled(Box)(({ theme }) => ({
  marginTop:theme.spacing(5),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: "10px",
  width:"130%",
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(3),
  border: `1px solid ${theme.palette.divider}`,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  border: `1px solid ${theme.palette.divider}`,
}));

const marks = [
  { value: 500, label: <div style={{ textAlign: 'center' }}><strong>$5</strong><br /><span style={{ marginTop: '4px', display: 'block' }}>500 credits</span></div> },
  { value: 1200, label: <div style={{ textAlign: 'center' }}><strong>$10</strong><br /><span style={{ marginTop: '4px', display: 'block' }}>1200 credits</span></div> },
  { value: 1700, label: <div style={{ textAlign: 'center' }}><strong>$15</strong><br /><span style={{ marginTop: '4px', display: 'block' }}>1700 credits</span></div> },
  { value: 2500, label: <div style={{ textAlign: 'center' }}><strong>$20</strong><br /><span style={{ marginTop: '4px', display: 'block' }}>2500 credits</span></div> },
  { value: 3900, label: <div style={{ textAlign: 'center' }}><strong>$25</strong><br /><span style={{ marginTop: '4px', display: 'block' }}>3900 credits</span></div> },
  { value: 5000, label: <div style={{ textAlign: 'center' }}><strong>$30</strong><br /><span style={{ marginTop: '4px', display: 'block' }}>5000 credits</span></div> },
];

const AutoTopUpComponent: React.FC = () => {
  const theme = useTheme();
  const [autoTopUp, setAutoTopUp] = useState(false);
  const [credits, setCredits] = useState(1200);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setCredits(newValue as number);
  };

  const handleConfirm = () => {
    console.log(`Confirmed auto-purchase for ${credits} credits`);
  };

  return (
    <StyledContainer>
      <Card>
        <Typography variant="h5" gutterBottom>
          Setup Auto Top-up
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Once the credit goes below the threshold value, credits can be auto purchased. Setup auto top-up to enjoy uninterrupted services. You can disable this anytime to stop auto top-up.
        </Typography>
        <Switch
          checked={autoTopUp}
          onChange={(e) => setAutoTopUp(e.target.checked)}
          name="autoTopUp"
          color="primary"
          sx={{ marginTop: theme.spacing(2) }}
        />
      </Card>

      {autoTopUp && (
        <Card>
          <Typography variant="h5" gutterBottom>
            Setup Auto Top-up
          </Typography>
          <Typography gutterBottom>
            Once the credit goes below a minimum threshold <strong>50</strong>, we will auto-purchase <strong>{credits}</strong> credits and add them to your account. <a href="#">Learn more</a>
          </Typography>
          <Slider
            value={credits}
            onChange={handleSliderChange}
            aria-labelledby="discrete-slider"
            step={null}
            marks={marks}
            min={500}
            max={5000}
            valueLabelDisplay="auto"
            sx={{
              color: 'primary.main',
              '& .MuiSlider-thumb': {
                boxShadow: 3,
              },
              '& .MuiSlider-track': {
                height: 6,
              },
              '& .MuiSlider-rail': {
                height: 6,
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirm}
            sx={{ marginTop: theme.spacing(6), boxShadow: 2, padding: theme.spacing(1.5) }}
          >
            Confirm auto-purchase
          </Button>
        </Card>
      )}
    </StyledContainer>
  );
};

export default AutoTopUpComponent;
