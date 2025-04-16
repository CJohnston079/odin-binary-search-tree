class Node {
	constructor(entry = null) {
		this.entry = entry;
		this.left = null;
		this.right = null;
	}

	setLeft(node) {
		if (!(node instanceof Node || node === null)) {
			throw new Error("'left' must be a Node or null");
		}
		this.left = node;
	}

	setRight(node) {
		if (!(node instanceof Node || node === null)) {
			throw new Error("'right' must be a Node or null");
		}
		this.right = node;
	}
}

export default Node;
