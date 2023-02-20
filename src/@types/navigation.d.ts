import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

export declare global {
    namespace ReactNavigation {
      interface RootParamList {
        home: undefined;
        new: undefined;
        edit: {
          meal: MealStorageDTO
        };
        meal: {
          meal: MealStorageDTO
        };
        statistics: undefined;
        failure: undefined;
        success: undefined;
      }
    }
  }
