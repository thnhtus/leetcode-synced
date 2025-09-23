function isPalindrome(x: number): boolean {
    const reverse = String(x).split("").reverse().join('');
    console.log(reverse);

    return Boolean(x === Number(reverse));
};
