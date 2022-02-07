/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  Spinner,
  Text,
  Textarea,
  VStack
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import { Container } from '../../components/Container';
import { Content } from '../../components/Content';
import { Header } from '../../components/Header';
import { findOne } from '../../global/services/api';
import { FindOne } from '../../global/services/api/services/types';
import { useQuery } from '../../hooks';

import { Banner, Screenshots } from './styles';

interface SubmitedComment {
  name: string;
  email: string;
  comment: string;
}

interface StoragedComments extends SubmitedComment {
  id: string;
  likes: number;
  name: string;
  email: string;
  comment: string;
}

const GameDetails: React.FC = () => {
  const [data, setData] = useState<FindOne>();
  const [comments, setComments] = useState<StoragedComments[]>([]);
  const { register, handleSubmit } = useForm<SubmitedComment>();

  const query = useQuery();

  const id = query.get('id');

  const onSubmit = ({ comment, email, name }: SubmitedComment) => {
    const sendedComment: StoragedComments = {
      id: uuid(),
      comment,
      email,
      name,
      likes: 0
    };

    const array = comments;

    array.push(sendedComment);

    console.log(array);

    setComments(array);
  };

  const handleLikeValue = (value: 'add' | 'remove') => {
    // if (value === 'add') {
    // }

    console.log(value);
  };

  const fetchData = useCallback(async () => {
    try {
      if (id) {
        const response = await findOne(id);

        return response;
      }

      throw new Error(`ID is not defined: value ${id}`);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData();

      if (response) {
        setData(response);
      }
    };
    getData();
  }, []);

  if (data) {
    const {
      title,
      release_date,
      screenshots,
      genre,
      platform,
      description,
      minimum_system_requirements
    } = data;

    const firstScreenShot = screenshots[0].image;

    const formatedDate = () => {
      const day = release_date.split('-')[2];
      const month = release_date.split('-')[1];
      const year = release_date.split('-')[0];

      return `${day}/${month}/${year}`;
    };

    return (
      <Container>
        <Header />
        <Banner img={firstScreenShot}>
          <div>
            <Text
              as="h1"
              color="white"
              fontSize="3rem"
              fontWeight="bold"
              position="relative"
            >
              {`${title}`}
            </Text>
            <Text
              as="h3"
              color="#ccc"
              fontSize="1rem"
              fontWeight="regular"
              position="relative"
            >
              Realeased to: {formatedDate()}
            </Text>
          </div>
        </Banner>

        <Content>
          <Screenshots>
            {screenshots.map(item => (
              <img key={item.id} src={item.image} alt="Screenshot" />
            ))}
          </Screenshots>

          <HStack mt={5}>
            <Box
              as="span"
              display="flex"
              alignItems="center"
              background="#60b341"
              style={{ flexDirection: 'column' }}
              maxWidth={150}
              w="100%"
              px={3}
              py={1}
              borderRadius="10px"
            >
              <Text
                color="whitesmoke"
                fontSize="1.2rem"
                fontWeight="medium"
                lineHeight="1"
              >
                Genres
              </Text>
              <Text fontSize="1rem">{genre}</Text>
            </Box>

            <Box
              as="span"
              display="flex"
              alignItems="center"
              background="#60b341"
              style={{ flexDirection: 'column' }}
              maxWidth={150}
              w="100%"
              px={3}
              py={1}
              borderRadius="10px"
            >
              <Text
                color="whitesmoke"
                fontSize="1.2rem"
                fontWeight="medium"
                lineHeight="1"
              >
                Platform
              </Text>
              <Text fontSize="1rem">{platform}</Text>
            </Box>
          </HStack>
          <VStack alignItems="start" mt={10}>
            <Text
              as="h1"
              color="whitesmoke"
              fontSize="1.5rem"
              fontWeight="medium"
              lineHeight="1"
              mb={5}
            >
              Description
            </Text>
            <Text
              color="whitesmoke"
              fontSize="1rem"
              fontWeight="light"
              lineHeight="1"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </VStack>

          <VStack flex={1} w="100%" alignItems="start" mt={10}>
            <Text
              mb={5}
              as="h1"
              color="whitesmoke"
              fontSize="1.5rem"
              fontWeight="medium"
              lineHeight="1"
            >
              System Requirements
            </Text>

            <VStack
              background="whitesmoke"
              borderRadius="10px"
              w="100%"
              p={10}
              alignItems="start"
            >
              <Text
                color="#26273B"
                fontSize="1rem"
                fontWeight="light"
                lineHeight="1"
              >
                <b>Operating System:</b> {minimum_system_requirements.os}
              </Text>
              <Text
                color="#26273B"
                fontSize="1rem"
                fontWeight="light"
                lineHeight="1"
              >
                <b>Processor:</b> {minimum_system_requirements.processor}
              </Text>
              <Text
                color="#26273B"
                fontSize="1rem"
                fontWeight="light"
                lineHeight="1"
              >
                <b>Memory:</b> {minimum_system_requirements.memory}
              </Text>
              <Text
                color="#26273B"
                fontSize="1rem"
                fontWeight="light"
                lineHeight="1"
              >
                <b>Graphics:</b> {minimum_system_requirements.graphics}
              </Text>
              <Text
                color="#26273B"
                fontSize="1rem"
                fontWeight="light"
                lineHeight="1"
              >
                <b>Storage:</b> {minimum_system_requirements.storage}
              </Text>
            </VStack>
          </VStack>

          <VStack
            as="form"
            flex={1}
            w="100%"
            alignItems="start"
            mt={10}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Text
              mb={5}
              as="h1"
              color="whitesmoke"
              fontSize="1.5rem"
              fontWeight="medium"
              lineHeight="1"
            >
              Comments
            </Text>
            <VStack
              background="whitesmoke"
              borderTopRadius="10px"
              w="100%"
              p={10}
              alignItems="start"
            >
              <HStack flex={1} width="100%">
                <Input
                  placeholder="Name"
                  flex={1}
                  width="100%"
                  borderColor="gray.400"
                  required
                  {...register('name')}
                />
                <Input
                  placeholder="E-mail"
                  flex={1}
                  width="100%"
                  borderColor="gray.400"
                  required
                  {...register('email')}
                />
              </HStack>
              <Textarea
                placeholder="Comment"
                flex={1}
                width="100%"
                minHeight={200}
                borderColor="gray.400"
                required
                {...register('comment')}
              />
              <Button colorScheme="green" type="submit">
                Submit
              </Button>
            </VStack>
          </VStack>

          {comments.map(item => (
            <VStack
              key={item.id}
              background="whitesmoke"
              borderBottomRadius="10px"
              w="100%"
              p={10}
            >
              <HStack
                width="100%"
                justifyContent="space-between"
                marginBottom="10px"
              >
                <VStack flex={1} alignItems="start">
                  <Text fontWeight="bold" lineHeight="1">
                    {item.name}
                  </Text>
                  <Text fontSize="0.8rem">{item.comment}</Text>
                </VStack>
                <HStack gap={15}>
                  <IconButton
                    colorScheme="red"
                    aria-label="Triangle Down"
                    onClick={() => handleLikeValue('add')}
                    icon={<GoTriangleDown />}
                  />
                  <Text color="green" fontWeight="bold">
                    {item.likes}
                  </Text>
                  <IconButton
                    colorScheme="green"
                    aria-label="Triangle Up"
                    onClick={() => handleLikeValue('remove')}
                    icon={<GoTriangleUp />}
                  />
                </HStack>
              </HStack>
            </VStack>
          ))}
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <Content>
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div style={{ width: '50px' }}>
            <Spinner size="xl" color="#60B341" />
          </div>
        </div>
      </Content>
    </Container>
  );
};

export { GameDetails };
