import React, { useEffect, useState } from 'react';

import axios from '../../services/axios';
import key from '../../config/apiKey';
import { Container, Title } from './style';

import SmalSlider from '../../components/SmalSlider';

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
      <Title>Mais populares</Title>
      <SmalSlider data={trending} size={400} />

      <Title>Os filmes do momento</Title>
      <SmalSlider data={popularFilms} size={250} />

      <Title>Os queridinhos da galera</Title>
      <SmalSlider data={topRated} size={250} />

      <Title>Séries favoritas</Title>
      <SmalSlider data={series} size={250} />
    </Container>
  );
}
