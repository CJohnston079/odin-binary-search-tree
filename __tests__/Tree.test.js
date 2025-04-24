import Tree from "../src/Tree";

describe("Tree", () => {
	let tree;

	beforeEach(() => {
		tree = new Tree([4, 8, 15, 16, 23, 42]);
	});

	describe("initialisation", () => {
		it("should initialise with '_root'", () => {
			expect(tree.hasOwnProperty("_root")).toBe(true);
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
			const input = [4, 8, 15, 16, 23, 42, 8, 15];
			const uniqueInput = [...new Set(input)];
			const result = tree.buildTree(input);
			const [values, stack] = [[], []];

			let current = result;

			while (stack.length > 0 || current !== null) {
				while (current !== null) {
					stack.push(current);
					current = current.left;
				}
				current = stack.pop();
				values.push(current.entry);
				current = current.right;
			}

			expect(values).toEqual(uniqueInput);
		});
		it("builds a balanced tree from an array", () => {
			const result = tree.buildTree([4, 8, 15, 16, 23, 42]);

			expect(result.entry).toBe(15);
			expect(result.left.entry).toBe(4);
			expect(result.right.entry).toBe(23);
		});
	});
	describe("insert(value)", () => {
		it("defines insert()", () => {
			expect(typeof tree.insert).toBe("function");
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
