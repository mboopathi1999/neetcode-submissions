class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = new Map()
        const col = new Map()
        const square = new Map()
        for(let i = 0 ; i < 9 ; i++) {
            for(let j = 0 ; j < 9 ; j++) {
                if(board[i][j] === '.') continue
                const value = board[i][j]
                const key = `[${Math.floor(i/3)},${Math.floor(j/3)}]`
                if(row.has(i) && row.get(i).has(value) ||
                   col.has(j) && col.get(j).has(value) ||
                   square.has(key) && square.get(key).has(value)) {
                    return false
                } else {
                    if(!row.has(i)){
                        row.set(i, new Set([value]))
                    }
                    if(!col.has(j)){
                        col.set(j, new Set([value]))
                    }
                    if(!square.has(key)){
                        square.set(key, new Set([value]))
                    }
                    row.set(i, row.get(i).add(value))
                    col.set(j, col.get(j).add(value))
                    square.set(key, square.get(key).add(value))
                }
            }
        }
        return true
    }
}
