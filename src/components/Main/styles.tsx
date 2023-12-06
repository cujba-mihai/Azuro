import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.base200};
    align-items: center;
    justify-content: center;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-align: center;
    font-size: 52px;
    font-weight: 700;
    margin-bottom: 24px;
  `}
`;


export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.baseContent};
    font-size: 16px;
    margin-bottom: 8px;
    font-weight: 300;
  `}
`

export const Button = styled.Button`
  padding: 10px 20px; 
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accentContent};
  border-radius: 5px; 
  align-items: center; 
  margin: 10px; 
`;
export const Image = styled.Image`
  ${({ theme, width, height }) => css`
  width: ${width}px;
  height: ${height}px;  
  resizeMode: contain;
  margin: 16px;
  `}
`;

