import Node from "./Node.js";
import Queue from "./Queue.js";

class Tree {
	constructor(array = []) {
		this.root = this.buildTree(array);
	}

	buildTree(arr) {
		const sorted = [...new Set(arr)].sort((a, b) => a - b);

		const build = function (start, end) {
			if (start > end) {
				return null;
			}

			const mid = Math.floor((start + end) / 2);
			const root = new Node(sorted[mid]);

			const left = build(start, mid - 1);
			const right = build(mid + 1, end);

			root.setLeft(left);
			root.setRight(right);

			return root;
		};

		const tree = build(0, sorted.length - 1);

		return tree;
	}

	insert(value) {
		const newNode = new Node(value);

		if (!this.root) {
			this.root = node;
			return;
		}

		const findParentLeaf = function (node) {
			if (value === node.data) {
				return;
			}

			if (value < node.data) {
				return !node.left ? node : findParentLeaf(node.left);
			}

			if (value > node.data) {
				return !node.right ? node : findParentLeaf(node.right);
			}
		};

		const parentLeaf = findParentLeaf(this.root);

		if (!parentLeaf) {
			return;
		}

		if (value < parentLeaf.data) {
			parentLeaf.setLeft(newNode);
		} else {
			parentLeaf.setRight(newNode);
		}
	}

	delete(value) {
		const getSuccessor = function (node) {
			let current = node.right;

			while (current && current.left) {
				current = current.left;
			}
			return current;
		};

		const deleteNode = function (node, value) {
			if (!node) {
				return null;
			}

			if (value < node.data) {
				node.setLeft(deleteNode(node.left, value));
			} else if (value > node.data) {
				node.setRight(deleteNode(node.right, value));
			} else {
				if (!node.left) {
					return node.right;
				}

				if (!node.right) {
					return node.left;
				}

				const successor = getSuccessor(node);

				node.data = successor.data;
				node.setRight(deleteNode(node.right, successor.data));
			}

			return node;
		};

		this.root = deleteNode(this.root, value);
	}

	find(value, node = this.root) {
		if (!node) {
			return null;
		}

		if (node.data === value) {
			return node;
		}

		const foundInLeft = this.find(value, node.left);

		if (foundInLeft) {
			return foundInLeft;
		}

		return this.find(value, node.right);
	}

	levelOrder(cb) {
		const queue = new Queue();

		if (this.root) {
			queue.enqueue(this.root);
		}

		while (!queue.isEmpty()) {
			const node = queue.dequeue();
			cb(node);

			if (node.left) {
				queue.enqueue(node.left);
			}

			if (node.right) {
				queue.enqueue(node.right);
			}
		}
	}

	inOrder(cb) {
		return;
	}

	preOrder(cb) {
		return;
	}

	postOrder(cb) {
		return;
	}

	height(value) {
		return;
	}

	depth(value) {
		return;
	}

	isBalanced() {
		return;
	}

	rebalance() {
		return;
	}
}

export default Tree;
