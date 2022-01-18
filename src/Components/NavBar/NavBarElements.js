import styled from 'styled-components';

export const CustomButton = styled.button`
  margin-top: 10px;
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text};
  font-family: 'Roboto';
  font-size: 1rem;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 1rem 1rem;
  margin-right: 0.25rem;
  cursor: pointer;
  &: hover {
    background-color: ${({ theme }) => theme.hover};
    transition: 0.4s ease-in;
  }
`;
