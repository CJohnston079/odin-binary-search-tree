import Queue from "../src/Queue";

describe("Queue", () => {
	const testItems = [4, 8, 15, 16, 23, 42];
	const item = testItems[Math.floor(Math.random() * testItems.length)];

	let queue;

	beforeEach(() => {
		queue = new Queue();
	});

	describe("isEmpty", () => {
		it("returns true if the queue is empty", () => {
			expect(queue.isEmpty()).toBe(true);
		});
		it("returns false if the queue is not empty", () => {
			queue.enqueue(item);
			expect(queue.isEmpty()).toBe(false);
		});
	});
	describe("enqueue", () => {
		it("enqueues an item to an empty queue", () => {
			queue.enqueue(item);
			expect(queue._head.value).toBe(item);
		});
		it("enqueues items on the end of the queue", () => {
			testItems.slice(0, 2).forEach(item => queue.enqueue(item));
			expect(queue._head.value).toEqual(testItems[0]);
			expect(queue._tail.value).toEqual(testItems[1]);
		});
		it("increments '_length' when enqueueing", () => {
			const preEnqueueLength = queue._length;
			queue.enqueue(item);
			expect(queue._length).toEqual(preEnqueueLength + 1);
		});
	});
	describe("dequeue", () => {
		beforeEach(() => {
			testItems.forEach(item => queue.enqueue(item));
		});
		it("dequeues an item from the front of the queue", () => {
			queue.dequeue();
			expect(queue._head.value).toBe(testItems[1]);
		});
		it("decrements 'length' when dequeueing", () => {
			const preDequeueLength = queue._length;
			queue.dequeue(item);
			expect(queue._length).toEqual(preDequeueLength - 1);
		});
		it("throws an error when attempting to dequeue from an empty queue", () => {
			const emptyQueue = new Queue();
			expect(() => {
				emptyQueue.dequeue();
			}).toThrowError(new Error("Cannot dequeue from an empty queue."));
		});
	});
});
