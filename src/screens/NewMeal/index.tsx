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
import { useNavigation } from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { createDateTime } from "@utils/createDateTime";
import { Alert } from "react-native";

export function NewMeal() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [isDiet, setIsDiet] = useState<boolean | null>(null)

    const { navigate } = useNavigation()

    function handleNavigateToResult(){
        if(isDiet === true){
            navigate("success")
            return
        }

        navigate("failure")
    }

    function handleRegisterMealInStorage() {
        if(!name || name === ''){
            Alert.alert("Cadastrar refeição","Favor informar uma refeição.")
            return
        }

        if(!date || !time){
            Alert.alert("Cadastrar refeição","Favor informar uma data ou hora válida")
            return
        }

        if(isDiet === null){
            Alert.alert("Cadastrar refeição","Favor informar se a refeição está na dieta ou não.")
            return
        }

        try {
            const dateTime = createDateTime(date, time)
            const id = `${dateTime}(-)${name}`

            const meal:MealStorageDTO = {
                id,
                dateTime,
                title: name,
                description,
                isDiet: isDiet!!,
            }

            // TODO

            handleNavigateToResult()

            setName('')
            setDescription('')
            setIsDiet(null)
            setTime(new Date())
            setDate(new Date())
        } catch (error) {

        }
    }

    return (
        <Container>
            <Header
                title="Nova refeição"
                variant="create"
            />
            <Wrapper>
                <Label title="Nome">
                    <Input
                        value={name}
                        onChangeText={setName}
                    />
                </Label>
                <Separator height={24} />
                <Label title="Descrição">
                    <Input
                        multiline
                        variant="textarea"
                        textAlignVertical="top"
                        value={description}
                        onChangeText={setDescription}
                    />
                </Label>
                <Separator height={24} />
                <TimeWrapper>
                    <CustomLabel>
                        <CustomPlaceholder>Data</CustomPlaceholder>
                        <DatePicker
                            date={date}
                            handleUpdateDate={setDate}
                        />
                    </CustomLabel>
                    <Separator width={20} />
                    <CustomLabel>
                        <CustomPlaceholder>Hora</CustomPlaceholder>
                        <TimePicker
                            time={time}
                            handleUpdateTime={setTime}
                        />
                    </CustomLabel>
                </TimeWrapper>
                <DietWrapper>
                    <Button
                        title="Sim"
                        variant="success"
                        isSelected={isDiet!!}
                        onPress={() => setIsDiet(true)}
                    />
                    <Separator width={8} />
                    <Button
                        title="Não"
                        variant="failure"
                        isSelected={isDiet!!}
                        onPress={() => setIsDiet(false)}
                    />
                </DietWrapper>
            </Wrapper>
            <SubmitWrapper>
                <Button
                    title="Cadastrar refeição"
                    variant="default"
                    onPress={handleRegisterMealInStorage}
                />
            </SubmitWrapper>
        </Container>
    )
}
