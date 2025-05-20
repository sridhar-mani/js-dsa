export default function MurMurHashing(key:string,seed:number=0){
    let h1 = seed ^ key.length;
    let c1 = 0xcc9e2d51;   
    let c2 = 0x1b873593;   
    
    for(let i=0;i<key.length;i++){
        
        let k1=key.charCodeAt(i)
        k1 = Math.imul(k1,c1);
        k1=(k1<<15)|(k1>>>17);
        k1=Math.imul(k1,c2);
        h1^=k1;
        h1=(h1<<13)|(h1>>>19)
        h1=Math.imul(h1,5)+0xe6546b64;
    }

    h1^=key.length;
    h1^=h1>>>16;
    h1=Math.imul(h1,0x85ebca6b);
    h1^=h1>>>13;
    h1=Math.imul(h1,0xc2b2ae35);
    h1^=h1>>>16

    return h1>>>0;

}