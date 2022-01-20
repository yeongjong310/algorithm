interface BinaryTreeNode<T> {
  val: T;
  left?: BinaryTreeNode<T>;
  right?: BinaryTreeNode<T>;
}

abstract class Tree<T> {
  constructor(protected root?: BinaryTreeNode<T>, arr?: T[]) {
    if (root) {
      this.root = root;
    } else if (arr) {
      this.root = this.createTree(arr, 0);
    }
  }

  abstract createTree(arr: T[], index: number): BinaryTreeNode<T> | undefined;

  abstract preOrder(): void;
  abstract inOrder(): void;
  abstract postOrder(): void;

  abstract bfs(target: T): T | undefined;
  abstract dfs(target: T): T | undefined;
}

class BinaryTree<T> extends Tree<T> {
  constructor(root?: BinaryTreeNode<T>, arr?: T[]) {
    super(root, arr);
  }

  createTree(arr: T[], index: number = 0): BinaryTreeNode<T> | undefined {
    if (!arr[index]) {
      return undefined;
    }

    const root = {
      val: arr[index],
      left: this.createTree(arr, index * 2 + 1),
      right: this.createTree(arr, index * 2 + 2),
    };

    return root;
  }

  preOrder() {
    const curNode = this.root;

    const preOrder = (node?: BinaryTreeNode<T>) => {
      if (!node) {
        return;
      }

      console.log(node.val);
      preOrder(node.left);
      preOrder(node.right);
    };

    preOrder(curNode);
  }

  inOrder() {
    const curNode = this.root;

    const inOrder = (node?: BinaryTreeNode<T>) => {
      if (!node) {
        return;
      }

      inOrder(node.left);
      console.log(node.val);
      inOrder(node.right);
    };

    inOrder(curNode);
  }

  postOrder() {
    const curNode = this.root;

    const postOrder = (node?: BinaryTreeNode<T>) => {
      if (!node) {
        return;
      }

      postOrder(node.left);
      postOrder(node.right);
      console.log(node.val);
    };

    postOrder(curNode);
  }

  bfs(target: T) {
    if (!this.root) return undefined;

    const queue: BinaryTreeNode<T>[] = [this.root];

    while (queue.length !== 0) {
      const curNode = queue.shift();

      if (curNode!.val === target) {
        return curNode!.val;
      }

      if (curNode!.left) {
        queue.push(curNode!.left);
      }

      if (curNode!.right) {
        queue.push(curNode!.right);
      }
    }

    return undefined;
  }

  dfs(target: T) {
    if (!this.root) return undefined;

    const stack: BinaryTreeNode<T>[] = [this.root];

    while (stack.length !== 0) {
      const curNode = stack.pop();

      if (curNode!.val === target) {
        return curNode!.val;
      }

      if (curNode!.right) {
        stack.push(curNode!.right);
      }

      if (curNode!.left) {
        stack.push(curNode!.left);
      }
    }
  }
}

const binaryTree = new BinaryTree<number>(
  undefined,
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
);

binaryTree.preOrder(); // 1, 2, 4, 8 , 5, 3, 6, 9, 7
binaryTree.inOrder(); // 8, 4, 9, 2, 5, 1, 6, 3, 7
binaryTree.postOrder(); // 8, 9, 4, 5, 2, 6, 7, 3, 1

binaryTree.bfs(8); // 8
binaryTree.bfs(10); // undefined

binaryTree.dfs(8); // 8
binaryTree.dfs(10); // undefined
