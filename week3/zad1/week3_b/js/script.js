const calculateEntropy = () => {
    const inputText = document.getElementById('inputText').value;
    const entropy = calculateShannonEntropy(inputText);
    const formattedEntropy = entropy.toFixed(2);

    displayResult(formattedEntropy);
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

const displayResult = entropy => {
    const outputResult = document.getElementById('outputResult');
    outputResult.innerText = 'Энтропия: ' + entropy;
};
