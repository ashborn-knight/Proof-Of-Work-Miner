# Proof-Of-Work-Miner
# 🪙 Simple Blockchain Miner (Proof of Work)

This project is a simplified blockchain miner written in **JavaScript**.  
It demonstrates the core concepts behind Bitcoin and Ethereum mining:
- Blocks
- Transactions
- Hashing
- Nonce
- Proof of Work
- Target Difficulty

---

## 🚀 Features
- **Mempool**: Stores pending transactions before they are mined.
- **Block Structure**: Each block contains:
  - `id` → block height
  - `transactions` → pulled from mempool
  - `nonce` → proof-of-work counter
  - `hash` → unique fingerprint of the block
- **Proof of Work**: Increments the nonce until a valid hash is found that is less than the `TARGET_DIFFICULTY`.
- **Difficulty Target**: Adjustable mining difficulty using a BigInt comparison.
- **Transaction Limit**: Each block can include up to `MAX_TRANSACTIONS`.

---



## ⚙️ How It Works
1. Add transactions to the mempool:
   ```js
   addTransaction("Alice pays Bob 5 BTC");
   addTransaction("Charlie pays Dave 2 BTC");


