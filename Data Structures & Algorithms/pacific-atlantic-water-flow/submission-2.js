class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let pacific = new Set()
        let atlantic = new Set()
        let result = []

        for(let r = 0; r < heights.length; r++) this.dfs(heights,r,heights[0].length - 1, atlantic, heights[r][heights[0].length - 1])
        for(let c = 0; c < heights[0].length; c++) this.dfs(heights,heights.length - 1,c, atlantic,heights[heights.length - 1][c])

        for(let r = 0; r < heights.length; r++) this.dfs(heights,r,0, pacific,heights[r][0])
        for(let c = 0; c < heights[0].length; c++) this.dfs(heights,0,c, pacific,heights[0][c])

        for(let p of pacific){
            if(atlantic.has(p)){
                let cor  = p.split(",")
                let r = parseInt(cor[0])
                let c = parseInt(cor[1])
                result.push([r,c])
            }
        }

        return result
    }

    dfs(matrix, r, c, visited, prev){
        let ROW = matrix.length
        let COL = matrix[0].length

        if(Math.min(r,c) < 0 ||
            r >= ROW || c >= COL
            || visited.has(r+","+c)  
            || matrix[r][c] < prev
            ){
                return;
            }
        visited.add(r+","+c)
        this.dfs(matrix, r - 1, c,visited,matrix[r][c])
        this.dfs(matrix, r + 1, c,visited,matrix[r][c])
        this.dfs(matrix, r , c - 1,visited,matrix[r][c])
        this.dfs(matrix, r , c + 1,visited,matrix[r][c])
    }

}
