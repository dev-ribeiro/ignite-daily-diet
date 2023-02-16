import { CreateMeal } from "@components/CreateMeal";
import { DailySummary } from "@components/DailySummary";
import { Header } from "@components/Header";
import { PercentPanel } from "@components/PercentPanel";
import { FlatList } from "react-native";
import { Container } from "./styles";

export function Home() {
    const days: string[] = ['12/05/22', '13/05/22', '14/05/22', '16/05/22']

    return (
        <Container>
            <Header />
            <PercentPanel percent={5100} />
            <CreateMeal />
            <FlatList
                data={days}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <DailySummary day={item} />
                )}
            />
        </Container>
    )
}
