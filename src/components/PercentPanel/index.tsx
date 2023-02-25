import { useNavigation } from "@react-navigation/native"
import { formatNumberToString } from "@utils/formatter"
import { useTheme } from "styled-components/native"
import { BackIcon, Button, Container, InfoText, OpenIcon, Title } from "./styles"

type Props = {
    isBackPage?: boolean
    percent: number
}

export function PercentPanel({ isBackPage = false, percent }: Props) {
    const { COLORS } = useTheme()
    const navigation = useNavigation()

    function handleBackNavigation(){
        navigation.navigate("home")
    }

    const verifySuccessDiet = (percent > 50) ? "success" : "failure"

    return (
        <Container variant={verifySuccessDiet}>
            <Button
                variant={isBackPage ? "back" : "default"}
                onPress={isBackPage ? handleBackNavigation : () => {}}
            >
                {!isBackPage
                    ? (
                        <OpenIcon
                            color={verifySuccessDiet === "success" ? COLORS.GREEN_DARK : COLORS.RED_DARK}
                        />
                    )
                    : (
                        <BackIcon
                            color={verifySuccessDiet === "success" ? COLORS.GREEN_DARK : COLORS.RED_DARK}
                        />
                    )}
            </Button>
            <Title>{formatNumberToString(percent)}%</Title>
            <InfoText>das refeições dentro da dieta</InfoText>
        </Container>
    )
}
