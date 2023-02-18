import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Separator } from "@components/Separator";
import { Container, CustomLabel, DateHour, DateTimeTitle, Description, InteractionWrapper, MealWrapper, PointIndicator, TextIndicator, Title, Wrapper } from "./styles";

type Props = {
    isDiet: boolean
}

export function Meal({ isDiet = true }: Props) {
    return (
        <Container>
            <Header
                title="Refeição"
                variant="edit"
            />
            <Wrapper>
                <MealWrapper>
                    <Title>Sanduíche</Title>
                    <Description>Sanduíche de pão integral com atum e salada de alface e tomate</Description>
                    <DateTimeTitle>Data e hora</DateTimeTitle>
                    <DateHour>12/08/2022 às 16:00</DateHour>
                    <CustomLabel>
                        <PointIndicator isDiet={isDiet}/>
                        {isDiet === true && (<TextIndicator>está na dieta</TextIndicator>)}
                        {isDiet === false && (<TextIndicator>fora da dieta</TextIndicator>)}
                    </CustomLabel>
                </MealWrapper>
                <InteractionWrapper>
                    <Button
                        title="Editar refeição"
                        variant="edit"
                    />
                    <Separator height={12} />
                    <Button
                        variant="white"
                        title="Excluir refeição"
                    />
                </InteractionWrapper>
            </Wrapper>
        </Container>
    )
}
