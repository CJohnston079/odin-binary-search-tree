# The Odin Project | Binary Search Trees

This is a practice implementation of balanced binary search tree in JavaScript.

## About

### Project aims

The project brief can be found here: [Project: Binary Search Trees | The Odin Project](https://www.theodinproject.com/lessons/javascript-binary-search-trees). Below is a brief summary of the project aims:

1. Implement a `Node` class/factory to manage individual data points.
2. Implemen a `Tree` class/factory to return a group of nodes from an array of items.

## Setup

### Installing dependencies

After cloning the repository, install the project dependencies by running:

```Bash
npm install
```

### Testing

Tests are written in Jest, with Babel configured to allow the use of ES6 modules. To run the testing suite, use:

```Bash
npm test
```

Alternatively, you can watch for changes to the tests or modules using:

```Bash
npm run watch
```

## `Node` class

Returns a new `Node`. `Node`s are used as the individual elements of a `Tree`.

### `Node` properties

#### `Node.data`

- `data` is the data which is stored in `Node`.
- `data` is initialised as `null` by default.

#### `Node.left`

- `left` is a pointer to the next `Node` on the left.
- `left` is initialised as `null` by default.

#### `Node.right`

- `right` is a pointer to the next `Node` on the right.
- `right` is initialised as `null` by default.

### `Node` methods

#### `Node.setLeft()`

- `setLeft()` updates the value of `left` for a `Node`.
- It throws an error if it is given anything other than a `Node` instance.

#### `Node.setRight()`

- `setRight()` updates the value of `right` for a `Node`.
- It throws an error if it is given anything other than a `Node` instance.

## `Queue` class

Returns a new `Queue`. `Queue`s are used as a First In, First Out data structure.

### `Queue` properties

#### `Queue._head`

- A pointer to the front-most element in the queue.

#### `Queue._tail`

- A pointer to the rear element of the queue.

#### `Queue._length`

- The number of items in the queue.

### `Queue` methods

#### `Queue.enqueue(item)`

- Adds an item to the rear of the queue.
- Points `Queue._tail` to the new item.
- Increments `Queue._length` by 1.

#### `Queue.dequeue(item)`

- Removes an item from the front of the queue.
- Moves `Queue._head` to point at the next item in the queue.
- Decrements `Queue._length` by 1.
- Throws an error if attempting to dequeue from an empty queue.

#### `Queue.isEmpty()`

- Checks how many items are in the queue, returning `true` if there is at least one item in the queue.

## `Tree` class

Returns a new `Tree`. Expects to be called with an array of values, which will be used to build the initial tree.

### `Tree` properties

#### `Tree.root`

- The root node of the tree.

### `Tree` methods

#### `Tree.buildTree(arr)`

- Builds a new binary search tree from an array of values.
- Sorts and removes duplicates from the array, before recursively instantiating a new `Node` for ever value in the array and invoking `Node.setLeft()` and `Node.setRight()` to build the tree.
- Returns the root node of the newly built tree.

#### `Tree.insert(value)`

- Inserts a new value into the tree.
- Recursively calls the inner function `findParent(node)` to find the parent leaf and sets it to the left or right of the parent, accordign to whether it is larger or smaller than the parent value.
- Returns without inserting if the value is already in the tree.

#### `Tree.delete(value)`

- Removes a node from the tree.
- Handles the removal of a leaf node, the removal of a node with one child and the removal of a node with two children.

#### `Tree.find(value)`

- Returns the node for a given value, or `null` if the value is not in the tree.

#### `Tree.levelOrder(cb)`

- Invokes a callback function on elements of the tree in Level Order.

#### `Tree.inOrder(cb)`

- Invokes a callback function on elements of the tree, traversing Inorder.

#### `Tree.preOrder(cb)`

- Invokes a callback function on elements of the tree, traversing Preorder.

#### `Tree.postOrder(cb)`

- Invokes a callback function on elements of the tree, traversing Postorder.

#### `Tree.height(value)`

- Returns the number of edges between the node with `value` and the nearest leaf node.
- Returns `null` if `value` is not in the tree.

#### `Tree.depth(value)`

- Returns the number of edges between the node with `value` and the root node.
- Returns `null` if `value` is not in the tree.

#### `Tree.isBalanced()`

- Returns `true`  if, for every node in the tree, the height difference between its left and right subtrees is no more than 1.

#### `Tree.rebalance()`

- Replaces an unbalanced tree with a new, balanced tree.

## `prettyPrint(node)` function

Recursively prints all the values in a binary search tree. Expects the root node of a tree as an argument.