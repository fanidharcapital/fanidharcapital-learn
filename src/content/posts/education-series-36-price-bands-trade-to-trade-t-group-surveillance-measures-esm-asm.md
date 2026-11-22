---
title: "Education Series #36: Price Bands, Trade-to-Trade (T-Group) & Surveillance Measures (ESM / ASM)"
description: "Understand how Indian exchanges curb runaway volatility and manipulative spikes using dynamic/fixed price bands, Trade-to-Trade (T/BE/BZ) settlement segments, and Enhanced/Additional Surveillance Measures (ESM / ASM)."
pubDatetime: 2026-11-22T16:17:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-36.png
tags:
  - exchanges-and-operations
  - module-02
  - price-bands
  - trade-to-trade
  - asm-esm
  - surveillance
---

![Price Bands, Trade-to-Trade (T-Group) & Surveillance Measures (ESM / ASM)](/images/lessons/lesson-36.png)

Welcome to **Lesson 36** of **Module 02: Exchanges & Operations** (**Lessons 31–60**) in the **Shree Fanidhar Capital Education Series**.

In **Lesson 35**, you explored tick sizes, lot sizes, and order validity rules (Day, IOC, GTT, and AMO). Today, we look at the protective guardrails that SEBI and Indian stock exchanges place on individual stocks to contain disorderly price swings, circular trading, and speculative excess: **Price Bands**, **Trade-to-Trade (T-Group)** segments, and **Surveillance Frameworks (ASM and ESM)**.

---

## 1. Price Bands (Circuit Filters) on Individual Stocks

A **price band** (commonly called a stock's upper and lower circuit limit) defines the maximum percentage range within which an individual stock can trade during a session relative to its reference price (usually the previous trading day's closing price or the opening call-auction price).

* **Fixed Price Bands:** Applicable to non-derivative cash equities, typically set at **2%, 5%, 10%, or 20%**. Once a stock hits its upper circuit limit, buyers can continue queuing orders at that ceiling, but no trades can execute above it for that session. Similarly, at the lower circuit limit, no trades can execute below the floor.
* **Dynamic Price Bands:** Applicable to stocks with **derivative (F&O) contracts** (and select eligible stocks without fixed slabs). Rather than locking the stock permanently at a single fixed cap, exchanges apply an initial operating band (commonly **10%**) that **dynamically flexes outward** after a cooling-off period if genuine market demand or supply persists, allowing uninterrupted institutional price discovery without sudden freak spikes.

> **Operational Reality:** When a stock hits a locked upper or lower circuit, liquidity dries up on one side of the order book—meaning pending stop-loss or exit orders may remain **unfilled** until the circuit opens.

---

## 2. Trade-to-Trade (T-Group) Settlement Explained

In standard equity rolling settlement (**EQ** series on NSE / **A** or **B** group on BSE), you can buy and sell the same stock within the same trading day and settle only the net difference.

When an exchange shifts a stock to **Trade-to-Trade (T-Group)**—such as NSE's **BE** (Book Entry) or **BZ** series and BSE's **T** or **XT** group—**every single trade must result in mandatory delivery of shares and full payment of funds**:

| Feature | Normal Rolling Segment (e.g., EQ) | Trade-to-Trade Segment (e.g., BE / T Group) |
| :--- | :--- | :--- |
| **Intraday Netting / Square-Off** | Permitted (subject to product & margin rules) | **Strictly prohibited** — buy and sell trades do not net off |
| **Upfront Margin Requirement** | Standard VaR + ELM segment margin | **100% margin** upfront (no intraday leverage) |
| **Settlement Obligation** | Net end-of-day position settles on T+1 | **Every trade settles gross** on T+1 |
| **Regulatory Objective** | Smooth liquidity and tight spreads | Deters speculative day-trading, churning, and artificial volume |

### The Classic T-Group Operational Mistake
Suppose you buy **200 shares** of a **BE / T-group** stock at 10:30 AM and sell **200 shares** at 2:15 PM thinking you closed an intraday trade:
* Because T-group trades **do not net off**, the exchange treats your morning buy as a **200-share pay-in/pay-out delivery obligation** and your afternoon sell as a **separate 200-share delivery obligation**.
* If you did not already hold 200 shares in your Demat account before selling, your afternoon sale results in **short delivery** and goes to the exchange **auction market** (covered in **Lesson 47**)!

---

## 3. Additional Surveillance Measure (ASM) & Enhanced Surveillance Measure (ESM)

SEBI and the exchanges run automated surveillance frameworks to identify securities exhibiting unusual price movements, sharp volume spikes, high client concentration, or valuation disconnects.

### A. Additional Surveillance Measure (ASM)
* **Structure:** Divided into **Short-Term ASM** and **Long-Term ASM**, escalating across numbered stages (e.g., Stage I through Stage IV) based on objective surveillance parameters.
* **Progressive Restrictions:**
  * Reduction of daily price bands (e.g., tightening down to **5%**).
  * Mandatory shift to **Trade-to-Trade (T-Group)** settlement.
  * **100% upfront margin** requirement for all buyers and sellers.
  * **100% haircut** on collateral value (meaning shares under higher ASM stages cannot be pledged to generate trading margin).

### B. Enhanced Surveillance Measure (ESM)
* **Focus:** Specifically monitors smaller-cap companies (below prescribed market-capitalization thresholds) showing abnormal price-to-earnings, high-low price variation, or concentrated trading patterns.
* **Key Controls:**
  * Immediate shift to **Trade-to-Trade** settlement with **100% margin**.
  * Tighter price bands (**5%** in Stage I, tightening to **2%** in Stage II).
  * In higher stages, trading is restricted to **periodic call auctions** (rather than continuous trading) to prevent sudden manipulation.

---

## 4. Pre-Trade Operational Checklist

Before placing an order in any unfamiliar stock, verify three quick details on your trading terminal or exchange quote page:
1. **Series / Group Code:** Check whether it is `EQ` or `BE` / `BZ` / `T`.
2. **Daily Circuit Limits:** Confirm the exact upper and lower circuit prices so your limit or stop-loss order isn't rejected or trapped.
3. **ASM / ESM Tag:** Note whether the stock carries an `ASM` or `ESM` surveillance tag, which affects margin requirements, intraday square-off eligibility, and pledge collateral value.

---

## Key Takeaways

* **Price bands cap single-day price swings** using fixed circuit slabs (2%, 5%, 10%, 20%) for non-F&O stocks and dynamic flexing bands for F&O stocks.
* **Trade-to-Trade (T-Group / BE) prohibits intraday netting**, requiring 100% margin and mandatory delivery on every single buy and sell trade.
* **ASM and ESM surveillance frameworks** progressively tighten price bands, enforce T-group delivery, and restrict collateral pledges on stocks showing abnormal volatility or concentration.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
