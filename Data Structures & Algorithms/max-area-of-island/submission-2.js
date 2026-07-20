class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    constructor(){
        this.max = 0;
        this.size = 0;
    }
    maxAreaOfIsland(grid) {
        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[r].length; c++){
                if(grid[r][c] === 1){
                    this.size = 0;
                    this.dfs(grid,r,c,0)
                }
            }
        }
        return this.max;
    }

    dfs(grid, r, c){
        let ROW = grid.length;
        let COL = grid[0].length;
        if(Math.min(r,c) < 0 ||
            r === ROW || c === COL ||
            grid[r][c] === 0){
                this.max = Math.max(this.max, this.size)
                return
        }
        grid[r][c] = 0;
        this.size ++;
        this.dfs(grid, r + 1, c)
        this.dfs(grid, r - 1, c)
        this.dfs(grid, r, c + 1)
        this.dfs(grid, r, c - 1)
    }
}
