import { Container, Divider, FoodName, Hour, Indicator } from "./styles";

type Props = {
    hour: string
    food: string
    indicator?: 'success' | 'failure'
}

export function FoodCard({ food, hour, indicator = "success" }: Props) {
    return (
        <Container>
            <Hour>{hour}</Hour>
            <Divider>|</Divider>
            <FoodName>{food}</FoodName>
            <Indicator variant={indicator} />
        </Container>
    )
}
