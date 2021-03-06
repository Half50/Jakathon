import React from 'react';
import styled from 'styled-components';
import {
  ProfileSoryeong,
  IconGithub,
  IconInstagram,
  IconVelog,
} from '../../assets';

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
            자주 실패하기 위해 자주 시도하고
            <br />
            실패를 해결하면서
            <br />더 잦은 성공을 경험합니다.
          </h2>
          <div className="iconfield">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://velog.io/@soryeongk"
            >
              <img src={IconVelog} alt="" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/soryeongk"
            >
              <img src={IconInstagram} alt="" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/soryeongk"
            >
              <img src={IconGithub} alt="" />
            </a>
          </div>
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

  .iconfield {
    width: 11rem;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;
