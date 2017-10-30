// Code your solution in this file
function findMatching(array, name) {
  return array.filter(function(element) {
    return element.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(array, string) {
  return array.filter(function(element){
    const eleSliced = element.slice(0, string.length)
    if (eleSliced === string) {
      return element;
    }
  });
}

function matchName(array, string) {
  return array.filter(function(element) {
    return element['name'] === string;
  });
}
