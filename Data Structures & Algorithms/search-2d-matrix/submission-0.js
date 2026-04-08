class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let i = 0
        let j = matrix[0].length - 1
        while(i < matrix.length && j >= 0) {
            const val = matrix[i][j]
            console.log(val)
            if(val === target) return true
            if(val < target) {
                i++
            } else {
                j--
            }
        }
        return false
    }
}
