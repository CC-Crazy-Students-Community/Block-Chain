// call: npm run dev-test

// Import Block
const Block = require("./block");

// Test der Block Funktionalität mit neuem Objekt
    const block = new Block(
        "aktuelle Zeit",
        "Hash 1",
        "Hash 2",
        "meine Daten"
    );
    // console.log( block.toString() );

// Test der Block Funktionalität von der Klasse aus mit statischer Methode
    //console.log( Block.genesis().toString() );
    // Genesis Block
        const genesisBlock = Block.genesis();
    // erster Block mit Übergabe
        const testBlock1 = Block.mineBlock1( genesisBlock, "Block1Text" );
    // zweiter Block mit Übergabe
        const testBlock2 = Block.mineBlock2( testBlock1, "Block2Text" );

    console.log( genesisBlock.toString() );
    console.log( testBlock1.toString() );
    console.log( testBlock2.toString() );
