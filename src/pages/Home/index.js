import React, { useEffect, useState } from 'react';

import axios from '../../services/axios';
import key from '../../config/apiKey';
import { Container, Title } from './style';
import { Loader } from '../../style';

import Slider from '../../components/Slider';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [popularFilms, setPopularFilms] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `trending/all/week?api_key=${key}&language=pt-BR`
      );
      setTrending(response.data.results);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `movie/popular?api_key=${key}&language=pt-BR`
      );
      setPopularFilms(response.data.results);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `movie/top_rated?api_key=${key}&language=pt-BR`
      );
      setTopRated(response.data.results);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `tv/popular?api_key=${key}&language=pt-BR`
      );
      setSeries(response.data.results);
    }
    getData();
  }, []);

  return (
    <Container>
      {series[0] ? (
        <>
          <Title>Os famosos do momento</Title>
          <Slider data={trending} size={400} />

          <Title>Filmes populares</Title>
          <Slider data={popularFilms} size={250} film />

          <Title>Os queridinhos da galera</Title>
          <Slider data={topRated} size={250} film />

          <Title>Séries favoritas</Title>
          <Slider data={series} size={250} />
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
