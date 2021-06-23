import React from 'react';
import styled from 'styled-components';
import { Header, Footer } from '../component';

const SoRyeongPage = () => {
  return (
    <SoRyeongWrapper>
      <Header />
      <Footer />
    </SoRyeongWrapper>
  );
};

export default SoRyeongPage;

const SoRyeongWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
