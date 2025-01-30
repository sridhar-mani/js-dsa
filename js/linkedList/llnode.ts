export default class llnode<T>{
    value: T;
    next: llnode<T> | null;

    constructor(value:T,next: llnode<T>|null=null){
        this.value=value;
        this.next=next
    }

    toString(callbackFunc?:(value:T)=>string):string{
        return callbackFunc?callbackFunc(this.value):`${this.value}`;
    }
}