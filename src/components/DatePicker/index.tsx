import { useState } from "react";
import { Text } from "react-native"
import { Container, Placeholder } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDateToBRFormat } from "@utils/formatter";

export function DatePicker() {
    const [date, setdate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)

    const handleUserPicker = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setdate(currentDate);
        setShowPicker(false);
    };

    console.log(date)

    return (
        <Container
            onPress={() => setShowPicker(true)}
        >
            <Placeholder>{formatDateToBRFormat(date)}</Placeholder>

            {showPicker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    display="default"
                    onChange={handleUserPicker}
                />
            )}
        </Container>
    )
}
