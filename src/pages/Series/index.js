import React, { useEffect, useState } from 'react';
import { Container, Title } from './style';

import { Loader } from '../../style';
import axios from '../../services/axios';
import key from '../../config/apiKey';

import Slider from '../../components/Slider';

export default function Filmes() {
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [top, setTop] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `tv/popular?api_key=${key}&language=pt-BR`
      );
      // console.log(response.data);
      setPopular(response.data.results);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `trending/tv/week?api_key=${key}&language=pt-BR`
      );
      setTrending(response.data.results);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `tv/on_the_air?api_key=${key}&language=pt-BR`
      );
      setOnTheAir(response.data.results);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `tv/top_rated?api_key=${key}&language=pt-BR`
      );
      setTop(response.data.results);
    }
    getData();
  }, []);

  return popular ? (
    <Container>
      <Title>Séries populares</Title>
      <Slider data={popular} size={400} />

      <Title>Principais</Title>
      <Slider data={trending} size={280} />

      <Title>Bem votadas</Title>
      <Slider data={top} size={400} />

      <Title>No ar</Title>
      <Slider data={onTheAir} size={280} />
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
