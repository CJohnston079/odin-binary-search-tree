class Item {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this._head = null;
		this._tail = null;
		this._length = 0;
	}

	enqueue(item) {
		const node = new Item(item);

		if (this.isEmpty()) {
			this._head = this._tail = node;
		} else {
			this._tail.next = node;
			this._tail = node;
		}

		this._length += 1;
	}

	dequeue() {
		if (this.isEmpty()) {
			throw new Error("Cannot dequeue from an empty queue.");
		}

		const item = this._head.value;

		this._head = this._head.next;
		this._length -= 1;

		if (this.isEmpty()) {
			this._tail = null;
		}
		return item;
	}

	isEmpty() {
		return this._length === 0;
	}
}

export default Queue;
