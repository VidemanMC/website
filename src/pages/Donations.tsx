import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Container, Box, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import store from '../store/store';
import DonationCard from '../components/DonationCard';

const donations = [
  { id: 1, title: 'ПРЕЗИДЕНТ', description: '.', image: '/img/donations/back1.png', imageMan: '/img/donations/man0.png', price: '1200₽/мес' },
  { id: 2, title: 'Luxery', description: '.', image: '/img/donations/back2.jpg', imageMan: '/img/donations/man0.png', price: '1200₽/мес' },
  { id: 3, title: 'Pleb', description: '.', image: '/img/donations/back3.png', imageMan: '/img/donations/man0.png', price: '1200₽/мес' }
];

const otherDonations = [
    { id: 1, title: 'ПРЕЗИДЕНТ', description: '.', image: '/img/donations/back1.png', imageMan: '/img/donations/man0.png', price: '1200₽/мес' },
    { id: 2, title: 'ПРЕЗИДЕНТ', description: '.', image: '/img/donations/back1.png', imageMan: '/img/donations/man0.png', price: '1200₽/мес' },
  ];
  

const toggleButtonStyles = {
    backgroundColor: 'transparent',
    color: '#000',
    fontWeight: 'bold',
    flex: 1,
    border:'0',
    // '&:hover': {
    //     backgroundColor: '#d1d1d1',
    // },
    '&.Mui-selected': {
        backgroundColor: '#e3e3e3',
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
  const filteredDonations = mode === 'OneBlock' ? donations : otherDonations;

  const handleModeChange = (event: React.MouseEvent<HTMLElement>, newMode: string | null) => {
    if (newMode !== null) {
      setMode(newMode);
    }
  };

  return (
    <Provider store={store}>
      <Layout title={`${siteConfig.title} - Донаты`}>
        <Container maxWidth={false} sx={{ padding: '20px', maxWidth: '100%' }}>
          <Typography variant="h4" gutterBottom sx={{textAlign:'center', fontWeight:'medium'}}>
            Не будь роблоксером. Будь майнкрафтером.
          </Typography>
          <Typography variant="h4" gutterBottom sx={{textAlign:'center', fontWeight:'medium'}}>
            Греча — полезно!
          </Typography>
          
          {/* Переключатель режимов */}
          <Box display="flex" justifyContent="center" mb={3}>
            <ToggleButtonGroup
              value={mode}
              exclusive
              onChange={handleModeChange}
              aria-label="режим отображения"
              sx={{
                width: '360px',
                height: '56px',
                backgroundColor: '#a5a5a5',
                borderRadius: '14px',
                border: '0px',
              }}
            >
                <ToggleButton value="OneBlock" aria-label="OneBlock" sx={toggleButtonStyles}>
                  OneBlock
                </ToggleButton>

                <ToggleButton value="Modded" aria-label="Modded" sx={toggleButtonStyles}>
                  Modded
                </ToggleButton>

            </ToggleButtonGroup>
          </Box>

          <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center" sx={{padding:2}}>
            {filteredDonations.map((donation) => (
              <DonationCard key={donation.id} donation={donation} />
            ))}
          </Box>
        </Container>
      </Layout>
    </Provider>
  );
}
