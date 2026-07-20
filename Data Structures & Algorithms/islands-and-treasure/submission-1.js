class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let visited = new Set();
        let queue = []
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                if(grid[i][j] === 0){
                    queue.push([i,j])
                    visited.add(i+","+j)
                }
            }
        }

        let distance = 0;

        while(queue.length > 0){
            let size = queue.length
            for(let i = 0; i < size; i++){
                let current = queue.shift()
                let r = current[0]
                let c = current[1]
                grid[r][c] = distance
                let possibilities = [[0,1],[0,-1],[1,0],[-1,0]]
                for(let p of possibilities){
                    let newR = r + p[0]
                    let newC = c + p[1]
                    if(this.inValidPoint(newR, newC, grid,visited)){
                        visited.add(newR+","+newC)
                        queue.push([newR,newC])
                    }
                }
            }
            distance++
        }   
        return grid
    }
    
    inValidPoint(r,c, grid, visited){
            let ROW = grid.length;
            let COL = grid[0].length;
            if(Math.min(r,c) < 0 || r >= ROW || c >= COL || grid[r][c] === -1 || visited.has(r+","+c)) return false;
            return true;
     }
     
}
