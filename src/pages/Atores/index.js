import React, { useEffect, useState } from 'react';

import { Container, ListActors, Pagination } from './style';
import axios from '../../services/axios';
import key from '../../config/apiKey';
import { Loader } from '../../style';

export default function Atores() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `/person/popular?api_key=${key}&language=pt-BR&page=1`
      );
      setActors(response.data.results);
      // console.log(response.data);
    }
    getData();
  }, []);

  return actors[0] ? (
    <Container>
      {actors.map(actor => (
        <ListActors key={actor.id}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              alt={actor.name}
            />
          </div>
          <h1>{actor.name}</h1>
        </ListActors>
      ))}

      <Pagination>
        <h3>Pag 1 ■ ■</h3>
      </Pagination>
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
