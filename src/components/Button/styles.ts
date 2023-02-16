import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native"

export const Container = styled(TouchableOpacity)`
    padding: 16px 24px;
    flex-direction: row;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 6px;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.md}px;
        color: ${theme.COLORS.WHITE};
    `}
`

export const Icon = styled(Plus).attrs(({ theme }) => ({
    size: 18,
    color: theme.COLORS.WHITE
}))`
    margin-right: 12px;
`
