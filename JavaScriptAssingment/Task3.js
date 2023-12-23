function findCommonElements(arr1, arr2) {
    var commonArray = [];
  
    // Iterate through each element in the first array
    for (var i = 0; i < arr1.length; i++) {
      var currentElement = arr1[i];
  
      // Check if the current element is present in the second array
      for (var j = 0; j < arr2.length; j++) {
        if (currentElement === arr2[j]) {
          // If found, add it to the commonArray
          commonArray.push(currentElement);
          break; // Break the inner loop once a match is found
        }
      }
    }
  
    return commonArray;
  }
  
  // Example usage:
  var array1 = [1, 2, 3, 4, 5];
  var array2 = [3, 4, 5, 6, 7];
  
  var commonElements = findCommonElements(array1, array2);
  console.log(commonElements);
  