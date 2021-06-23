import React from 'react';
import { useRouteMatch, useHistory } from 'react-router';
import styled from 'styled-components';
import {
  HeaderSoryeong,
  HeaderJiyeong,
  HeaderEuijin,
  HeaderNotfound,
} from '../../assets';

const Header = () => {
  const history = useHistory();
  const names = ['/euijin', '/jiyeong', '/soryeong'];

  const path = useRouteMatch().path;
  // console.log(match);
  return (
    <HeaderWrapper>
      <img
        src={
          path === names[0]
            ? HeaderEuijin
            : path === names[1]
            ? HeaderJiyeong
            : path === names[2]
            ? HeaderSoryeong
            : HeaderNotfound
        }
        alt=""
        onClick={() => history.push('/')}
      />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  img {
    width: 120rem;
    height: 33.2rem;
    margin-top: 5rem;
    cursor: pointer;
  }
`;
