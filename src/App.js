import React from "react";
import RecipeList from "./RecipeList";

function App() {
  return (
    <>
      <RecipeList recipes={sampleRecipes} />
    </>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    servings: 4,
    cookTime: '30 minutes',
    sampleLink: 'https://www.simplyrecipes.com/recipes/spaghetti_carbonara/',
    image: 'https://picsum.photos/seed/recipe1/200/200',
    instructions: 'Cook spaghetti, whisk eggs and cheese, toss with bacon and parsley.'
  },
  {
    id: 2,
    name: 'Chicken Fajitas',
    servings: 6,
    cookTime: '25 minutes',
    sampleLink: 'https://www.foodnetwork.com/recipes/tyler-florence/chicken-fajitas-recipe-1942908',
    image: 'https://picsum.photos/seed/recipe2/200/200',
    instructions: 'Marinate chicken, cook peppers and onions, serve with tortillas and toppings.'
  },
  {
    id: 3,
    name: 'Roasted Salmon with Citrus Salsa Verde',
    servings: 4,
    cookTime: '20 minutes',
    sampleLink: 'https://www.epicurious.com/recipes/food/views/roasted-salmon-with-citrus-salsa-verde-51262010',
    image: 'https://picsum.photos/seed/recipe3/200/200',
    instructions: 'Roast salmon, make salsa with herbs and citrus, serve with arugula.'
  },
  {
    id: 4,
    name: 'Beef Stroganoff',
    servings: 6,
    cookTime: '45 minutes',
    sampleLink: 'https://www.tasteofhome.com/recipes/beef-stroganoff/',
    image: 'https://picsum.photos/seed/recipe4/200/200',
    instructions: 'Cook beef and onions, stir in broth and mushrooms, serve with noodles.'
  },
  {
    id: 5,
    name: 'Vegetable Stir-Fry',
    servings: 4,
    cookTime: '15 minutes',
    sampleLink: 'https://www.delish.com/uk/cooking/recipes/a30600989/vegetable-stir-fry-recipe/',
    image: 'https://picsum.photos/seed/recipe5/200/200',
    instructions: 'Stir-fry vegetables and tofu, add soy sauce and honey, serve over rice.'
  }
];


export default App;
