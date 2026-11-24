---
title: "Educational Series #152: Index Futures vs. Stock Futures — Liquidity, Lot Sizes, Tick Mechanics & Underlying Behavior"
description: "Compare Index Futures and Stock Futures on NSE and BSE across liquidity, bid-ask spreads, lot sizes, gap behavior, and settlement characteristics."
pubDatetime: 2026-11-24T18:30:00Z
tags:
  - Module 06
  - Futures Market
---

In **Lesson #151**, we defined futures contracts and leverage. In **Lesson #152**, we compare the two major equity derivative categories available on Indian exchanges: **Index Futures** and **Stock Futures**. Although both use standardized lot sizes and margin, their liquidity profiles, gap behavior, and settlement rules behave very differently in practice.

![Educational Series #152: Index Futures vs. Stock Futures](/images/lessons/lesson-152.png)

---

## 1. Index Futures vs. Stock Futures at a Glance

| Dimension | Index Futures (e.g., Nifty, Bank Nifty) | Stock Futures (Single NSE Stocks) |
| :--- | :--- | :--- |
| **Underlying Basket** | Diversified basket of constituent stocks | Single corporate equity |
| **Idiosyncratic / Company Risk** | Diversified across index weights; less vulnerable to single-company earnings shocks | High single-stock event risk (earnings, corporate actions, regulatory news, ban periods) |
| **Liquidity & Spreads** | Deep order books and tight spreads in active near-month contracts | Varies widely by counter; liquid large-caps trade smoothly, while lower-liquidity names can show wider spreads |
| **Settlement** | **Cash-settled** on expiry | **Physically settled** on expiry |

---

## 2. How Underlying Behavior Shapes Price Action

*   **Index Futures:** Reflect broad market liquidity, institutional index flows, and macro sentiment. Because an index averages multiple stocks, single-stock news is cushioned—though heavyweight constituents can still pull the index sharply.
*   **Stock Futures:** Reflect company-specific catalysts, sector rotation, and delivery/rollover dynamics. A single earnings surprise or corporate announcement can cause sharp opening gaps or trend extensions that do not occur across the broader index.

---

## 3. Lot Sizes & Tick Mechanics

Every futures contract trades in integer multiples of its exchange-defined **Lot Size** (set and periodically revised by exchanges under SEBI guidelines):

*   **Contract Value:** $\text{Contract Value} = \text{Futures Price} \times \text{Lot Size}$.
*   **Tick Movement:** The minimum price increment is the **tick size** (commonly `₹0.05` or `₹0.10` depending on instrument rules). Each `1-point` move in futures equals `1 × Lot Size` in Rupees.

---

## 4. Key Takeaways

*   **Index futures** offer broad market exposure and cash settlement, while **stock futures** carry single-company event risk and physical settlement.
*   Always check **current exchange lot sizes** and liquidity before sizing a futures trade.
*   Match your instrument selection to your tolerance for overnight gap and company-specific risk.

---

## 5. Quick Self-Check

1.  Why are stock futures generally exposed to sharper **idiosyncratic gap risk** than broad index futures?
2.  How do you calculate the total notional value of a single futures lot?
3.  What key difference separates **index futures** from **stock futures** at contract expiry on NSE?
4.  
