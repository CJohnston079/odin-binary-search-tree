import prettyPrint from "./src/prettyPrint.js";
import Tree from "./src/Tree.js";

const values = Array.from({ length: 32 }, () => Math.floor(Math.random() * 100) + 1);
const newValues = Array.from({ length: 4 }, () => Math.floor(Math.random() * 100) + 100);
const tree = new Tree(values);

let levelOrder = [];
let preOrder = [];
let postOrder = [];

console.log("\n");
prettyPrint(tree.root);
console.log(`Tree.isBalanced: ${tree.isBalanced()}`);

tree.levelOrder(node => levelOrder.push(node.data));
tree.preOrder(node => preOrder.push(node.data));
tree.postOrder(node => postOrder.push(node.data));

console.log(`Level order: ${levelOrder}`);
console.log(`Preorder: ${preOrder}`);
console.log(`Postorder: ${postOrder}`);

newValues.forEach(value => tree.insert(value));

console.log("\n");
prettyPrint(tree.root);
console.log(`Tree.isBalanced: ${tree.isBalanced()}`);

tree.rebalance();

console.log("\n");
prettyPrint(tree.root);
console.log(`Tree.isBalanced: ${tree.isBalanced()}`);

levelOrder = [];
preOrder = [];
postOrder = [];

tree.levelOrder(node => levelOrder.push(node.data));
tree.preOrder(node => preOrder.push(node.data));
tree.postOrder(node => postOrder.push(node.data));

console.log(`Level order: ${levelOrder}`);
console.log(`Preorder: ${preOrder}`);
console.log(`Postorder: ${postOrder}`);
