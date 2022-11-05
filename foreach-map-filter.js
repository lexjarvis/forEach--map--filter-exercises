// Write a function called doubleValues 
function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(val) {
        newArr.push(val * 2);
    });
    return newArr;
}

// Write a function called onlyEvenValues
function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
        if (val % 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;
}

// write a function called showFirstAndLast
function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function(val) {
        newArr.push(val[0] + val[length =1]);
    });
    return newArr;
}

// Write a function called addKeyAndValue 
function addKeyAndValue(arr,key,value){
    arr.forEach(function(val) {
        val[key] = value;
      });
      return arr;
}

// Write a function called vowelCount
function vowelCount(str){
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
splitArr.forEach(function(letter) {
    let lowerCasedLetter = letter.toLowerCase()
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
} 


// Write a function called doubleValuesWithMap
function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
      });
    }

// Write a function called valTimesIndex 
function valTimesIndex(arr){
    return arr.map(function(val, idx) {
        return val * idx;
      });  
}

// Write a function called extractKey 
function extractKey(arr, key){
    return arr.map(function(val) {
        return val[key];
      });
}

// Write a function called extractFullName 
function extractFullName(arr){
    function extractFullName(arr) {
        return arr.map(function(val) {
          return val.first + " " + val.last;
        });
      }        
}

// Write a function called filterByValue 
function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key] !== undefined;
      });
}

// Write a function called find 
function find(arr, searchValue) {
    return arr.filter(function(val) {
        return val === searchValue;
      })[0];
}

// Write a function called findInObj
function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
        return val[key] === searchValue;
      })[0];
}

// Write a function called removeVowels 
function removeVowels(str) {
    function removeVowels(str) {
        const vowels = "aeiou";
        return str
          .toLowerCase()
          .split("")
          .filter(function(val) {
            return vowels.indexOf(val) === -1;
          })
          .join("");
    }
}

// Write a function called doubleOddNumbers 
function doubleOddNumbers(arr) {
    return arr
    .filter(function(val) {
      return val % 2 !== 0;
    })
    .map(function(val) {
      return val * 2;
    });
}
