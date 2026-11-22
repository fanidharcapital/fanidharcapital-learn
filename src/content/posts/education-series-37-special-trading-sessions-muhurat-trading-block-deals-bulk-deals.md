---
title: "Education Series #37: Special Trading Sessions — Muhurat Trading, Block Deals & Bulk Deals"
description: "Explore how Indian stock exchanges handle non-routine trading activity through special windows. Learn how the annual Diwali Muhurat Trading session works, and understand the operational differences between Block Deal windows and Bulk Deals."
pubDatetime: 2026-11-22T16:20:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-37.png
tags:
  - exchanges-and-operations
  - module-02
  - muhurat-trading
  - block-deals
  - bulk-deals
  - trading-sessions
---

![Special Trading Sessions — Muhurat Trading, Block Deals & Bulk Deals](/images/lessons/lesson-37.png)

Welcome to **Lesson 37** of **Module 02: Exchanges & Operations** (**Lessons 31–60**) in the **Shree Fanidhar Capital Education Series**.

In **Lesson 33** and **Lesson 36**, you saw how exchanges run opening/closing call auctions, continuous trading sessions, and stock-level surveillance guardrails like price bands and trade-to-trade settlement. However, not all exchange activity fits inside a standard 9:15 AM – 3:30 PM session.

Today, we cover three specialized trading mechanisms on NSE and BSE: **Muhurat Trading**, **Block Deals**, and **Bulk Deals**.

---

## 1. Muhurat Trading (Annual Diwali Session)

**Muhurat Trading** is a special, symbolic one-hour trading session conducted by Indian stock exchanges (NSE and BSE) on the evening of **Diwali (Lakshmi Pujan)**, marking the start of the traditional Hindu accounting year (**Samvat**).

### How Muhurat Trading Operates
* **Timing:** Typically held in the evening (e.g., around 6:00 PM – 7:00 PM IST, exact timings announced annually by exchange circulars) even when regular daytime markets are closed for the Diwali holiday.
* **Session Structure:** Mirrors a compressed trading day:
  1. **Block Deal Session** (short opening window)
  2. **Pre-Open Call Auction** (typically 15 minutes for opening price discovery)
  3. **Normal Continuous Trading Session** (45 minutes across equities, F&O, currency, and commodities)
  4. **Closing Session**
* **Settlement & Risk Rules:** Every trade executed during Muhurat Trading is a **legally binding exchange trade** subject to normal **T+1 settlement**, margin rules, and upper/lower circuit limits.
* **Operational Reality:** Because the session lasts under an hour with largely symbolic participation, liquidity can be patchy in smaller stocks—making **Limit Orders** essential to avoid wide bid-ask spreads.

---

## 2. Block Deals & The Dedicated Block Deal Window

When institutional investors—such as mutual funds, foreign portfolio investors (FPIs), insurance companies, or promoters—want to buy or sell a **massive quantity of shares** in a single transaction, placing that order in the regular open order book would trigger sharp price slippage.

To solve this, SEBI and exchanges provide a dedicated **Block Deal Window**:

* **Minimum Size Threshold:** Under SEBI's framework, a transaction qualifies as a **Block Deal** if it has a **minimum order value of ₹10 crore**.
* **Two Dedicated Windows Daily:**
  1. **Morning Block Deal Window:** **8:45 AM – 9:00 AM** (before the regular Pre-Open session begins). Reference price is the previous day's closing price.
  2. **Afternoon Block Deal Window:** **2:05 PM – 2:20 PM** (during the afternoon session). Reference price is the Volume Weighted Average Price (VWAP) of trades executed in the regular market between 1:45 PM and 2:00 PM.
* **Price Band Restriction:** Orders in the block deal window must be placed within **±1% of the applicable reference price**.
* **Mandatory Delivery:** Every trade executed in the block deal window **must result in delivery** (no netting/squaring off).

---

## 3. Bulk Deals (Executed in the Regular Market)

Unlike Block Deals—which use a separate dedicated trading window—a **Bulk Deal** takes place **during regular market hours (9:15 AM – 3:30 PM)** directly in the normal order book.

* **Quantity Threshold:** A transaction qualifies as a **Bulk Deal** when the **total quantity of shares bought or sold by a single client** across one or multiple trades during the day exceeds **0.5% of the total number of listed equity shares** of that company.
* **No Separate Window:** Executed like any regular market/limit order (or series of orders) on NSE or BSE.
* **Post-Market Disclosure:** Brokers must report Bulk Deals to the exchange, and both NSE and BSE publish daily **Bulk Deal and Block Deal disclosures** after market hours showing the client name, stock symbol, buy/sell side, quantity, and weighted average trade price.

---

## 4. Block Deal vs. Bulk Deal: Side-by-Side Comparison

| Feature | Block Deal | Bulk Deal |
| :--- | :--- | :--- |
| **Trigger Threshold** | Minimum trade value of **₹10 crore** | Quantity exceeding **0.5% of company's listed shares** |
| **Trading Window** | **Separate dedicated windows** (8:45–9:00 AM & 2:05–2:20 PM) | **Regular continuous market** (9:15 AM – 3:30 PM) |
| **Visibility During Trade** | Hidden from the regular public order book until disclosed | Visible in regular order book depth/volume as orders hit |
| **Price Restriction** | Strictly within **±1%** of reference price | Governed by the stock's normal daily price band |
| **Settlement** | Mandatory delivery (no intraday square-off) | Normal segment settlement rules apply |

---

## Key Takeaways

* **Muhurat Trading** is a special one-hour Diwali session that follows compressed Pre-Open, Continuous, and Closing phases with full **T+1 settlement** obligations.
* **Block Deals** ($\ge$ ₹10 crore) execute quietly in dedicated morning and afternoon windows within **±1% of reference price** to prevent market disruption.
* **Bulk Deals** ($>$ 0.5% of listed equity) execute inside the **regular 9:15 AM – 3:30 PM order book** and are disclosed by exchanges after market close.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
