# Quick Start Guide

## 🚀 Getting Started with SOUQ ALHOSON Crypto Wallet

### For the Impatient Developer

**What does this do?**  
This is a complete cryptocurrency wallet management solution for Framer that displays information for Ethereum wallet: `0x970A959AAC06FdB271e23C79daFA822dA93749FE`

**What's included?**  
✅ 2 Beautiful React components  
✅ Framer CMS Plugin  
✅ Utility functions  
✅ TypeScript types  
✅ Complete documentation

---

## 1️⃣ Use the Static Component (Fastest)

```tsx
import SouqAlHosonLandingPage from "./SouqAlHosonLandingPage"

// In your Framer canvas:
<SouqAlHosonLandingPage />
```

**That's it!** You now have a beautiful wallet display.

---

## 2️⃣ Use with Custom Wallet

```tsx
<SouqAlHosonLandingPage
  address="0xYourWalletAddress"
  balance="2.5"
/>
```

---

## 3️⃣ Use the CMS Component

```tsx
import SouqAlHosonCMSLanding from "./SouqAlHosonCMSLanding"

<SouqAlHosonCMSLanding />
```

This component pulls data from Framer CMS automatically.

---

## 4️⃣ Set Up CMS (First Time Only)

In your Framer project:

```typescript
import { configure, sync } from "./plugin"

// Setup (run once)
await configure()

// Sync data (run anytime)
await sync()
```

---

## 5️⃣ Use Utility Functions

```typescript
import {
  formatWalletAddress,
  formatBalance,
  isValidEthereumAddress,
  getWalletInfo
} from "./walletUtils"

// Format address
formatWalletAddress("0x970A959AAC06FdB271e23C79daFA822dA93749FE")
// Returns: "0x970A...9FE"

// Format balance
formatBalance("1.25")
// Returns: "1.2500 ETH"

// Validate address
isValidEthereumAddress("0x970A959AAC06FdB271e23C79daFA822dA93749FE")
// Returns: true

// Get wallet info (async)
const info = await getWalletInfo("0x970A959AAC06FdB271e23C79daFA822dA93749FE")
```

---

## 📁 File Reference

| File | Purpose |
|------|---------|
| `SouqAlHosonLandingPage.tsx` | Static wallet display component |
| `SouqAlHosonCMSLanding.tsx` | Dynamic dashboard with CMS |
| `plugin.ts` | Framer CMS plugin (configure + sync) |
| `walletUtils.ts` | Utility functions |
| `types.ts` | TypeScript type definitions |
| `examples.tsx` | Code examples |

---

## 🎨 What You Get

### Static Component
- Purple gradient background
- Wallet address display
- Balance display
- Network information
- Fully responsive

### CMS Component
- Complete dashboard
- 4 data cards (address, balance, transactions, activity)
- Grid layout
- Glass-morphism design
- Auto-synced data

---

## 🔧 Production Setup (Optional)

To use real blockchain data:

1. **Get API Key** from Etherscan, Alchemy, or Infura
2. **Update** `plugin.ts` line 26 and `walletUtils.ts` line 30
3. **Replace** mock data with API calls

Example:
```typescript
const response = await fetch(
  `https://api.etherscan.io/api?module=account&action=balance&address=${address}&apikey=${YOUR_API_KEY}`
)
```

---

## 📚 Need More Details?

- **README.md** - General overview
- **IMPLEMENTATION_SUMMARY.md** - Technical details
- **ARCHITECTURE.md** - System architecture
- **examples.tsx** - Code examples

---

## 💡 Common Use Cases

### Display Your Wallet
```tsx
<SouqAlHosonLandingPage 
  address="0x970A959AAC06FdB271e23C79daFA822dA93749FE"
/>
```

### Display with Balance
```tsx
<SouqAlHosonLandingPage 
  address="0x970A959AAC06FdB271e23C79daFA822dA93749FE"
  balance="5.0"
/>
```

### Dynamic Dashboard
```tsx
<SouqAlHosonCMSLanding 
  walletData={{
    address: "0x970A959AAC06FdB271e23C79daFA822dA93749FE",
    balance: "1.25",
    transactions: 147,
    lastActivity: "2025-10-13"
  }}
/>
```

---

## 🎯 Default Wallet

The default wallet is: `0x970A959AAC06FdB271e23C79daFA822dA93749FE`

This is used when no props are provided.

---

## ✅ Checklist

- [ ] Import the component
- [ ] Add to your Framer canvas
- [ ] Customize props (optional)
- [ ] Set up CMS (optional)
- [ ] Deploy!

---

## 🆘 Troubleshooting

**Q: Component not showing?**  
A: Check import path and component name

**Q: CMS data not syncing?**  
A: Run `configure()` first, then `sync()`

**Q: Want real blockchain data?**  
A: See Production Setup section above

---

## 📞 Support

For more information, see the full documentation:
- README.md
- IMPLEMENTATION_SUMMARY.md
- ARCHITECTURE.md

---

**Built with ❤️ for SOUQ ALHOSON**
