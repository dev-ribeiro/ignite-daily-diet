import { SectionList, Text, View } from "react-native";
import { CreateMeal } from "@components/CreateMeal";
import { FoodCard } from "@components/FoodCard";
import { Header } from "@components/Header";
import { PercentPanel } from "@components/PercentPanel";
import { Container, DayHeader } from "./styles";

type Food = {
    food: string
    hour: string
    isDiet: boolean
}

type Section = {
    title: string
    data: Food[]
}

export function Home() {
    const data: Section[] = [
        {
            title: '12/03/22', data: [
                { food: 'X-tudo', hour: '20:00', isDiet: false },
                { food: 'X-salada', hour: '20:00', isDiet: false },
            ]
        },
        { title: '13/03/22', data: [{ food: 'X-tudo', hour: '20:00', isDiet: true }] },
        { title: '14/03/22', data: [{ food: 'X-tudo', hour: '20:00', isDiet: true }] },
    ]

    return (
        <Container>
            <Header />
            <PercentPanel percent={5100} />
            <CreateMeal />
            <SectionList
                sections={data}
                keyExtractor={(item, index) => `${item.food}-${item.hour}=>${index}`}
                renderSectionHeader={({ section: { title } }) => {
                    return (
                        <DayHeader
                            style={{
                                marginTop: (data[0].title === title) ? 0 : 32
                            }}
                        >{title}</DayHeader>
                    )
                }}
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
