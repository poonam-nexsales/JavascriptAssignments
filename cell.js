class cell{
    constructor() {
        this.mark= "e"
    }
    isEmpty() {
        return this.mark =='e'
    }
    markCell(symbol) {
        this.mark = symbol
    }
    getMark(){ 
        return this.mark
    }

}
module.exports=cell 