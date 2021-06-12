import React, { useEffect, useState, useMemo } from 'react';
import { Container, Title } from './style';

import { Loader } from '../../style';
import axios from '../../services/axios';
import key from '../../config/apiKey';

import Slider from '../../components/Slider';

export default function Filmes() {
  const [resultOfSearch, setResultOfSearch] = useState();

  const getAllData = async () => {
    const [ recents, popular, trending, topRated ] = await Promise.all([
      axios.get(
        `movie/now_playing?api_key=${key}&language=pt-BR`
      ),
      axios.get(
        `movie/popular?api_key=${key}&language=pt-BR`
      ),
      axios.get(
        `trending/movie/week?api_key=${key}&language=pt-BR`
      ),
      axios.get(
        `movie/top_rated?api_key=${key}&language=pt-BR&region=BR`
      )
    ])
    setResultOfSearch({recents, popular, trending, topRated })
  };

  useEffect(() => {
    getAllData()
  }, []);

  return resultOfSearch ? (
    <Container>
      {console.log(resultOfSearch)}
      <Title>Populares</Title>
      <Slider data={resultOfSearch.recents.data.results} size={400} film />

      <Title>Trending tops</Title>
      <Slider data={resultOfSearch.trending.data.results} size={280} film />

      <Title>Campeões da crítica</Title>
      <Slider data={resultOfSearch.topRated.data.results} size={400} film />

      <Title>Principais filmes</Title>
      <Slider data={resultOfSearch.popular.data.results} size={280} film />
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
