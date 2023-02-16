import { formatNumberToString } from "@utils/formatter"
import { useTheme } from "styled-components/native"
import { BackIcon, Button, Container, InfoText, OpenIcon, Title } from "./styles"

type Props = {
    isBackPage?: boolean
    percent: number
}

export function PercentPanel({ isBackPage = false, percent }: Props) {
    const { COLORS } = useTheme()

    const verifySuccessDiet = (percent > 5000) ? "success" : "failure"

    return (
        <Container variant={verifySuccessDiet}>
            <Button
                variant={isBackPage ? "back" : "default"}
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
