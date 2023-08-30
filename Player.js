class Player{
    constructor(name,symbol){
        this.name=name
        this.symbol=symbol
        
    }
    getSymbol()
    {
        return this.symbol
    }
    getName(){
        return this.name
    }
}
module.exports = Player