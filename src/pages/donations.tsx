import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Container, Box, Typography, ToggleButton, ToggleButtonGroup, Slide, Fade } from '@mui/material';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import store from '../store/store';
import DonationCard from '../components/DonationCard';
import { motion } from 'framer-motion';

import {oneBlockDonations,moddedDonations} from '../store/donations_descriptions'

const toggleButtonStyles = {
    backgroundColor: 'transparent',
    color: '#000',
    fontWeight: '400',
    fontSize:'18px',
    textTransform:'none',
    flex: 1,
    border:'0',
    width:'130px',
    '&:hover': {
        // backgroundColor: '#a5a5a5',
        border:'0',
        height:'48px',
        width:'130px',
        borderRadius: '14px',
        margin:'4px',

    },
    '&.Mui-selected': {
        // backgroundColor: '#e3e3e3',
        color: 'black',
        margin:'4px',
        height:'48px',
        width:'130px',
        borderRadius: '14px',
        // '&:hover': {
        // backgroundColor: '#e3e3e3',
        // },
    },
};


export default function Donations(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [mode, setMode] = useState('OneBlock');
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const filteredDonations = mode === 'OneBlock' ? oneBlockDonations : moddedDonations;


  const handleModeChange = (event: React.MouseEvent<HTMLElement>, newMode: string | null) => {
    if (newMode !== null) {
      Object.keys(expandedCards).forEach((id) => {
        if (expandedCards[Number(id)]) {
          setExpandedCards((prev) => ({ ...prev, [Number(id)]: false }));
        }
      });
      setMode(newMode);
    }
  };

  return (
    <Provider store={store}>
      <Layout title={`${siteConfig.title} - Донаты`}>
        <Container maxWidth={false} sx={{ padding: '20px', maxWidth: '100%' }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'medium' }}>
            Не будь роблоксером. Будь майнкрафтером.
          </Typography>
          
          <Box display="flex" justifyContent="center" mb={3}>
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleModeChange}
        sx={{
          width: '360px',
          height: '56px',
          backgroundColor: '#a5a5a5',
          borderRadius: '14px',
          border: '0px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Анимируемый фон (ползунок) */}
        <motion.div
          initial={false}
          animate={{ x: mode === 'OneBlock' ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            // height:'48px',
            // width:'130px',
            width: '50%',
            height: '100%',
            backgroundColor: '#e3e3e3',
            borderRadius: '14px',
          }}
        />

        <ToggleButton value="OneBlock" aria-label="OneBlock" sx={toggleButtonStyles}>
          OneBlock
        </ToggleButton>

        <ToggleButton value="Modded" aria-label="Modded" sx={toggleButtonStyles}>
          Modded
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>

          <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center" sx={{ padding: 2 }}>
            {filteredDonations.map((donation) => (
              <DonationCard
                key={`${mode}-${donation.id}`}
                donation={donation}
              />
            ))}
          </Box>
        </Container>
      </Layout>
    </Provider>
  );
}
