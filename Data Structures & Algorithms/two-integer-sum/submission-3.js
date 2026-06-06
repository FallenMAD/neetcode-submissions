// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} target
//      * @return {number[]}
//      */
//     twoSum(nums, target) {
//         let sumOfTwo = 0;
//         const arrOfTwo = [];
//         for (let i = 0; i < nums.length; i++) {
//             for (let k = i + 1; k < nums.length; k++) {
//                 sumOfTwo = nums[i] + nums[k];
//                 if (sumOfTwo === target) {
//                     arrOfTwo.push(i, k)
//                 }
//             }
//         }

//         return arrOfTwo;
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
            const differences = target - nums[i];
            if (differences in obj) {
                return [obj[differences], i]
            }
            obj[nums[i]] = i
        }
        return;
    }
}
