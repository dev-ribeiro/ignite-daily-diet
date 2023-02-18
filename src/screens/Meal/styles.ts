import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`

export const Wrapper = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: -20px;
    justify-content: space-between;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const MealWrapper = styled.View`
    margin-top: 40px;
`

export const Title = styled.Text`
    font-size: 20px;
    margin-bottom: 8px;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `};
`

export const Description = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.lg}px;
    `};
`

export const DateTimeTitle = styled.Text`
    margin-top: 24px;
    margin-bottom: 8px;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.md}px;
        color: ${theme.COLORS.GRAY_200};
    `};
`

export const DateHour = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.lg}px;
        color: ${theme.COLORS.GRAY_200};
    `};
`

export const InteractionWrapper = styled.View`
    margin-bottom: 40px;
`

export const CustomLabel = styled.View`
    margin-top: 24px;
    padding: 8px 16px;
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    border-radius: 999px;
`

export const PointIndicator = styled.View<{ isDiet: boolean }>`
    margin-right: 8px;
    width: 8px;
    height: 8px;
    border-radius: 999px;

    ${({isDiet, theme})=>{
        if(isDiet === false){
            return css`
                background-color: ${theme.COLORS.RED_DARK};
            `
        }

        return css`
            background-color: ${theme.COLORS.GREEN_DARK};
        `
    }};
`

export const TextIndicator = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.md}px;
        color: ${theme.COLORS.GRAY_100};
    `};
`
