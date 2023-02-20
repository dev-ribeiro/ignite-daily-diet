import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Separator } from "@components/Separator";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { formatDateToBRFormat, formatHourToBRFormat } from "@utils/formatter";
import { useState } from "react";
import { Modal } from "react-native";
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

    const navigationParam = meal
    const { dateTime, description, isDiet, title } = meal

    const date = formatDateToBRFormat(new Date(dateTime))
    const hour = formatHourToBRFormat(new Date(dateTime))

    function handleNavigateToEditScreen() {
        navigate("edit", { meal: navigationParam })
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
                            onPress={handleNavigateToEditScreen}
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
                                />
                            </ModalButtonInteraction>
                        </ModalWrapper>
                    </ModalContainer>
                </Modal>
            </Container>

        </>
    )
}
