import React from 'react';
import styled from 'styled-components';
import { Header, Footer, Container, Profile } from '../component';
import { Image01, Image02, Image03, Image04 } from '../assets';

const SoRyeongPage = () => {
  const containerArr = [
    {
      image: Image01,
      title: '솝트 27기 기획, 28기 웹\nO-YB김소령입니다',
      description:
        '"소중한 사람들을 위한 연락관리 서비스"\n\\Cherish\\의 TI입니다.\n지난 기획 경선 아이디어 \\또와또\\와 함께\n여러 서비스를 기획하고 있습니다.\n더 좋은 서비스를 직접 만드는 것을 목표로\n개발을 공부하고 있습니다.\nSOPT 내외부 스터디와 프로젝트를 병행하고\n직접 MVP를 만들면서\n기획과 개발을 함께 공부하고 있습니다.\n',
    },
    {
      image: Image02,
      title: '2번 제목',
      description: '2번 내용',
    },
    {
      image: Image03,
      title: '3번 제목',
      description: '3번 내용',
    },
    {
      image: Image04,
      title: '4번 제목',
      description: '4번 내용',
    },
  ];

  return (
    <SoRyeongWrapper>
      <Header />
      <Profile />
      {containerArr.map((data, index) => {
        return <Container key={index} data={data} index={index} />;
      })}
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
