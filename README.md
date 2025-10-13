# SOUQ ALHOSON Framer Plugin

A comprehensive cryptocurrency wallet management solution for Framer, designed specifically for wallet holders.

## Features

### 🔌 Framer CMS Plugin
- **configure()** - Sets up crypto wallet CMS collection
- **sync()** - Fetches and syncs wallet data from blockchain

### 💳 Wallet Integration
- Display wallet address: `0x970A959AAC06FdB271e23C79daFA822dA93749FE`
- Real-time balance tracking
- Transaction count monitoring
- Last activity timestamp
- Ethereum Mainnet support

### 🎨 Components

#### SouqAlHosonLandingPage (Static)
A beautiful static landing page with wallet display
- Shows wallet address (shortened format)
- Displays current balance
- Network information
- Modern gradient design

#### SouqAlHosonCMSLanding (Dynamic)
Advanced dashboard with CMS integration
- Comprehensive wallet dashboard
- Multiple data points (address, balance, transactions, activity)
- Grid layout for better data visualization
- Auto-synced from Framer CMS

### 🛠️ Utilities (walletUtils.ts)
- `formatWalletAddress()` - Format addresses for display
- `isValidEthereumAddress()` - Validate Ethereum addresses
- `getWalletInfo()` - Fetch wallet information
- `formatBalance()` - Format balance with currency

## Usage

### In Framer

1. Import the plugin in your Framer project
2. Run `configure()` to set up the CMS collection
3. Run `sync()` to fetch wallet data
4. Use the components in your canvas

### Production Integration

To use real blockchain data, integrate with:
- **Etherscan API**: https://etherscan.io/apis
- **Alchemy**: https://docs.alchemy.com/
- **Infura**: https://infura.io/

Update the `fetchWalletData()` function in `plugin.ts` and `getWalletInfo()` in `walletUtils.ts` with your API keys.

## Default Wallet

The default wallet address is: `0x970A959AAC06FdB271e23C79daFA822dA93749FE`

This can be customized in the plugin configuration or component props.

## Security

- Never commit API keys to the repository
- Use environment variables for sensitive data
- Validate all wallet addresses before processing
- Follow blockchain security best practices

## License

MIT