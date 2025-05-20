import HashTBLMain from "../HashTable/HaskTBLMain";
import ComparerFunc from "../util/compareFuncs";

class BinaryTreeNode<T> {
  private value: T;
  private left: BinaryTreeNode<T> | null;
  private right: BinaryTreeNode<T> | null;
  private parent: BinaryTreeNode<T> | null;
  private meta: HashTBLMain<T> | null;

  private nodeComparator: ComparerFunc<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.meta = new HashTBLMain();
    this.nodeComparator = new ComparerFunc();
  }

  public setLeft(node: BinaryTreeNode<T> | null): BinaryTreeNode<T> {
    if (this.left) [(this.left.parent = null)];
    this.left = node;
    if (this.left) this.left.parent = this;

    return this;
  }

  public setValue(value: T) {
    this.value = value;
    return this;
  }

  public setRight(node: BinaryTreeNode<T> | null): BinaryTreeNode<T> {
    if (this.right) {
      this.right.parent = null;
    }
    this.right = node;
    if (this.right) {
      this.right.parent = this;
    }
    return this;
  }

  public removeChlid(node: BinaryTreeNode<T> | null): boolean {
    if (
      this.left &&
      this.nodeComparator?.equal(this.left.value, node?.value!)
    ) {
      this.left = null;
      return true;
    }
    if (
      this.right &&
      this.nodeComparator?.equal(this.right.value, node?.value!)
    ) {
      this.right = null;
      return true;
    }

    return false;
  }

  public replaceChild(
    node: BinaryTreeNode<T>,
    replacementNode: BinaryTreeNode<T>
  ): boolean {
    if (!node || !replacementNode) {
      return false;
    }

    if (this.left && this.nodeComparator?.equal(this.left.value, node.value)) {
      this.left = replacementNode;
      return true;
    }

    if (
      this.right &&
      this.nodeComparator?.equal(this.right.value, node.value)
    ) {
      this.right = replacementNode;
      return true;
    }

    return false;
  }

  public static copyNode(sourceNode, targetNode): void {
    targetNode.setValue(sourceNode.value);
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  }

  public traverseInOrder(): Array<BinaryTreeNode<T>> {
    let traversed: any = [];
    if (this.left) {
      traversed = traversed.concat(this.left!.traverseInOrder());
    }

    traversed.push(this.value);

    if (this.right) {
      traversed = traversed.concat(this.right!.traverseInOrder());
    }
    return traversed;
  }

  public toString() {
    return this.traverseInOrder().toString();
  }

  public get leftHeight(): number {
    if (!this.left) {
      return 0;
    }
    return this.left.height + 1;
  }

  public get rightHeight(): number {
    if (!this.right) {
      return 0;
    }
    return this.right.height + 1;
  }

  public get height(): number {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  public get uncle(): any {
    if (!this.parent) {
      return undefined;
    }

    if (!this.parent.parent) {
      return undefined;
    }

    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined;
    }

    if (
      this.nodeComparator?.equal(
        this.parent.value,
        this.parent.parent.left.value
      )
    ) {
      return this.parent.parent.right;
    }
    return this.parent.parent.left;
  }
}
