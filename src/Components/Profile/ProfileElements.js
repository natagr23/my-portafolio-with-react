import styled from 'styled-components';

export const CustomContainer = styled.div`
  --w: 450px;
  --c: (100vw);
  max-width: 500px;
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text};
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 1px 2px 5px #0005;
  position: relative;
  transition: 0.5s all ease-in;
`;

export const CustomImg = styled.img`
  position: relative;
  top: clamp(0px, 1000 * var(--c), 10px);
  left: clamp(0px, 1000 * var(--c) 20px);
  width: clamp(50px, var(--c) * 1000, 150px);
  height: clamp(50px, var(--c) * 1000, 100%);
  border-radius: clamp(0px, var(--c) * 1000, 50px);
  object-fit: cover;
  object-position: top;
`;

export const CustomP = styled.p`
  position: relative;
  font-family: 'Open sans', Helvetica, Arial, sans-serif;
  font-weight: 200;
  margin: 30px 10px 5px;
  color: ${({ theme }) => theme.text};
  font-size: 15px;
`;
