class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const map = []
        let fleet = 0
        const stack = []
        let max = 0
        for(let i = 0 ; i < position.length ; i++) {
            map.push([position[i],((target-position[i])/speed[i])])
        }
        map.sort((a,b) => b[0] - a[0])
        console.log(map)
        if(map[0]) {
            fleet++
            stack.push(map[0])
            max = Math.max(max,map[0][1])

        }
        for(let i = 1 ; i < map.length ; i++) {
            if(max < map[i][1]){//map[i][1] > map[i-1][1]) {
                fleet++
                max = map[i][1]
            }
        }
        return fleet
    }
}
