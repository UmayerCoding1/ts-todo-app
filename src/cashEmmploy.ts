
type NodeTypes = {
  title: string;
  description: string;
}


const newTodo: NodeTypes = {
 title : 'First Expens',
 description: 'Alu, Mula, Fulkofi'
}


class CashEmmploy {
    constructor(public name: string, public jobAge: number, protected selary: number){}


    CalculatThisYearSelary(){
        return this.selary * 12 ;
    }
    CalculatSelary(){
      let totslMonth = this.jobAge * 12;

      const totalSelary = totslMonth * this.selary;

      return totalSelary;
    }
}


const EmUmayer = new CashEmmploy('Umayer', 2,15000);

console.log(EmUmayer.CalculatSelary());
console.log(EmUmayer.CalculatThisYearSelary());