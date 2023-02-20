import logoImg from '@assets/logo.png'
import { useNavigation } from '@react-navigation/native'
import { Avatar, AvatarWrapper, BackIcon, Container, HeaderVariantType, IconWrapper, Logo, Title } from './styles'

type Props = {
    variant?: HeaderVariantType
    title?: string
    isDiet?: boolean
}

export function Header({ title = "", isDiet = true, variant = "default" }: Props) {
    const { navigate } = useNavigation()

    function handleNavigationToHome(){
        navigate("home")
    }

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
            <IconWrapper
                onPress={handleNavigationToHome}
            >
                <BackIcon />
            </IconWrapper>
            <Title>{title}</Title>
        </Container>
    )
}
