import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native"

export const Container = styled.View`
    flex: 1;
`

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    height: 132px;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.xl}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`

export const Wrapper = styled.View`
    flex: 1;
    align-items: stretch;
    justify-items: center;
    margin-top: -30px;
    padding: 40px 24px 0;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_200
}))`
    position: absolute;
    left: 24px;
`

export const TimeWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
`

export const CustomLabel = styled.View`
    flex: 1;
`

export const CustomPlaceholder = styled.Text`
    margin-bottom: 6px;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.md}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `};
`

export const DietWrapper = styled.View`
    margin-top: 24px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const SubmitWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    margin-bottom: 56px;
`
