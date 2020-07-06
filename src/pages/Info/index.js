import React, { useEffect, useState } from 'react';
import { Container, Title, MovieTrailler, Genre, Informations } from './style';

import axios from '../../services/axios';
import key from '../../config/apiKey';

export default function Info({ location }) {
  const [inform, setInform] = useState({});
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    let category = 'movie';
    let id;

    if (location.state.item.media_type === 'movie' || location.state.film) {
      category = 'movie';
      id = location.state.item.id;
    } else {
      category = 'tv';
      id = location.state.item.id;
    }

    const getData = async () => {
      const response = await axios.get(
        `/${category}/${id}?api_key=${key}&language=pt-BR`
      );
      const video = await axios.get(`/${category}/${id}/videos?api_key=${key}`);
      setInform(response.data);
      setTrailer(video.data.results[0].key);
      console.log(response.data);
    };
    getData();
  }, [location]);

  return (
    <Container>
      <Title>{inform.name || inform.original_title}</Title>
      <h3>{inform.tagline}</h3>

      <MovieTrailler
        title="Trailler"
        src={`https://www.youtube.com/embed/${trailer}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {inform.genres
        ? inform.genres.map(item => <Genre>{item.name}</Genre>)
        : null}

      <Informations>
        <img
          width="300"
          src={`https://image.tmdb.org/t/p/original/${inform.poster_path}`}
          alt=""
        />

        <div>
          <p>
            <strong>Sinopse: </strong>
            {inform.overview}
          </p>
        </div>
      </Informations>
    </Container>
  );
}
