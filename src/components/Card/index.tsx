import { Container, Description, Title, VariantsStyleType } from "./styles"

type Props = {
    variant?: VariantsStyleType
    title: string
    description: string
}

export function Card({ description, title, variant = "default" }: Props) {

    return (
        <Container variant={variant}>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    )
}
