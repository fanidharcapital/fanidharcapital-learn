---
title: "Educational Series #215: Vega (\nu) Explained — Implied Volatility Sensitivity, Term Structure & Event/VIX Impact"
description: "Understand Option Vega—how changes in Implied Volatility (IV) move option premiums, why longer-dated options often carry higher Vega, and how event/VIX shifts affect buyers and sellers."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lesson #214**, we looked at how time decay (`Theta`) shapes option value. In **Lesson #215**, we examine **Vega ($\nu$)**—the sensitivity of an option's price to a **1 percentage-point (`1.0%`) change in Implied Volatility (`IV`)**. *(Note: Vega isn't a Greek letter itself, though traders treat it as one of the core Greeks.)*

![Educational Series #215: Vega Explained](/images/lessons/lesson-215.png)

---

## 1. Positive Vega vs. Negative Vega

*   **Long Options (`+CE` / `+PE`):** Have **Positive Vega (`+ν`)**. When `IV` rises, option value increases; when `IV` falls (such as post-event **IV crush**), option value drops.
*   **Short Options (`-CE` / `-PE`):** Have **Negative Vega (`-ν`)**. When `IV` falls, short option positions gain as premiums shrink; when `IV` spikes, short option positions lose mark-to-market value as premiums inflate.

---

## 2. Expiry Horizon, Moneyness & Event/VIX Context

1.  **Longer Expiries Have More Time for Volatility to Matter:** Longer-dated contracts generally have **higher Vega** than near-expiry (`0–1 DTE`) contracts because more calendar time remains for large price swings to unfold.
2.  **Highest Near `ATM`:** Like Delta/Gamma inflection, Vega is largest around **`ATM`** strikes and tapers off for deep `ITM` or far `OTM` options.
3.  **Events & `India VIX`:** Ahead of scheduled catalysts (earnings, policy decisions) or market stress spikes (`India VIX` jumping), `IV` can expand—helping long-Vega positions and hurting short-Vega positions; after uncertainty clears, `IV` often compresses.

---

## 3. Key Takeaways

*   **Vega ($\nu$)** measures option price sensitivity to a **`1%` move in Implied Volatility (`IV`)**.
*   **Long options** have **positive Vega**; **short options** have **negative Vega**.
*   Longer expiries and `ATM` strikes generally carry higher Vega than far-OTM or expiring-today contracts.

---

## 4. Quick Self-Check

1.  If a Call option has a Vega of **`₹12`** (per `1%` change in `IV`) and Implied Volatility rises by **`2%`** with spot unchanged, roughly how much does the option's value change?
2.  Why is **Vega** typically smaller for a contract expiring **today** than for a monthly contract with weeks remaining?
3.  How does a sudden post-earnings **IV crush** affect a **Long Straddle / Long Call** versus a **Short Option** position?
4.  
