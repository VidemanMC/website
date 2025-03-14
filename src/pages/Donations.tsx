import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Container, Box, Typography, ToggleButton, ToggleButtonGroup, Slide, Fade } from '@mui/material';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import store from '../store/store';
import DonationCard from '../components/DonationCard';
import { motion } from 'framer-motion';

const oneBlockDonations = [
    { 
      id: 1, 
      title: 'ПРЕЗИДЕНТ', 
      description: 'Элитная подписка с особыми привилегиями.', 
      image: '/img/donations/back1.png', 
      imageMan: '/img/donations/man0.png', 
      price: '1200₽/мес',
      bestCommands: [
        { name: '/vip', description: 'Доступ к VIP-зоне' },
        { name: '/fly', description: 'Режим полёта' },
        { name: '/heal', description: 'Полное восстановление здоровья' },
        { name: '/feed', description: 'Пополнение сытости' },
        { name: '/godmode', description: 'Неуязвимость' }
      ],
      features: ['VIP-доступ', 'Персональные бонусы', 'Эксклюзивные турниры', 'Секретный контент']
    },
    { 
      id: 2, 
      title: 'Luxery', 
      description: 'Премиум-донат для ценителей комфорта.', 
      image: '/img/donations/back2.jpg', 
      imageMan: '/img/donations/man0.png', 
      price: '1000₽/мес',
      bestCommands: [
        { name: '/sethome', description: 'Установка личного дома' },
        { name: '/back', description: 'Возвращение на предыдущую точку' },
        { name: '/kit luxury', description: 'Набор предметов Luxury' },
        { name: '/repair', description: 'Ремонт предметов' },
        { name: '/enderchest', description: 'Доступ к эндер-сундуку' }
      ],
      features: ['Золотая карта', 'Дополнительные привилегии', 'Персональные скидки', 'Уникальные скины']
    },
    { 
      id: 3, 
      title: 'Pleb', 
      description: 'Базовый уровень подписки.', 
      image: '/img/donations/back3.png', 
      imageMan: '/img/donations/man0.png', 
      price: '600₽/мес',
      bestCommands: [
        { name: '/home', description: 'Телепортация домой' },
        { name: '/warp', description: 'Телепортация на точки варпов' },
        { name: '/kit pleb', description: 'Набор предметов Pleb' },
        { name: '/msg', description: 'Личные сообщения игрокам' }
      ],
      features: ['Бонусы за активность', 'Доступ к особым миссиям', 'Бесплатные предметы']
    }
  ];
  
const moddedDonations = [
  { 
    id: 1, 
    title: 'ПРЕЗИДЕНТ', 
    description: 'Элитный донат с максимальными возможностями.', 
    image: '/img/donations/back1.png', 
    imageMan: '/img/donations/man0.png', 
    price: '1200₽/мес',
    bestCommands: [
      { name: '/vip', description: 'Доступ к VIP-зоне' },
      { name: '/fly', description: 'Режим полёта' },
      { name: '/heal', description: 'Полное восстановление здоровья' },
      { name: '/feed', description: 'Пополнение сытости' },
      { name: '/godmode', description: 'Неуязвимость' },
      { name: '/vanish', description: 'Невидимость' }
    ],
    features: ['Доступ к VIP-зоне', 'Ежемесячные эксклюзивные подарки', 'Приоритетная поддержка']
  },
  { 
    id: 2, 
    title: 'ПРЕЗИДЕНТ', 
    description: 'Престижный донат для избранных.', 
    image: '/img/donations/back1.png', 
    imageMan: '/img/donations/man0.png', 
    price: '1200₽/мес',
    bestCommands: [
      { name: '/sethome', description: 'Установка личного дома' },
      { name: '/back', description: 'Возвращение на предыдущую точку' },
      { name: '/kit legend', description: 'Набор предметов Legend' },
      { name: '/repair all', description: 'Ремонт всех предметов' },
      { name: '/ec', description: 'Доступ к эндер-сундуку' },
      { name: '/anvil', description: 'Доступ к наковальне' }
    ],
    features: ['Эксклюзивные мероприятия', 'Дополнительные слоты', 'Уникальные награды']
  }
];
  

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
                // isExpanded={expandedCards[donation.id] || false}
                // toggleExpand={() => setExpandedCards((prev) => ({ ...prev, [donation.id]: !prev[donation.id] }))}
              />
            ))}
          </Box>
        </Container>
      </Layout>
    </Provider>
  );
}
