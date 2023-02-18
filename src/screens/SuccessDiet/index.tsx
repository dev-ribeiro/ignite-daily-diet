import { Button } from "@components/Button"
import { Separator } from "@components/Separator"
import { Image } from "react-native"
import img from "../../assets/comemoration.png"
import { Container, CustomText, Strong, Title } from "./styles"

export function SuccessDiet() {
    return (
        <Container>
            <Title>Continue assim!</Title>
            <Separator height={8} />
            <CustomText>Você continua <Strong>dentro da dieta</Strong>. Muito bem!</CustomText>
            <Separator height={32} />
            <Image
                source={img}
            />
            <Separator height={32} />
            <Button title="Ir para a página inicial" />
        </Container>
    )
}
