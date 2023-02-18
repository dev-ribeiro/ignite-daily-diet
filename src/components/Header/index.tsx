import logoImg from '@assets/logo.png'
import { Avatar, AvatarWrapper, BackIcon, Container, HeaderVariantType, IconWrapper, Logo, Title } from './styles'

type Props = {
    variant?: HeaderVariantType
    title?: string
    isDiet?: boolean
}

export function Header({ title = "", isDiet = true, variant = "default" }: Props) {
    if (variant === "default") {
        return (
            <Container
                variant={variant}
                isDiet={isDiet}
            >
                <Logo source={logoImg} />
                <AvatarWrapper>
                    <Avatar />
                </AvatarWrapper>
            </Container>
        )
    }

    return (
        <Container
            variant={variant}
            isDiet={isDiet}
        >
            <IconWrapper>
                <BackIcon />
            </IconWrapper>
            <Title>{title}</Title>
        </Container>
    )
}
