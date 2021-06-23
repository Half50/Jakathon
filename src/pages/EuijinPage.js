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
      '취미',
    ],
    description: [
      '안녕하세요.\n28기 YB 웹파트 \\김의진\\입니다.\n중앙대학교 경제학부에 다니고 현재는 휴학중입니다.\n휴학하고 코딩 공부를 열심히 하고 있고, 방학에는 앱잼에 \\집중\\할 계획입니다.',
      '저는 저만의 \\철학\\에 따라 주체적으로 움직이고자 노력합니다. 저의 삶의 모토는 \\창조 + 선한 영향력\\입니다. 제가 많은 사람들에게 도움을 줄 수 있다고 하여, 그것만으로 충만한 사람은 아닙니다. 저의 사회적인 영향력과 별개로 제가 \\즐거움을 느낄 수 있는 일\\을 하고 싶습니다. 그것이 바로 창조입니다. 저는 개발하는, 창조하는 것 자체에서 즐거움을 느끼며, 사람들에게 영향력을 미칠 때 힘을 얻는 사람입니다.',
      '저는 평소 리더를 좋아하여, 경제학 포럼에서 7명을 이끌고 협업하여 \\우승\\을 차지한 경험이 있습니다. \\저는 협업 시에 사람을 가장 우선시합니다.\\ 그러기 위해서는 말을 함부로 하지 않는 것이 중요하다고 생각했습니다. 그러면서 8명의 의견을 맞추고, \\존중하는 법\\을 깨달았고, 긍정적인 결과를 낼 수 있었습니다.',
      '저는 \\무엇이든 해내고 마는 성미\\를 가지고 있습니다. 개발 비전공자로, 개발 역사는 길지 않지만 만들고자 하는 작품이 있으면, \\끝까지 공부하고 적용하며 결국 구현해낼 수 있습니다.\\ 실제로 코딩 공부를 시작하고, 1~2달만에 \\발표시간 계산기\\를 만들었습니다. 발표시간 계산기는 대본을 입력하면 예상 발표 시간을 예측해주는 웹사이트입니다. 약 3달간 하루 평균 100명이 이용하였고, 총 \\8500회\\의 조회수를 기록하고 있습니다. \\혼자서 기획, 디자인, 개발, 배포\\ 까지 경험하며 전반적인 서비스 출시를 경험해보았습니다. 특히, 웹사이트를 만들고나면 구글, 네이버, 다음 등 포털사이트에 \\검색엔진\\ 요청을 해야하는데, 이 부분을 경험해본 것이 좋았습니다.',
      '저는 \\실무 능력\\을 키우기 위해 대부분의 서비스에 필요한 기능을 구현해보고자 하였습니다. 소셜 로그인 기능은 많은 웹사이트에서 사용하는 기능이므로, firebase를 활용하여 구현해보았습니다.',
      '또한 각종 API를 사용하는 데 익숙해져야겠다고 생각하여, \\youtube, github, weather api\\ 등을 자유자재로 활용해보았습니다.',
      '\\서버 연결\\을 연습하기 위해, \\게시물을 등록하고 수정하고 삭제하는 기능\\을 연습해보았고, 이 과정에서 태그 추가 기능이 자주 사용되리라 생각하여, 태그 기능도 구현해보았습니다.',
      '검색 기능 또한 자주 이용되므로, 혼자 구현해보았습니다.',
      '솝커톤 때, \\유니버스 웹사이트\\를 개발하였습니다. 초기세팅부터 중요한 뷰를 도맡아서 개발하였습니다. 그리고 9명이 함께한 행사이기 때문에, \\최대한 팀원의 의견을 듣고 존중하려고 노력했습니다.\\',
      '개발을 제외하고, 저의 취미는 \\독서와 글쓰기\\ 입니다. 책을 읽는다는 것은 언제나 \\배울 준비\\가 되어있다는 것을 뜻합니다. 또한 글을 쓴다는 것을 언제나 저 스스로를 \\돌아볼 준비\\가 되어 있다는 것을 뜻합니다. 저는 언제나 더 나아지려고 노력하는 사람이 되고싶습니다.',
    ],
    site: [
      'Instagram',
      'Blog',
      '',
      'https://presentationtime.netlify.app/',
      'Github',
      'Github',
      'Github',
      'Github',
      'Github',
      '',
    ],
    link: [
      'https://www.instagram.com/euijin.kk',
      'https://blog.naver.com/gytks4',
      '',
      'https://presentationtime.netlify.app/',
      'https://github.com/euijinkk/business-card-maker',
      'https://github.com/euijinkk/youtube',
      'https://github.com/euijinkk/SOPT28th_Web/tree/main/4th_diary-app',
      'https://github.com/SOPT-28/brunch-front',
      'https://github.com/TeamYouniverse/Youniverse-Web',
      '',
    ],
  };
  return (
    <EuijinWrapper>
      <Header />
      <section>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <div className="container">
            <a
              href={metaData.link[index]}
              class="project"
              target="blank"
              data-stack="mobile"
            >
              <img
                src={metaData.img[index]}
                alt=""
                className="container__img"
              />
              {metaData.site[index] && (
                <div class="container__project">
                  <h3>{metaData.site[index]}</h3>
                </div>
              )}
            </a>

            <div className="container__text">
              <span className="title">{metaData.title[index]}</span>
              <span className="description">
                {metaData.description[index].split('\n').map((line) => (
                  <span>
                    {line.includes('\\')
                      ? line
                          .split('\\')
                          .map((l, i) =>
                            i % 2 === 1 ? <span className="bold">{l}</span> : l,
                          )
                      : line}
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

  .project {
    position: relative;
    width: 40rem;
    height: 40rem;
    background-color: darkgray;
    margin: 2px;

    /* 하나밖에 없지만, 중간정렬하기 위한 방법 */
    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 1;
    position: relative;
    pointer-events: auto;
  }

  .container__project {
    position: absolute;
    /* 부모값중 static이 아닌 것을 기준으로 위치한다. */
    top: 0;
    left: 0;
    background-color: black;
    width: 100%;
    height: 100%;

    /* 수직 중간정렬 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    /* 마우스가 올라가지 않았을때는 0 */
    transform: translateY(10px);
    /* 마우스가 올라가지 않았을때는 밑에 내려가있도록
  -> hover 될때 올라오는 느낌을 준다 */

    transition: all 300ms ease-in;
  }

  .container__project h3 {
    color: orange;
    font-size: 2.4rem;
  }
  .container__project h3:after {
    content: '';
    display: block;
    position: relative;
    left: 50%;
    /* margin-left: -12px; */
    /* 왼쪽으로 당겨오기. 중간정렬 */
    transform: translateX(-50%);
    margin: 8px 0;
    width: 50px;
    height: 2px;
    background-color: darkgray;
  }

  a {
    text-decoration: none;
    color: white;
    cursor: auto;
  }

  .project:hover .container__project {
    opacity: 0.8;
    transform: translateY(0px);
    cursor: pointer;
  }
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
        color: blue;
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

  .bold {
    color: red;
  }
`;
