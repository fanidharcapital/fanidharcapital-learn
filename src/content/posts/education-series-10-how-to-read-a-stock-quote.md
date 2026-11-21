---
title: "Education Series #10: How to Read a Stock Quote — Price, Volume, Bid, Ask & Market Depth"
description: "Learn how to decode every number on a stock quote screen—LTP, OHLC, Volume, Bid-Ask spread, Upper/Lower Circuit limits, and Level 2 Market Depth—before placing any order."
pubDatetime: 2026-11-21T19:50:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-10.png
tags:
  - market-foundations
  - stock-quote
  - market-depth
  - order-execution
---

![How to Read a Stock Quote — Price, Volume, Bid, Ask & Market Depth](/images/lessons/lesson-10.png)

When you tap on any stock inside your broker app (Zerodha, Kotak Neo, Groww, etc.), you are greeted by a screen packed with ticking numbers—**LTP, Open, High, Low, Close, Volume, Bid, Ask, and Market Depth**. 

To a beginner, it can look like an airport flight board. Learning how to read a stock quote properly helps you judge **liquidity, volatility, and fair execution price** before you ever press Buy or Sell.

---

## 1. Core Price Metrics (LTP & OHLC)

Every stock quote starts with five essential price points:

* **LTP (Last Traded Price):** The exact price at which the most recent trade occurred on NSE or BSE. While markets are open (9:15 AM – 3:30 PM IST), LTP updates tick by tick.
* **Previous Close:** The official closing price from the previous trading session (calculated as the weighted average price of the last 30 minutes of trading on NSE/BSE). Daily percentage change (`+1.85%` or `-0.90%`) is measured against this number.
* **Open:** The first traded price when the market opens at 9:15 AM IST (determined during the 9:00 AM – 9:08 AM pre-open call auction).
* **High & Low (Day's Range):** The highest and lowest prices at which the stock traded during the current session.
* **52-Week High & Low:** The highest and lowest prices touched over the past one year—useful for gauging long-term price range and momentum.

---

## 2. Volume & Traded Value (Measuring Conviction)

Price tells you *what* happened; **volume** tells you *how much participation* stood behind that move.

* **Volume:** The total number of shares bought and sold during the day. (Note: 1 buyer buying 100 shares from 1 seller counts as a volume of **100 shares**, not 200).
* **Turnover / Traded Value:** Total rupee value traded (`Volume × Average Traded Price`).
* **Why Volume Matters:**
  * A price breakout accompanied by **high volume** signals strong institutional or broad market conviction.
  * A sharp price jump on **very low volume** (common in illiquid small-caps) can reverse just as easily.

---

## 3. Bid, Ask & The Bid-Ask Spread

Stock exchanges do not set prices; they match buyers and sellers through a live order book:

* **Bid Price (Buyers):** The highest price a buyer is currently willing to pay for the stock.
* **Ask / Offer Price (Sellers):** The lowest price a seller is currently willing to accept.
* **Bid-Ask Spread:** The difference between the lowest Ask and the highest Bid (`Ask Price − Bid Price`).

| Stock Type | Example Bid | Example Ask | Bid-Ask Spread | What It Tells You |
| :--- | :--- | :--- | :--- | :--- |
| **Liquid Large-Cap** | ₹1,450.00 | ₹1,450.10 | **₹0.10 (0.007%)** | Tight spread; high liquidity; low slippage on market orders. |
| **Illiquid Small-Cap** | ₹212.00 | ₹218.50 | **₹6.50 (3.06%)** | Wide spread; thin liquidity; placing a market order causes immediate loss. |

> **Rule of Thumb:** Whenever the Bid-Ask spread is wide, always use a **Limit Order** rather than a **Market Order** so you never overpay.

---

## 4. Market Depth (Level 2 Order Book)

Beneath the main quote sits the **Market Depth** table—typically displaying the **top 5 bids** (in blue/green on the left) and the **top 5 asks** (in red on the right), along with the number of orders and total quantity at each price level.

### Sample Market Depth Snapshot (Stock LTP: ₹500.10)

| Buy Orders | Buy Qty | **Bid Price** | **Ask Price** | Sell Qty | Sell Orders |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 14 | 1,250 | **₹500.05** | **₹500.15** | 980 | 11 |
| 22 | 3,400 | **₹500.00** | **₹500.20** | 2,150 | 18 |
| 9 | 890 | **₹499.95** | **₹500.25** | 4,600 | 25 |
| 17 | 2,700 | **₹499.90** | **₹500.30** | 1,500 | 12 |
| 31 | 5,100 | **₹499.85** | **₹500.35** | 3,200 | 19 |
| *Total Buy Qty* | ***4,82,500*** | | | ***3,95,100*** | *Total Sell Qty* |

### How to Read This Table
1. **Immediate Execution:** If you place a **Market Buy** order for 500 shares right now, it will fill at **₹500.15** (where 980 shares are available). If you place a Market Buy for 2,000 shares, 980 shares will fill at ₹500.15 and the remaining 1,020 shares will fill at **₹500.20**—this price slippage is called **impact cost**.
2. **Support & Resistance Clusters:** Large stacked quantities at round numbers (like 5,100 shares at ₹499.85) show where pending limit orders are clustered, though institutional orders can be modified or canceled in milliseconds.
3. **Total Buy vs. Total Sell Quantity:** Shows all pending limit orders across the entire order book—not just the top 5 rows.

---

## 5. Circuit Limits & VWAP (Other Key Quote Fields)

* **Lower Circuit & Upper Circuit:** The maximum price band (e.g., ±5%, ±10%, or ±20%) within which a stock is allowed to trade on a given day to prevent panic crashes or manipulation. *(F&O stocks do not have fixed daily circuit locks, though dynamic price bands apply).*
* **VWAP (Volume Weighted Average Price):** The average price at which the stock has traded throughout the day, weighted by volume (`Total Traded Value ÷ Total Volume`). Institutions use VWAP as a benchmark to judge whether they bought at a fair intraday price.

---

## Key Takeaways

* **LTP is historical, Bid/Ask is actionable:** LTP shows the *last* trade, while the **Ask** (for buyers) and **Bid** (for sellers) show the price you will actually get right now.
* **Check the Bid-Ask spread before every order:** A tight spread means high liquidity; a wide spread demands a **Limit Order** to avoid unnecessary slippage.
* **Market Depth reveals order size capacity:** Always verify that sufficient quantity exists near the top levels before placing large orders.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
