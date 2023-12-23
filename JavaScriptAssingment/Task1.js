var inputArray = [1, 2, 3, 4, 2, 3, 5];
var resultArray = getUniqueElements(inputArray);
console.log(resultArray);

function getUniqueElements(arr) {
    var uniqueArray = [];  
    for (var i = 0; i < arr.length; i++) {
      var currentElement = arr[i];
      var isUnique = true;
      for (var j = 0; j < uniqueArray.length; j++) {
        if (currentElement === uniqueArray[j]) {
          isUnique = false;
          break;
        }
      }
      if (isUnique) {
        uniqueArray.push(currentElement);
      }
    }
  
    return uniqueArray;
  }

  