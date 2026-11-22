---
title: "Education Series #31: How Stock Exchanges Work — Order Matching Engines & Price-Time Priority"
description: "Understand what happens inside a stock exchange order matching engine. Learn how bids and asks sit in the order book, how Price-Time Priority (FIFO) matches trades on NSE and BSE, and how partial fills and order modifications affect your queue position."
pubDatetime: 2026-11-22T14:08:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-31.png
tags:
  - exchanges-and-operations
  - module-02
  - order-matching
  - price-time-priority
  - order-book
  - nse-bse
---

![How Stock Exchanges Work — Order Matching Engines & Price-Time Priority](/images/lessons/lesson-31.png)

Welcome to **Lesson 31**—and the start of **Module 02: Exchanges & Operations** (**Lessons 31–60**) in the **Shree Fanidhar Capital Education Series**.

In **Market Foundations (Lessons 1–30)**, you saw how shares are issued, how order types work, how market depth looks on your screen, and how trades settle. Now we step behind the screen to see **how a stock exchange actually processes millions of orders every day**—starting with the heart of the exchange: the **Order Matching Engine**.

---

## 1. What Is an Order Matching Engine?

An **order matching engine** is the core software system inside an exchange (such as NSE or BSE) that receives incoming buy and sell orders, organizes them in an electronic **order book**, checks them against risk and price rules, and executes trades whenever buy and sell prices overlap.

Think of it as a high-speed, rule-bound marketplace coordinator:
* It does **not** take directional bets on stocks or act as a counterparty in trades.
* It maintains two live queues for every tradable security:
  * **Buy Side (Bids):** Sorted from **highest price to lowest price** (best buyer sits at the top).
  * **Sell Side (Asks / Offers):** Sorted from **lowest price to highest price** (best seller sits at the top).

A trade occurs only when the **highest bid price is greater than or equal to the lowest ask price** ($\text{Best Bid} \ge \text{Best Ask}$).

---

## 2. Price-Time Priority (FIFO) — The Golden Matching Rule

Indian equity exchanges use **Price-Time Priority**—also known as **First-In, First-Out (FIFO) at each price level**—during continuous trading.

The rule works in two strict steps:
1. **Price Priority First:** A better price always beats a worse price.
   * Among **buyers**, someone willing to pay ₹1,002.00 gets priority ahead of someone bidding ₹1,001.50.
   * Among **sellers**, someone willing to sell at ₹1,001.50 gets priority ahead of someone asking ₹1,002.00.
2. **Time Priority Second (Within the Same Price):** When multiple orders sit at the **exact same price**, the order that arrived at the exchange engine **first** gets filled first.

| Queue Position | Buy Order (Bid at ₹500.00) | Arrival Time | Priority Rank |
| :--- | :--- | :--- | :--- |
| **1st** | Trader A — 200 shares @ ₹500.00 | 09:16:04.112 | Filled first at ₹500.00 |
| **2nd** | Trader B — 500 shares @ ₹500.00 | 09:16:04.185 | Filled second at ₹500.00 |
| **3rd** | Trader C — 150 shares @ ₹500.00 | 09:16:04.902 | Filled third at ₹500.00 |

If a seller enters a market or limit sell order for **350 shares at ₹500.00**, Trader A gets all **200 shares** and Trader B gets **150 shares** (leaving 350 shares still waiting on Trader B's order). Trader C hasn't been touched yet.

---

## 3. Step-by-Step Walkthrough: How Orders Match

Suppose a stock currently has:
* **Best Ask (Lowest Seller):** 100 shares @ ₹250.00, 300 shares @ ₹250.20
* **Best Bid (Highest Buyer):** 200 shares @ ₹249.80

Now watch what happens under two different incoming orders:

### Scenario A: Limit Buy for 250 Shares @ ₹250.20
1. The engine checks the **Sell side** starting from the lowest price.
2. First, it matches **100 shares @ ₹250.00** (better than your ₹250.20 limit).
3. Next, it matches **150 shares @ ₹250.20** from the 300 shares available at that price.
4. Your **250 shares** are completely filled—100 at ₹250.00 and 150 at ₹250.20—and the remaining 150 shares on the seller's side stay at ₹250.20.

### Scenario B: Limit Buy for 200 Shares @ ₹249.90
1. The highest seller offer is ₹250.00, which is **above** your ₹249.90 limit.
2. No immediate match occurs.
3. Your 200-share buy order is placed on the **Buy side** at **₹249.90** (ahead of the ₹249.80 buyers) and waits until a seller offers ₹249.90 or lower—or until you cancel/modify it.

---

## 4. Order Modifications and Queue Position

A common operational surprise for traders is **losing time priority** when editing an open order:
* **Worsening price or increasing quantity:** Usually resets or places the modified portion at the back of the queue at the new price/terms.
* **Improving price (bidding higher or asking lower):** Moves your order to the new price level's queue—and if it crosses the opposite side's price, executes immediately.
* **Reducing quantity (on supported order types):** Often preserves your original arrival timestamp at that same price level, though exact rules depend on the exchange and order type.

---

## 5. Why Execution Speed & Architecture Matter

At exchange matching engines, order processing happens in **microseconds** ($\mu\text{s}$):
* When a popular stock opens or reacts to news, thousands of orders can arrive within milliseconds.
* Two traders clicking "Buy" at roughly the same second on their screens can experience different fills depending on **network latency**, **order routing**, and **exact arrival timestamp** at the matching engine.
* Understanding Price-Time Priority stops you from blaming "magic" when your limit order sits unfilled while the price briefly touches your level—because earlier orders at that exact price were ahead of you in line.

---

## Key Takeaways

* **The matching engine pairs buyers and sellers** using the order book without taking proprietary directional risk on your trade.
* **Price comes first, time comes second (FIFO):** Better prices always get priority; at the same price, earlier arrival wins.
* **Partial fills and modifications are normal:** Large or price-crossing orders can fill across multiple price levels or wait in line behind earlier orders.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
