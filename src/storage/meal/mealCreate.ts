import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { CustomError } from "@utils/errors/CustomError";
import { mealsGetAll } from "./mealsGetAll";
import { MealStorageDTO } from "./MealStorageDTO";

export async function createMeal(meal: MealStorageDTO) {
    try {
        const mealsStorage = await mealsGetAll()

        if(mealsStorage.includes(meal)){
            return new CustomError("Esta refeição já foi cadastrada")
        }

        await AsyncStorage.setItem(MEAL_COLLECTION,JSON.stringify(meal))
    } catch (error) {
        throw new CustomError("Não foi possível obter as refeições.")
    }
}
