class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // if (strs.length === 1) {
        //     return [strs];
        // }
        // if (strs.length < 1) {
        //     return strs;
        // }

        const strsM = new Map();

        for (let i = 0; i < strs.length; i++) {
            const el = strs[i].split('').sort().join('');
            console.log(el)
            if (strsM.has(el)) {
                strsM.get(el).push(strs[i]);
            } else {
                strsM.set(el, [strs[i]])
            }
        }

        const result = Array.from(strsM.values())

        return result;
    }
}
