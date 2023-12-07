import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.base100};
  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: 'Comfortaa';
    font-size: 70px;
    color: ${({ theme }) => theme.colors.baseContent};
  `}
`

export const Logo = styled.Image`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
    resizemode: contain;
    margin: 16px;
  `}
`
