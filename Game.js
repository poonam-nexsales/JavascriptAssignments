const Board = require("./Board")
const Player= require("./Player")


class Game{
    #players
    #board
    #turn
    #isGameEnded
    #gameStatus

    constructor(player0Name,player1Name){
        this.#players = [new Player(player0Name,'X'),
        new Player(player1Name,'O')]
       // this.Player=[new Player(player1Name,'Y')]
        this.#board = new Board()
        this.#turn = 0 
        this.#isGameEnded = false
        this.#gameStatus = " "
    }
//for validation of players name
static newGame(player0Name,player1Name){
    if (typeof player0Name != 'string' || typeof player1Name != 'string' || player0Name==player1Name)
     {
        return [null,'Invalid Player names']
    }
    return[new Game(player0Name,player1Name),'Game Object Created']
}
play(cellnumber)
{
    if (this.#isGameEnded ) {
    return this.#gameStatus    
    }
    if (typeof cellnumber != 'number') {
        return 'invalid cellnumber'
    }
    if (cellnumber>8 || cellnumber < 0) {
        return 'Invalid Cell Number'
    }
    if (!this.#board.isEmpty(cellnumber)) {
        return 'cell not empty'
    }
    let currentPlayer = this.#players[this.#turn % 2]
    console.log("currentPlayer",currentPlayer.getSymbol());
    // this.#board.markCell(cellnumber,currentPlayer.getSymbol())
    this.#board.markCell(cellnumber,currentPlayer.getSymbol())
    console.log("currentPlayer1");
    this.#turn++
    console.log("turn",this.#turn);
    this.#board.printBoard()
    console.log("currentPlayer3");

    //analyse board
    let winningSymbol = this.#board.analyseBoard()
    if (winningSymbol == 'X') 
    {
        
    this.#isGameEnded = true
    this.#gameStatus = `${this.#players[0].getName()} is the winner`
    return `${this.#players[0].getName()} is the winner`
    }  
    else if (winningSymbol == 'O') {
        
        //this.#isGameEnded = true
       // this.#gameStatus = `${this.#players[1].getName()} is the winner`
        return `${this.#players[1].getName()} is the winner`
    }
    let isGameDraw = this.#board.isGameDraw()
    if (isGameDraw) {
        
       // this.#isGameEnded = true
        this.#gameStatus = 'Game ended as a Draw'
        return "Game ended as a Draw"
    }
    return "Continue Playing"
}
    
}
module.exports=Game