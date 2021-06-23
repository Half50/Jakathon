import React from 'react';
import styled from 'styled-components';
import {
  HeaderEuijin,
  HeaderSoryeong,
  HeaderJiyoung,
} from '../../assets/index';

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={HeaderEuijin} alt="" />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header``;
