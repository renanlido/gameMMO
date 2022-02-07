import styled from 'styled-components';

export const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: -65px;

  display: flex;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 20px;
  border-radius: 8px;

  text-align: center;

  font-size: 1rem;
  font-weight: 700;
  color: white;

  background: rgb(71, 71, 110);
  background: linear-gradient(
    90deg,
    rgba(71, 71, 110, 1) 0%,
    rgba(50, 52, 83, 1) 100%
  );
  -webkit-box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0px 0px 3px 1px rgba(0, 0, 0, 0.4);

  transition: box-shadow 1000ms ease;

  cursor: pointer;

  &:hover {
    box-shadow: inset 0px 0px 10px 1px rgba(0, 0, 0, 0.4);
  }
`;

export const H2 = styled.h2`
  text-align: end;
  color: ${({ theme }) => theme.colors.pureWhite};
  margin-bottom: 5px;
`;

export const ContainerCards = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 10px;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #dde1f2;
    }
  }
`;

export const ContentCards = styled.article`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 590px;
  display: grid;
  grid-template-columns: repeat(4, 265px);
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-auto-flow: row;
  margin-top: 10px;
  overflow-x: hidden;

  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 730px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
