import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Separator } from "@components/Separator";
import { useNavigation, useRoute } from "@react-navigation/native";
import { mealDelete } from "@storage/meal/mealDelete";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { formatDateToBRFormat, formatHourToBRFormat } from "@utils/formatter";
import { useState } from "react";
import { Alert, Modal } from "react-native";
import {
    Container,
    CustomLabel,
    DateHour,
    DateTimeTitle,
    Description,
    InteractionWrapper,
    MealWrapper,
    ModalButtonInteraction,
    ModalContainer,
    ModalTitle,
    ModalWrapper,
    PointIndicator,
    TextIndicator,
    Title,
    Wrapper
} from "./styles";

type RouteParams = {
    meal: MealStorageDTO
}

export function Meal() {
    const [modalVisibility, setModalVisibility] = useState(false)
    const { navigate } = useNavigation()
    const router = useRoute()
    const { meal } = router.params as RouteParams

    const { dateTime, description, isDiet, title, id } = meal

    const date = formatDateToBRFormat(dateTime, { customFormat: false })
    const hour = formatHourToBRFormat(dateTime)
    const navigationParam = meal

    async function handleDeleteMeal(id: string) {
        try {
            await mealDelete(id)
            navigate("home")
        } catch (error) {
            Alert.alert("Excluir refeição", "Não foi possível excluir a refeição")
        }
    }

    return (
        <>
            <Container>

                <Header
                    title="Refeição"
                    variant="edit"
                    isDiet={isDiet}
                />
                <Wrapper>
                    <MealWrapper>
                        <Title>{title}</Title>
                        <Description>{description}</Description>
                        <DateTimeTitle>Data e hora</DateTimeTitle>
                        <DateHour>{date} às {hour}</DateHour>
                        <CustomLabel>
                            <PointIndicator isDiet={isDiet} />
                            {isDiet === true && (<TextIndicator>está na dieta</TextIndicator>)}
                            {isDiet === false && (<TextIndicator>fora da dieta</TextIndicator>)}
                        </CustomLabel>
                    </MealWrapper>
                    <InteractionWrapper>
                        <Button
                            title="Editar refeição"
                            variant="edit"
                            onPress={() => navigate("edit", { meal: navigationParam })}
                        />
                        <Separator height={12} />
                        <Button
                            variant="white"
                            title="Excluir refeição"
                            hasIcon
                            onPress={() => setModalVisibility(true)}
                        />
                    </InteractionWrapper>
                </Wrapper>
                <Modal
                    visible={modalVisibility}
                    transparent
                    statusBarTranslucent
                    animationType="fade"
                >
                    <ModalContainer>
                        <ModalWrapper>
                            <ModalTitle>Deseja realmente excluir o registro da refeição?</ModalTitle>
                            <ModalButtonInteraction>
                                <Button
                                    title="Cancelar"
                                    variant="white"
                                    onPress={() => setModalVisibility(false)}
                                />
                                <Separator width={12} />
                                <Button
                                    title="Sim, excluir"
                                    onPress={() => handleDeleteMeal(id)}
                                />
                            </ModalButtonInteraction>
                        </ModalWrapper>
                    </ModalContainer>
                </Modal>
            </Container>

        </>
    )
}
