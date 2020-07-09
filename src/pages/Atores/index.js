import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Container, ListActors, Pagination } from './style';
import axios from '../../services/axios';
import key from '../../config/apiKey';
import { Loader } from '../../style';

export default function Atores() {
  const [actors, setActors] = useState([]);
  const [pag, setPage] = useState(1);

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
