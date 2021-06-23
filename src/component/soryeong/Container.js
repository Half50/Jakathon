import React from 'react';
import styled from 'styled-components';

const Container = ({ data, index }) => {
  //   console.log(data);
  const title = data.title;
  const description = data.description;
  const image = data.image;

  return (
    <ContainerWrap index={index}>
      <img src={image} alt="" />
      <div className="description">
        <div id="title">
          {title.split('\n').map((line) => (
            <span>
              {line.includes('\\')
                ? line
                    .split('\\')
                    .map((l, i) => (i % 2 === 1 ? <span id="bg">{l}</span> : l))
                : line}
              <br />
            </span>
          ))}
        </div>
        <br />
        <div id="des">
          {description.split('\n').map((line) => (
            <span>
              {line.includes('\\')
                ? line
                    .split('\\')
                    .map((l, i) =>
                      i % 2 === 1 ? <span id="bold">{l}</span> : l,
                    )
                : line}
              <br />
            </span>
          ))}
        </div>
      </div>
    </ContainerWrap>
  );
};

export default Container;

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: ${({ index }) => (index % 2 === 0 ? 'row-reverse' : 'row')};
  justify-content: space-between;
  margin-top: 10rem;
  width: 96rem;

  .description {
    display: flex;
    flex-direction: column;
    width: 40rem;
    text-align: ${({ index }) => (index % 2 === 0 ? 'right' : 'left')};
    line-height: normal;
    font-size: 2rem;
    #bg {
      background-color: #f7df1e;
    }
    #bold {
      font-weight: bold;
    }

    #title {
      font-size: 3rem;
      font-weight: bold;
    }
  }

  img {
    width: 40rem;
    height: 50rem;
  }
`;
