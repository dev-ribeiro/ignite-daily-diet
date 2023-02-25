import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealEdit(meal: MealStorageDTO) {
    const { id, dateTime, description, isDiet, title } = meal

    const storage = await mealsGetAll()

    const newStorage = storage.map(item => {
        if (item.id === id) {
            return {
                ...item,
                title,
                description,
                dateTime,
                isDiet
            }
        }

        return item
    })

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newStorage))
}
