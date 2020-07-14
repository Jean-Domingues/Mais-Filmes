import React, { useEffect, useState } from 'react';
import { Container, Title } from './style';

import { Loader } from '../../style';
import axios from '../../services/axios';
import key from '../../config/apiKey';

import Slider from '../../components/Slider';

export default function Filmes() {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [recents, setRecents] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `movie/now_playing?api_key=${key}&language=pt-BR`
      );
      setRecents(response.data.results);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `movie/popular?api_key=${key}&language=pt-BR`
      );

      setPopular(response.data.results);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `trending/movie/week?api_key=${key}&language=pt-BR`
      );
      setTrending(response.data.results);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `movie/top_rated?api_key=${key}&language=pt-BR&region=BR`
      );
      setTopRated(response.data.results);
    }
    getData();
  }, []);

  return popular[0] ? (
    <Container>
      <Title>Populares</Title>
      <Slider data={recents} size={400} film />

      <Title>Trending tops</Title>
      <Slider data={trending} size={280} film />

      <Title>Campeões da crítica</Title>
      <Slider data={topRated} size={400} film />

      <Title>Principais filmes</Title>
      <Slider data={popular} size={280} film />
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
