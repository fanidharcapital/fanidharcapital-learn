---
title: "Educational Series #182: Call Options (CE) Explained — Buying Calls vs. Selling (Writing) Calls on NSE/BSE"
description: "Understand how Call Options (CE) work on NSE and BSE—comparing Call Buyers (bullish right to buy) and Call Sellers/Writers (bearish/neutral obligation to deliver) with concrete rupee examples."
pubDatetime: 2026-11-24T17:15:00+05:30
tags:
  - Module 07
  - Options Market
---

In **Lesson #181**, we defined the five core parts of an option contract. In **Lesson #182**, we examine the first of the two option types: **Call Options (`CE` — Call European)**, comparing what happens for a **Call Buyer** versus a **Call Seller (Writer)** on NSE and BSE.

![Educational Series #182: Call Options (CE) Explained](/images/lessons/lesson-182.png)

---

## 1. What Does a Call Option (`CE`) Represent?

A **Call Option** gives the buyer the **right, without obligation, to buy** the underlying asset at the specified **Strike Price** at expiry:

*   **Call Buyer (`Long CE`):** Wants the underlying price to rise **well above** `Strike Price + Premium Paid`.
    *   *Maximum Loss:* Limited to the **premium paid**.
    *   *Maximum Profit:* Theoretically open-ended as the underlying rises higher.
*   **Call Seller / Writer (`Short CE`):** Collects the upfront premium and wants the underlying price to stay **at or below the Strike Price** through expiry.
    *   *Maximum Profit:* Capped at the **premium collected**.
    *   *Maximum Loss:* Potentially large/uncapped if the underlying surges sharply above the strike price.

---

## 2. Numerical Example (Call Buyer vs. Call Seller)

Suppose **Nifty is trading at `24,500`**, and you look at the **`24,600 CE`** trading at a premium of **`₹100`** (assuming a lot size of `75`, total premium = `₹7,500`):

*   **Scenario A — Nifty Expires at `24,450` (Below `24,600` Strike):**
    *   The right to buy at `24,600` when the market is at `24,450` has **zero value** (`₹0`).
    *   **Call Buyer:** Lets the option expire worthless $\rightarrow$ loses the **`₹100` premium (`-₹7,500`)**.
    *   **Call Seller:** Keeps the entire **`₹100` premium (`+₹7,500`)**.
*   **Scenario B — Nifty Expires at `24,850` (Above `24,600` Strike):**
    *   The `24,600 CE` settles at `24,850 - 24,600 = ₹250`.
    *   **Call Buyer:** Net gain = `₹250 - ₹100 = +₹150` per unit (**`+₹11,250`** per lot, before charges).
    *   **Call Seller:** Net loss = `₹100 - ₹250 = -₹150` per unit (**`-₹11,250`** per lot, before charges).

---

## 3. When Traders Use Long Call vs. Short Call

*   **Buy Call (`Long CE`):** When expecting a strong, timely upward breakout or momentum move with strictly capped downside risk.
*   **Sell Call (`Short CE`):** When expecting price to stay capped below a strong resistance level, consolidate sideways, or drift lower—requiring full SPAN + exposure margin.

---

## 4. Key Takeaways

*   A **Call Option (`CE`)** gains intrinsic value when the underlying rises **above the strike price**.
*   **Call Buyers** have capped loss (`premium paid`) and open-ended upside, but need price to move **enough and in time** to clear the premium cost.
*   **Call Sellers** collect upfront premium and profit if price stays below the strike, but face open-ended upside risk if price rallies sharply.

---

## 5. Quick Self-Check

1.  If you buy a `₹1,000 CE` at a premium of `₹30`, what is your maximum possible loss if the stock closes at `₹900` on expiry?
2.  In that same `₹1,000 CE` contract (`₹30` premium), what is the **Call Seller's** maximum profit if the stock expires at `₹980`?
3.  Why does a Call Buyer still lose money at expiry if a `24,600 CE` (bought for `₹100`) expires with Nifty at `24,640`?
4.  
