import styled, { css } from "styled-components/native";

export const Container = styled.View`
    margin-bottom: 32px;
`

export const Title = styled.Text`
    margin-bottom: 8px;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.xl}px;
    `}
`
