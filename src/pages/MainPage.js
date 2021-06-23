import React, {useRef} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/Logo.svg'
import Notion from '../assets/Notion.svg'
import TestSel from '../assets/TestSel.svg'
import Test from '../assets/Test.svg'

const MainPage = () => {
  const history = useHistory();
  const eButton = useRef();
  const jButton = useRef();
  const sButton = useRef();

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
          src = {Test} 
          onMouseEnter={() => {
            eButton.current.src = TestSel;
          }}
          onMouseLeave={() => {
            eButton.current.src = Test;
          }}
          ref={eButton} 
          alt="" />
        <img 
          className="main__member" 
          onClick={()=>{history.push('/jiyeong')}}
          src = {Test} 
          onMouseEnter={() => {
            jButton.current.src = TestSel;
          }}
          onMouseLeave={() => {
            jButton.current.src = Test;
          }}
          ref={jButton} 
          alt="" />
        <img 
          className="main__member" 
          onClick={()=>{history.push('/soryeong')}}
          src = {Test} 
          onMouseEnter={() => {
            sButton.current.src = TestSel;
          }}
          onMouseLeave={() => {
            sButton.current.src = Test;
          }}
          ref={sButton} 
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
    }
    &__member:hover {
      cursor: pointer;
    }
  }
`;
