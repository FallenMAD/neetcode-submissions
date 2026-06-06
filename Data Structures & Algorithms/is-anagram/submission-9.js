class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const mapS = new Map();
        const mapT = new Map();
        const arr = [];

        for (let str of s) {
            mapS.set(str, (mapS.get(str) || 0) + 1)
        }
        for (let str of t) {
            mapT.set(str, (mapT.get(str) || 0) + 1)
        }

        for (let [key, value] of mapS) {
            if (mapT.has(key) && value === mapT.get(key)) {
                arr.push(true);
            } else {
                arr.push(false);
            }
        }
               
        return arr.every((item) => item === true)
    }
}
