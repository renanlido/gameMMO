import styled from 'styled-components';

interface BannerProps {
  img: string;
}

export const Banner = styled.section<BannerProps>`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 400px;

  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    width: 100%;
    max-width: 1200px;
  }

  &::before {
    content: '""';
    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /* background-position-y: -20px; */
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.4;
  }
`;

export const Screenshots = styled.div`
  padding-right: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row;
  margin-top: -70px;

  gap: 10px;

  img {
    position: relative;
    height: auto;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    &:hover {
      -webkit-transform: scale(2);
      transform: scale(2);
      z-index: 1;
    }
  }
`;
