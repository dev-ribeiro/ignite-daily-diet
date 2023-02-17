import { TextInputProps } from "react-native";
import { Container, InputStyleType } from "./styles";

type Props = TextInputProps & {
    variant?: InputStyleType
}

export function Input({ variant = "default", ...props }: Props) {
    return (
        <Container
            variant={variant}
            {...props}
        />
    )
}
