import React, { useEffect, useState } from 'react';
import { Container, Title } from './style';

import { Loader } from '../../style';
import axios from '../../services/axios';
import key from '../../config/apiKey';

import Slider from '../../components/Slider';

export default function Filmes() {
  const [resultOfSearch, setResultOfSearch] = useState();

  const getAllData = async () => {
    const [ popular, trending, onTheAir, topRated ] = await Promise.all([
      axios.get(
        `tv/popular?api_key=${key}&language=pt-BR`
      ),
      axios.get(
        `trending/tv/week?api_key=${key}&language=pt-BR`
      ),
      axios.get(
        `tv/on_the_air?api_key=${key}&language=pt-BR`
      ),
      axios.get(
        `tv/top_rated?api_key=${key}&language=pt-BR`
      )
    ])
    setResultOfSearch({ onTheAir, popular, trending, topRated })
  };

  useEffect(() => {
    getAllData()
  }, []);

  return resultOfSearch ? (
    <Container>
      <Title>Séries populares</Title>
      <Slider data={resultOfSearch.popular.data.results} size={400} />

      <Title>Principais</Title>
      <Slider data={resultOfSearch.trending.data.results} size={280} />

      <Title>Bem votadas</Title>
      <Slider data={resultOfSearch.topRated.data.results} size={400} />

      <Title>No ar</Title>
      <Slider data={resultOfSearch.onTheAir.data.results} size={280} />
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
