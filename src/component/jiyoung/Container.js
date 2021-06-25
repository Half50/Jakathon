import React from 'react';
import styled from 'styled-components';

const container = ({ project }) => {
  const { id, image, title, desc } = project;
  return (
    <ContainerWrap id={id}>
      <div className="container">
        <img className="container__img" src={image} alt="" />
        <div className="container__content">
          <div className="container__content--title">{title}</div>
          <div className="container__content--desc">
            {desc.split('\n').map((line) => (
              <span>
                {line.includes('\\')
                  ? line
                      .split('\\')
                      .map((l, i) =>
                        i % 2 === 1 ? <span id="highlight">{l}</span> : l,
                      )
                  : line}
                <br />
              </span>
            ))}
          </div>
        </div>
      </div>
    </ContainerWrap>
  );
};

export default container;

const ContainerWrap = styled.section`
  .container {
    display: flex;
    flex-direction: ${({ id }) => (id % 2 === 0 ? 'row' : 'row-reverse')};
    justify-content: space-between;
    width: 960px;
    height: 500px;
    margin-bottom: 150px;
    &__img {
      width: 400px;
      height: 500px;
    }
    &__content {
      width: 400px;
      height: 500px;
      text-align: ${({ id }) => (id % 2 === 0 ? 'left' : 'right')};
    }
  }
  .container__content--title {
    font-size: 30px;
    font-weight: bold;
    padding: 10px;
  }
  .container__content--desc {
    font-size: 20px;
    padding: 10px;
    line-height: 1.5em;
    #highlight {
      color: #f7df1e;
    }
  }
`;
