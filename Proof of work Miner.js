
const { sha256 } = require("ethereum-cryptography/sha256");
const { utf8ToBytes, toHex } = require("ethereum-cryptography/utils");

const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
  const transactions = mempool.splice(0, MAX_TRANSACTIONS);
  const blockHeight = blocks.length;

  // Step 1: Create new block with nonce starting at 0
  const newBlock = {
    id: blockHeight,
    transactions: transactions,
    nonce: 0
  };

  let hashHex;

  // Step 2: Proof of Work loop
  while (true) {
    const blockString = JSON.stringify(newBlock);
    const bytes = utf8ToBytes(blockString);
    const hashBytes = sha256(bytes);
    hashHex = toHex(hashBytes);

    const intVal = BigInt("0x" + hashHex); // note: "0x", not "Ox"

    if (intVal < TARGET_DIFFICULTY) {
      // Found a valid hash
      break;
    }

    newBlock.nonce++;
  }

  // Step 3: Add hash AFTER finding valid one
  newBlock.hash = hashHex;

  // Step 4: Push block into chain
  blocks.push(newBlock);

  return newBlock;
}


module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    blocks,
    mempool
};
