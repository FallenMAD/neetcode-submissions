class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};


        for (let i = 0; i < nums.length; i++) {
            if (!obj[nums[i]]) {
                obj[nums[i]] = 1;
            } else {
                obj[nums[i]]++; 
            }
        }

        const arr = [];

        const sortedObj = Object.entries(obj).sort((a, b) => b[1] - a[1]).slice(0, k);
        sortedObj.forEach((item) => {
            arr.push(item[0])
        });

        return arr;
    }
}
