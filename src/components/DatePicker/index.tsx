import { useEffect, useState } from "react";
import { Container, Placeholder } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDateToBRFormat } from "@utils/formatter";

type Props = {
    defaultVaue?: Date
}

export function DatePicker({ defaultVaue }: Props) {
    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)

    const handleUserPicker = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShowPicker(false);
    };

    useEffect(()=>{
        if(defaultVaue){
            setDate(defaultVaue)
        }
    },[])

    return (
        <Container
            onPress={() => setShowPicker(true)}
        >
            <Placeholder>{formatDateToBRFormat(date.toISOString())}</Placeholder>

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
