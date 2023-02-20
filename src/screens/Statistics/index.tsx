import { Card } from "@components/Card";
import { PercentPanel } from "@components/PercentPanel";
import { Separator } from "@components/Separator";
import { Container, InfoWrapper, PanelWrapper, Title, Wrapper } from "./styles";

export function Statistics() {

    return (
        <Container>
            <PanelWrapper>
                <PercentPanel percent={6000} isBackPage />
            </PanelWrapper>
            <Wrapper>
                <Title>Estatísticas gerais</Title>
                <Card
                    title="22"
                    description="melhor sequência de pratos dentro da dieta"
                />
                <Separator height={12} />
                <Card
                    title="109"
                    description="refeições registradas"
                />
                <InfoWrapper>
                    <Card
                        title="99"
                        description="refeições dentro da dieta"
                        variant="success"
                    />
                    <Separator width={12}/>
                    <Card
                        title="109"
                        description="refeições fora da dieta"
                        variant="danger"
                    />
                </InfoWrapper>
            </Wrapper>
        </Container>
    )
}
