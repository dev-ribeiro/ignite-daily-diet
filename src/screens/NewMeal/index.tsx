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
    Header,
    Icon,
    Title,
    Wrapper,
    DietWrapper,
    SubmitWrapper
} from "./styles";

export function NewMeal() {
    const [isDiet, setIsDiet] = useState<boolean | null>(null)

    return (
        <Container>
            <Header>
                <Icon />
                <Title>Nova refeição</Title>
            </Header>
            <Wrapper>
                <Label title="Nome">
                    <Input />
                </Label>
                <Separator height={24} />
                <Label title="Descrição">
                    <Input
                        multiline
                        variant="textarea"
                        textAlignVertical="top"
                    />
                </Label>
                <Separator height={24} />
                <TimeWrapper>
                    <CustomLabel>
                        <CustomPlaceholder>Data</CustomPlaceholder>
                        <DatePicker />
                    </CustomLabel>
                    <Separator width={20} />
                    <CustomLabel>
                        <CustomPlaceholder>Hora</CustomPlaceholder>
                        <TimePicker />
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
                    title="Cadastrar refeição"
                    variant="default"
                />
            </SubmitWrapper>
        </Container>
    )
}
