import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useHistory } from 'react-router-dom';
import { Container, ListActors, Pagination, ActorsContainer } from './style';
import axios from '../../services/axios';
import key from '../../config/apiKey';
import { Loader } from '../../style';

export default function Atores({ location: { state } }) {
  const [actors, setActors] = useState([]);
  const [pag, setPage] = useState(state || 1);
  const history = useHistory();

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `/person/popular?api_key=${key}&language=pt-BR&page=${pag}`
      );
      setActors(response.data.results);
      // console.log(response.data);
    }
    getData();
  }, [pag]);

  function handleChangePage(num) {
    setPage(pag + num);
  }

  function handleRedirect(actor) {
    history.push({
      pathname: '/atores/info',
      state: { actor, pag },
    });
  }

  return actors[0] ? (
    <Container>
      <ActorsContainer>
        {actors.map(actor => (
          <ListActors onClick={() => handleRedirect(actor)} key={actor.id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt={actor.name}
              />
            </div>
            <h2>{actor.name}</h2>
          </ListActors>
        ))}
      </ActorsContainer>

      <Pagination>
        {pag > 1 ? (
          <IoIosArrowBack onClick={() => handleChangePage(-1)} size={32} />
        ) : null}
        {pag}
        {pag < 500 ? (
          <IoIosArrowForward onClick={() => handleChangePage(1)} size={32} />
        ) : null}
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
