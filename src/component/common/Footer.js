import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FooterToMain, FooterToNotion } from '../../assets';

const Footer = () => {
  const history = useHistory();
  return (
    <FooterWrapper>
      <img src={FooterToMain} alt="" onClick={() => history.push('/')} />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.notion.so/JS-d336447fc8ce4f39a6915ced2f83c6d7"
      >
        <img src={FooterToNotion} alt="" />
      </a>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 120rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 5rem;
  margin-top: 10rem;

  img {
    cursor: pointer;
  }
`;
