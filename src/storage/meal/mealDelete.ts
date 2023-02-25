import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealDelete(id: string) {
    const storage = await mealsGetAll()

    const deleteMealSelected = storage.filter(meal => meal.id !== id)

    await AsyncStorage.setItem(MEAL_COLLECTION,JSON.stringify(deleteMealSelected))
}
