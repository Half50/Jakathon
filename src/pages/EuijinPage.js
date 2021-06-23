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
  EuijinSisyphe,
} from '../assets';
import { Header, Footer } from '../component';

const EuijinPage = () => {
  const metaData = {
    img: [
      EuijinProfile,
      EuijinSisyphe,
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
      '시지프 신화',
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
      '안녕하세요.\n28기 YB 김의진입니다.\n중앙대학교 경제학부에 다니고 현재는 휴학중입니다.\n휴학하고 코딩에 집중하고 있고, 앱잼에만 집중할 계획입니다.',
      '저는 저만의 철학에 따라 주체적으로 움직이고자 노력합니다. 저의 삶의 모토는 창조 + 선한 영향력입니다. 제가 많은 사람들에게 도움을 줄 수 있다고 하여, 그것만으로 충만한 사람은 아닙니다. 저의 사회적인 영향력과 별개로 제가 즐거움을 느낄 수 있는 일을 하고 싶습니다. 그것이 바로 창조입니다. 저는 개발하는, 창조하는 것 자체에서 즐거움을 느끼며, 사람들에게 영향력을 미칠 때 힘을 얻는 사람입니다.',
      '저는 평소 리더를 좋아하여, 경제학 포럼에서 7명을 이끌고 협업하여 우승을 차지한 경험이 있습니다. 저는 협업 시에 사람을 가장 우선시합니다. 그러기 위해서는 말을 함부로 하지 않는 것이 중요하다고 생각했습니다. 그러면서 8명의 의견을 맞추고, 존중하는 법을 깨달았고, 긍정적인 결과를 낼 수 있었습니다.',
      '저는 무엇이든 해내고 마는 성미를 가지고 있습니다. 개발 비전공자로, 개발 역사는 길지 않지만 만들고자 하는 작품이 있으면, 끝까지 공부하고 적용하며 결국 구현해낼 수 있습니다. 실제로 코딩 공부를 시작하고, 1~2달만에 발표시간 계산기를 만들었습니다. 발표시간 계산기는 대본을 입력하면 예상 발표 시간을 예측해주는 웹사이트입니다. 약 3달간 하루 평균 100명이 이용하였고, 총 8500회의 조회수를 기록하고 있습니다. 혼자서 기획, 디자인, 개발, 배포 까지 경험하며 전반적인 서비스 출시를 경험해보았습니다. 특히, 웹사이트를 만들고나면 구글, 네이버, 다음 등 포털사이트에 검색엔진 요청을 해야하는데, 이 부분을 경험해본 것이 좋았습니다.',
      '저는 실무 능력을 키우기 위해 대부분의 서비스에 필요한 기능을 구현해보고자 하였습니다. 소셜 로그인 기능은 많은 웹사이트에서 사용하는 기능이므로, firebase를 활용하여 구현해보았습니다.',
      '또한 각종 API를 사용하는 데 익숙해져야겠다고 생각하여, youtube, github, weather api 등을 자유자재로 활용해보았습니다.',
      '서버 연결을 연습하기 위해, 게시물을 등록하고 수정하고 삭제하는 기능을 연습해보았고, 이 과정에서 태그 추가 기능이 자주 사용되리라 생각하여, 태그 기능도 구현해보았습니다.',
      '검색 기능 또한 자주 이용되므로, 혼자 구현해보았습니다.',
      '솝커톤 때, 유니버스 웹사이트를 개발하였습니다. 초기세팅부터 중요한 뷰를 도맡아서 개발하였습니다. 그리고 9명이 함께한 행사이기 때문에, 최대한 팀원의 의견을 듣고 존중하려고 노력했습니다.',
      '개발을 제외하고, 저의 취미는 독서와 글쓰기 입니다. ',
    ],
  };
  return (
    <EuijinWrapper>
      <Header />
      <section>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <div className="container">
            <img src={metaData.img[index]} alt="" className="container__img" />
            <div className="container__text">
              <span className="title">{metaData.title[index]}</span>
              <span className="description">
                {metaData.description[index].split('\n').map((line) => (
                  <span>
                    {line}
                    <br />
                  </span>
                ))}
              </span>
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
    width: 90rem;
    &__img {
      width: 40rem;
      height: 40rem;
      /* object-fit: cover; */
    }
    &__text {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 40rem;
      .title {
        font-size: 24px;
        margin-bottom: 3rem;
      }
      .description {
        font-size: 16px;
        text-align: center;
        line-height: 2.6rem;
      }
    }
  }
  .container:nth-child(even) {
    flex-direction: row-reverse;
  }
`;
