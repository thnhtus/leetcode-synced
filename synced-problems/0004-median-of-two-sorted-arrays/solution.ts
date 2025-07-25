function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = nums1.concat(nums2);

    merged.sort((a, b) => a - b);

    const pivotIndex = Math.floor(merged.length / 2);

    if (!!(merged.length % 2)) {
        return merged[pivotIndex];
    }

    return (merged[pivotIndex - 1] + merged[pivotIndex]) / 2;
};
