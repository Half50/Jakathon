import React from 'react';
import styled from 'styled-components';
import {
  EuijinSearch,
  EuijinProfile,
  EuijinPT,
  EuijinLogin,
  EuijinYoutube,
  EuijinTag,
  EuijinYouniverse,
  EuijinBook,
  EuijinEcon,
} from '../assets';
import { Header, Footer } from '../component';

const EuijinPage = () => {
  const metaData = {
    img: [
      EuijinProfile,
      EuijinEcon,
      EuijinPT,
      EuijinLogin,
      EuijinYoutube,
      EuijinTag,
      EuijinSearch,
      EuijinYouniverse,
      EuijinBook,
    ],
    title: [
      '김의진',
      '경제학 포럼',
      '발표시간 계산기',
      '소셜 로그인 기능',
      '유튜브 API',
      '태그 추가 기능',
      '검색 기능',
      '솝커톤 - 유니버스',
      '취미 - 책',
    ],
    description: [
      'SOPT 28th',
      '경제학 포럼',
      '발표시간 계산기',
      '소셜 로그인 기능',
      '유튜브 API',
      '태그 추가 기능',
      '검색 기능',
      '솝커톤 - 유니버스',
      '취미 - 책',
    ],
  };
  return (
    <EuijinWrapper>
      <Header />
      <section>
        {[0,1,2,3,4,5,6,7].map((index) => (
          <div className="container">
            <img src={metaData.img[index]} alt="" className="container__img" />
            <div className="container__text">
              <span className="title">{metaData.title[index]}</span>
              <span className="description">{metaData.description[index]}</span>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </EuijinWrapper>
  );
};

export default EuijinPage;

const EuijinWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .container {
    display: flex;
    justify-content: space-between;
    margin: 5rem 0;
    width: 70rem;
    &__img {
      width: 30rem;
      height: 30rem;
      /* object-fit: cover; */
    }
    &__text {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 25rem;
      .title {
        font-size: 24px;
        margin-bottom: 1rem;
      }
      .description {
        font-size: 14px;
      }
    }
  }
  .container:nth-child(even) {
    flex-direction: row-reverse;
  }
`;
