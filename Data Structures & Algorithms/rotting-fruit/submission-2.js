class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        // i can count fresh at the start and then return if there are any left
        // also no need for visited i can just mark it in place
        let POSS = [[0,1],[0,-1],[1,0],[-1,0]]
        let ROTTTEN = 2
        let FRESH = 1
        if(grid == null || grid.length === 0) return -1; 
        let queue = []
        let visited = new Set()

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === ROTTTEN){
                    queue.push([r,c])
                    visited.add(r+","+c)
                } 
            }
        }
        let length = 0;
        while(queue.length > 0){
            let s = queue.length
            for(let v = 0; v< s ; v++){
                let current = queue.shift()
                console.log(current)
                let r = current[0]
                let c = current[1]
                grid[r][c] = ROTTTEN
                for(let p of POSS){
                    let newr = r + p[0]
                    let newc = c + p[1]
                    if(this.isValid(visited,grid,newr,newc)){
                        visited.add(newr+","+newc)
                        queue.push([newr,newc])
                    }
                }
            }
            if(queue.length > 0){
                length++;
            }
        }
        console.log(grid)
        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === FRESH) return -1
            }
        }

        return length;

    }

    isValid(visited,grid,r,c){
        let ROW = grid.length
        let COLUMN = grid[0].length
        let s = r+","+c
        if(
            r >= ROW || c >= COLUMN
            ||  r < 0 || c < 0
            || visited.has(s) || grid[r][c] === 0
        ) {
            return false
            }
        else {
            return true;
            }
    }
}
