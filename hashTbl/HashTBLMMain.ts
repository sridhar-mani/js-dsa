import LinkedList from '../linkedList/llMain'

const defaultTableSize = 32;

export default class HashTbl<T>{
    private valueLL: LinkedList<{key:string,value:T}>[];
}