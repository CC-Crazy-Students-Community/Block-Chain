// Import Block
const Block = require("./block");

// Klasse Blockchain erstellen
class Blockchain {
    // Konstruktor erstellen mit dem Genesis Block
    constructor(){
        this.chain = [ Block.genesis() ];
    }
    // Methode zum hinzufügen von Blöcken in den Konstruktor - Das ist die Chain
    addBlock( blockData ) {
        const lastBlock = this.chain[ this.chain.length -1 ];
        const block = Block.mineBlock( lastBlock, blockData );
        this.chain.push( block );
    }
}

// Export zum Verwenden von aussen
module.exports = Blockchain;