import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/Logo.svg'
import Notion from '../assets/Notion.svg'
import Jiyeong from '../assets/Jiyeong.svg'
import Eujin from '../assets/Eujin.svg'
import Soryeong from '../assets/Soryeong.svg'

const MainPage = () => {
  const history = useHistory();

  return (
    <MainWrapper>
      <div className="header">
        <img 
          className="header__logo" 
          onClick={()=>{history.push('/')}} 
          src={Logo} 
          alt="" />
        <a  
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.notion.so/JS-d336447fc8ce4f39a6915ced2f83c6d7">
            <img 
              className="header__notion" 
              src={Notion}
              alt="" />
        </a>
      </div>
      <div className="main">
        <img 
          className="main__member" 
          onClick={()=>{history.push('/euijin')}}
          src = {Eujin} 
          alt="" />
        <img 
          className="main__member" 
          onClick={()=>{history.push('/jiyeong')}}
          src = {Jiyeong}  
          alt="" />
        <img 
          className="main__member" 
          onClick={()=>{history.push('/soryeong')}}
          src = {Soryeong} 
          alt="" />
      </div>

    </MainWrapper>
  );
};

export default MainPage;

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .header {
    width: 1110px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 40px;
    &__logo{
      width: 366px;
      height: 100px
    }
    &__notion{
      width: 204px;
      height: 130px;
    }
    &:hover{
      cursor: pointer;
    }
  }
  .main {
    width: 1000px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    row-gap: 60px;
    &__member {
      width: 300px;
      height: 600px;
      opacity: 50%;
    }
    &__member:hover {
      cursor: pointer;
      opacity: 100%;
    }

  }
`;
