import { FoodCard } from "@components/FoodCard";
import { FlatList } from "react-native";
import { Container, Title } from "./styles";

type Food = {
    food: string
    hour: string
    isDiet: boolean
}

type Props = {
    day: string
}

export function DailySummary({day}:Props) {
    const data: Food[] = [
        { food: 'X-tudo', hour: '20:00', isDiet: false },
        { food: 'X-tudo', hour: '21:00', isDiet: true },
    ]

    return (
        <Container>
            <Title>{day}</Title>
            <FlatList
                data={data}
                keyExtractor={item => `${item.food}-${item.hour}`}
                renderItem={({ item }) => (
                    <FoodCard
                        food={item.food}
                        hour={item.hour}
                        indicator={!item.isDiet ? 'failure' : 'success'}
                    />
                )}
            />
        </Container>
    )
}
