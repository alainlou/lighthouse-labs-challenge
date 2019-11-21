const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for(let recipe of recipes) {
    let i = recipe.ingredients
    if(bakeryA.includes(i[0]) && bakeryB.includes(i[1])
    || bakeryA.includes(i[1]) && bakeryB.includes(i[0])) {
      return recipe.name
    }
  }
  return null
}
