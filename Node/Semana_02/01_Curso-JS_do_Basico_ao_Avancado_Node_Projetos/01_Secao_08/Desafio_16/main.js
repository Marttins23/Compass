function sumUniqueNumbers(numberArray) {
    let countNumbersOccurrencesObject = {};
    let totalSum = 0;
    for(let i = 0; i < numberArray.length; i++) {
        if(countNumbersOccurrencesObject[numberArray[i]] == undefined) {
            countNumbersOccurrencesObject[numberArray[i]] = 1;
        } else {
            countNumbersOccurrencesObject[numberArray[i]] += 1;
        }
    }
    
    for (var value in countNumbersOccurrencesObject) {
        let occurences = countNumbersOccurrencesObject[value];
        if (occurences === 1) {
            totalSum += parseInt(value);
        }
    }

    return totalSum;
}

sumUniqueNumbers([3, 5, 7, 10, 34, 3]);