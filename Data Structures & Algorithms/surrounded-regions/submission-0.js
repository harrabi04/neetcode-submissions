class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        for(let i = 0; i < board.length; i++){
            if(board[i][0] === 'O'){
                this.dfs(board,i,0)
            }
        }
        for(let i = 0; i < board.length; i++){
            if(board[i][board[0].length - 1] === "O"){
                this.dfs(board,i,board[0].length - 1)
            }
        }
        for(let i = 0; i < board[0].length; i++){
            if(board[0][i] === "O"){
                this.dfs(board,0,i)
            }
        }
        for(let i = 0; i < board[0].length; i++){
            if(board[board.length - 1][i] === "O"){
                this.dfs(board,board.length - 1,i)
            }
        }
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                if(board[i][j] === "O"){
                    board[i][j] = "X"
                }
                else if(board[i][j] === '.'){
                    board[i][j] = "O"
                }
            }
        }
        return board;
    }

    dfs(board,i,j){
        let ROW = board.length
        let COL = board[0].length
        if(Math.min(i,j) < 0
         || i >= ROW || j >= COL
         || board[i][j] !== "O" ){
            return;
         }
        board[i][j] = '.'
         
    
         this.dfs(board,i + 1, j)
         this.dfs(board,i - 1, j)
         this.dfs(board,i, j + 1)
         this.dfs(board,i, j - 1)
    }
}
