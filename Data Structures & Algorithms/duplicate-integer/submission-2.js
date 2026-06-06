// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {boolean}
//      */
//     hasDuplicate(nums) {
//         for (let i = 0; i < nums.length; i++) {
//             for (let j = i + 1; j < nums.length; j++){
//                 if (nums[i] === nums[j]) {
//                     return true;
//                 }
//             }
//         }

//         return false;
//     }
// }

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const obj = nums.reduce((acc, value) => {
            acc[value] = ++acc[value] || 1;
            return acc;
        }, {})

        for (let key in obj) {
            if (obj[key] >= 2) {
                return true;
            }
        }

        return false;
    }
}
