function isUint32(n: number): boolean {
    return Number.isInteger(n) && n >= -2147483648 && n <= 2147483647;
};

function isNegative(str: string): boolean {
    return str && str.startsWith("-");
}

function reverse(x: number): number {

    const str = String(x);

    const strArr = str.split("").reverse();

    let result = 0;

    if (isNegative(str)) {
        strArr.pop();
        result = -Number(strArr.join(""));
    } else {
        result = Number(strArr.join(""));
    }


    return isUint32(result) ? result : 0;
};
