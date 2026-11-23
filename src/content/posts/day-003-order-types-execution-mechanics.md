---
title: "Education Series #03: Order Types & Execution Mechanics"
author: "Shree Fanidhar Capital"
pubDatetime: 2026-11-21T10:30:00Z
slug: "day-003-order-types-execution-mechanics"
featured: true
draft: false
tags:
  - equities
  - execution
  - order-types
description: "Understand core equity order types, order validity modifiers, and how exchange matching engines execute trades using price-time priority."
---
Welcome to **Lesson 03** of **Module 01: Market foundation** (**Lessons 01–30**) in the **Shree Fanidhar Capital Education Series**.

![Education Series #03: Order Types & Execution Mechanics](/images/lessons/lesson-03.png)

## Introduction

Knowing what a share is and how price discovery works is only half the picture. To participate in Indian equity markets effectively, you also need to understand **how orders are structured**, what rules govern when and at what price they execute, and how exchanges match incoming orders in real time.

## 1. Core Order Types

When placing an equity order through a stockbroker on exchanges such as the **NSE** or **BSE**, the order type defines the trade-off between **price certainty** and **execution certainty**:

* **Limit Order:** An instruction to buy or sell at a **specific price or better**. A buy limit executes at or below your limit price; a sell limit executes at or above your limit price. It gives **price certainty**, though execution is not guaranteed if the market does not reach your price.
* **Market Order:** An instruction to buy or sell immediately at the **best available price** currently in the order book. It prioritizes **execution speed**, though the final fill price can vary (slippage) during fast-moving or thinly traded conditions.
* **Stop-Loss Order (SL-M):** Remains inactive until the stock reaches your specified **trigger price**, at which point it enters the market as a market order. Commonly used to cap downside on an open position or enter a breakout.
* **Stop-Limit Order (SL):** Uses both a **trigger price** and a **limit price**. Once the trigger price is hit, a limit order is placed—giving tighter control over the worst acceptable execution price compared to a plain stop-market order.

## 2. Order Attributes & Modifiers

Beyond price and quantity, orders carry validity and disclosure instructions that control how long they stay active and how they appear in the order book:

* **Time-in-Force (Validity):**
  * **DAY:** Remains valid until the end of the current regular trading session; any unfilled quantity cancels automatically at market close.
  * **IOC (Immediate or Cancel):** Executes whatever quantity can be matched immediately and cancels any remaining unfilled shares right away.
  * **GTC / GTT (Good 'Til Cancelled / Good 'Til Triggered):** Broker-supported standing instructions that keep a price condition active across trading sessions until triggered, filled, or cancelled.
* **Disclosed Quantity (Iceberg Orders):** Allows a trader placing a large order to display only a smaller portion of the total quantity in the public order book at a time, releasing subsequent tranches automatically as earlier tranches fill.
* **Minimum Fill / All-or-None (Subject to Exchange Availability):** Specifies whether partial fills are acceptable or if a minimum quantity threshold applies where supported by the exchange segment.

## 3. Execution Mechanics & Price-Time Priority

Once your broker routes a validated order to the exchange, the **central order matching engine** processes it electronically without human intervention:

* **Order Book Matching:** Incoming buy orders (bids) are matched against resting sell orders (asks) whenever the highest bid meets or exceeds the lowest ask.
* **Price-Time Priority Logic:**
  1. **Best Price First:** Orders with the most competitive price (highest bid for buyers, lowest ask for sellers) always execute ahead of less competitive prices.
  2. **Time of Entry Second:** If two orders sit at the exact same price level, the order that arrived at the exchange earlier (earlier timestamp) gets filled first.
* **Trade Confirmation & Post-Trade Update:** Once matched, the exchange updates the live order book, broadcasts the new Last Traded Price (LTP), sends trade confirmation back to the broker, and passes the trade to the clearing corporation for **T+1 settlement**.

---

*Educational note: This lesson is provided by **Shree Fanidhar Capital** strictly for market education and informational purposes and is not investment advice or a solicitation to buy or sell any security.*
