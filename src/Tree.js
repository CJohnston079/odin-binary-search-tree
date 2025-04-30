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
		if (!cb || typeof cb !== "function") {
			throw new Error("A callback function is required.");
		}

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

	inOrder(cb, node = this.root) {
		if (!cb || typeof cb !== "function") {
			throw new Error("A callback function is required.");
		}

		if (!node) {
			return;
		}

		this.inOrder(cb, node.left);
		cb(node);
		this.inOrder(cb, node.right);
	}

	preOrder(cb, node = this.root) {
		if (!cb || typeof cb !== "function") {
			throw new Error("A callback function is required.");
		}

		if (!node) {
			return;
		}

		cb(node);
		this.preOrder(cb, node.left);
		this.preOrder(cb, node.right);
	}

	postOrder(cb, node = this.root) {
		if (!cb || typeof cb !== "function") {
			throw new Error("A callback function is required.");
		}

		if (!node) {
			return;
		}

		this.postOrder(cb, node.left);
		this.postOrder(cb, node.right);
		cb(node);
	}

	height(value) {
		const node = this.find(value);

		if (!node) {
			return null;
		}

		const edgesCount = function (node) {
			if (!node) {
				return -1;
			}

			const leftHeight = edgesCount(node.left);
			const rightHeight = edgesCount(node.right);

			return Math.max(leftHeight, rightHeight) + 1;
		};

		return edgesCount(node);
	}

	depth(value) {
		const edgesCount = function (node, count = 0) {
			if (!node) {
				return null;
			}

			if (node.data === value) {
				return count;
			}

			if (node.data < value) {
				return edgesCount(node.right, count + 1);
			} else {
				return edgesCount(node.left, count + 1);
			}
		};

		return edgesCount(this.root);
	}

	isBalanced(node = this.root) {
		if (node === null) {
			return true;
		}

		const leftHeight = this.height(node.left?.data);
		const rightHeight = this.height(node.right?.data);

		if (Math.abs(leftHeight - rightHeight) > 1) {
			return false;
		}

		return this.isBalanced(node.left) && this.isBalanced(node.right);
	}

	rebalance() {
		return;
	}
}

export default Tree;
