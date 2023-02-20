import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { AppRoutes } from "./App.routes";

export function Router() {
    const { COLORS } = useTheme()

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.GRAY_700
            }}
        >
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}
