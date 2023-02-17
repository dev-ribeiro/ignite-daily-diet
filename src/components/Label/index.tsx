import { ReactNode } from "react"
import { Container, Title } from "./styles"

type Props = {
    title: string
    children: ReactNode
}

export function Label({ title, children }: Props) {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    )
}
