import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, List, ListItem, Button, Fade, Collapse, Modal, Backdrop, Grow } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

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
  const [visibleCommands, setVisibleCommands] = useState(4);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCommandToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

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
        closeAfterTransition
        // BackdropComponent={Backdrop}
        // BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '360px',
              bgcolor: 'background.paper',
              boxShadow: 24,
              borderRadius: '20px',
              overflow: 'hidden',
              outline: 'none',
            }}
          >
            
            <Card
              onClick={() => setOpen(true)}
              sx={{
                width: '360px',
              borderRadius: '20px 20px 0px 0px',

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
                    onClick={() => setOpen(false)}

                  
                >
                  <CloseIcon sx={{ width: '32px', height: '32px', position: 'absolute', top: '5px', right: '5px', color: '#545454' }} />
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
            


            <CardContent sx={{ 
              padding: '16px 16px 30px 30px', backgroundColor:'#a6a6a6',
              
              }}>
              

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
                  marginLeft: '4px',
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
                    <Typography variant="body2" sx={{ display: 'block', textAlign: 'left', width: '100%',

fontSize: '16px', padding: '4px',

                     }}>
                      {feature}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
