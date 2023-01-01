function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let a = 1; a < nums.length; a++) {
            if (nums[i] + nums[a] == target && i != a) {
                return [i, a]
            }
        }





    }



    return []
};
