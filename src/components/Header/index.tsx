import logoImg from '@assets/logo.png'
import { Avatar, AvatarWrapper, Container, Logo } from './styles'

export function Header() {
    return (
        <Container>
            <Logo source={logoImg} />
            <AvatarWrapper>
                <Avatar />
            </AvatarWrapper>
        </Container>
    )
}
