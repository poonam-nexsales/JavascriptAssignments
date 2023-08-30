const cell = require("./cell")


class Board{
    constructor() {
        this.cell =[new cell(),new cell(),new cell(),new cell(),new cell(),new cell(),new cell(),new cell(),new cell()]
    }
    isEmpty(cellNumber)
    {
        return this.cell[cellNumber].isEmpty()
    }
    markCell(cellNumber,symbol)
    {
        // this.cell[cellNumber].markCell(symbol)
        this.cell[cellNumber].markCell(symbol)
    }
    printBoard()
    {
        console.log(this);
    }
    isGameDraw()
    {
        for (let index = 0; index < this.cell.length; index++) {
            if (this.cell[index].isEmpty()) {
                return false
                break
            } 
        }
      return true
    }
    analyseBoard()
    {
        if (this.cell[0].getMark() == this.cell[1].getMark() && this.cell[0].getMark() == this.cell[2].getMark() && !this.cell[0].isEmpty())
         {
            return [this.cell[0].getMark()]
        }
        if (this.cell[0].getMark() == this.cell[3].getMark() && this.cell[0].getMark() == this.cell[6].getMark() && !this.cell[0].isEmpty())
        {
           return [this.cell[0].getMark()]
        }
        if (this.cell[1].getMark() == this.cell[4].getMark() && this.cell[0].getMark() == this.cell[8].getMark() && !this.cell[1].isEmpty())
        {
           return [this.cell[1].getMark()]
        }
        if (this.cell[1].getMark() == this.cell[4].getMark() && this.cell[1].getMark() == this.cell[7].getMark() && !this.cell[1].isEmpty())
        {
           return [this.cell[1].getMark()]
        }
        if (this.cell[2].getMark() == this.cell[5].getMark() && this.cell[1].getMark() == this.cell[8].getMark() && !this.cell[2].isEmpty())
        {
           return [this.cell[2].getMark()]
        }
        if (this.cell[3].getMark() == this.cell[4].getMark() && this.cell[3].getMark() == this.cell[5].getMark() && !this.cell[3].isEmpty())
        {
           return [this.cell[3].getMark()]
        }
        if (this.cell[6].getMark() == this.cell[7].getMark() && this.cell[6].getMark() == this.cell[8].getMark() && !this.cell[6].isEmpty())
        {
           return [this.cell[6].getMark()]
        }
        
       /* if (this.cell[0].getMark() == this.cell[1].getMark() && this.cell[0].getMark() == this.cell[2].getMark() && !this.cell[0].isEmpty())
         {
            return [this.cell[0].getMark()]
        }*/
        return 'continue '
    }
}
module.exports=Board