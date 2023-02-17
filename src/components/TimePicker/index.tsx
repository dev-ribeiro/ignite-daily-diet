import { useState } from "react";
import { Container, Placeholder } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker"
import { formatHourToBRFormat } from "@utils/formatter";

export function TimePicker() {
    const [time, setTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleUserTimePicker = (event: any, selectedTime?: Date) => {
        const currentTime = selectedTime || time;
        setTime(currentTime);
        setShowTimePicker(false);
    };

    return (
        <Container
            onPress={() => setShowTimePicker(true)}
        >
            <Placeholder>{formatHourToBRFormat(time)}</Placeholder>
            {showTimePicker && (
                <DateTimePicker
                    testID="timePicker"
                    value={time}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={handleUserTimePicker}
                />
            )}
        </Container>
    )
}
