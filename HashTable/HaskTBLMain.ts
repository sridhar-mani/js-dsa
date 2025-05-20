import MurMurHashing from "../util/MurMurHashFunc";

export default class HashTBLMain<T> {
  private table: Array<[string, any]> | Array<undefined> | undefined;
  private hashTBLsize: number | undefined;

  constructor(hashTBLsizee: number = 40) {
    this.hashTBLsize = hashTBLsizee;
    this.table = new Array(hashTBLsizee);
  }

  public hashFunc(key: string): number {
    return MurMurHashing(key) % this.hashTBLsize!;
  }

  public set(key: string, value: any): void {
    let index = this.hashFunc(key);
    let start = index;

    while (this.table![index] !== undefined && this.table![index]![0] !== key) {
      index = (index + 1) % this.hashTBLsize!;
      if (index === start) {
        throw new Error("hash table is full");
      }
    }

    this.table![index] = [key, value];
  }

  public get(key: string): any {
    let index = this.hashFunc(key);
    let start = index;

    while (this.table![index] !== undefined) {
      if (this.table![index]![0] === key) {
        return this.table![index]![1];
      }
      index = (index + 1) % this.hashTBLsize!;
      if (index === start) break;
    }

    return undefined;
  }

  public delete(key: string): boolean {
    let index = this.hashFunc(key);
    let start = index;
    while (this.table![index]! !== undefined) {
      if (this.table![index]![0] === key) {
        this.table![index] != undefined;
        index = (index + 1) % this.hashTBLsize!;

        while (this.table![index] !== undefined) {
          const [k, v] = this.table![index]!;
          this.table![index] = undefined;
          this.set(k, v);
          index = (index + 1) % this.hashTBLsize!;
        }

        return true;
      }

      index = (index + 1) % this.hashTBLsize!;
      if (index === start) break;
    }
    return false;
  }

  public has(key: string): boolean {
    return this.get(key) !== undefined;
  }

  public getKeys(): any {
    return this.table?.filter(Boolean).map((entry) => entry![0]);
  }

  public getValues(): any {
    return this.table?.filter(Boolean).map((entry) => entry![1]);
  }
}
