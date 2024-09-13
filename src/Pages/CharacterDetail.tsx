import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Box, Heading, Text, Spinner, Center } from '@chakra-ui/react';

interface Character {
  name: string;
  height: string;
  gender: string;
  birth_year: string;
}

const fetchCharacterData = async (characterName: string): Promise<Character | null> => {
  const apiUrl = `https://swapi.dev/api/people/?search=${characterName}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  if (data.results.length > 0) {
    return data.results[0];
  }
  return null;
};

const CharacterDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading, error } = useQuery(['character', name], () => fetchCharacterData(name as string));

  if (isLoading) {
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error || !data) {
    return (
      <Center>
        <Text fontSize="xl">Character not found</Text>
      </Center>
    );
  }

  return (
    <Box p={5}>
      <Heading as="h1" mb={4}>{data.name}</Heading>
      <Text fontSize="lg">Height: {data.height}</Text>
      <Text fontSize="lg">Gender: {data.gender}</Text>
      <Text fontSize="lg">Birth Year: {data.birth_year}</Text>
    </Box>
  );
};

export default CharacterDetail;
