import React, { useState } from 'react';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import {
  Container,
  WrapContainer,
  Slide,
  ArrowLeft,
  ArrowRight,
} from './style';

export default function Slider({ data, size }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    if (currentSlide >= 8) return;
    setCurrentSlide(currentSlide + 1);
  }

  function prevSlide() {
    if (currentSlide <= 0) return;
    setCurrentSlide(currentSlide - 1);
  }

  return (
    <Container>
      {currentSlide <= 0 ? (
        <></>
      ) : (
          <ArrowLeft onClick={prevSlide}>
            <FiArrowLeft color="white" size={30} />
          </ArrowLeft>
        )}

      <WrapContainer
        style={{ transform: `translateX(-${currentSlide * 1.6 * size}px)` }}
      >
        {data.map(item => (
          <Slide key={item.id} size={size}>
            <img
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={item.name || item.title || item.original_title}
            />
          </Slide>
        ))}
      </WrapContainer>

      <ArrowRight onClick={nextSlide}>
        <FiArrowRight color="white" size={30} />
      </ArrowRight>
    </Container>
  );
}
