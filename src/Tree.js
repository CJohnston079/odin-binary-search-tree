import Node from "./Node.js";

class Tree {
	constructor(array = []) {
		this._root = this.buildTree(array);
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
		return;
	}

	delete(vaue) {
		return;
	}

	find(value) {
		return;
	}

	levelOrder(cb) {
		return;
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
