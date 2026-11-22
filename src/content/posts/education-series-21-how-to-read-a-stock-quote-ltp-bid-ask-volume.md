---
title: "Education Series #21: How to Read a Stock Quote — LTP, Bid, Ask & Volume"
description: "Learn how to decode every key field on a live NSE or BSE stock quote screen—including LTP, Bid Price and Bid Quantity, Ask/Offer Price and Ask Quantity, Bid-Ask Spread, and Volume—so you execute smarter orders."
pubDatetime: 2026-11-22T12:41:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-21.png
tags:
  - market-foundations
  - stock-quote
  - bid-ask-spread
  - ltp
  - trading-volume
---

![How to Read a Stock Quote — LTP, Bid, Ask & Volume](/images/lessons/lesson-21.png)

When you open a stock on your brokerage terminal or watch market data on **NSE** or **BSE**, you see far more than a single price tag. Numbers like **LTP**, **Bid**, **Ask**, and **Volume** appear side by side—and misreading even one of them can cost you money on execution.

Learning to read a live stock quote is like learning to read a car's dashboard: it tells you where you are, what is happening right around you, and how smoothly the vehicle is running.

---

## 1. LTP (Last Traded Price)

**LTP** stands for **Last Traded Price**—the exact price at which the most recent buy-sell transaction was matched and executed on the exchange.

* **What LTP Tells You:** It shows the latest agreed-upon market price at that exact microsecond, along with the **change** (in ₹ and %) compared to the previous session's closing price.
* **What LTP Does Not Guarantee:** LTP is history from the previous trade, not a promise of the price you will get right now. If the stock is thinly traded or moving fast, your order may fill slightly above or below LTP.

---

## 2. Bid vs. Ask (Offer) and the Spread

Every active two-way market has two sides waiting to trade: buyers and sellers.

### Bid Price & Bid Quantity
* **Bid Price:** The highest price a buyer is currently willing to pay to buy shares.
* **Bid Quantity:** The total number of shares buyers want at that bid level (and across the visible order book / market depth).

### Ask (Offer) Price & Ask Quantity
* **Ask Price:** The lowest price a seller is currently willing to accept to sell shares.
* **Ask Quantity:** The total number of shares sellers are offering at that ask level.

### Why Bid Is Lower Than Ask (The Spread)
Normally, the highest buyer price (**Bid**) is slightly lower than the lowest seller price (**Ask**). The gap between them is the **Bid-Ask Spread**:

$$\text{Bid-Ask Spread} = \text{Ask Price} - \text{Bid Price}$$

* **Tight Spread (e.g., ₹0.05 on a ₹1,500 stock):** Indicates high liquidity and active two-way competition; entry and exit costs are minimal.
* **Wide Spread (e.g., ₹3.00 on a ₹200 stock):** Indicates lower liquidity or sharp volatility; placing a **Market Order** here can cause noticeable **slippage**.

---

## 3. Volume (Traded Volume)

**Volume** is the total number of shares that have actually changed hands (bought and sold) during the trading session up to that moment.

* **Shares, Not Rupees:** On Indian equity screens, standard **Volume** represents the count of shares traded (whereas **Turnover** or **Traded Value** shows the rupee value—roughly $\text{Volume} \times \text{Average Price}$).
* **Confirms Participation:** A price move on high volume usually reflects broad market conviction, while a sharp move on very low volume can be fragile or prone to sudden reversals.
* **Compare Contextually:** A volume of 10 lakh shares means something very different in a mega-cap stock than in a smaller stock, and opening/closing hours naturally see heavier activity than midday lulls.

---

## 4. Putting It Together: Sample Quote Snapshot

| Quote Field | Sample Value | Practical Meaning |
| :--- | :--- | :--- |
| **LTP** | ₹1,245.50 (+1.45%) | Last matched trade happened at ₹1,245.50, up 1.45% from previous close. |
| **Best Bid** | ₹1,245.25 (Qty: 450) | Top buyer is offering ₹1,245.25 for 450 shares. |
| **Best Ask** | ₹1,245.75 (Qty: 300) | Lowest seller is asking ₹1,245.75 for 300 shares. |
| **Bid-Ask Spread** | ₹0.50 | Buying immediately at Ask costs ₹0.50 above the top Bid. |
| **Volume** | 28,45,000 | 28.45 lakh shares traded so far in the session. |

* **If you want to buy immediately without waiting:** You are looking at the **Ask** side (around ₹1,245.75 in the example above).
* **If you want to sell immediately without waiting:** You are looking at the **Bid** side (around ₹1,245.25 in the example above).

---

## Key Takeaways

* **LTP is the last print, not a guaranteed fill:** Always check the live **Bid** and **Ask** before placing an order.
* **Tight spreads mean cleaner execution:** Liquid stocks with narrow bid-ask spreads reduce hidden execution friction.
* **Volume adds context to price:** Treat volume as confirmation of market participation, and always pair quote reading with position sizing and risk rules.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
