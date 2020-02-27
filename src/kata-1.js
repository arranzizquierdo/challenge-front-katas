export function kata1 (number) {
    const sortedNumber = number.toString().split('').sort((a, b) => {
        return b - a;
    });

    return sortedNumber.join('');
}
