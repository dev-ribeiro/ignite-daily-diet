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

type RouteParams = {
    meal: MealStorageDTO
}

export function EditMeal() {
    const { navigate } = useNavigation()
    const router = useRoute()
    const { meal } = router.params as RouteParams
    const { dateTime, description, isDiet, title } = meal

    const [diet, setDiet] = useState(isDiet)

    function handleNavigateToHome() {
        navigate("home")
    }

    return (
        <Container>
            <Header
                variant="edit"
                title="Editar refeição"
            />
            <Wrapper>
                <Label title="Nome">
                    <Input value={title} />
                </Label>
                <Separator height={24} />
                <Label title="Descrição">
                    <Input
                        multiline
                        variant="textarea"
                        textAlignVertical="top"
                        value={description}
                    />
                </Label>
                <Separator height={24} />
                <TimeWrapper>
                    <CustomLabel>
                        <CustomPlaceholder>Data</CustomPlaceholder>
                        <DatePicker
                            defaultVaue={new Date(dateTime)}
                        />
                    </CustomLabel>
                    <Separator width={20} />
                    <CustomLabel>
                        <CustomPlaceholder>Hora</CustomPlaceholder>
                        <TimePicker
                            defaultValue={new Date(dateTime)}
                        />
                    </CustomLabel>
                </TimeWrapper>
                <DietWrapper>
                    <Button
                        title="Sim"
                        variant="success"
                        isSelected={diet !== null && diet}
                        onPress={() => setDiet(true)}
                    />
                    <Separator width={8} />
                    <Button
                        title="Não"
                        variant="failure"
                        isSelected={diet !== null && diet}
                        onPress={() => setDiet(false)}
                    />
                </DietWrapper>
            </Wrapper>
            <SubmitWrapper>
                <Button
                    title="Salvar alterações"
                    variant="default"
                    onPress={handleNavigateToHome}
                />
            </SubmitWrapper>
        </Container>
    )
}
