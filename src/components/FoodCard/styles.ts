import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native";

type IndicatorStyleProp = {
    variant: 'success' | 'failure'
}

export const Container = styled(TouchableOpacity)`
    padding: 12px 14px;
    margin-bottom: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
    border-radius: 6px;
`

export const Hour = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.sm}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `};
`
export const Divider = styled.Text`
    ${({ theme }) => css`
        color:${theme.COLORS.GRAY_400};
    `};
    margin: 0 12px;
`

export const FoodName = styled.Text`
    flex: 1;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.lg}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `};
`;

export const Indicator = styled.View<IndicatorStyleProp>`
    width: 14px;
    height: 14px;
    border-radius: 999px;
    background-color: ${({ theme, variant }) => {
        if (variant === 'failure') {
            return theme.COLORS.RED_LIGHT
        }

        return theme.COLORS.GREEN_LIGHT
    }};
`
