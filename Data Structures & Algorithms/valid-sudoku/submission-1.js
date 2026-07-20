class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let validation = new Set();
        for(let x = 0; x < board.length; x++){
            for(let y = 0; y < board[x].length; y++){
                if(board[x][y] === ".") continue;
                let row = board[x][y] + " is in row " + x ;
                let column = board[x][y] + " is in column " + y ;
                let box = board[x][y] + " is in box " + + Math.floor(x/3) +  Math.floor(y/3);
                if(validation.has(row) || validation.has(column) || validation.has(box)) return false;
                else{
                    validation.add(row);
                    validation.add(column);
                    validation.add(box);
                }
            }
        }
        return true;
    }
}
