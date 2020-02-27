export function kata3 (n, m) {
    const range = Array.from({length: m - n + 1}, (_, i) => i + n);

    const results = [];
    
    range.forEach(number => {
        const numberRresult = isSquare(number);
        numberRresult.isSquare ? results.push([number, numberRresult.sum]) : null;
    });

    return results;
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

    const numberRresult = {
        isSquare: Number.isInteger(Math.sqrt(sumSquares)),
        sum: sumSquares,
    };

    return numberRresult;
};