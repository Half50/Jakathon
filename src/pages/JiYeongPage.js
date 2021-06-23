import React from 'react';
import styled from 'styled-components';
import { Header, Footer } from '../component';
import Memory from '../assets/Memory.svg';
import Flat from '../assets/Flat.svg';
import Talko from '../assets/Talko.svg';
import Library from '../assets/Library.svg';
import JIyoungGit from '../assets/JIyoungGit.svg';
import JiyoungProfile from '../assets/JiyoungProfile.svg';
import Container from '../component/jiyoung/Container';
const projectData = [
	{
		id: '0',
		image: Library,
		title: 'SOPT에 진.심.',
		desc: '8번의 세미나를 통해 전반적인 \n HTML, CSS, Javascript에 대해 학습하고 \n React 라이브러리를 활용한 \n 다양한 과제를 수행했습니다. \n\n 앞으로 있을 \\APPJAM\\을 잘 수행하기 위해 \n 웹파트 내부 \n \\자바스크립트 스터디\\를 진행하며 \n 언어에 대한 이해도를 높였습니다. \n\n서버, 디자인파트 \\합동세미나\\에 참여하여 \n 다른 개발자, 디자이너와 \n소통하는 방법도 익혔습니다.',
	},
	{
		id: '1',
		image: Memory,
		title: "기억 무새를 기억하십니까?",
		desc: "\\2021 솝커톤\\에서 완성한 \n두 마리의 기억무새,\n 유머무새와 진지무새가 안내하는 \n 센스있는 소통을 위한 \n 멘트 추천 서비스 입니다 \n\n 기억무새 프로젝트의 프론트엔드 개발 \n\n#React.js #Javascript",
	},
	{
		id: '2',
		image: Flat,
		title: '나를 알아가는 질문들 FLAT',
		desc: '매일 질문봇 FLAT에게서 저녁 8시, \n질문이 전송됩니다.\n 전송되는 여러 가지 질문에 답변하고 \n 댓글을 달며 \n회원들과 생각을 공유할 수 있습니다\n\nFLAT 프로젝트의 프론트엔드 개발 \n주요 기능 페어 프로그래밍, \n서버 연결 및 UI 작업 \n\n#React.js #Javascript',
	},
	{
		id: '3',
		image: Talko,
		title: '한국어 전화 서비스 Talko',
		desc: '\'국내 거주 외국인들을 위한 \n한국어 전화 서비스\' \n라는 아이디어에서 출발한\n 강사 학생 매칭 웹페이지 제작 프로젝트 입니다.\n\nTalko 프로젝트의 강사 영역 백엔드 개발,\n bootstrap활용 프론트 개발 \n\n #JSP & Servlet #Java #html #css ',
	},
];

const JiYeongPage = () => {
  return (
    <JiYeongWrapper>
      <Header />
      <div className="content">
        <div className="content__profile">
          <div className="content__profile--img">
            <img src={JiyoungProfile} alt=""/>
          </div>
          <div className="content__profile--text">
            <p>소통하는 개발자 현지영</p>
            <p>안녕하세요 <br />SOPT 28기 YB 웹파트 현지영 입니다 <br /> 그동안 크고 작은 프로젝트를 경험하며 <br/> 팀원들과 소통하는 방법을 배웠어요. <br/>구경해보실래요~? </p>  
            <img className="gitIcon"src={JIyoungGit} alt=""/>
          </div>
        </div>
        <div>
        {projectData.map((project) => (
							<Container project={project} key={project.id}/>
						))}
        </div>
      </div>
      <Footer />
    </JiYeongWrapper>
  );
};

export default JiYeongPage;

const JiYeongWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__profile {
      width: 960px;
      height: 200px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 70px auto;
    }
    &__profile--img {
      width: 400px;
      height: 200px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    &__profile--text {
      width: 400px;
      height: 200px;
      font-size: 20px;
      line-height: 1.5em;
      & p:nth-of-type(1) {
		    font-weight: bold;
        font-size: 30px;
        padding:10px;
        line-height: 1.5em;
	    }
    }
    .gitIcon {
      margin-top: 15px;
    }
  }
`;
