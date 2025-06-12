const newTodo = {
    title: 'First Expens',
    description: 'Alu, Mula, Fulkofi'
};
class CashEmmploy {
    constructor(name, jobAge, selary) {
        this.name = name;
        this.jobAge = jobAge;
        this.selary = selary;
    }
    CalculatThisYearSelary() {
        return this.selary * 12;
    }
    CalculatSelary() {
        let totslMonth = this.jobAge * 12;
        const totalSelary = totslMonth * this.selary;
        return totalSelary;
    }
}
const EmUmayer = new CashEmmploy('Umayer', 2, 15000);
console.log(EmUmayer.CalculatSelary());
console.log(EmUmayer.CalculatThisYearSelary());
