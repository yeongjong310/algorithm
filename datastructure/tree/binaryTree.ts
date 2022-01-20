interface BinaryTreeNode<T> {
  val: T;
  left?: BinaryTreeNode<T>;
  right?: BinaryTreeNode<T>;
}

abstract class Tree<T> {
  root?: BinaryTreeNode<T> | T;
  constructor(root?: BinaryTreeNode<T> | T, arr?: T[]) {
    if (root) {
      this.root = root;
    } else if (arr) {
      this.root = this.createTree(arr);
    }
  }

  createTree(arr: T[]): BinaryTreeNode<T> {
    if (arr.length === 0) {
      return undefined;
    }
    const mid = Math.floor(arr.length / 2);
    const root = {
      val: arr[mid],
      left: this.createTree(arr.slice(0, mid)),
      right: this.createTree(arr.slice(mid + 1)),
    };
    return root;
  }
}

class BinaryTree<T> extends Tree<T> {
  constructor(root?: BinaryTreeNode<T> | T, arr?: T[]) {
    super(root, arr);
  }
}
