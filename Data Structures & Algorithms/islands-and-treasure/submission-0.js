class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let INF = 2147483647
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                if(grid[i][j] === INF){
                    this.bfs(grid,i,j)
                }
            }
        }
        return grid;
    }

    bfs(grid, x, y){
        if(grid.length === 0 || grid[0].length === 0) return;
        let queue = [] 
        let visited = new Set()

        queue.push([x,y])
        visited.add(x+","+y)
        let length = 0;
        while(queue.length > 0){
            let s  = queue.length
            for(let i = 0; i < s; i++){
                let curr = queue.shift()
                let r = curr[0]
                let c = curr[1]

                if(grid[r][c] === 0){
                    grid[x][y] = length;
                    return;
                }

                let possibilities = [[0,1],[0,-1],[1,0],[-1,0]]
                for(let p of possibilities){
                    let newR = r + p[0]
                    let newC = c + p[1]
                    if(this.inValidPoint(newR, newC, grid,visited)){
                        visited.add(newR+","+newC)
                        queue.push([newR,newC])
                    }else{
                        continue;
                    }
                }
  
            }
            length++;
        }
    }

    inValidPoint(r,c, grid, visited){
        let ROW = grid.length;
        let COL = grid[0].length;
        if(Math.min(r,c) < 0 || r >= ROW || c >= COL || grid[r][c] === -1 || visited.has(r+","+c)) return false;
        return true;
    }
}
