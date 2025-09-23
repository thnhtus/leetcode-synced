function maxSum(nums: number[]): number {

    const positiveArr = Array.from(new Set(nums.filter(item => item > 0)));

    return !positiveArr.length ? Math.max(...nums) : positiveArr.reduce((prev, current) => prev + current, 0);
};
