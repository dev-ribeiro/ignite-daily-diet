import { useEffect, useState } from "react";
import { Container, Placeholder } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDateToBRFormat } from "@utils/formatter";

type Props = {
    defaultVaue?: Date
    date: Date,
    handleUpdateDate: (param: Date) => void
}

export function DatePicker({ date, defaultVaue, handleUpdateDate }: Props) {
    const [showPicker, setShowPicker] = useState(false)

    const handleUserPicker = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        handleUpdateDate(currentDate);
        setShowPicker(false);
    };

    useEffect(() => {
        if (defaultVaue) {
            handleUpdateDate(defaultVaue)
        }
    }, [])

    return (
        <Container
            onPress={() => setShowPicker(true)}
        >
            <Placeholder>
                {formatDateToBRFormat(date.toISOString(), { customFormat: false })}
            </Placeholder>

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
