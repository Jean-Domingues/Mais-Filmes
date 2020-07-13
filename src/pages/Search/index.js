import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Container, Title, Item, Results } from './style';
import { Loader } from '../../style';

import axios from '../../services/axios';
import key from '../../config/apiKey';

export default function Search({ location }) {
  const [result, setResult] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `search/multi?api_key=${key}&language=pt-BR&query=${location.state}&page=1&include_adult=true`
      );
      setResult(response.data.results);
      console.log(response);
    }
    getData();
  }, [location]);

  function handleRedirect(item) {
    switch (item.media_type) {
      case 'movie':
        history.push({
          pathname: '/info',
          state: { item, film: true },
        });
        break;
      case 'tv':
        history.push({
          pathname: '/info',
          state: { item },
        });
        break;
      case 'person':
        history.push({
          pathname: '/atores/info',
          state: { actor: item },
        });
        break;
      default:
    }
  }

  return result[0] ? (
    <Container>
      <Title>
        Exibindo resultados para: <i>{location.state}</i>
      </Title>

      <Results>
        {result.map(item =>
          item.poster_path || item.profile_path ? (
            <Item key={item.id} onClick={() => handleRedirect(item)}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    item.poster_path || item.profile_path
                  }`}
                  alt={item.name || item.title}
                />
              </div>
              <h3>{item.name || item.title}</h3>
            </Item>
          ) : null
        )}
      </Results>
    </Container>
  ) : (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '200px',
      }}
    >
      <Loader size="60px" border="6px" />
    </div>
  );
}
