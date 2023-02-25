import { useEffect, useState } from "react";
import { Container, Placeholder } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker"
import { formatHourToBRFormat } from "@utils/formatter";

type Props = {
    defaultValue?: Date
    time: Date
    handleUpdateTime: (param:Date) => void
}

export function TimePicker({ defaultValue, handleUpdateTime, time }: Props) {
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleUserTimePicker = (event: any, selectedTime?: Date) => {
        const currentTime = selectedTime || time;
        handleUpdateTime(currentTime);
        setShowTimePicker(false);
    };

    useEffect(()=>{
        if(defaultValue){
            handleUpdateTime(defaultValue)
        }
    },[])

    return (
        <Container
            onPress={() => setShowTimePicker(true)}
        >
            <Placeholder>{formatHourToBRFormat(time.toISOString())}</Placeholder>
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
