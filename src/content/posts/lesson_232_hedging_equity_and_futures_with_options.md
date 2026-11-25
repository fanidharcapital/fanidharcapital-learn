---
title: "Educational Series #232: Hedging Equity & Futures Positions With Options — Protective Puts, Collars & Covered Writing on NSE/BSE"
description: "Learn practical portfolio and futures hedging with options on NSE/BSE—comparing Protective Puts, Zero-Cost/Low-Cost Collars, and Covered Call Writing including lot-size matching."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lessons #219–#231**, we built standalone option strategies. In **Lesson #232**, we connect options back to **equity holdings and futures positions** on NSE/BSE—showing how to insure downside, finance hedges, or generate yield using **Protective Puts**, **Collars**, and **Covered Writing**.

![Educational Series #232: Hedging Equity & Futures Positions With Options](/images/lessons/lesson-232.png)

---

## 1. Three Core Hedging & Yield Structures

| Strategy | Position Structure | Downside Protection | Upside Potential | Upfront Cost / Income |
| :--- | :--- | :--- | :--- | :--- |
| **Protective Put (Married Put)** | **Long Equity / Futures + Buy `OTM` Put** | **Hard floor** below put strike minus premium paid | **Uncapped** above spot minus put cost | **Pay Put Debit** (like an insurance policy) |
| **Collar (Zero-Cost / Low-Cost)** | **Long Equity / Futures + Buy `OTM` Put + Sell `OTM` Call** | **Hard floor** below put strike | **Capped** at short call strike | **Near zero / small net debit or credit** (call funds put) |
| **Covered Call Writing** | **Long Equity / Futures + Sell `OTM` Call** | **Minor cushion only** (reduced by call credit received) | **Capped** at short call strike | **Collect Call Credit** (yield in flat/mildly bullish markets) |

---

## 2. NSE/BSE Practical Execution Rules

1.  **Exact Lot-Size Matching:** On NSE/BSE, each stock or index option contract represents a fixed **lot size** (e.g., `1` lot of futures = `1` lot of options, or holding equivalent shares in a stock portfolio). If your equity holding is smaller than `1` market lot, an option contract will **over-hedge** your shares and create net short exposure if the market rallies.
2.  **Choose the Right Tool for the Job:**
    *   Use a **Protective Put** ahead of uncertain binary events (earnings, budget, election) when you want full upside kept open.
    *   Use a **Collar** when you want crash protection without paying heavy net premium and are comfortable capping upside at a target resistance level.
    *   Remember a **Covered Call** is **not** a crash hedge—it only cushions a drop by the exact premium collected.

---

## 3. Key Takeaways

*   **Protective Puts** establish a hard downside floor for a premium cost; **Collars** offset that cost by selling an `OTM` call; **Covered Calls** generate income in sideways/mildly bullish markets.
*   Always match **contract lot size** to your underlying shares or futures quantity on NSE/BSE so you never accidentally over-hedge.

---

## 4. Quick Self-Check

1.  Why is a **Covered Call** *not* a substitute for a **Protective Put** if you are worried about a severe market crash?
2.  How does a **Collar** reduce or eliminate the out-of-pocket cost of buying a Protective Put, and what do you give up in return?
3.  What happens on NSE/BSE if you sell `1` lot of `OTM` Calls (`Lot Size = 500`) while owning only `200` shares of the underlying stock?
