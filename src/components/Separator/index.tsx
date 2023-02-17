import { View } from "react-native"

type Props = {
    height?: number
    width?: number
}

export function Separator({ height = 0, width = 0 }: Props) {

    return (
        <View
            style={{
                height,
                width
            }}
        />
    )
}
