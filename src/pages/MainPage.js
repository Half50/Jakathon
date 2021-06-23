import React, {useRef} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import MainHeader from '../assets/MainHeader.svg'
import TestSel from '../assets/TestSel.svg'
import Test from '../assets/Test.svg'

const MainPage = () => {
  const history = useHistory();
  const eButton = useRef();
  const jButton = useRef();
  const sButton = useRef();

  return (
    <MainWrapper>
      <img className="header" onClick={()=>{history.push('/')}} src={MainHeader} alt="" />
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
    height: 130px;
    margin-bottom: 50px;
  }
  .header:hover {
    cursor: pointer;
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
