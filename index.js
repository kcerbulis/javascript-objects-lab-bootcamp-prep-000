var recipes = new Object()













var 1object = Object.assign({}, object)


function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  Object.assign({object},{key: value})
  return object
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