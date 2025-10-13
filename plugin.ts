// Framer CMS Plugin (configure + sync)

import { framer } from "framer-plugin"

// Wallet data types
interface WalletData {
    address: string
    balance: string
    transactions: number
    lastActivity: string
}

// Collection schema for wallet data
const walletCollectionSchema = {
    id: "cryptoWallets",
    name: "Crypto Wallets",
    schema: [
        { id: "address", name: "Wallet Address", type: "string" },
        { id: "balance", name: "Balance (ETH)", type: "string" },
        { id: "transactions", name: "Total Transactions", type: "number" },
        { id: "lastActivity", name: "Last Activity", type: "string" },
    ],
}

// Mock function to fetch wallet data (in production, use Etherscan API or similar)
async function fetchWalletData(address: string): Promise<WalletData> {
    // This is a mock implementation. In production, you would call an API like:
    // - Etherscan API: https://api.etherscan.io/api
    // - Alchemy API
    // - Infura API
    
    // For demo purposes, return mock data for the specified wallet
    return {
        address: address,
        balance: "1.25", // Mock balance in ETH
        transactions: 147, // Mock transaction count
        lastActivity: new Date().toISOString().split('T')[0], // Today's date
    }
}

// Configure function - sets up the CMS collection
framer.showUI({
    position: "top right",
    width: 400,
    height: 300,
})

export async function configure() {
    try {
        // Create or update the wallet collection
        await framer.createCollection(walletCollectionSchema)
        
        framer.notify("Crypto Wallet collection configured successfully!", {
            variant: "success",
            durationMs: 3000,
        })
    } catch (error) {
        framer.notify("Error configuring collection: " + error.message, {
            variant: "error",
        })
    }
}

// Sync function - fetches and syncs wallet data
export async function sync() {
    try {
        // Default wallet address from the issue
        const defaultWallet = "0x970A959AAC06FdB271e23C79daFA822dA93749FE"
        
        // Fetch wallet data
        const walletData = await fetchWalletData(defaultWallet)
        
        // Sync data to CMS collection
        await framer.syncCollection({
            collectionId: "cryptoWallets",
            items: [
                {
                    id: walletData.address,
                    fields: {
                        address: walletData.address,
                        balance: walletData.balance,
                        transactions: walletData.transactions,
                        lastActivity: walletData.lastActivity,
                    },
                },
            ],
        })
        
        framer.notify(`Wallet data synced! Balance: ${walletData.balance} ETH`, {
            variant: "success",
            durationMs: 3000,
        })
    } catch (error) {
        framer.notify("Error syncing wallet data: " + error.message, {
            variant: "error",
        })
    }
}
