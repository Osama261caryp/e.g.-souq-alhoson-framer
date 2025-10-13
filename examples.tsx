// Example Usage of SOUQ ALHOSON Wallet Components

/**
 * This file demonstrates how to use the wallet components
 * and plugin in your Framer project
 */

// ===== EXAMPLE 1: Using the Static Landing Page =====

import SouqAlHosonLandingPage from "./SouqAlHosonLandingPage"

// Default usage (uses the default wallet address)
function Example1() {
    return <SouqAlHosonLandingPage />
}

// Custom wallet address and balance
function Example2() {
    return (
        <SouqAlHosonLandingPage
            address="0x970A959AAC06FdB271e23C79daFA822dA93749FE"
            balance="2.5"
        />
    )
}

// ===== EXAMPLE 2: Using the CMS Landing Page =====

import SouqAlHosonCMSLanding from "./SouqAlHosonCMSLanding"

// Default usage
function Example3() {
    return <SouqAlHosonCMSLanding />
}

// With custom wallet data
function Example4() {
    const walletData = {
        address: "0x970A959AAC06FdB271e23C79daFA822dA93749FE",
        balance: "3.75",
        transactions: 250,
        lastActivity: "2025-10-13",
    }

    return <SouqAlHosonCMSLanding walletData={walletData} />
}

// ===== EXAMPLE 3: Using Wallet Utilities =====

import {
    formatWalletAddress,
    formatBalance,
    isValidEthereumAddress,
    getWalletInfo,
} from "./walletUtils"

async function Example5() {
    // Format wallet address
    const shortAddress = formatWalletAddress("0x970A959AAC06FdB271e23C79daFA822dA93749FE")
    console.log(shortAddress) // Output: 0x970A...9FE

    // Format balance
    const formattedBalance = formatBalance("1.25")
    console.log(formattedBalance) // Output: 1.2500 ETH

    // Validate address
    const isValid = isValidEthereumAddress("0x970A959AAC06FdB271e23C79daFA822dA93749FE")
    console.log(isValid) // Output: true

    // Get wallet info (async)
    const walletInfo = await getWalletInfo("0x970A959AAC06FdB271e23C79daFA822dA93749FE")
    console.log(walletInfo)
    // Output: {
    //   address: "0x970A959AAC06FdB271e23C79daFA822dA93749FE",
    //   balance: "1.25",
    //   transactions: 147,
    //   lastActivity: "2025-10-13",
    //   network: "Ethereum Mainnet"
    // }
}

// ===== EXAMPLE 4: Using the Framer Plugin =====

/**
 * In Framer, use the plugin to sync wallet data:
 * 
 * 1. Import the plugin in your Framer project
 * 2. Call configure() to set up the CMS collection
 * 3. Call sync() to fetch and sync wallet data
 * 4. Use the CMS data in your components
 */

// This would be called within Framer
// import { configure, sync } from "./plugin"

// Configure the CMS collection
// await configure()

// Sync wallet data
// await sync()

export {
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
}
