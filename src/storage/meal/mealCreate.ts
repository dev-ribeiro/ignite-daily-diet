import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { CustomError } from "@utils/errors/CustomError";
import { mealsGetAll } from "./mealsGetAll";
import { MealStorageDTO } from "./MealStorageDTO";

export async function createMeal(meal: MealStorageDTO) {
    try {
        const mealsStorage = await mealsGetAll()

        const mealAlreadyExists = mealsStorage.filter(item => meal.id === item.id)

        if(mealAlreadyExists.length > 0){
            throw new CustomError("Esta refeição já foi cadastrada")
        }

        const newStorage = [...mealsStorage, meal]

        await AsyncStorage.setItem(MEAL_COLLECTION,JSON.stringify(newStorage))
    } catch (error) {
        throw new CustomError("Não foi possível obter as refeições.")
    }
}
