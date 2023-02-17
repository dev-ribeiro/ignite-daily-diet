import styled, { css } from "styled-components/native";

export const Container = styled.View`
    align-self: stretch;
`

export const Title = styled.Text`
    margin-bottom: 6px;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.md}px;
        color: ${theme.COLORS.GRAY_200};
    `};
`
