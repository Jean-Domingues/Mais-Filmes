import React, { useEffect, useState } from 'react';
import {
  Container,
  Title,
  MovieTrailler,
  Genre,
  Informations,
  Details,
} from './style';

import axios from '../../services/axios';
import key from '../../config/apiKey';
import { Loader } from '../../style';

export default function Info({ location }) {
  const [inform, setInform] = useState({});
  const [trailer, setTrailer] = useState();
  const [isMovie, setIsMovie] = useState(false);

  useEffect(() => {
    let category = 'movie';
    let id;

    if (location.state.item.media_type === 'movie' || location.state.film) {
      category = 'movie';
      setIsMovie(true);
      id = location.state.item.id;
    } else {
      category = 'tv';
      setIsMovie(false);
      id = location.state.item.id;
    }

    const getData = async () => {
      const response = await axios.get(
        `/${category}/${id}?api_key=${key}&language=pt-BR`
      );

      try {
        const video = await axios.get(
          `/${category}/${id}/videos?api_key=${key}`
        );
        setTrailer(video.data.results[0].key);
      } catch (e) {
        setTrailer('');
      }
      setInform(response.data);

      console.log(response.data);
    };
    getData();
  }, [location]);

  return (
    <Container>
      {inform.genres ? (
        <>
          <Title>{inform.name || inform.title || inform.original_title}</Title>
          <h3>{inform.tagline}</h3>

          <MovieTrailler
            title="Trailler"
            src={`https://www.youtube.com/embed/${trailer}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {inform.genres.map(item => (
            <Genre key={item.id}>{item.name}</Genre>
          ))}

          <Informations>
            <section>
              <img
                src={`https://image.tmdb.org/t/p/original/${inform.poster_path}`}
                alt=""
              />
            </section>

            <Details>
              <h2>{inform.name || inform.title || inform.original_title}</h2>
              <h4>{inform.tagline}</h4>

              <div>
                <span>
                  {inform.release_date
                    ? inform.release_date.slice(0, 4)
                    : inform.last_air_date
                    ? inform.last_air_date.slice(0, 4)
                    : null}
                </span>
                {isMovie ? null : (
                  <span>
                    {inform.number_of_seasons}{' '}
                    {inform.number_of_seasons > 1 ? 'Temporadas' : 'Temporada'}
                  </span>
                )}

                <span
                  style={{
                    color: `${
                      inform.vote_average >= 6 ? '#00e800' : '#fb0000'
                    }`,
                  }}
                >
                  {inform.vote_average * 10}%
                </span>
              </div>

              <p>
                <strong>Sinopse: </strong>
                {inform.overview || <i>Não foi possível obter</i>}
              </p>
            </Details>
          </Informations>
        </>
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
      )}
    </Container>
  );
}
