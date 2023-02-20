import { Button } from "@components/Button"
import { Separator } from "@components/Separator"
import { useNavigation } from "@react-navigation/native"
import { Image } from "react-native"
import img from "../../assets/failure.png"
import { Container, CustomText, Strong, Title } from "./styles"

export function FailureDiet() {
    const { navigate } = useNavigation()

    function handleNavigateToHome() {
        navigate("home")
    }

    return (
        <Container>
            <Title>Que pena!</Title>
            <Separator height={8} />
            <CustomText>Você continua <Strong>dentro da dieta</Strong>. Muito bem!</CustomText>
            <Separator height={32} />
            <Image
                source={img}
            />
            <Separator height={32} />
            <Button
                title="Ir para a página inicial"
                onPress={handleNavigateToHome}
            />
        </Container>
    )
}
