import CompareFunc from '../util/compareFuncs'
import llnode from './llnode';

export default class linkedList<T>{
    private compare: CompareFunc<T>;
    private head: llnode<T> | null;
    private tail: llnode<T> | null; 
    private length: number;
    constructor(compareFunc?: CompareFunc<T>){
        this.compare = compareFunc || new CompareFunc<T> ;
        this.head = null;
        this.tail=null
        this.length = 0;
    }

    public append(value: T):this{
        const newNode = new llnode<T>(value);
        if(!this.head){
            this.head = this.tail= newNode

        }else if(this.tail){
            
                this.tail.next = newNode;
                this.tail = newNode;
             
        }
        this.length++
        return this
    }

    public prepend(value: T):this{
        const newNode = new llnode<T>(value,this.head);
        this.head = newNode;

        if(!this.tail){
            this.tail = newNode
        }
        this.length++
        return this
    }

    public insert(value:T,indexTo):this{
        const ind = indexTo <0 ? 0 : indexTo;
        if(indexTo===0){
            this.prepend(value)
        }else if(indexTo === (this.length-1)){
            this.append(value)
        }else{
            let temp = 0;
            let currentNode = this.head;
            const newNode = new llnode(value);
            while(temp!==indexTo && currentNode){
                currentNode = currentNode?.next;
                temp++;
            }

            if(currentNode){
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            }else{
                if(this.tail){
                    this.tail.next = newNode;
                    this.tail = newNode;
                }else{
                    this.head = newNode;
                    this.tail = newNode;
                }
            }

        }
        return this
    }


    public getLength(){
        return this.length;
    }

    public delete(value){
        if(!this.head){
            return null
        }
        let deleteNode = null;
        let curNode = this.head
        let temp = 1;

        while (temp<(this.length)){
            if(curNode.next && curNode.next.value!==value){
            curNode = curNode.next;
            }else{

                if (curNode.next) deleteNode = curNode.next
                break

            }
        }

        if(deleteNode){
            if(curNode.next) curNode.next = curNode.next?.next;
        }
    }
}