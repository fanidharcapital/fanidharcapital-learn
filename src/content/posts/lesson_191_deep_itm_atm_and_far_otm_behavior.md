---
title: "Educational Series #191: Deep ITM, ATM & Far OTM Behavior — How Strike Selection Changes Sensitivity & Decay"
description: "Compare how Deep ITM, ATM, and Far OTM options behave across price sensitivity, extrinsic decay, capital outlay, and probability of finishing in the money."
pubDatetime: 2026-11-24T19:30:00+05:30
tags:
  - Module 07
  - Options Market
---

In **Lesson #190**, we separated option premium into intrinsic and extrinsic value. In **Lesson #191**, we examine how **strike selection** across the option chain—**Deep `ITM`**, **`ATM`**, and **Far `OTM`**—dramatically alters how an option responds to underlying price moves, time decay, and capital outlay.

![Educational Series #191: Deep ITM, ATM & Far OTM Behavior](/images/lessons/lesson-191.png)

---

## 1. Comparing Strike Zones Across the Chain

| Strike Zone | Premium Composition | Sensitivity to Spot Moves | Time Decay Impact | Capital Outlay & Win Probability |
| :--- | :--- | :--- | :--- | :--- |
| **Deep `ITM`** | Mostly **Intrinsic Value**; small extrinsic buffer. | **High (`~0.80–0.95` per ₹1 spot move)** — tracks the underlying almost like a stock/future. | **Low daily decay** relative to premium size (small extrinsic component). | **High upfront premium**; higher probability of retaining value at expiry. |
| **`ATM` (At-The-Money)** | **100% Extrinsic Value** (highest rupee time value). | **Balanced (`~0.50` per ₹1 spot move)** — accelerates if price moves `ITM`, slows if price moves `OTM`. | **Highest absolute rupee decay** as expiry approaches. | **Moderate premium**; balanced risk/reward for directional momentum trades. |
| **Far `OTM`** | **100% Extrinsic Value** (small rupee price, zero intrinsic). | **Low (`~0.05–0.20` per ₹1 spot move)** — sluggish on small or slow moves. | **High percentage decay** — frequently erodes all the way to `₹0`. | **Very low upfront cost** ("lottery ticket" trap), very low probability of expiring `ITM`. |

---

## 2. Why Far-OTM Options Fool Beginners

A far-OTM option trading at `₹8` looks "cheap" compared to an `ATM` option at `₹140`:
*   Suppose Spot moves `+100` points in your favor, but slowly over two days:
    *   The **`ATM` option** gains substantial value from the directional move.
    *   The **far-OTM option** barely budges because its low sensitivity is offset by two days of time decay—leaving the buyer frustrated even though direction was right!

---

## 3. Practical Strike-Selection Intuition

*   **Directional Option Buyers** generally favor **`ATM` or slightly `ITM` strikes** where sensitivity is strong enough to capture a clean price move without paying excessive extrinsic-only lottery odds.
*   **Option Sellers / Hedgers** carefully weigh strike distance against resistance/support levels and tail-risk protection.

---

## 4. Key Takeaways

*   **Deep `ITM`** options behave closely like the underlying with high upfront cost and low extrinsic decay.
*   **`ATM`** options offer balanced responsiveness (`~0.50` sensitivity) and carry peak extrinsic value.
*   **Far `OTM`** options are cheap in rupees but suffer from weak sensitivity and high odds of decaying to `₹0`.

---

## 5. Quick Self-Check

1.  Why does a **Deep `ITM` option** respond almost point-for-point with the underlying stock or index while a **Far `OTM` option** barely moves on a small rally?
2.  Which strike zone carries the **highest absolute rupee amount of extrinsic value** that can erode over time?
3.  Why is buying a "cheap" `₹5` Far-OTM option often a trap for directional beginners?
4.  
