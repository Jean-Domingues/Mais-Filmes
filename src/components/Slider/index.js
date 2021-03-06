import React, { useState } from 'react';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import {
  Container,
  WrapContainer,
  Slide,
  ArrowLeft,
  ArrowRight,
  Details,
  Scroll,
} from './style';

export default function Slider({ data, size, film }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const history = useHistory();

  function HandleRedirect(item) {
    history.push({
      pathname: '/info',
      state: { item, film },
    });
  }

  function nextSlide() {
    if (currentSlide >= 10) return;
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
          <FiArrowLeft color="white" size={28} />
        </ArrowLeft>
      )}

      <Scroll>
        <WrapContainer
          style={{
            transform: `translateX(-${
              currentSlide * (window.innerWidth * 0.75)
            }px)`,
          }}
        >
          {data.map(item => (
            <Slide
              onClick={() => HandleRedirect(item)}
              key={item.id}
              size={size}
            >
              <Details size={size}>
                <h4>{item.name || item.title || item.original_title}</h4>
                <p>{item.overview}</p>
              </Details>
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.name || item.title || item.original_title}
              />
            </Slide>
          ))}
        </WrapContainer>
      </Scroll>

      <ArrowRight onClick={nextSlide}>
        <FiArrowRight color="white" size={28} />
      </ArrowRight>
    </Container>
  );
}
