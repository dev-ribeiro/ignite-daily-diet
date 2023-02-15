import styled, { css } from "styled-components/native";
import { User } from "phosphor-react-native"

export const Container = styled.View`
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
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
    background-color: ${({theme})=>theme.COLORS.GRAY_400};
    border-radius: 999px;
    border: 1px solid ${({theme})=>theme.COLORS.GRAY_200};
`

export const Avatar = styled(User).attrs(({theme})=>({
    size: 32,
    color: theme.COLORS.GRAY_700
}))``
