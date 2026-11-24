---
title: "Educational Series #189: Option Moneyness (ITM, ATM, OTM) — How Strike Relates to Spot Price for Calls and Puts"
description: "Learn how to classify any Call (CE) or Put (PE) option as In-The-Money (ITM), At-The-Money (ATM), or Out-of-The-Money (OTM) relative to spot price on NSE and BSE."
pubDatetime: 2026-11-24T19:00:00+05:30
tags:
  - Module 07
  - Options Market
---

In **Lesson #188**, we wrapped up Part 1 by comparing index options and single-stock options. Now we enter **Part 2: Moneyness, Option Pricing & Volatility Basics**, starting with **Lesson #189: Option Moneyness (`ITM`, `ATM`, `OTM`)**. Moneyness describes whether an option currently holds positive exercise value relative to the underlying **spot price**—and because Calls and Puts profit in opposite directions, their moneyness rules mirror each other.

![Educational Series #189: Option Moneyness (ITM, ATM, OTM)](/images/lessons/lesson-189.png)

---

## 1. The Three Moneyness Categories

| Moneyness State | Call Option (`CE` — Right to Buy) | Put Option (`PE` — Right to Sell) | Immediate Exercise Value? |
| :--- | :--- | :--- | :--- |
| **In-The-Money (`ITM`)** | **Strike Price < Spot Price** (e.g., `24,400 CE` when Spot = `24,500`) | **Strike Price > Spot Price** (e.g., `24,600 PE` when Spot = `24,500`) | **Yes** — favorable to exercise relative to current spot. |
| **At-The-Money (`ATM`)** | **Strike Price $\approx$ Spot Price** (e.g., `24,500 CE` when Spot = `24,500`) | **Strike Price $\approx$ Spot Price** (e.g., `24,500 PE` when Spot = `24,500`) | **Zero / Near-Zero** — sits right on the dividing line. |
| **Out-of-The-Money (`OTM`)** | **Strike Price > Spot Price** (e.g., `24,700 CE` when Spot = `24,500`) | **Strike Price < Spot Price** (e.g., `24,300 PE` when Spot = `24,500`) | **No (`₹0`)** — unfavorable to exercise right now. |

---

## 2. How to Remember Call vs. Put Moneyness Instantly

Ask one simple question: *"If the contract expired at this exact second, would exercising the option give a better price than the live spot market?"*

*   **For a Call (`CE`):** Buying at `24,300` when Spot is `24,500` is a bargain (`₹200` advantage) $\rightarrow$ **`ITM`**. Buying at `24,700` when Spot is `24,500` makes no sense $\rightarrow$ **`OTM`**.
*   **For a Put (`PE`):** Selling at `24,700` when Spot is `24,500` is an advantage (`₹200` above market) $\rightarrow$ **`ITM`**. Selling at `24,300` when Spot is `24,500` makes no sense $\rightarrow$ **`OTM`**.

---

## 3. Dynamic Shift as Spot Moves

Moneyness is **not fixed**—it shifts continuously as the underlying moves:
*   If Spot rallies from `24,500` to `24,700`, a `24,700 CE` shifts from **`OTM` $\rightarrow$ `ATM`**, while a `24,500 CE` moves from **`ATM` $\rightarrow$ `ITM`**.

---

## 4. Key Takeaways

*   **Calls (`CE`)** are **`ITM`** below spot and **`OTM`** above spot; **Puts (`PE`)** are **`ITM`** above spot and **`OTM`** below spot.
*   **`ATM`** is the strike closest to the current underlying spot price.
*   Moneyness changes dynamically throughout the session as the underlying spot price moves.

---

## 5. Quick Self-Check

1.  If a stock's spot price is **`₹1,200`**, classify **`₹1,160 CE`**, **`₹1,200 CE`**, and **`₹1,240 CE`** as `ITM`, `ATM`, or `OTM`.
2.  Using the same **`₹1,200`** spot price, classify **`₹1,160 PE`**, **`₹1,200 PE`**, and **`₹1,240 PE`** as `ITM`, `ATM`, or `OTM`.
3.  Why do `ITM` Call strikes sit *above* `ATM` on standard option chains while `ITM` Put strikes sit *below* `ATM`?
4.  
