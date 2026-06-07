class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = new Map();
        const columnMap = new Map();
        const boxMap = new Map();
        const columnArray = [];
        const sliceByNine = 9;
        const boxes = Array.from({ length: 9 }, () => []);
        
        for(let i = 0; i < board.length; i++) {
          rowMap.set(i, this.hasDuplicate(board[i].filter(item => item !== '.')));
          
          for (let j = 0; j < board[i].length; j++) {
            // j is current loop, i is wrapper loop  here we take only 1 element of board[i], 
            // because we want to create a column array
            
            // here is third case => box
            const placeInBlock = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            boxes[placeInBlock].push(board[i][j]);
            columnArray.push(board[j][i]);

            for (let i = 0; i < columnArray.length; i += sliceByNine) {
              const array = columnArray.slice(i, i + sliceByNine);
              columnMap.set(i / sliceByNine, this.hasDuplicate(array.filter(item => item !== '.')));
            }
          }
        }

        for (let i = 0; i < boxes.length; i++) {
          boxMap.set(i, this.hasDuplicate(boxes[i].filter(item => item !== '.')))
        }

        const rowHasDuplicates = Array.from(rowMap.values()).some(Boolean);
        const columnHasDuplicates = Array.from(columnMap.values()).some(Boolean);
        const boxHasDuplicates = Array.from(boxMap.values()).some(Boolean);

        if (rowHasDuplicates || columnHasDuplicates || boxHasDuplicates) {
          return false;
        }

        return true;
    }
    
    hasDuplicate(nums) {
        const map = new Map();

        for (let num of nums) {
            if (map.has(num)) {
                return true;
            }
            map.set(num)
        }

        return false;
    }
}
