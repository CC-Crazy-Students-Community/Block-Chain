
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
            Block 1 -
                Timestamp:  ${this.timestamp}
                Last Hash:  ${this.lastHash}
                Hash:       ${this.hash}
                Data:       ${this.data}
        `
    }
}
module.exports = Block;
//export default Block;