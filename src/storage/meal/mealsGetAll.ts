import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { CustomError } from "@utils/errors/CustomError";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealsGetAll():Promise<MealStorageDTO[]> {
    try {
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

        const meals = storage ? await JSON.parse(storage) : []

        return meals
    } catch (error) {
        throw new CustomError("Não foi possível obter as refeições.")
    }
}
