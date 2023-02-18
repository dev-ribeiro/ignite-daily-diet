import { TouchableOpacityProps } from "react-native"
import { Separator } from "@components/Separator";
import { ButtonVariantStyleType, Container, Icon, Indicator, PencilIcon, Title, TrashIcon } from "./styles";

type Props = TouchableOpacityProps & {
    isSelected?: boolean
    hasIcon?: boolean
    title: string
    variant?: ButtonVariantStyleType
}

export function Button({ isSelected = false, hasIcon = false, title, variant = "default", ...props }: Props) {
    if (variant === "default") {
        return (
            <Container
                variant={variant}
                isSelected={isSelected}
                {...props}
            >
                {hasIcon && (<Icon />)}
                <Title variant={variant}>{title}</Title>
            </Container>
        )
    }

    if (variant === "white") {
        return (
            <Container
                variant={variant}
                isSelected={isSelected}
                {...props}
            >
                <TrashIcon />
                <Separator width={12} />
                <Title variant={variant}>{title}</Title>
            </Container>
        )
    }

    if (variant === "edit") {
        return (
            <Container
                variant={variant}
                isSelected={isSelected}
                {...props}
            >
                <PencilIcon />
                <Separator width={12} />
                <Title variant={variant}>{title}</Title>
            </Container>
        )
    }

    return (
        <Container
            variant={variant}
            isSelected={isSelected}
            {...props}
        >
            <Indicator variant={variant} />
            <Separator width={8} />
            <Title variant={variant}>{title}</Title>
        </Container>
    )
}
