import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, List, ListItem, Button, Fade, Collapse, Modal, Backdrop, Grow } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import DonationCardOpened from './DonationCardOpened';

interface DonationCardProps {
  donation: {
    id: number;
    title: string;
    description: string;
    image: string;
    imageMan: string;
    price: string;
    bestCommands: { name: string; description: string }[];
    features: string[];
  };
}

export default function DonationCard({ donation }: DonationCardProps) {
  const [open, setOpen] = useState(false);


  return (
    <>
      {/* Карточка в списке */}
      <Card
        onClick={() => setOpen(true)}
        sx={{
          width: '360px',
          borderRadius: '20px',
          position: 'relative',
          backgroundColor: 'transparent',
          overflow: 'hidden',
          minHeight: '164px',
          cursor: 'pointer',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': { transform: 'scale(1.05)' },
        }}
      >
        {/* Фон карточки */}
        <CardMedia
          component="img"
          image={donation.image}
          alt={donation.title}
          sx={{
            width: '100%',
            height: '164px',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            filter: 'brightness(0.7)',
          }}
        />
        {/* Персонаж на карточке */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            overflow: 'hidden',
          }}
        >
          <CardMedia
            component="img"
            image={donation.imageMan}
            alt={donation.title}
            sx={{
              width: 'auto',
              height: '100%',
              objectFit: 'contain',
              overflow: 'hidden',
              position: 'absolute',
              top: '60px',
              left: '50%',
              transform: 'translateX(-50%) scale(1.8)',
            }}
          />
        </Box>

        {/* Название и цена */}
        <CardContent
          sx={{
            position: 'absolute',
            top: '56%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0.6,
            width: '100%',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: '800', fontSize: '40px', lineHeight: '1' }}>
            {donation.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              padding: '0px 15px',
              fontSize: '16px',
              borderRadius: '40px',
              fontWeight: 'normal',
              textAlign: 'center',
              marginTop: '-3px',
            }}
          >
            {donation.price}
          </Typography>
        </CardContent>
      </Card>

      
     {/* Модальное окно */}
     <Modal
        open={open}
        onClose={() => setOpen(false)}
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              maxWidth: '360px',
              maxHeight: '100vh',
              bgcolor: 'transparent',
              boxShadow: 24,
              borderRadius: '20px',
              overflowY: 'auto', 
              overflowX: 'hidden', 
              outline: 'none',
              scrollbarWidth: 'thin', // Firefox 
              scrollbarColor: '#888 transparent', // Firefox
              '&::-webkit-scrollbar': {
                width: '6px', 
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#888', 
                borderRadius: '10px', 
              },
              '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#555', 
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent', 
              },
            }}
          >
            <DonationCardOpened donation={donation} closeModal={() => setOpen(false)} />
          </Box>
        </Fade>
      </Modal>



    </>
  );
}
