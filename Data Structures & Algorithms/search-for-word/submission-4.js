class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    constructor(){
        this.result = false;
    }
    exist(board, word) {
        let result = false;
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(word.charAt(0) === board[i][j]){
                    this.helper(i,j,"",board,word, new Set());
                }
            }
        }
        
        return this.result;
    }

    helper(row, col, current, board, word, visited){
        
        let v = new Set(visited);
        if(row >= board.length || col >= board[0].length  
        || row < 0 || col < 0 || v.has(row + "," + col)){
            return;
        }
        
        if(current.length > word.length){
            return;
        }

        current += board[row][col];
        if(current.charAt(current.length - 1) !== word.charAt(current.length - 1)) return;

        v.add(row + "," + col);


        if(current === word){
            this.result = true;
            return;
        }

        this.helper(row + 1, col, current , board, word, v)
        this.helper(row - 1, col, current , board, word, v)
        this.helper(row, col + 1, current, board, word, v)
        this.helper(row, col - 1, current, board, word, v)
    }
}
