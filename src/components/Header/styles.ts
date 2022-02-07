import styled, { css } from 'styled-components';
import bg from '../../assets/images/bg.png';

interface ConteinerProps {
  bgImage?: string;
}

export const Container = styled.header<ConteinerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* flex: 1; */

  ${({ bgImage }) => css`
    background: ${`url(${bgImage || bg})`} no-repeat fixed center;
  `}

  background-size: cover;
  width: 100%;
  background-position-y: -300px;
`;

export const HeaderContent = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  padding-bottom: 30px;

  img {
    margin-top: 30px;
    width: 350px;
    opacity: 0.9;
  }

  span {
    font-size: 1rem;
    font-weight: bold;
    color: #eee;
    margin-left: 10px;
    margin-bottom: 10px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70px;

  font-size: 2rem;

  font-weight: 800;

  color: #fff;

  background: rgb(65, 68, 92);
  background: -moz-linear-gradient(
    90deg,
    rgba(65, 68, 92, 1) 0%,
    rgba(31, 35, 52, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(65, 68, 92, 1) 0%,
    rgba(31, 35, 52, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(65, 68, 92, 1) 0%,
    rgba(31, 35, 52, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#41445c",endColorstr="#1f2334",GradientType=1);
  -webkit-box-shadow: -2px 8px 15px 0px rgba(0, 0, 0, 0.74);
  box-shadow: -2px 8px 15px 0px rgba(0, 0, 0, 0.74);
`;

export const NavWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1600px;
  width: 100%;

  padding: 0 40px;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    gap: 20px;
  }
`;
