// SouqAlHosonCMSLanding Component (Dynamic with CMS)

import React from "react"
import { formatWalletAddress, formatBalance } from "./walletUtils"

interface WalletData {
    address: string
    balance: string
    transactions: number
    lastActivity: string
}

interface CMSLandingProps {
    walletData?: WalletData
}

/**
 * Dynamic Landing Page with CMS Integration
 * Displays wallet data synced from Framer CMS
 */
export default function SouqAlHosonCMSLanding({
    walletData = {
        address: "0x970A959AAC06FdB271e23C79daFA822dA93749FE",
        balance: "1.25",
        transactions: 147,
        lastActivity: new Date().toISOString().split('T')[0],
    },
}: CMSLandingProps) {
    return (
        <div
            style={{
                width: "100%",
                minHeight: "500px",
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
            <div
                style={{
                    maxWidth: "800px",
                    width: "100%",
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
                    Advanced Crypto Wallet Management
                </p>

                <div
                    style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "16px",
                        padding: "30px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        marginBottom: "20px",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "24px",
                            marginBottom: "20px",
                            fontWeight: "600",
                        }}
                    >
                        Wallet Dashboard
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "20px",
                        }}
                    >
                        <div
                            style={{
                                background: "rgba(255, 255, 255, 0.1)",
                                borderRadius: "12px",
                                padding: "20px",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "14px",
                                    opacity: 0.8,
                                    marginBottom: "8px",
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
                                {formatWalletAddress(walletData.address)}
                            </div>
                            <div
                                style={{
                                    fontSize: "12px",
                                    opacity: 0.6,
                                    marginTop: "8px",
                                }}
                            >
                                Full: {walletData.address}
                            </div>
                        </div>

                        <div
                            style={{
                                background: "rgba(255, 255, 255, 0.1)",
                                borderRadius: "12px",
                                padding: "20px",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "14px",
                                    opacity: 0.8,
                                    marginBottom: "8px",
                                }}
                            >
                                Balance
                            </div>
                            <div
                                style={{
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                }}
                            >
                                {formatBalance(walletData.balance)}
                            </div>
                        </div>

                        <div
                            style={{
                                background: "rgba(255, 255, 255, 0.1)",
                                borderRadius: "12px",
                                padding: "20px",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "14px",
                                    opacity: 0.8,
                                    marginBottom: "8px",
                                }}
                            >
                                Total Transactions
                            </div>
                            <div
                                style={{
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                }}
                            >
                                {walletData.transactions}
                            </div>
                        </div>

                        <div
                            style={{
                                background: "rgba(255, 255, 255, 0.1)",
                                borderRadius: "12px",
                                padding: "20px",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "14px",
                                    opacity: 0.8,
                                    marginBottom: "8px",
                                }}
                            >
                                Last Activity
                            </div>
                            <div
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                }}
                            >
                                {walletData.lastActivity}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "16px",
                        padding: "20px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        textAlign: "center",
                    }}
                >
                    <p style={{ fontSize: "14px", opacity: 0.8 }}>
                        Network: Ethereum Mainnet
                    </p>
                    <p style={{ fontSize: "12px", opacity: 0.6, marginTop: "8px" }}>
                        Data synced from Framer CMS
                    </p>
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
        </div>
    )
}

