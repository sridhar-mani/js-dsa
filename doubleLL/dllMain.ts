import ComparerFunc from '../util/compareFuncs';
import DoubleLLNode from './dllNode';

export default class DoubelLinkedList<T>{
    private compare:ComparerFunc<T>;
    private head:DoubleLLNode<T>|null;
    private tail:DoubleLLNode<T>|null;
    private length:number;

    constructor(compareFunc){
        this.head= null
        this.tail=null
        this.compare=new ComparerFunc<T>(compareFunc)
    }
}