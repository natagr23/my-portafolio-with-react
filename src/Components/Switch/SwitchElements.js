import styled from 'styled-components';

export const SwitchContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bgc};
  transition: 0.5s all ease-in;
  border-radius: 10px;
  max-width: 500px;
`;

export const SwitchWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
`;

export const SwitchBGC = styled.div`
  position: relative;
  width: 80px;
  height: 38px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.toggle};
  transition: 1s all ease-in;
`;

export const ButtonSwitch = styled.button`
  position: absolute;
  cursor: pointer;
  bottom: 5px;
  left: ${({ position }) => (position ? '45px' : '5px')};
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background-color: #fff;
  transition: 0.4s all ease-in;
  outline: none;
`;
