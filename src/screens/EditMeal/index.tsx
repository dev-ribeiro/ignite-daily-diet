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
import { hourAdapter } from "@utils/hourAdapter";

type Props = {
    name: string
    description: string
    date: string
    hour: string
    diet: boolean
}

export function EditMeal({ date, description, hour, diet, name }: Props) {
    const [isDiet, setIsDiet] = useState<boolean>(diet)

    return (
        <Container>
            <Header
                variant="edit"
                title="Editar refeição"
            />
            <Wrapper>
                <Label title="Nome">
                    <Input value={name} />
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
                            defaultVaue={new Date(date)}
                        />
                    </CustomLabel>
                    <Separator width={20} />
                    <CustomLabel>
                        <CustomPlaceholder>Hora</CustomPlaceholder>
                        <TimePicker
                            defaultValue={hourAdapter(hour)}
                        />
                    </CustomLabel>
                </TimeWrapper>
                <DietWrapper>
                    <Button
                        title="Sim"
                        variant="success"
                        isSelected={isDiet !== null && isDiet}
                        onPress={() => setIsDiet(true)}
                    />
                    <Separator width={8} />
                    <Button
                        title="Não"
                        variant="failure"
                        isSelected={isDiet !== null && isDiet}
                        onPress={() => setIsDiet(false)}
                    />
                </DietWrapper>
            </Wrapper>
            <SubmitWrapper>
                <Button
                    title="Salvar alterações"
                    variant="default"
                />
            </SubmitWrapper>
        </Container>
    )
}
