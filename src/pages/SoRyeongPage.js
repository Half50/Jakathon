import React from 'react';
import styled from 'styled-components';
import { Header, Footer, Container, Profile } from '../component';
import { Image01, Image02, Image03, Image04, Image05 } from '../assets';

const SoRyeongPage = () => {
  const containerArr = [
    {
      image: Image01,
      title: '솝트 27기 기획, 28기 웹\nO-YB \\김소령입니다\\',
      description:
        '"소중한 사람들을 위한 연락관리 서비스"\n\\Cherish\\의 TI입니다.\n지난 기획 경선 아이디어 \\또와또\\와 함께\n여러 서비스를 기획하고 있습니다.\n더 좋은 서비스를 직접 만드는 것을 목표로\n개발을 공부하고 있습니다.\nSOPT 내외부 스터디와 프로젝트를 병행하고\n직접 MVP를 만들면서\n기획과 개발을 함께 공부하고 있습니다.\n\\사용성있는 서비스\\를 만들고 싶은\n기획과 개발에 모두 진심인 \\기발자\\입니다.',
    },
    {
      image: Image02,
      title: '나의 첫 프로젝트\n서울시 인기 \\카페 색감 지도\\',
      description:
        '\\"아무리 화려한 색도\n\\컴퓨터에게는 숫자에 불과하다"\n지루해보이는 컴퓨터로\n예쁘고 재밌는 것을 만들어보고 싶었습니다.\n\\PM\\과 \\기술리딩\\을 맡았고\n서울시내 지역별 상위 30개 카페의\n매장 내부의 \\색감을 추출\\했습니다.\n매우 허술하지만,\n\\클러스터링\\, \\지도 API\\, \\웹프론트\\ 등\n필요한 개념을 직접 찾아 공부하면서\n빠르게 성장할 수 있었습니다.\n\\데이터야놀자 2018\\에서 발표하고\n스핀오프 프로젝트를 진행하기도 했습니다.',
    },
    {
      image: Image03,
      title: '\\데이터야놀자\\ 컨퍼런스\n홈페이지 관리자',
      description:
        '\\좋은 사람들\\과\n\\좋은 경험\\을 \\공유\\하는 것을 즐깁니다.\n데이터야놀자2018에서 발표한 것을 계기로\n지난해부터는 \\홈페이지 관리\\를 맡았습니다.\n비영리 단체이기 때문에 봉사자로서\n간단한 개발이 전부였지만,\n함께 공부한다는 것에 의미를 두고 있습니다.\n데이터야놀자를 통해\n현업자들과 독서 모임과 스터디를 진행하고\n프로젝트 동료도 만날 수 있었습니다.',
    },
    {
      image: Image04,
      title: '솝커톤 인기상 수상\n\\길몽거래소\\',
      description: '4번 내용',
    },
    {
      image: Image05,
      title: '현재 진행 중인\n의류 공유 서비스 \\dibker\\',
      description: '5번 내용',
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
