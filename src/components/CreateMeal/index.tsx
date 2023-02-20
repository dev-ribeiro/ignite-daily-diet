import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

import { Container, Title } from "./styles";

export function CreateMeal() {
    const navigation = useNavigation()

    function handleNavigationToNewMeal(){
        navigation.navigate("new")
    }

    return (
        <Container>
            <Title>Refeições</Title>
            <Button
                title="Nova refeição"
                hasIcon
                onPress={handleNavigationToNewMeal}
            />
        </Container>
    )
}
