import { mealType } from "../constant/topPage";

export const topPageData = {
  mealHistory: [
    {
      image: "/assets/images/morning_image.png",
      date: new Date(),
      status: mealType.morning,
    },
    {
      image: "/assets/images/lunch_image.png",
      date: new Date(),
      status: mealType.lunch,
    },
    {
      image: "/assets/images/dinner_image.png",
      date: new Date(),
      status: mealType.dinner,
    },
    {
      image: "/assets/images/snack_image.png",
      date: new Date(),
      status: mealType.snack,
    },
  ],
};
