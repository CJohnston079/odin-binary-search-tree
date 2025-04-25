import Tree from "../src/Tree";

describe("Tree", () => {
  const testData = [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345];

	const getInOrderValues = function (node) {
		if (!node) {
			return [];
		}

		const inOrderValues = [
			...getInOrderValues(node.left),
			node.data,
			...getInOrderValues(node.right),
		];

		return inOrderValues;
	};

	let tree;

	beforeEach(() => {
		tree = new Tree(testData);
	});

	describe("initialisation", () => {
		it("should initialise with 'root'", () => {
			expect(tree.hasOwnProperty("root")).toBe(true);
		});
	});
	describe("buidTree(array)", () => {
		it("defines buidTree()", () => {
			expect(typeof tree.buildTree).toBe("function");
		});
		it("returns null for an empty array", () => {
			const result = tree.buildTree([]);
			expect(result).toBeNull();
		});
		it("removes duplicates from input", () => {
			const duplicate = testData[Math.floor(Math.random() * testData.length)];

			const result = tree.buildTree([...testData, duplicate]);
			const values = getInOrderValues(result);

			expect(values).toEqual(testData);
		});
		it("builds a balanced tree from an array", () => {
			const result = tree.buildTree(testData);
			const values = getInOrderValues(result);

			expect(values).toEqual(testData);
		});
	});
	describe("insert(value)", () => {
		it("defines insert()", () => {
			expect(typeof tree.insert).toBe("function");
		});
		it("inserts a new value in the correct position", () => {
			const newValue = Math.max(...testData) + 1;

			tree.insert(newValue);
			const values = getInOrderValues(tree.root);

			expect(values).toEqual([...testData, newValue].sort((a, b) => a - b));
		});
		it("inserts a value smaller than all existing values", () => {
			const smallest = Math.min(...testData) - 1;

			tree.insert(smallest);
			const afterInsert = getInOrderValues(tree.root);

			expect(afterInsert).toEqual([...testData, smallest].sort((a, b) => a - b));
		});
		it("inserts a value larger than all existing values", () => {
			const largest = Math.max(...testData) + 1;
			tree.insert(largest);
			const afterInsert = getInOrderValues(tree.root);

			expect(afterInsert).toEqual([...testData, largest].sort((a, b) => a - b));
		});
		it("does not insert a duplicate value", () => {
			const duplicate = testData[Math.floor(Math.random() * testData.length)];

			tree.insert(duplicate);
			const afterInsert = getInOrderValues(tree.root);

			expect(afterInsert).toEqual(testData);
		});
	});
	describe("delete(value)", () => {
		it("defines delete()", () => {
			expect(typeof tree.delete).toBe("function");
		});
		it("removes a leaf node", () => {
			const getLeaf = function (node) {
				if (!node.left && !node.right) {
					return node.data;
				}

				return node.left ? getLeaf(node.left) : getLeaf(node.right);
			};

			const leaf = getLeaf(tree.root);

			tree.delete(leaf);
			const afterDelete = getInOrderValues(tree.root);

			expect(afterDelete).toEqual(testData.filter(item => item !== leaf));
		});
		it("removes a node with a single child", () => {
			const getSingleChildParentNode = function (node, isRoot = true) {
				if (!node.left || (!node.right && !isRoot)) {
					return node.data;
				}

				if (node.left) {
					return getSingleChildParentNode(node.left);
				} else {
					return getSingleChildParentNode(node.right);
				}
			};

			const value = getSingleChildParentNode(tree.root);
			const expected = testData.filter(item => item !== value);

			tree.delete(value);
			const afterDelete = getInOrderValues(tree.root);

			expect(afterDelete).toEqual(expected);
		});
		it("removes a node with both children", () => {
			const getTwoChildParentNode = function (node, isRoot = true) {
				if (node.left && node.right && !isRoot) {
					return node.data;
				}

				let current = null;

				if (node.left) {
					current = getTwoChildParentNode(node.left, false);
				}

				if (!current && node.right) {
					current = getTwoChildParentNode(node.right, false);
				}

				return current;
			};

			const value = getTwoChildParentNode(tree.root);
			const expected = testData.filter(item => item != value);

			tree.delete(value);
			const afterDelete = getInOrderValues(tree.root);

			expect(afterDelete).toEqual(expected);
		});
		it("removes the root node", () => {
			const root = tree.root.data;
			const expected = testData.filter(item => item != root);

			tree.delete(root);
			const afterDelete = getInOrderValues(tree.root);

			expect(afterDelete).toEqual(expected);
		});
	});
	describe("find(value)", () => {
		it("defines find()", () => {
			expect(typeof tree.find).toBe("function");
		});
	});
	describe("levelOrder(cb)", () => {
		it("defines levelOrder()", () => {
			expect(typeof tree.levelOrder).toBe("function");
		});
	});
	describe("inOrder(cb)", () => {
		it("defines inOrder()", () => {
			expect(typeof tree.inOrder).toBe("function");
		});
	});
	describe("preOrder(cb)", () => {
		it("defines preOrder()", () => {
			expect(typeof tree.preOrder).toBe("function");
		});
	});
	describe("postOrder(cb)", () => {
		it("defines postOrder()", () => {
			expect(typeof tree.postOrder).toBe("function");
		});
	});
	describe("height(value)", () => {
		it("defines height()", () => {
			expect(typeof tree.height).toBe("function");
		});
	});
	describe("depth(value)", () => {
		it("defines depth()", () => {
			expect(typeof tree.depth).toBe("function");
		});
	});
	describe("isBalanced()", () => {
		it("defines isBalanced()", () => {
			expect(typeof tree.isBalanced).toBe("function");
		});
	});
	describe("rebalance()", () => {
		it("defines rebalance()", () => {
			expect(typeof tree.rebalance).toBe("function");
		});
	});
});
