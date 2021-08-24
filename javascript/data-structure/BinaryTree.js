/**
 * 二叉树 binary tree BT  
 * 每个节点的子节点不允许超过两个
 * 
 * 通过将子节点的个数限定为2，可以写出高效的程序在树中插入、查找和删除数据
 */

 /**
	* 二叉查找树 BST  binary search tree
	* 一种特殊的二叉树。相对较小的值保存在左子树中，较大的值保存在右子树中
	* 这特性使得查找的效率很高，对于数值型和非数值型的数据，比如单词和字符串，都是如此
	*
	* 使用场景：
	* 1. 记录一组数据集中数据出现的次数。比如：记录考试成绩的分布
	*/
class Node {
	constructor(data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
	show() {
		return this.data;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(data) {
		let n = new Node(data, null, null);
		if(this.root == null) {
			this.root = n;
		} else {
			let current = this.root;
			let parent;
			while(true) {
				parent = current;
				if(data < current.data) {
					current = current.left;
					if(current == null) {
						parent.left = n;
						break;
					}
				} else {
					current = current.right;
					if(current == null) {
						parent.right = n;
						break;
					}
				}
			}
		}
	}

	/**
	 * 遍历： 
	 * 中序遍历：先访问左子树，再访问根结点，再访问右子树
	 * 先序遍历：先访问根结点，再访问左子树，再访问右子树
	 * 后序遍历： 先访问左子树，再访问右子树，再访问根结点
	 */
	inOrder(node) {
		if(!(node == null)) {
			this.inOrder(node.left);
			console.log(node.show() + ' ');
			this.inOrder(node.right);
		}
	}
	preOrder(node) {
		if(!(node == null)) {
			console.log(node.show() + ' ');
			this.preOrder(node.left);
			this.preOrder(node.right);
		}
	}
	postOrder(node) {
		if(!(node == null)) {
			this.preOrder(node.left);
			this.preOrder(node.right);
			console.log(node.show(), " ");
		}
	}

	/**
	 * 查询
	 * BST通常用的的三种查询：
	 * 查找给定值
	 * 查找最小值
	 * 查找最大值
	 */
	getMin() {
		var current = this.root;
		while(!(current.left == null)) {
			current = current.left;
		}
		return current.data;
	}
	getMax() {
		var current = this.root;
		while(!(current.right == null)) {
			current = current.right;
		}
		return current.data;
	}
	find(data) {
		let current = this.root;
		while(current != null) {
			if(current.data == data) {
				return current;
			} else if(data < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}
		}
		return null;
	}

	/**
	 * 删除
	 */
	remove(data) {
		return this.removeNode(this.root, data);
	}

	removeNode(node, data) {
		if(node == null) {
			return null;
		}
		if(data == node.data) {
			// 没有子节点的结点
			if(node.left == null && node.right == null) {
				return null;
			}
			// 如果没有左节点
			if(node.left == null) {
				return node.right;
			}
			// 如果没有右节点
			if(node.right == null) {
				return node.left;
			}
			// 有两个节点，两种方式：
			// 1. 查找待删节点左子树上的最大值
			// 2. 查找待删节点右子树上的最小值
			let tempNode = this.getSmallest(node.right);
			node.data = tempNode.data;
			node.right = this.removeNode(node.right, tempNode.data);
			return node;
		} else if(data < node.data) {
			node.left = this.removeNode(node.left, data);
			return node;
		} else {
			node.right = this.removeNode(node.right, data);
			return node;
		}

	}

	getSmallest(node) {
		let current = node;
		while(current.right != null) {
			current = current.right;
		}
		return current.data;
	}
	
	show() {
		return this.root;
	}
}

const BSTTest = new BST();

BSTTest.insert(23);
BSTTest.insert(45);
// BSTTest.insert(16);
BSTTest.insert(37);
BSTTest.insert(3);
BSTTest.insert(2);
// BSTTest.insert(99);
console.log(BSTTest.remove(23));
// console.log(BSTTest.show());
// console.log(BSTTest.root);