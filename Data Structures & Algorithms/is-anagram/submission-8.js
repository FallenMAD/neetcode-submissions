class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // const resS = s.split('').reduce((acc, value) => {
        //     acc[value] = ++acc[value] || 1;
        //     return acc;
        // }, {})

        // const resT = t.split('').reduce((acc, value) => {
        //     acc[value] = ++acc[value] || 1;
        //     return acc;
        // }, {}) 

        // for (let keyS in resS) {
        //     if (!(keyS in resT) || resS[keyS] !== resT[keyS]) {
        //         return false;
        //     }            
        // }

        // return true;

        // const sortS = s.split('').sort();
        // const sortT = t.split('').sort();
        // const arr = [];
        
        // console.log(sortS)
        
        // for (let i = 0; i < sortS.length; i++) {
        //     for (let j = 0; j < sortT.length; j++)
        //     if (sortS[i] !== sortT[j]) {
        //         arr.push(false)
        //     } else {
        //         arr.push(true)
        //     }
        // }
        
        // return arr.every((item) => item === true);

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

        for (let [key, value] of mapT) {
            if (mapS.has(key) && value === mapS.get(key)) {
                arr.push(true);
            } else {
                arr.push(false);
            }
           
        }

        console.log(arr)
        
        return arr.every((item) => item === true)
    }
}
