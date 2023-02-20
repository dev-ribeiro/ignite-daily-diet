import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { EditMeal } from "@screens/EditMeal";
import { FailureDiet } from "@screens/FailureDiet";
import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { NewMeal } from "@screens/NewMeal";
import { Statistics } from "@screens/Statistics";
import { SuccessDiet } from "@screens/SuccessDiet";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="new"
                component={NewMeal}
            />

            <Screen
                name="edit"
                component={EditMeal}
            />

            <Screen
                name="meal"
                component={Meal}
            />

            <Screen
                name="failure"
                component={FailureDiet}
            />

            <Screen
                name="success"
                component={SuccessDiet}
            />

            <Screen
                name="statistics"
                component={Statistics}
            />
        </Navigator>
    )
}
