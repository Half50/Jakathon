import React from 'react';
import styled from 'styled-components';
import { ProfileSoryeong } from '../../assets';

const Profile = () => {
  return (
    <ProfileWrap>
      <div className="paragraph">
        <div className="paragraph__image">
          <img
            className="paragraph__image--img"
            src={ProfileSoryeong}
            alt="soryeongk"
          />
        </div>
        <div className="paragraph__description">
          <h1>김소령</h1>
          <h3>"자주 실패하는 개발자"</h3>
          <br />
          <h2>
            사용성있는 서비스를 만들기 위해
            <br />
            개발을 시작한
            <br />
            기획에 진심인 개발자입니다.
          </h2>
        </div>
      </div>
    </ProfileWrap>
  );
};

export default Profile;

const ProfileWrap = styled.div`
  .paragraph {
    margin-top: 10rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 96rem;

    &__image {
      width: 40rem;
      display: flex;
      justify-content: flex-end;

      &--img {
        width: 20rem;
        height: 20rem;
        border-radius: 50%;
      }
    }

    &__description {
      width: 40rem;
      /* margin-left: 16rem; */
      line-height: normal;

      h1 {
        font-size: 3rem;
        font-weight: bold;
      }

      h3 {
        font-size: 1.5rem;
        font-weight: bold;
      }

      h2 {
        font-size: 2rem;
      }
    }
  }
`;
