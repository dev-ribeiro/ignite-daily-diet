import { useState } from "react";
import { TimePicker } from "@components/TimePicker";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Label } from "@components/Label";
import { DatePicker } from "@components/DatePicker";
import { Separator } from "@components/Separator";
import {
    Container,
    CustomLabel,
    CustomPlaceholder,
    TimeWrapper,
    Wrapper,
    DietWrapper,
    SubmitWrapper
} from "./styles";
import { Header } from "@components/Header";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createDateTime } from "@utils/createDateTime";

type RouteParams = {
    meal: MealStorageDTO
}

export function EditMeal() {
    const { navigate } = useNavigation()
    const router = useRoute()
    const { meal } = router.params as RouteParams
    const { dateTime, description, isDiet, title } = meal
    const [diet, setDiet] = useState(isDiet)
    const [editName, setEditName] = useState(title)
    const [editDescription, setEditDesctipion] = useState(description)
    const [date, setDate] = useState(new Date(dateTime))
    const [time, setTime] = useState(new Date(dateTime))


    function handleNavigateToHome() {
        navigate("home")
    }

    function handeEditMeal() {
        const newDateTime = createDateTime(date, time)
        const newId = `${newDateTime}(-)${editName}`

        const newMeal: MealStorageDTO = {
            id: newId,
            title: editName,
            description: editDescription,
            dateTime: newDateTime,
            isDiet: diet,
        }

        // TODO: update meal in storage
    }

    return (
        <Container>
            <Header
                variant="edit"
                title="Editar refeição"
            />
            <Wrapper>
                <Label title="Nome">
                    <Input
                        value={editName}
                        onChangeText={setEditName}
                    />
                </Label>
                <Separator height={24} />
                <Label title="Descrição">
                    <Input
                        multiline
                        variant="textarea"
                        textAlignVertical="top"
                        value={editDescription}
                        onChangeText={setEditDesctipion}
                    />
                </Label>
                <Separator height={24} />
                <TimeWrapper>
                    <CustomLabel>
                        <CustomPlaceholder>Data</CustomPlaceholder>
                        <DatePicker
                            defaultVaue={new Date(dateTime)}
                            date={date}
                            handleUpdateDate={setDate}
                        />
                    </CustomLabel>
                    <Separator width={20} />
                    <CustomLabel>
                        <CustomPlaceholder>Hora</CustomPlaceholder>
                        <TimePicker
                            defaultValue={new Date(dateTime)}
                            time={time}
                            handleUpdateTime={setTime}
                        />
                    </CustomLabel>
                </TimeWrapper>
                <DietWrapper>
                    <Button
                        title="Sim"
                        variant="success"
                        isSelected={diet!!}
                        onPress={() => setDiet(true)}
                    />
                    <Separator width={8} />
                    <Button
                        title="Não"
                        variant="failure"
                        isSelected={diet!!}
                        onPress={() => setDiet(false)}
                    />
                </DietWrapper>
            </Wrapper>
            <SubmitWrapper>
                <Button
                    title="Salvar alterações"
                    variant="default"
                    onPress={handeEditMeal}
                />
            </SubmitWrapper>
        </Container>
    )
}
