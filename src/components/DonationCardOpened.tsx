import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, List, ListItem, Button, Fade, Collapse, Grow } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

interface DonationCardOpenedProps {
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
  closeModal: () => void;
}

export default function DonationCardOpened({ donation, closeModal }: DonationCardOpenedProps) {
  // const [expanded, setExpanded] = useState(false);
  const [visibleCommands, setVisibleCommands] = useState(4);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // const handleToggle = () => {
  //   setExpanded((prev) => !prev);
  //   setVisibleCommands(4);
  // };


  const handleCommandToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Card
      sx={{
        width: '360px',
        borderRadius: '20px',
        position: 'relative',
        backgroundColor: 'transparent',
        height: 'fit-content' ,
        overflow: 'hidden',
      }}
    >
      {/*  Блок с картинками, названием и ценой */}
      <Box

        sx={{
          width: '100%',
          height: '164px',
          position: 'absolute',
          top: 0,
          left: 0,
          cursor: 'pointer',
          overflow: 'hidden',
          userSelect:'none',
          
        }}
      >
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
              overflow:'hidden',
              position: 'absolute',
              top: '60px',
              left: '50%',
              transform: 'translateX(-50%) scale(1.8)',
            }}
          />
        </Box>

      {/* Кнопка закрытия*/}
      
        <Box
          sx={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '42px',
            height: '42px',
            backgroundColor: 'white',
            borderRadius: '50%',
            transition: 'background-color 0.3s',
            cursor: 'pointer',
            '&:hover': { backgroundColor: '#d6d6d6' },
          }}
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
        >
          <CloseIcon sx={{ width: '32px', height: '32px', position: 'absolute', top: '5px', right: '5px', color: '#545454' }} />
        </Box>


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
      </Box>

        
      <Box
        sx={{
          position: 'relative',
          marginTop: '164px',
          width: '100%',
          backgroundColor: '#a6a6a6',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding:  '16px' ,
          transition: 'padding 0.5s ease-in-out',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' ,
          borderRadius: '0px 0px 20px 20px'
        }}
      >
        {/* Лучшие команды */}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 'bold', fontSize: '24px', color: 'black', marginTop: '8px', textAlign: 'left', width: '300px' }}
        >
          Лучшие команды:
        </Typography>
        <List sx={{ padding: 0, textAlign: 'center' }}>
          {donation.bestCommands.map((command, index) => (
            <Collapse key={index} in={index < visibleCommands} timeout={400}>
              <Box key={index} sx={{ width: '300px' }}>
                {/* Название команды*/}
                <ListItem
                  onClick={() => handleCommandToggle(index)}
                  sx={{
                    padding: '8px 20px',
                    color: 'black',
                    backgroundColor: '#e3e3e3',
                    borderRadius: '8px',
                    width: '100%',
                    alignItems: 'center',
                    marginTop: '5px',
                    transition: 'background-color 0.3s',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    '&:hover': { backgroundColor: '#d6d6d6' },
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: '400', fontSize: '18px',}}>{command.name}</Typography>
                  <ExpandMoreIcon
                    sx={{
                      transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease-in-out',
                      color: '#848484',
                      height:'27px', width:'48px',position:'absolute', right:'0px'
                    }}
                  />
                </ListItem>

                {/* Описание команды */}
                <Collapse in={expandedIndex === index} timeout={300}>
                  <Box
                    sx={{
                      overflow: 'hidden',
                      backgroundColor: '#A5A5A5',
                      borderRadius: '8px',
                      marginTop:  '4px' ,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '16px',
                        fontWeight: '400',
                        textAlign: 'left',
                        padding: '8px 10px',
                      }}
                    >
                      {command.description}
                    </Typography>
                  </Box>
                </Collapse>
              </Box>
            </Collapse>
          ))}
        </List>

        {/* Кнопка 'Показать больше' */}
          <Collapse in={visibleCommands < donation.bestCommands.length} timeout={300}>
            <Button
              size="small"
              sx={{
                padding: '8px 20px',
                color: 'black',
                backgroundColor: '#e3e3e3',
                borderRadius: '8px',
                width: '300px',
                alignItems: 'center',
                marginTop: '5px',
                transition: 'background-color 0.3s',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                '&:hover': { backgroundColor: '#d6d6d6' },
                textTransform: 'none', fontWeight: '400', fontSize: '18px',
              }}
              onClick={(e) => {
                e.stopPropagation();
                setVisibleCommands((prev) => prev + 3);
              }}
            >
              Показать больше команд
              <ExpandMoreIcon
                    sx={{
                      transform: visibleCommands >= donation.bestCommands.length ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease-in-out',
                      color: '#848484',
                      height:'27px', width:'48px',position:'absolute', right:'0px'
                    }}
                  />
            </Button>
          </Collapse>
        {/* Особенности */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            fontSize: '24px',
            color: 'black',
            marginTop: '20px',
            textAlign: 'left',
            width: '300px',
          }}
        >
          А также:
        </Typography>

        <List sx={{ padding: 0, textAlign: 'center', color: 'black', margin: '5px' }}>
          {donation.features.map((feature, index) => (
            <ListItem
              key={index}
              sx={{
                padding: '8px 20px',
                color: 'black',
                fontSize: '14px',
                backgroundColor: '#e3e3e3',
                borderRadius: '8px',
                width: '300px',
                alignItems: 'flex-start',
                marginBottom: '5px',
                marginTop: '5px',
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#d6d6d6',
                },
              }}
            >
              <Typography variant="body2" sx={{ display: 'block', textAlign: 'left', width: '100%', fontSize:'16px' }}>
                {feature}
              </Typography>
            </ListItem>
          ))}
        </List>

      </Box>
    </Card>
  );
}
