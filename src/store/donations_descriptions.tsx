export const oneBlockDonations = [
    { 
      id: 1, 
      title: 'Спонсор', 
      description: 'Благородный человек, спасибо тебе!', 
      image: '/img/donations/back1.png', 
      imageMan: '/img/donations/man0.png', 
      price: '100₽/мес; 500₽/навсегда',
      bestCommands: [
        { name: '/wbench', description: 'Быстрый верстак' },
        { name: '/back', description: 'Бесплатное возвращение в предыдущую точку' },
        { name: '/echest', description: 'Быстрый эндер-сундук' },
        { name: '/invunload', description: 'Разгрузка инвентаря в радиусе 50 блоков (для большого хранилища)' },
        { name: '/speed', description: 'Изменение скорости бега' }
      ],
      features: ['8 домов', '50 слотов на аукционе', 'Цена блока резиденции: 1 рубль']
    },
    { 
      id: 2, 
      title: 'Меценат', 
      description: 'Обожаем тебя всей командой', 
      image: '/img/donations/back2.jpg', 
      imageMan: '/img/donations/man0.png', 
      price: '150₽/мес; 1000₽/навсегда',
      bestCommands: [
        { name: '/top', description: 'Подняться наверх' },
        { name: '/chunk', description: 'Размещение прогрузчика чанков' },
        { name: '/itemlore', description: 'Изменить описание предмета' },
        { name: '/itemname', description: 'Изменить название предмета' },
      ],
      features: ['Сохранение инвентаря', '11 домов', '60 слотов на аукционе', 'Доступно 10 работ!', 'Цена блока в резиденции: 40 копеек', 'Новые сообщения о смерти',  '+ возможности FLY', '+ возможности Спонсора' ]
    },
    { 
      id: 3, 
      title: 'Титан', 
      description: 'Герой! Браво!', 
      image: '/img/donations/back3.png', 
      imageMan: '/img/donations/man0.png', 
      price: '1000₽/мес; 5000₽/навсегда',
      bestCommands: [
        { name: '/imagemap download', description: 'Скачать картинку' },
        { name: '/imagemap place', description: 'Установить картинку' },
        { name: '/kill', description: 'Убить игрока' },
        { name: '/ban', description: 'Забанить игрока' },
        { name: '/kick', description: 'Выгнуть игрока' },
      ],
      features: ['ПОЛНЫЙ доступ к World Edit', 'Новые сообщения о смерти', '+ возможности Мецената' ]
    },
    { 
      id: 4, 
      title: 'Сообщение входа/выхода', 
      description: 'Заходи и выходи красиво!', 
      image: '/img/donations/back3.png', 
      imageMan: '/img/donations/man0.png', 
      price: '500₽/навсегда',
      bestCommands: [
        { name: '/bm editmsg join {player} {что-то крутое}', description: 'Пример: /bm editmsg join {player} сел в ламбу и приехал \n Описание: команда позволяет настроить сообщение, которое будет выведено в чат при входе в игру вместо обычного "{player} присоединился к игре".' },
        { name: '/bm editmsg quit {player} {что-то крутое}', description: 'Пример: /bm editmsg join {player} сел в ламбу и уехал \n Описание: команда позволяет настроить сообщение, которое будет выведено в чат при выходе из игры вместо обычного "{player} вышел из игры".' },
      ],
      features: ['Заходи и выходи красиво!']
    },
    { 
      id: 5, 
      title: 'FLY', 
      description: 'Полёт на летающем острове.', 
      image: '/img/donations/back3.png', 
      imageMan: '/img/donations/man0.png', 
      price: '100₽/мес; 300₽/навсегда',
      bestCommands: [
        { name: '/is fly ', description: 'Полёт на острове' },
      ],
      features: ['Команда позволяет летать в пределах острова']
    },
    
  ];
  
export const moddedDonations = [
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
  