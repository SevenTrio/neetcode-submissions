class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let mPointer = m - 1;
        let nPointer = n - 1;

        let i = nums1.length - 1;

        while (mPointer >= 0 && nPointer >= 0) {
            if (nums1[mPointer] > nums2[nPointer]) {
                nums1[i] = nums1[mPointer];
                mPointer--;
            } else {
                nums1[i] = nums2[nPointer];
                nPointer--;
            }
            i--;
        }

        while (nPointer >= 0) {
            nums1[i] = nums2[nPointer];
            nPointer--;
            i--;
        }
    }
}
