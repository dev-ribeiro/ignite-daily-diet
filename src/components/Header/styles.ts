import styled, { css } from "styled-components/native";
import { ArrowLeft, User } from "phosphor-react-native"
import { TouchableOpacity } from "react-native";

export type HeaderVariantType = "default" | "diet" | "edit"

type Props = {
    variant: HeaderVariantType
    isDiet: boolean
}

export const Container = styled.View<Props>`
    padding: 0 24px;
    flex-direction: row;
    width: 100%;

    ${({ theme, variant }) => {
        if (variant === "default") {
            return css`
                justify-content: space-between;
            `
        }

        return css`
            min-height: 132px;
            justify-content: center;
            align-items: center;
            background-color: ${theme.COLORS.GRAY_600};
        `
    }};

    ${({ isDiet, variant, theme }) => {
        if (isDiet && variant === "diet") {
            return css`
                background-color: ${theme.COLORS.GREEN_LIGHT};
            `
        }

        if (isDiet === false && variant === "diet") {
            return css`
                background-color: ${theme.COLORS.RED_LIGHT};
            `
        }
    }};

`

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`

export const AvatarWrapper = styled.View`
    width: 40px;
    height: 40px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Avatar = styled(User).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GRAY_700
}))``

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.xl}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`

export const IconWrapper = styled(TouchableOpacity)`
    position: absolute;
    left: 24px;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_200
}))``
