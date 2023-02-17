import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    `

export const PanelWrapper = styled.View`
    height: 300px;
`

export const Wrapper = styled.View`
    flex: 1;
    margin-top: -20px;
    padding: 0 24px;
    min-height: 100px;
    align-items: center;
    background-color: ${({theme})=>theme.COLORS.GRAY_700};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`

export const Title = styled.Text`
    margin-top: 33px;
    margin-bottom: 20px;
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.md}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `};
`

export const InfoWrapper = styled.View`
    width: 100%;
    margin-top: 12px;
    flex-direction: row;
    justify-content: center;
`
