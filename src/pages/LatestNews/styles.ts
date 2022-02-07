import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 20px;
  border-radius: 8px;

  margin-top: -40px;

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
