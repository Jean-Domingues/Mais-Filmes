import React, { useEffect, useState } from 'react';

import axios from '../../services/axios';
import key from '../../config/apiKey';
import { Container, Title } from './style';
import { Loader } from '../../style';

import Slider from '../../components/Slider';

export default function Home() {
const [resultOfSearch, setResultOfSearch] = useState();
  
  const getAllData = async () => {
    const [trending, popular, topRated, series] = await Promise.all([
      axios.get(
        `trending/all/week?api_key=${key}&language=pt-BR`
      ),
      axios.get(
        `movie/popular?api_key=${key}&language=pt-BR`
      ),
      axios.get(
        `movie/top_rated?api_key=${key}&language=pt-BR`
      ),
      axios.get(
        `tv/popular?api_key=${key}&language=pt-BR`
      )
    ])
    setResultOfSearch({series, popular, trending, topRated })
  };

  useEffect(()=>{
    getAllData()
  }, [])

  return (
    <Container>
      {resultOfSearch ? (
        <>
          <Title>Os famosos do momento</Title>
          <Slider data={resultOfSearch.trending.data.results} size={400} />

          <Title>Filmes populares</Title>
          <Slider data={resultOfSearch.popular.data.results} size={250} film />

          <Title>Os queridinhos da galera</Title>
          <Slider data={resultOfSearch.topRated.data.results} size={250} film />

          <Title>Séries favoritas</Title>
          <Slider data={resultOfSearch.series.data.results} size={250} />
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
