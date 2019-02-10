var recipes = new Object()












var recipes2 = new Object()



function updateObjectWithKeyAndValue(object, key, value){
  recipes2 = object
  recipes2[key] = value
  return recipes2
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