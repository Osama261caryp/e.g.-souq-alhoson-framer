// Crypto Wallet Utility Functions

export interface WalletInfo {
    address: string
    balance: string
    transactions: number
    lastActivity: string
    network: string
}

/**
 * Format wallet address for display (shortened version)
 * @param address - Full wallet address
 * @returns Shortened address like 0x970A...9FE
 */
export function formatWalletAddress(address: string): string {
    if (!address || address.length < 10) return address
    return `${address.slice(0, 6)}...${address.slice(-4)}`
}

/**
 * Validate Ethereum wallet address
 * @param address - Wallet address to validate
 * @returns True if valid Ethereum address
 */
export function isValidEthereumAddress(address: string): boolean {
    return /^0x[a-fA-F0-9]{40}$/.test(address)
}

/**
 * Get wallet info (mock implementation)
 * In production, integrate with:
 * - Etherscan API: https://api.etherscan.io/api?module=account&action=balance&address=...
 * - Alchemy: https://docs.alchemy.com/
 * - Infura: https://infura.io/
 * 
 * @param address - Wallet address
 * @returns Wallet information
 */
export async function getWalletInfo(address: string): Promise<WalletInfo> {
    // Validate address
    if (!isValidEthereumAddress(address)) {
        throw new Error("Invalid Ethereum address")
    }
    
    // Mock data - replace with actual API call in production
    return {
        address: address,
        balance: "1.25", // ETH
        transactions: 147,
        lastActivity: new Date().toISOString().split('T')[0],
        network: "Ethereum Mainnet",
    }
}

/**
 * Format balance with currency symbol
 * @param balance - Balance amount
 * @param currency - Currency symbol (default: ETH)
 * @returns Formatted balance string
 */
export function formatBalance(balance: string, currency: string = "ETH"): string {
    const numBalance = parseFloat(balance)
    return `${numBalance.toFixed(4)} ${currency}`
}
