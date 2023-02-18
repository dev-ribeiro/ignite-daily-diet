import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    ${({theme})=>css`
        color: ${theme.COLORS.RED_DARK};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE["2xl"]}px;
    `};
`

export const CustomText = styled.Text`
    ${({theme})=>css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.lg}px;
    `};
`

export const Strong = styled.Text`
    ${({theme})=>css`
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`
