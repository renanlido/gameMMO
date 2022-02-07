/* eslint-disable @typescript-eslint/naming-convention */
import { Link, Text } from '@chakra-ui/react';
import React from 'react';
import { useTheme } from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';
import { GetAllResponseApi } from '../../global/services/api';
import { Genre } from './styles';

interface CardProps {
  data: GetAllResponseApi;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { colors } = useTheme();

  const { thumbnail, title, genre, short_description } = data;

  return (
    <Link
      as={ReactLink}
      to={`/game-details/?id=${data.id}`}
      cursor="pointer"
      pos="relative"
      h="100%"
      w="100%"
      p="30px"
      flexDir="column"
      bg={`${colors.primary}`}
      borderRadius="2xl"
      transition="all 1s ease"
      _hover={{ boxShadow: 'inset 0px 0px 17px 11px rgba(0,0,0,0.7)' }}
      _before={{
        content: '""',
        bgImage: `url(${thumbnail})`,
        bgSize: 'cover',
        bgRepeat: 'no-repeat',
        bgPos: 'center',
        pos: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0.4,
        borderRadius: '2xl',
        boxShadow: '0px 0px 21px 2px rgba(0,0,0,0.39) ',
        _hover: { boxShadow: 'inset 0px 0px 17px 11px rgba(0,0,0,0.7)' },
        transition: 'all 1s ease'
      }}
    >
      <Text
        w="100%"
        mt={5}
        pos="relative"
        fontSize="3xl"
        fontWeight="bold"
        textAlign="start"
        shadow="sm"
        lineHeight={1}
        textShadow="lg"
        color={`${colors.white}`}
      >
        {title}
      </Text>
      <Genre>{genre}</Genre>
      <Text
        w="100%"
        mt={12}
        pos="relative"
        fontSize="sm"
        fontWeight="regular"
        textAlign="start"
        maxHeight={100}
        shadow="sm"
        color={`${colors.white}`}
        overflow="clip"
      >
        {short_description}
      </Text>
    </Link>
  );
};

export { Card };
