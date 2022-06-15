export class TransactionModel{
    transaction_id:number;
    amount:number;
    
constructor(
    transaction_id:number,
    amount:number,
){ 
     this.transaction_id = transaction_id;
     this.amount = amount;
     ;
}
}  