const SHA256 = require( "crypto-js/sha256" );

// Klasse Block erstellen
class Block {
    // Konstruktor erstellen
        constructor( timestamp, lastHash, hash, data ){
            this.timestamp = timestamp;         // Zeitstempel
            this.lastHash = lastHash;           // Hash des vorhergehenden Blocks
            this.hash = hash;                   // Eigener Hash
            this.data = data;                   // Daten
        }

    // für Debugging Zwecke alles als String Ausgabe
        toString() { 
            return `
                Block -
                    Timestamp:  ${this.timestamp}
                    Last Hash:  ${this.lastHash}
                    Hash:       ${this.hash}
                    Data:       ${this.data}
            `
        }

    // genesis erster Block, intern static auf this schauend
        static hash( timestamp, lastHash, data ) {
            return SHA256( `${timestamp}, ${lastHash}, ${data}` ).toString();
        }
    
    // genesis erster Block, intern static auf this schauend
        static genesis() {
            return new this( 
                "Genesis Time",
                "ZeroHash",
                "HashBlock0",
                ["Genesis Data", "data1", "data2"]
            )
        }

    // zweiter Block in der Chain
        static mineBlock( lastBlock, data ) {
            const timestamp = Date.now();                           // Zeitstempel in ms erzeugen
            const lastHash = lastBlock.hash;                        // übergabe des letzten Hashwertes
            const hash = Block.hash( timestamp, lastHash, data );   // erzeuge neuen Hashwert
            return new this( timestamp, lastHash, hash, data );     // erzeuge Ausgabe
        }
}

// Export zum Verwenden von aussen
module.exports = Block;