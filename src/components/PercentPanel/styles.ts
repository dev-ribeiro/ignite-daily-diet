import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type ContainerBackgroundColor = {
    variant: "success" | "failure"
}

type ButtonProps = {
    variant: "default" | "back"
}

export const Container = styled.View<ContainerBackgroundColor>`
    margin: 24px;
    padding: 20px 16px;
    position: relative;
    align-items: center;
    border-radius: 8px;
    background-color: ${({ theme, variant }) => {
        if(variant === "failure"){
            return theme.COLORS.RED_LIGHT
        }

        return theme.COLORS.GREEN_LIGHT
    }};
`

export const Button = styled(TouchableOpacity) <ButtonProps>`
    position: absolute;
    ${({ variant }) => {
        if (variant === "back") {
            return css`
                top: 56px;
                left: 24px;
            `
        }

        return css`
            right: 12px;
            top: 2px;
        `
    }};
`

export const OpenIcon = styled(ArrowUpRight).attrs(() => ({
    size: 24,
}))``

export const BackIcon = styled(ArrowLeft).attrs(() => ({
    size: 24,
}))``

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE["3xl"]}px;
    `}
`

export const InfoText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.md}px;
        color: ${theme.COLORS.GRAY_200}
    `}
`

