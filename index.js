var recipes = new Object()












var recipes2 = Object.assign({}, recipes)



function updateObjectWithKeyAndValue(object, key, value){
  recipes = object
  Object.assign({recipes},{key: value})
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