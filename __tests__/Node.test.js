import Node from "../src/Node";

describe("Node", () => {
	it("exists", () => {
		expect(typeof new Node()).toBe("object");
	});
});
