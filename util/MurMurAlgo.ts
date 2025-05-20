function MurMurFunc(key:string,seed:number=0){
let h=seed;
const c1=0xcc9e2d51;
const c2=0x1b873593;
let k:number;

for(let i=0;i<length;i++){
    k=key.charCodeAt(i);
    k=Math.imul(k,c1);
    k=(k<<15)|(k>>>17);
    k=Math.imul(k,c2);

    h^=k;
    h=(h<<13)|(h>>>19);
    h=Math.imul(h,5)+0xe6546b64;
}

h^=length;
h ^= h >>> 16;
h = Math.imul(h, 0x85ebca6b);
h ^= h >>> 13;
h = Math.imul(h, 0xc2b2ae35);
h ^= h >>> 16;

return h>>>0;
    
}