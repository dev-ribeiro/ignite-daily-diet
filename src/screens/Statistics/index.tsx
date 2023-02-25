import { Card } from "@components/Card";
import { PercentPanel } from "@components/PercentPanel";
import { Separator } from "@components/Separator";
import { useRoute } from "@react-navigation/native";
import { Container, InfoWrapper, PanelWrapper, Title, Wrapper } from "./styles";

type RouteParams = {
    allMeals: number
    mealsInDiet: number
    percent: number
}

export function Statistics() {
    const router = useRoute()

    const { allMeals, mealsInDiet, percent } = router.params as RouteParams

    return (
        <Container>
            <PanelWrapper>
                <PercentPanel percent={percent} isBackPage />
            </PanelWrapper>
            <Wrapper>
                <Title>Estatísticas gerais</Title>
                <Card
                    title="22"
                    description="melhor sequência de pratos dentro da dieta"
                />
                <Separator height={12} />
                <Card
                    title={String(allMeals)}
                    description="refeições registradas"
                />
                <InfoWrapper>
                    <Card
                        title={String(mealsInDiet)}
                        description="refeições dentro da dieta"
                        variant="success"
                    />
                    <Separator width={12} />
                    <Card
                        title={String(allMeals - mealsInDiet)}
                        description="refeições fora da dieta"
                        variant="danger"
                    />
                </InfoWrapper>
            </Wrapper>
        </Container>
    )
}
