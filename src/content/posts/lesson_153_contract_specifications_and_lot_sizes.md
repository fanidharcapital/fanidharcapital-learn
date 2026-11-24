---
title: "Educational Series #153: Contract Specifications & Lot Sizes — Notional Value, Tick Size, Circuit Limits & Position Limits"
description: "Learn how to read futures contract specifications—lot size, notional exposure, tick value, price bands/circuit limits, and position limits—before placing trades on NSE/BSE."
pubDatetime: 2026-11-24T18:45:00Z
tags:
  - Module 06
  - Futures Market
---

In **Lesson #152**, we contrasted index and stock futures. In **Lesson #153**, we examine the **contract specification sheet** behind every tradable futures contract. Ignoring contract specs—such as revised lot sizes, notional exposure per lot, or price bands—leads to sizing errors and unexpected order rejections.

![Educational Series #153: Contract Specifications & Lot Sizes](/images/lessons/lesson-153.png)

---

## 1. Essential Contract Parameters

Before trading any futures contract, verify five core specifications from exchange contract files or your broker's order/margin window:

1.  **Underlying & Expiry Series:** The specific index or stock and the exact expiry date (near, mid, or far contract).
2.  **Lot Size:** The fixed number of units per contract. Exchanges periodically revise lot sizes in line with SEBI contract-size norms.
3.  **Notional Contract Value:** $\text{Futures LTP} \times \text{Lot Size}$. This determines your true market exposure, even when margin blocks only a fraction.
4.  **Tick Size & Point Value:** Minimum price tick and Rupee P&L per `1.00` point move (`₹1.00 × Lot Size`).
5.  **Price Bands & Position Limits:** Exchange price-movement operating ranges/circuit parameters and client/market-wide position limits designed to maintain orderly markets.

---

## 2. Why Notional Value Matters More Than Margin Blocked

Two traders can both block `₹1,50,000` in margin across different contracts yet carry very different underlying exposures and volatility profiles:

*   **Always Check Exposure:** Know both how much **margin** is blocked and how much **notional value** you control.
*   **Lot Size Revisions:** When exchanges revise lot sizes, a single lot represents a different notional value than in earlier series—so never hardcode old lot numbers into your risk calculator without checking current specs.

---

## 3. Key Takeaways

*   Every futures contract has defined **lot size, expiry, tick size, notional exposure, and position/price limits**.
*   Notional exposure (`Price × Lot Size`) drives true position risk, whereas margin governs upfront capital blocked.
*   Verify updated contract specifications whenever trading a new series or after exchange circulars.

---

## 5. Quick Self-Check

1.  If a futures contract trades at `₹1,250` with a lot size of `400`, what is its total notional contract value?
2.  On that same contract, how much does a `₹3.50` price move change the position's value?
3.  Why should you check current exchange contract specifications rather than relying on memory for lot sizes?
4.  
