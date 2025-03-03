import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

interface DonationCardProps {
  donation: {
    id: number;
    title: string;
    description: string;
    image: string;
    imageMan: string;
    price: string;
  };
}

export default function DonationCard({ donation }: DonationCardProps) {
  return (
    <Card
      sx={{
        width: '360px',
        height: '164px',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'transparent',
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={donation.image}
        alt={donation.title}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          filter: 'brightness(0.7)',
        }}
      />
    <CardMedia
        component="img"
        image={donation.imageMan}
        alt={donation.title}
        sx={{
            width: 'auto',
            height: '100%',
            objectFit: 'contain',
            position: 'absolute',
            top: '60px',
            left: '50%',
            transform: 'translateX(-50%) scale(1.8)', 
        }}
    />





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
        }}
        >
        <Typography
            variant="h6"
            sx={{
            fontWeight: '800',
            fontSize: '40px',
            lineHeight: '1', 
            }}
        >
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
  );
}
