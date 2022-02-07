import { Spinner } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { Card } from '../../components/Card';

import {
  InputWrapper,
  Input,
  H2,
  ContainerCards,
  ContentCards
} from './styles';
import { getAll, GetAllResponseApi } from '../../global/services/api';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Content } from '../../components/Content';

const Home: React.FC = () => {
  const [data, setData] = useState<GetAllResponseApi[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<GetAllResponseApi[]>([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  const fetchData = useCallback(async () => {
    setLoading(true);

    const response = await getAll();
    setLoading(false);

    return response;
  }, []);

  const handleChange = (props: React.ChangeEvent<HTMLInputElement>) => {
    const target = props.target.value;

    setSearchTerm(target);
  };

  useEffect(() => {
    const filter = data.filter(f => f.short_description.includes(searchTerm));

    setSearchResults(filter);
  }, [data, searchTerm]);

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await fetchData();
        setData(response);
      };

      getData();
    } catch (error) {
      console.log(`Ta porra! Deu erro: ${error}`);
    }
  }, []);

  return (
    <Container>
      <Header banner />

      <Content>
        <InputWrapper>
          <H2>Todos os resultados ({data?.length})</H2>
          <Input
            placeholder="Search your game..."
            onChange={handleChange}
            value={searchTerm}
          />
        </InputWrapper>
        <ContainerCards>
          <div>
            <h1>Popular games</h1>
          </div>
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
            <ContentCards>
              <>
                {searchResults.map(card => (
                  <Card key={card.id} data={card} />
                ))}
              </>
            </ContentCards>
          )}
        </ContainerCards>
      </Content>
    </Container>
  );
};

export { Home };
