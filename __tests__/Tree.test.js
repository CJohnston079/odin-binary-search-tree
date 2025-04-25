import Tree from "../src/Tree";

describe("Tree", () => {
  const testData = [4, 8, 15, 16, 23, 42];

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

			expect(result.data).toBe(15);
			expect(result.left.data).toBe(4);
			expect(result.right.data).toBe(23);
		});
	});
	describe("insert(value)", () => {
		it("defines insert()", () => {
			expect(typeof tree.insert).toBe("function");
		});
		it("inserts a new value in the correct position", () => {
			const newValues = testData.map(x => x * 3);
			const newValue = newValues[Math.floor(Math.random() * newValues.length)];
			tree.insert(newValue);
			const afterInsert = getInOrderValues(tree.root);

			expect(afterInsert).toEqual([...testData, newValue].sort((a, b) => a - b));
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
