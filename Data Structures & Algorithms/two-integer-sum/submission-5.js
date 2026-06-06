// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} target
//      * @return {number[]}
//      */
//     twoSum(nums, target) {
//         for (let i = 0; i < nums.length; i++) {
//             for (let j = i + 1; j < nums.length; j++) {
//                 if (nums[i] + nums[j] === target) {
//                     return [i, j]
//                 }
//             }
//         }
//     }
// }

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {};

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (diff in obj) {
                return [obj[diff], i]
            }
            obj[nums[i]] = i
        }
        return;
    }
}
