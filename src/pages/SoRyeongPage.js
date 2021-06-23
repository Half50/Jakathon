import React from 'react';
import styled from 'styled-components';
import { Header, Footer, Container, Profile } from '../component';
import {
  Image01,
  Image02,
  Image03,
  Image04,
  Image05,
  Image06,
  Image07,
} from '../assets';

const SoRyeongPage = () => {
  const containerArr = [
    {
      image: Image01,
      title: '솝트 27기 기획, 28기 웹\nO-YB \\김소령입니다\\',
      description:
        '"소중한 사람들을 위한 연락관리 서비스"\n\\Cherish\\의 TI입니다.\n지난 기획 경선 아이디어 \\또와또\\와 함께\n여러 서비스를 기획하고 있습니다.\n더 좋은 서비스를 직접 만드는 것을 목표로\n개발을 공부하고 있습니다.\nSOPT 내외부 스터디와 프로젝트를 병행하고\n직접 MVP를 만들면서\n기획과 개발을 함께 공부하고 있습니다.\n\n\\협업\\, \\프로젝트\\ 등에\n\\얼마나 진심인지\\를 보여줄 수 있는 경험들\n몇 가지를 적어보았습니다.\n\n\\#우파루파 #워홀 #러쉬 #올리브영\\',
    },
    {
      image: Image02,
      title: '나의 첫 프로젝트\n서울시 인기 \\카페 색감 지도\\',
      description:
        '\\"아무리 화려한 색도\n\\컴퓨터에게는 숫자에 불과하다"\n지루해보이는 컴퓨터로\n예쁘고 재밌는 것을 만들어보고 싶었습니다.\n\\PM\\과 \\기술리딩\\을 맡았고\n서울시내 지역별 상위 30개 카페의\n매장 내부의 \\색감을 추출\\했습니다.\n\n매우 허술하지만,\n\\클러스터링\\, \\지도 API\\, \\웹프론트\\ 등\n필요한 개념을 직접 찾아 공부하면서\n빠르게 성장할 수 있었습니다.\n\\데이터야놀자 2018\\에서 발표하고\n스핀오프 프로젝트를 진행하기도 했습니다.',
    },
    {
      image: Image03,
      title: '\\데이터야놀자\\ 컨퍼런스\n홈페이지 관리자',
      description:
        '\\좋은 사람들\\과\n\\좋은 경험\\을 \\공유\\하는 것을 좋아합니다.\n\n데이터야놀자2018에서 발표한 것을 계기로\n지난해부터는 \\홈페이지 관리\\를 맡았습니다.\n비영리 단체이기 때문에 봉사자로서\n간단한 개발이 전부였지만,\n함께 공부한다는 것에 의미를 두고 있습니다.\n데이터야놀자를 통해\n현업자들과 독서 모임과 스터디를 진행하고\n프로젝트 동료도 만날 수 있었습니다.\n\n올해도 열심히 준비할테니\n\\10월 셋째주 토요일 데놀\\기대해주세요!',
    },
    {
      image: Image04,
      title: '솝커톤 인기상 수상\n\\길몽거래소\\',
      description:
        '\\"기억"\\이라는 주제로 진행한 해커톤에서\n가상코인으로 \\길몽을 사고파는 서비스\\\n\\길몽거래소\\의 개발자로 참여했습니다.\n그 중\n길몽의 \\정보\\와 함께 \\그림판\\에 그림을 그리고\n등록하는 페이지를 만들었습니다.\n\n\\앱잼을 마무리한 후\\\n릴리즈를 이어갈 예정입니다.',
    },
    {
      image: Image05,
      title: '현재 진행 중인\n의류 공유 서비스 \\dibker\\',
      description:
        '\\의류 공유\\ 플랫폼을\n\\이미지 중심\\의 \\감각적인 서비스\\로\n만들어보고 있습니다.\n현재 \\PM\\과 \\개발\\을 모두 참여하는\n사이드 프로젝트입니다.\n현재는 뷰를 만들면서 시장 조사와 MVP를\n병행하면서 사용성 검증 중에 있습니다.\n\n시간이 날 때만 조금씩 하고 있는\n아주 장기간의 프로젝트입니다.\n때문에 \\앱잼 중에는 잠시 중단\\합니다.',
    },
    {
      image: Image06,
      title: '이번 앱잼에서의 목표\n\\앱잼 올인\\',
      description:
        '이번 앱잼에서\n개발을 제대로 잘 해보고 싶어서\n본 스터디에서도 \\소개 페이지\\를 만들자고\n먼저 제안했습니다.\n\\로고\\와 \\아이콘\\은 물론\n\\디자인\\ 모두 제가 했습니다. 히히\n오전 알바 외에는 일정과 계획 없습니다.\n\n\\학습능력이 좋은 편\\이라서 생각해서\n\\시간을 투자\\하고 열심히 해서\n보탬이 되고 싶다는 마음 뿐입니다.\n\n\\저는 개발이 정말로 너무 재밌고 즐거워요\\\n\\ヽ(✿ﾟ▽ﾟ)ノ\\',
    },
    {
      image: Image07,
      title: '진지하게 한 번 써봤는데\n어떠신가요?',
      description:
        '웹파트 외에는 거의 뵌 적이 없다보니\n이게 첫인상이 될 것 같아서\n괜히 진지한 척 한 번 해봤어요..\n뭐든 \\재밌는 것\\ 좋아하고,\n\\관심사 오조억개\\라서\n당신의 취미나 관심사 한 두가지는 맞을걸요\n하하\n\n\\좋은 동료\\를 만나서\n또 한번 즐거운 기억을 만들어보고 싶어요\n\n자 그럼,\n\\비와이이 BYE~\\',
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
