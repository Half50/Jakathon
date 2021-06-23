import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const MainPage = () => {
  const history = useHistory();

  return (
    <MainWrapper>
      <button onClick={() => history.push('/euijin')}>euijin</button>
      <button onClick={() => history.push('/jiyeong')}>jiyeong</button>
      <button onClick={() => history.push('/soryeong')}>soryeong</button>
    </MainWrapper>
  );
};

export default MainPage;

const MainWrapper = styled.section``;
