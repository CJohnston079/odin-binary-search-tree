import Node from "../src/Node";

describe("Node", () => {
	let defaultNode;
	let headNode;

	beforeEach(() => {
		defaultNode = new Node();
		headNode = new Node(4);
	});

	describe("initialisation", () => {
		it("should initialise 'entry', 'left' and 'right as null by default", () => {
			expect(defaultNode.entry).toBeNull();
			expect(defaultNode.left).toBeNull();
			expect(defaultNode.right).toBeNull();
		});
		it("should correctly set a entry when provided", () => {
			expect(headNode.entry).toBe(4);
			expect(headNode.left).toBeNull();
			expect(headNode.right).toBeNull();
		});
	});
	describe.each([
		["setLeft", "left"],
		["setRight", "right"],
	])("%s()", (methodName, propName) => {
		let parentNode;
		let childNode;

		beforeEach(() => {
			parentNode = new Node(4);
			childNode = new Node(8);
		});

		it("is defined as a method", () => {
			expect(typeof parentNode[methodName]).toBe("function");
		});

		it("returns undefined when called", () => {
			expect(parentNode[methodName](childNode)).toBeUndefined();
		});

		it(`sets the '${propName}' property to a Node`, () => {
			parentNode[methodName](childNode);
			expect(parentNode[propName]).toBe(childNode);
		});

		it("throws an error if given a non-Node", () => {
			const message = `'${propName}' must be a Node or null`;
			expect(() => parentNode[methodName]("string")).toThrow(message);
			expect(() => parentNode[methodName](42)).toThrow(message);
			expect(() => parentNode[methodName]({})).toThrow(message);
		});
	});
});
