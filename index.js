var recipes = new Object()












var recipes2 = Object.assign({}, recipes)



function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({recipes}, recipes2)
  return recipes
}













function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}




var newRecipes = Object.assign({}, recipes)

function deleteFromObjectByKey(object, key){
  object = newRecipes
  delete newRecipes.key
  return newRecipes
}



function destructivelyDeleteFromObjectByKey(object, key){
  delete recipes.key
  return recipes
}