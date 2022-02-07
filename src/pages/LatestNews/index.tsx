import { HStack, Image, Link, Spinner, Text, VStack } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import { Content } from '../../components/Content';
import { Header } from '../../components/Header';

import { getLatestNews } from '../../global/services/api';
import { GetLatestNesProps } from '../../global/services/api/services/types';

import { Input } from './styles';

const LatestNews: React.FC = () => {
  const [data, setData] = useState<GetLatestNesProps[]>([]);
  const [searchResults, setSearchResults] = useState<GetLatestNesProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');

  const fetchData = useCallback(async () => {
    const response = await getLatestNews();

    return response;
  }, []);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetchData();

      setData(response);
      setLoading(false);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (props: React.ChangeEvent<HTMLInputElement>) => {
    const target = props.target.value;

    setSearchTerm(target);
  };

  useEffect(() => {
    const filter = data.filter(f => f.short_description.includes(searchTerm));

    setSearchResults(filter);
  }, [data, searchTerm]);

  return (
    <Container>
      <Header banner pageName="Latest News" />

      <Content>
        <Input
          placeholder="Type your search"
          style={{ marginBottom: '20px' }}
          onChange={handleChange}
          value={searchTerm}
        />

        {loading ? (
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
        ) : (
          searchResults.map(item => (
            <VStack
              width="100%"
              background="whitesmoke"
              mb="10px"
              borderRadius={10}
              key={item.id}
              px={10}
              py={5}
              alignItems="start"
            >
              <HStack justifyContent="space-between" gap={35}>
                <Image src={item.thumbnail} />
                <VStack alignItems="start">
                  <Text as="h1" fontWeight="bold">
                    {item.title}
                  </Text>

                  <Text>{item.short_description}</Text>

                  <Link
                    background="#60b341"
                    px={10}
                    py={5}
                    color="whitesmoke"
                    borderRadius={10}
                    href={item.article_url}
                  >
                    See on website
                  </Link>
                </VStack>
              </HStack>
            </VStack>
          ))
        )}
      </Content>
    </Container>
  );
};

export { LatestNews };
