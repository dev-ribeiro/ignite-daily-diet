import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    padding: 14px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Placeholder = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.lg}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_100};
    `};
`
