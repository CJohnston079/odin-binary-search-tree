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
