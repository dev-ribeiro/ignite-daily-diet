import styled, { css } from "styled-components/native";

export const Container = styled.View`
    padding: 0 24px;
`

export const PercentWrapper = styled.View`
    height: 104px;
    margin-top: 32px;
    margin-bottom: 40px;
`

export const DayHeader = styled.Text`
    margin-bottom: 8px;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.xl}px;
    `}
`
