import { SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CreateMeal } from "@components/CreateMeal";
import { FoodCard } from "@components/FoodCard";
import { Header } from "@components/Header";
import { PercentPanel } from "@components/PercentPanel";
import { Container, DayHeader, PercentWrapper } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { formatDateToBRFormat } from "@utils/formatter";

type Section = {
    title: string
    data: MealStorageDTO[]
}

export function Home() {
    const { navigate } = useNavigation()

    const data: Section[] = [
        {
            title: formatDateToBRFormat(new Date().toISOString(), { customFormat: true }),
            data: [
                { dateTime: new Date().toISOString(), description: "Descrição de testes", id: "1", isDiet: true, title: "Salada" },
                { dateTime: new Date().toISOString(), description: "Descrição de testes", id: "2", isDiet: false, title: "Salgado" },
            ]
        }
    ]

    function handleNavigationToStatistics() {
        navigate("statistics")
    }

    function handleNavigationToMeal(meal: MealStorageDTO) {
        navigate("meal", { meal: meal })
    }

    return (
        <SafeAreaView>
            <Container>
                <Header />
                <PercentWrapper
                    onPress={handleNavigationToStatistics}
                >
                    <PercentPanel percent={5100} />
                </PercentWrapper>
                <CreateMeal />
                <SectionList
                    sections={data}
                    keyExtractor={item => item.id}
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
                            title={item.title}
                            dateTime={item.dateTime}
                            indicator={!item.isDiet ? 'failure' : 'success'}
                            onPress={() => handleNavigationToMeal(item)}
                        />
                    )}
                />
            </Container>
        </SafeAreaView>
    )
}
