---
title: "Education Series #35: Tick Size, Lot Size & Order Validity Rules (Day, IOC, GTT, AMO)"
description: "Understand the micro-rules that govern every order on Indian exchanges: tick sizes (minimum price increments), lot sizes across cash and F&O segments, and order validity instructions including Day, IOC, GTT, and AMO."
pubDatetime: 2026-11-22T16:15:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-35.png
tags:
  - exchanges-and-operations
  - module-02
  - tick-size
  - lot-size
  - order-validity
  - ioc-gtt-amo
---

![Tick Size, Lot Size & Order Validity Rules (Day, IOC, GTT, AMO)](/images/lessons/lesson-35.png)

Welcome to **Lesson 35** of **Module 02: Exchanges & Operations** (**Lessons 31–60**) in the **Shree Fanidhar Capital Education Series**.

In **Lesson 34**, you traced how an order travels through your broker's Order Management System (OMS) and Risk Management System (RMS) to the exchange matching engine. One of the very first checks the OMS performs is whether your order obeys **price increments**, **quantity multiples**, and **time-validity rules**.

Today, we break down **Tick Size**, **Lot Size**, and the four core **Order Validity Rules (Day, IOC, GTT, AMO)** used across NSE and BSE.

---

## 1. Tick Size: The Minimum Price Movement

**Tick size** is the smallest allowed price increment (or decrement) by which a stock, ETF, or derivative contract can move on an exchange. Every limit price or trigger price you enter **must be an exact multiple of the instrument's tick size**—otherwise the OMS or exchange immediately rejects the order.

* **Standard Indian Equity Tick Size:** Historically **₹0.05 (5 paise)** for most cash equities, though NSE and BSE have introduced **₹0.01 (1 paisa)** tick sizes for stocks trading below specified price thresholds (such as stocks priced below ₹250 on NSE) to tighten bid-ask spreads and reduce impact cost.
* **Why Tick Size Matters:**
  * **Invalid Price Example:** On a stock with a ₹0.05 tick size, entering a limit buy at **₹512.03** fails validation; valid prices are **₹512.00** or **₹512.05**.
  * **Spread Floor:** A stock's minimum possible bid-ask spread equals **1 tick**. Smaller tick sizes allow finer price discovery on lower-priced, high-volume stocks.

---

## 2. Lot Size: Minimum Tradable Quantity

**Lot size** (also called market lot) defines the minimum tradable unit—and required quantity multiple—for a security or contract:

| Market Segment | Typical Lot Size Rule | Operational Example |
| :--- | :--- | :--- |
| **Mainboard Cash Equities** | **1 share** | You can buy or sell 1, 7, or 243 shares freely. |
| **SME Platform Equities** | **Fixed multi-share lot** (determined by issue price band, often representing a ₹1 lakh+ minimum application/lot value) | If an SME stock has a lot size of **1,200 shares**, you can only trade in multiples of 1,200 (1,200, 2,400, 3,600...). |
| **Equity & Index F&O** | **Exchange-specified contract lot size** (periodically revised by SEBI/exchanges based on contract value norms) | If NIFTY lot size is **75**, buying 1 lot means trading 75 units; buying 100 units is rejected because 100 is not a multiple of 75. |

---

## 3. Order Validity Rules: Day, IOC, GTT & AMO

When you place an order, you also instruct the system **how long that order should remain alive** if it does not fill right away.

### A. Day Order (Regular Session Validity)
* **How It Works:** Remains active in the exchange order book from the moment it is accepted until **market close (3:30 PM)** on that same trading day.
* **If Unfilled at 3:30 PM:** Any unexecuted quantity is **automatically canceled** by the exchange at the end of the session.
* **Best For:** Standard intraday and single-session limit or stop-loss orders.

### B. Immediate or Cancel (IOC)
* **How It Works:** Instructs the exchange matching engine to fill **whatever quantity is immediately available** at your limit price (or better) the instant the order arrives, and **immediately cancel any unfilled balance**. An IOC order **never rests in the order book**.
* **Example:** You place a Limit Buy IOC for **1,000 shares @ ₹200.00**. Only **650 shares** are currently offered at ₹200.00 or lower. You instantly buy **650 shares**, and the remaining **350 shares** are canceled in the same microsecond.
* **Best For:** Sweeping available liquidity without leaving a resting order exposed in a fast-moving market.

### C. Good Till Triggered (GTT)
* **How It Works:** Because Indian exchanges cancel all resting orders at 3:30 PM daily, brokers provide **GTT**—a broker-hosted conditional instruction that stays active across multiple days (typically up to **1 year** for equities) until your specified **trigger price** is hit.
* **Important Operational Nuance:** Until the trigger price is reached, a GTT order sits on **your broker's server**, *not* in the NSE/BSE order book. The moment the trigger hits during market hours, the broker automatically fires a regular limit order to the exchange—provided you have sufficient funds or Demat shares available at that moment.

### D. After Market Order (AMO)
* **How It Works:** Allows you to submit orders **after regular market hours** (for example, in the evening or early morning before 9:00 AM).
* **How Brokers Process AMOs:** Your broker collects the AMO overnight and injects it into the exchange automatically at the start of the **Pre-Open Session (9:00 AM)** or **Continuous Session (9:15 AM)** on the next trading day.
* **Operational Caution:** Always prefer **Limit AMOs** over Market AMOs—overnight global news or earnings surprises can cause stocks to gap sharply at 9:15 AM.

---

## 4. Quick Comparison of Order Validity Types

| Validity Type | Where It Waits | Expires When | Can Rest in Exchange Book? |
| :--- | :--- | :--- | :--- |
| **Day** | Exchange Order Book | **3:30 PM** same trading day | Yes (until 3:30 PM) |
| **IOC** | Nowhere (instant check) | **Immediately** upon arrival | No (fills instantly or cancels) |
| **GTT** | Broker Server | Upon trigger or expiry (e.g., 1 year) | Only *after* trigger fires |
| **AMO** | Broker Queue | Sent to exchange next morning | Yes, once routed at market open |

---

## Key Takeaways

* **Tick size governs valid price steps** (₹0.05 or ₹0.01 depending on price slab), while **lot size governs valid quantity multiples** (1 share in mainboard cash, fixed multiples in SME and F&O).
* **Day orders expire at 3:30 PM**, whereas **IOC orders** execute whatever matches immediately and cancel the rest without resting in the book.
* **GTT and AMO are broker-managed workflows** that bridge multi-day targets/stop-losses and overnight order placement into regular exchange sessions.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
