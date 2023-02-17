import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type InputStyleType = "default" | "textarea"

type InputProps = {
    variant: InputStyleType
}

export const Container = styled(TextInput)<InputProps>`
    padding: 14px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    ${({ variant }) => {
        if (variant === "textarea") return css`
            height: 120px;
        `
    }};
`
