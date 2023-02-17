import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native"

export type ButtonVariantStyleType = "default" | "success" | "failure"

type Props = {
    variant: ButtonVariantStyleType
}

export const Container = styled(TouchableOpacity) <Props & { isSelected: boolean }>`
    padding: 16px 24px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 6px;

    ${({ isSelected, theme, variant }) => {


        if(variant === "success" && isSelected === true){
            return css`
                flex: 1;
                background-color: ${theme.COLORS.GREEN_LIGHT};
            `
        }

        if(variant === "failure" && isSelected === false){
            return css`
                flex: 1;
                background-color: ${theme.COLORS.RED_LIGHT};
            `
        }

        if (variant !== "default") {
            return css`
                flex: 1;
                background-color: ${theme.COLORS.GRAY_600};
            `
        }
    }};
`

export const Title = styled.Text<Props>`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.md}px;
        color: ${theme.COLORS.WHITE};
    `};

    ${({ theme, variant }) => {
        if (variant !== "default") {
            return css`
                color: ${theme.COLORS.GRAY_100};
            `
        }
    }};
`

export const Indicator = styled.View<Props>`
    border-radius: 999px;
    width: 8px;
    height: 8px;
    ${({ theme, variant }) => {
        if (variant === "success") {
            return css`
                background-color: ${theme.COLORS.GREEN_DARK};
            `
        }

        if (variant === "failure") {
            return css`
                background-color: ${theme.COLORS.RED_DARK};
            `
        }
    }};
`

export const Icon = styled(Plus).attrs(({ theme }) => ({
    size: 18,
    color: theme.COLORS.WHITE
}))`
    margin-right: 12px;
`
