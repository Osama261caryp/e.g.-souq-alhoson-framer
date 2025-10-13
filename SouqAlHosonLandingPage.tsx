// SouqAlHosonLandingPage Component (Static)

import React from "react"
import { formatWalletAddress, formatBalance } from "./walletUtils"

interface WalletDisplayProps {
    address?: string
    balance?: string
}

/**
 * Static Landing Page with Crypto Wallet Display
 * Shows wallet information for cryptocurrency holders
 */
export default function SouqAlHosonLandingPage({
    address = "0x970A959AAC06FdB271e23C79daFA822dA93749FE",
    balance = "1.25",
}: WalletDisplayProps) {
    return (
        <div
            style={{
                width: "100%",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                fontFamily: "system-ui, -apple-system, sans-serif",
                padding: "40px 20px",
            }}
        >
            <h1
                style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    textAlign: "center",
                }}
            >
                SOUQ ALHOSON
            </h1>
            
            <p
                style={{
                    fontSize: "20px",
                    marginBottom: "40px",
                    opacity: 0.9,
                    textAlign: "center",
                }}
            >
                Crypto Wallet Management Solution
            </p>

            <div
                style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    padding: "30px",
                    maxWidth: "500px",
                    width: "100%",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
            >
                <h2
                    style={{
                        fontSize: "24px",
                        marginBottom: "20px",
                        fontWeight: "600",
                    }}
                >
                    Wallet Information
                </h2>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <div>
                        <div
                            style={{
                                fontSize: "14px",
                                opacity: 0.8,
                                marginBottom: "4px",
                            }}
                        >
                            Wallet Address
                        </div>
                        <div
                            style={{
                                fontSize: "16px",
                                fontWeight: "500",
                                fontFamily: "monospace",
                            }}
                        >
                            {formatWalletAddress(address)}
                        </div>
                    </div>

                    <div>
                        <div
                            style={{
                                fontSize: "14px",
                                opacity: 0.8,
                                marginBottom: "4px",
                            }}
                        >
                            Balance
                        </div>
                        <div
                            style={{
                                fontSize: "32px",
                                fontWeight: "bold",
                            }}
                        >
                            {formatBalance(balance)}
                        </div>
                    </div>

                    <div
                        style={{
                            marginTop: "10px",
                            padding: "12px",
                            background: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "8px",
                            fontSize: "14px",
                            textAlign: "center",
                        }}
                    >
                        Network: Ethereum Mainnet
                    </div>
                </div>
            </div>

            <p
                style={{
                    marginTop: "40px",
                    fontSize: "14px",
                    opacity: 0.7,
                    textAlign: "center",
                }}
            >
                Secure cryptocurrency wallet management for SOUQ ALHOSON
            </p>
        </div>
    )
}

