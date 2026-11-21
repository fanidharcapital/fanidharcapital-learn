---
![Education Series #03: Order Types & Execution Mechanics](/images/lessons/lesson-03.png)
title: "Education Series #03: Order Types & Execution Mechanics"
description: "How Market, Limit, Stop-Loss (SL & SL-M) orders work on Indian exchanges, and how order selection controls execution price and slippage."
pubDatetime: 2026-11-21T10:30:00+05:30
modDatetime: 2026-11-21T10:30:00+05:30
featured: false
draft: false
tags:
  - module-01
  - market-foundations
  - order-types
  - execution
---

## Overview

In **Lesson 02**, we saw how prices form where the **best bid** and **best ask** meet on an electronic limit order book. Knowing where price sits is only half the picture—the second half is **how you instruct the exchange to execute your order**.

In **Lesson 03** of **Module 01: Market Foundations**, we examine the core order types used across Indian equity and derivative markets (**Market**, **Limit**, **Stop-Loss Limit**, and **Stop-Loss Market**), order validity rules, and how execution choices directly govern **slippage**.

---

## 1. Market Order vs. Limit Order: Speed vs. Price Control

Every standard order balances two competing priorities: **certainty of execution** versus **certainty of price**.

* **Market Order:** Instructs the exchange matching engine to fill immediately at the best available price in the order book.
  * *Strength:* High fill probability in liquid counters.
  * *Risk:* In fast-moving or thin order books, a large market order can walk through multiple price levels, causing **slippage** (filling worse than the Last Traded Price).
* **Limit Order:** Specifies the **maximum price** you are willing to pay (for a buy order) or the **minimum price** you are willing to accept (for a sell order).
  * *Strength:* Strict price control—never fills worse than your specified limit price.
  * *Risk:* If the market moves away before reaching your limit price, the order remains pending or unfilled.

---

## 2. Stop-Loss Orders: SL (Limit) vs. SL-M (Market)

Stop-loss orders remain passive in the system until the market reaches a predefined **Trigger Price**, at which point they activate into a live order:

1. **Stop-Loss Limit (`SL`):** Uses **two prices**—a **Trigger Price** and a **Limit Price**. Once the trigger price is hit, a limit order is placed at your specified limit price. It caps slippage, though in a sharp gap or circuit move the limit order may remain unexecuted if price jumps past the limit band.
2. **Stop-Loss Market (`SL-M`):** Uses **one price**—the **Trigger Price**. Once triggered, it converts into a market order for immediate exit/entry. It prioritizes execution certainty over exact fill price (subject to exchange market-protection / dummy-circuit bands).

| Order Type | Price Inputs | Priority | Primary Trade-Off |
| :--- | :--- | :--- | :--- |
| **Market** | None (Best Available) | Immediate fill | Vulnerable to spread & slippage |
| **Limit** | Limit Price | Exact price cap/floor | May not fill if price moves away |
| **SL (Limit)** | Trigger + Limit Price | Triggered entry/exit with price cap | Risk of non-fill on sharp gaps |
| **SL-M (Market)** | Trigger Price | Triggered exit/entry priority | Fill price varies with book depth |

---

## 3. Order Validity & Execution Conditions

Beyond price instructions, exchanges enforce time and quantity conditions on how long an order stays active:

* **DAY Order:** Remains active in the order book until filled, modified, cancelled, or expired at the end of the regular trading session.
* **IOC (Immediate or Cancel):** Attempts to fill immediately upon entry (in full or in part); any unfilled quantity is cancelled automatically rather than resting in the book.
* **AMO (After Market Order):** Queued outside regular market hours to be routed when the next pre-open or regular session begins.

---

## Visual Infographic Brief (For Your JPG / Diagram)

If you pair this lesson with a visual card or diagram in your emerald & gold palette:
* **Left Column — Entry Control:** `Market Order (Speed First)` vs. `Limit Order (Price First)`.
* **Center Flow — Stop-Loss Trigger:** `Price Hits Trigger` → `SL (Activates Limit Order)` or `SL-M (Activates Market Order)`.
* **Right Callout — Execution Rule:** `Liquid Book + Limit Buffer = Controlled Slippage`.

---

## Key Takeaways

* **Market orders** guarantee speed in liquid instruments but surrender price control; **Limit orders** protect price at the cost of fill certainty.
* **SL** and **SL-M** orders automate predefined exit or breakout levels without manual hesitation.
* Checking **bid-ask spread and top-five market depth** before choosing an order type is a core habit of disciplined execution.

---

*Educational Note: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes and does not constitute investment advice or a recommendation to buy or sell any security.*
