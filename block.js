
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
    static genesis() {
        return new this( 
            "Genesis Time",
            "ZeroHash",
            "HashBlock0",
            ["Genesis Data", "data1", "data2"]
        )
    }

    // zweiter Block in der Chain
        static mineBlock1( lastBlock, data ) {
            const timestamp = Date.now();                       // Zeitstempel in ms erzeugen
            const lastHash = lastBlock.hash;                    // übergabe des letzten Hashwertes
            const hash = "HashBlock1"                           // erzeuge neuen Hashwert
            return new this( timestamp, lastHash, hash, data ); // erzeuge Ausgabe
        }

    // dritter Block in der Chain
        static mineBlock2( lastBlock, data ) {
            const timestamp = Date.now();                       // Zeitstempel in ms erzeugen
            const lastHash = lastBlock.hash;                    // übergabe des letzten Hashwertes
            const hash = "HashBlock2"                           // erzeuge neuen Hashwert
            return new this( timestamp, lastHash, hash, data ); // erzeuge Ausgabe
        }
}
module.exports = Block;