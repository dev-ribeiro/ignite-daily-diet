import { Alert, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CreateMeal } from "@components/CreateMeal";
import { FoodCard } from "@components/FoodCard";
import { Header } from "@components/Header";
import { PercentPanel } from "@components/PercentPanel";
import { Container, DayHeader, PercentWrapper } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { useState } from "react";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { CustomError } from "@utils/errors/CustomError";
import { useCallback } from "react";
import { formatDateToBRFormat } from "@utils/formatter";

type Section = {
    title: string
    data: MealStorageDTO[]
}

export function Home() {
    const [data, setData] = useState<Section[]>([])
    const { navigate } = useNavigation()

    function transformDataFromStorage(arr: MealStorageDTO[]) {
        const sortItensByDateTime = arr
            .map(item => formatDateToBRFormat(item.dateTime, { customFormat: true }))
            .sort()

        const removeDatesDuplicated = new Set(sortItensByDateTime)

        const adapaterData = [...removeDatesDuplicated.values()]
            .map(date => {
                return {
                    title: date,
                    data: arr.filter(meal => formatDateToBRFormat(meal.dateTime, { customFormat: true }) === date)
                }
            })

        setData(adapaterData)
    }

    async function fetchDataFromStorage() {
        try {
            const response = await mealsGetAll()
            transformDataFromStorage(response)
        } catch (error) {
            if (error instanceof CustomError) {
                Alert.alert("Listar refeições", error.message)
            }

            Alert.alert("Listar refeições", "Não foi possível listar as refeições.")
        }
    }

    function handleNavigationToStatistics() {
        navigate("statistics")
    }

    function handleNavigationToMeal(meal: MealStorageDTO) {
        navigate("meal", { meal: meal })
    }

    useFocusEffect(useCallback(() => {
        fetchDataFromStorage()
    }, []))

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
                            >
                                {title}
                            </DayHeader>
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
