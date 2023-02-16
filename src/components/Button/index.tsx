import { Container, Icon, Title } from "./styles";

type Props = {
    hasIcon?: boolean
    title: string
}

export function Button({ hasIcon = false, title }: Props) {
    return (
        <Container>
            {hasIcon && (<Icon />)}
            <Title>{title}</Title>
        </Container>
    )
}
