import React, { useEffect, useState } from 'react';

import { IoMdArrowRoundBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { Container, Title, ActorContainer, DetailsActor } from './style';
import axios from '../../services/axios';
import key from '../../config/apiKey';

import { Loader } from '../../style';

export default function InfoAtores({ location: { state } }) {
  const [info, setInfo] = useState([]);
  const history = useHistory();

  useEffect(() => {
    console.log(state);
    async function getDada() {
      const response = await axios.get(
        `person/${state.actor.id}?api_key=${key}&language=pt-BR`
      );
      setInfo(response.data);
      console.log(response.data);
    }
    getDada();
  }, [state]);

  function handleReturn() {
    history.push({
      pathname: '/atores',
      state: state.pag,
    });
  }

  return info.name ? (
    <Container>
      <IoMdArrowRoundBack size={42} onClick={handleReturn} />

      <ActorContainer>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${state.actor.profile_path}`}
            alt=""
          />
        </div>

        <DetailsActor>
          <Title>
            {info.name}
            {info.birthday
              ? `, ${2020 - Number(info.birthday.slice(0, 4))} anos`
              : null}
          </Title>
          <ul>
            {info.biography ? (
              <p>{info.biography}</p>
            ) : (
              <p>
                <i>Não foi possível encontrar</i>
              </p>
            )}
          </ul>
        </DetailsActor>
      </ActorContainer>
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
