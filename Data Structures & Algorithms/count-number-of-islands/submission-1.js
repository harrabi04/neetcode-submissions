class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    constructor(){
        this.sol = 0;
    }
    numIslands(grid) {
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[i].length; j++){
                if(grid[i][j] === "1"){
                    this.dfs(grid,i,j)
                    this.sol ++;
                }
           }
        }
        return this.sol;
    }

    dfs(grid, r, c){
        let ROW = grid.length;
        let COL = grid[0].length;
        let curr = r + "," + c;
        console.log(curr)
        if(
           r < 0 || c < 0  ||
           r === ROW || c === COL ||
           grid[r][c] === "0" ) return;
    
        grid[r][c] = "0";

        this.dfs(grid, r + 1, c)
        this.dfs(grid, r - 1, c) 
        this.dfs(grid, r , c + 1)
        this.dfs(grid, r , c - 1)
    }
}
