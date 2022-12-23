// call: npm run dev-test

// Import Block
const Block = require("./block");
const Blockchain = require("./blockchain");

// Test 1: der Block Funktionalität mit neuem Objekt
    // const block = new Block(
    //     "aktuelle Zeit",
    //     "Hash 1",
    //     "Hash 2",
    //     "meine Daten"
    // );
    // console.log( block.toString() );

// Test 2: der Block Funktionalität von der Klasse aus mit statischer Methode
    // // console.log( Block.genesis().toString() );
    // // Genesis Block
    //     const genesisBlock = Block.genesis();
    // // erster Blockchain mit Übergabe
    //     const testBlock1 = Block.mineBlock( genesisBlock, "Block1Text" );
    // // zweiter Blockchain mit Übergabe
    //     const testBlock2 = Block.mineBlock( testBlock1, "Block2Text" );
    // // dritter Blockchain mit Übergabe
    //     const testBlock3 = Block.mineBlock( testBlock2, "Block3Text" );

    // console.log( genesisBlock.toString() );
    // console.log( testBlock1.toString() );
    // console.log( testBlock2.toString() );
    // console.log( testBlock3.toString() );

// Test 3: Verwendung der Blockchain
    // Grundblock - Genensis Block
        const chain = new Blockchain();
        // console.log( chain );

    // neuen Block hinzufügen
        chain.addBlock( "Daten von Block 1" );
        // console.log( chain );

    // neuen Block hinzufügen
        chain.addBlock( "Daten von Block 2" );
        // console.log( chain );

    // neuen Block hinzufügen
        chain.addBlock( "Daten von Block 3" );
        console.log( chain );