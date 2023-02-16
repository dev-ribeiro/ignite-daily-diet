import styled, { css } from "styled-components/native";

export const Container = styled.View`
    margin-bottom: 32px;
`

export const Title = styled.Text`
    margin-bottom: 8px;

    ${({theme})=>css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.lg}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`
