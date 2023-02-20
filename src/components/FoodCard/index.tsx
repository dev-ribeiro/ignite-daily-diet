import { formatHourToBRFormat } from "@utils/formatter";
import { TouchableOpacityProps } from "react-native";
import { Container, Divider, FoodName, Hour, Indicator } from "./styles";

type Props = TouchableOpacityProps & {
    title: string
    dateTime: string
    indicator?: 'success' | 'failure'
}

export function FoodCard({ title, dateTime, indicator = "success", ...props }: Props) {
    const hour = formatHourToBRFormat(dateTime)

    return (
        <Container {...props}>
            <Hour>{hour}</Hour>
            <Divider>|</Divider>
            <FoodName>{title}</FoodName>
            <Indicator variant={indicator} />
        </Container>
    )
}
