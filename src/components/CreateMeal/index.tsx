import { Button } from "@components/Button";

import { Container, Title } from "./styles";

export function CreateMeal() {
    return (
        <Container>
            <Title>Refeições</Title>
            <Button
                title="Nova refeição"
                hasIcon
            />
        </Container>
    )
}
