// TypeScript type definitions for crypto wallet functionality

/**
 * Wallet information interface
 */
export interface WalletInfo {
    address: string
    balance: string
    transactions: number
    lastActivity: string
    network: string
}

/**
 * Wallet data for CMS collection
 */
export interface WalletData {
    address: string
    balance: string
    transactions: number
    lastActivity: string
}

/**
 * Collection schema field type
 */
export interface SchemaField {
    id: string
    name: string
    type: "string" | "number" | "boolean" | "date"
}

/**
 * Collection schema interface
 */
export interface CollectionSchema {
    id: string
    name: string
    schema: SchemaField[]
}

/**
 * CMS item fields
 */
export interface CMSItemFields {
    address: string
    balance: string
    transactions: number
    lastActivity: string
}

/**
 * CMS collection item
 */
export interface CMSCollectionItem {
    id: string
    fields: CMSItemFields
}

/**
 * Sync collection parameters
 */
export interface SyncCollectionParams {
    collectionId: string
    items: CMSCollectionItem[]
}

/**
 * Notification variant type
 */
export type NotificationVariant = "success" | "error" | "warning" | "info"

/**
 * Notification options
 */
export interface NotificationOptions {
    variant: NotificationVariant
    durationMs?: number
}
