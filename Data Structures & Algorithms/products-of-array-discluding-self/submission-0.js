class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let outerIndex = 0;
        let sum = 1;
        const result = []

        while (outerIndex < nums.length) {
            for (let i = 0; i < nums.length; i++) {
            if (outerIndex === i) {
                continue;
            }

            sum *= nums[i]
            }

            result.push(sum)
            sum = 1
            outerIndex += 1;
        }

        return result;
    }
}
