import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';

interface Character {
  name: string;
  img: string;
}

const characters: Character[] = [
  { name: 'Darth Vader', img: '/images/Darth Vadar.jpeg' },
  { name: 'Leia Organa', img: '/images/Leia_Organa.webp' },
  { name: 'Owen Lars', img: '/images/Young_owen.webp' },
  { name: 'Beru Whitesun lars', img: '/images/BeruWhitesunLars.webp'},
  { name: 'Obi-Wan Kenobi', img: '/images/ObiWan2022.webp' },
  { name: 'Biggs Darklighter', img: '/images/BiggsRebelPilot.jpg' },
  { name: 'C-3PO', img: '/images/C-3PO.webp' },
  { name: 'R5-D4', img: '/images/R5-D4.jpeg' },
  
  
  
];

const Home: React.FC = () => {
  return (
    <Box p={5}>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={6}>
        {characters.map((character) => (
          <Box
            as={RouterLink}
            to={`/character/${character.name}`}
            key={character.name}
            _hover={{ transform: 'scale(1.05)', transition: '0.3s ease' }}
          >
            <Image
              src={character.img}
              alt={character.name}
              borderRadius="md"
              objectFit="cover"
              w="100%"
              h="200px"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
