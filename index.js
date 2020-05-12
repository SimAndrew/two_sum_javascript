function twoSum(numArray, sum) {
    var pairs = [];
    var hashTable = [];

    for (var i = 0; i < numArray.length; i++){
     var currNum = numArray[i];
     var counterpart = sum - currNum;
     if (hashTable.indexOf(counterpart) !== -1) {
         pairs.push([ currNum, counterpart ]);
     }
     hashTable.push(currNum);
    }
    return pairs;
}
twoSum([1, 6, 4, 5, 3, 3 ], 7); // [ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ]

//Two sum algorithm take in two parameters, one will be a numbers array, another will be a number. This algorithm will return an array with every pair of numbers from array.
