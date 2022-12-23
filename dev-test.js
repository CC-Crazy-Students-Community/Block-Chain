// call: npm run dev-test

// Import Block
const Block = require("./block");

// Test dre Block Funktionalität
const block = new Block(
    "aktuelle Zeit",
    "Hash 1",
    "Hash 2",
    "meine Daten"
);

console.log( block.toString() );