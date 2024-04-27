function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

function countCharacters(inputString) {
    return inputString.length;
}

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function filterArray(arr, condition) {
    return arr.filter(condition);
}



function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function fibonacciSequence(numTerms) {
    const sequence = [0, 1];
    for (let i = 2; i < numTerms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
