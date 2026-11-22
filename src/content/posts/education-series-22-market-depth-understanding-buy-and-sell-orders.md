---
title: "Education Series #22: Market Depth — Understanding Buy and Sell Orders"
description: "Go beyond the LTP (Last Traded Price) by analyzing the full Order Book / Market Depth screen on NSE and BSE. Learn how to interpret the hierarchy of pending Buy (Bid) and Sell (Ask) orders, quantities at each price level, and what a deep or thin order book reveals about liquidity and potential price movement."
pubDatetime: 2026-11-22T12:47:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-22.png
tags:
  - market-foundations
  - order-book
  - market-depth
  - bid-ask
  - liquidity
  - DOM
---
Welcome to **Lesson 22** of **Module 01: Market foundation** (**Lessons 01–30**) in the **Shree Fanidhar Capital Education Series**.

![Market Depth — Understanding Buy and Sell Orders](/images/lessons/lesson-22.png)

In the previous lesson, we introduced the basic concepts of Bid and Ask. To truly understand how orders are executed on the **NSE** and **BSE**, you must look deeper than just the single best Bid and Best Ask price. You need to analyze the **Market Depth**, also known as the **Order Book**.

The Market Depth screen is a real-time, prioritized list of all pending limit orders for a specific stock, categorized by the buy side (bids) and the sell side (offers/asks).

---

## 1. The Anatomy of the Order Book (Market Depth)

When you open the Market Depth window on your trading platform, you typically see two distinct columns (or rows):

### The Buy Side (Bids / Demand)
This side lists all investors who want to **buy** the stock using Limit Orders. They are ranked by price:
1.  **Top Bid:** The highest price an investor is willing to pay. This is the **Best Bid**.
2.  **Descending Order:** The bids below are listed from the highest price down to the lowest price.

### The Sell Side (Offers / Asks / Supply)
This side lists all investors who want to **sell** the stock using Limit Orders. They are also ranked by price:
1.  **Top Ask:** the lowest price an investor is willing to accept. This is the **Best Ask** (or Lowest Offer).
2.  **Ascending Order:** The offers above are listed from the lowest price up to the highest price.

---

## 2. Market Depth Hierarchy (The 5-Depth Display)

Indian exchanges (NSE and BSE) mandate that brokers display at least the **Top 5** levels of Market Depth for all listed stocks. This provides a snapshot of supply and demand near the current market price.

### Sample Market Depth View (INFY)

| **Buy Side (Bid)** | | | | **Sell Side (Offer/Ask)** | |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Qty** | **Orders** | **Price** | | **Price** | **Orders** | **Qty** |
| 850 | 3 | **1,864.50** | | **1,864.90** | 1 | 250 |
| **1,200** | 5 | **1,864.25** | | **1,865.00** | 4 | **2,100** |
| 950 | 2 | **1,864.00** | | **1,865.45** | 2 | 400 |
| 600 | 4 | **1,863.75** | | **1,865.75** | 1 | 150 |
| 1,500 | 7 | **1,863.50** | | **1,866.00** | 6 | 1,900 |
| **5,100** | **Total Qty** | | | | **Total Qty** | **4,800** |

*Note how the prices converge towards the center (LTP, which would be around ₹1,864.70). Buyers want the lowest price, Sellers want the highest.*

---

## 3. Interpreting Market Depth: What It Reveals

Analyzing the relationship between the quantity and price levels on both sides of the book provides crucial trading insights:

### 1. Liquidity and Ease of Execution
Market depth is the primary indicator of liquidity. A highly liquid stock will have large quantities of shares available at every price level, both on the Bid and Ask sides, with tight spreads.

* **Deep Book (High Liquidity):** Large quantities are visible across many price points. This allows institutional investors or traders with large orders to buy or sell significant blocks of shares without causing a massive spike or crash in the price.
* **Thin Book (Low Liquidity):** Only small quantities are visible, often with large gaps between price levels. A single large Market Order can easily "eat through" the visible liquidity, causing significant **slippage** (executing at a much worse average price than intended).

### 2. Supply and Demand Imbalances
Traders often use Market Depth to gauge immediate market sentiment and potential short-term price direction (though this is highly volatile data).

* **Strong Buy Support:** If the total **Buy Quantity** (e.g., 5,100 in the example) significantly outweighs the total **Sell Quantity** (e.g., 4,800 in the example), it *may* indicate more immediate demand than supply, potentially putting upward pressure on price.
* **Heavy Sell Resistance:** If the total Sell Quantity is much larger than the total Buy Quantity, it suggests sellers are currently more aggressive or numerous, which *may* indicate potential downward pressure.

### 3. Identifying "Walls" (Support/Resistance)
You may occasionally see an abnormally large quantity of shares (e.g., 50,000 shares) waiting at a single price level (e.g., on the Bid at ₹1,860).

* **Bid Wall / Buy Wall:** This large block of pending buy orders can act as temporary **Support**, as the price must absorb all that demand before it can fall further.
* **Ask Wall / Sell Wall:** A large block of pending sell orders acts as temporary **Resistance**, as buyers must absorb all that supply before the price can rise higher.
* *Caution:* These "walls" can be genuine, or they can be **"spoofing"** tactics designed to create a false sense of support/resistance, which are often pulled before the price reaches that level.

---

## Key Takeaways

* **Look beyond LTP:** The LTP is just the result of the last transaction; the Order Book / Market Depth shows you the *intent* of all current market participants.
* **Depth determines ease of entry/exit:** Always check the total quantity available on the opposite side of your intended trade. If you want to buy, ensure there are enough sellers (Ask Quantity) to fill your order without driving the price up excessively.
* **Ranked by price priority:** The best prices (Highest Bid, Lowest Ask) always execute first.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
