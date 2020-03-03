export function kata3 (n, m) {
    if (m >= n >= 1) {
        const range = Array.from({length: m - n + 1}, (_, i) => i + n);
        const results = [];
        
        range.forEach(number => {
            const numberResult = isSquare(number);
            numberResult.isSquare ? results.push([number, numberResult.sum]) : null;
        });

        return results;
    } else {
        return null;
    }
};

function getDividers(number) {
    let dividers = [];
    
    for (let i = 1; i<= number; i++) {
        number % i === 0 ? dividers.push(i) : null;
    };

    return dividers;
};

function isSquare(number) {
    const numberDividers = getDividers(number);
    let numberSquares = [];
    let sumSquares = 0;

    numberDividers.forEach(num => numberSquares.push(Math.pow(num, 2)));
    numberSquares.forEach(square => sumSquares += square);

    const numberResult = {
        isSquare: Number.isInteger(Math.sqrt(sumSquares)),
        sum: sumSquares,
    };

    return numberResult;
};