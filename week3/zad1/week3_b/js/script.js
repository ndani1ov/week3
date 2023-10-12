const countOccurrences = () => {
    const searchString = document.getElementById('searchString').value;
    const inputStrings = document.getElementById('inputStrings').value.split('\n');

    let count = 0;
    inputStrings.forEach(text => {
        count += countOccurrencesInString(text, searchString);
    });

    displayResult(count);
};

const countOccurrencesInString = (text, searchString) => {
    let count = 0;
    let position = text.indexOf(searchString);

    while (position !== -1) {
        count++;
        position = text.indexOf(searchString, position + 1);
    }

    return count;
};

const displayResult = count => {
    const outputResult = document.getElementById('outputResult');
    outputResult.innerText = 'Количество вхождений: ' + count;
};

const calculateEntropy = () => {
    const inputText = document.getElementById('inputText').value;
    const entropy = calculateShannonEntropy(inputText);
    const formattedEntropy = entropy.toFixed(2);

    displayEntropyResult(formattedEntropy);
};

const calculateShannonEntropy = text => {
    const characters = {};
    const textLength = text.length;

    for (let i = 0; i < textLength; i++) {
        const char = text[i];
        characters[char] = characters[char] ? characters[char] + 1 : 1;
    }

    let entropy = 0;
    for (const char in characters) {
        const probability = characters[char] / textLength;
        entropy -= probability * Math.log2(probability);
    }

    return entropy;
};

const displayEntropyResult = entropy => {
    const outputResult = document.getElementById('outputResult');
    outputResult.innerText = 'Энтропия: ' + entropy;
};