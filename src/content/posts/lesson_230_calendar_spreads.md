---
title: "Educational Series #230: Calendar Spreads (Time Spreads) — Exploiting Front-Month vs. Back-Month Theta & IV Differences"
description: "Learn how Calendar Spreads (Horizontal Time Spreads) work—selling a near-expiry option and buying a longer-expiry option at the same strike to capture differential Theta decay and term-structure IV shifts."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lessons #228–#229**, all four legs shared the **same expiration date**. In **Lesson #230**, we step across time horizons with **Calendar Spreads** (also called **Horizontal Spreads** or **Time Spreads**)—exploiting the faster time decay of a near-term option against a longer-term option at the **same strike**.

![Educational Series #230: Calendar Spreads](/images/lessons/lesson-230.png)

---

## 1. Horizontal Construction (Same Strike, Different Expiries)

*   **Sell 1 Near-Expiry Option (`Front Month` / Weekly at strike $K$):** Decays rapidly as expiration approaches (`high +Theta`).
*   **Buy 1 Longer-Expiry Option (`Back Month` / Next Cycle at the SAME strike $K$):** Retains more time value and carries higher **Vega** (`+Vega`), creating a **net debit** entry.
*   *Call vs. Put Choice:* Traders often use **ATM Calls** (or Puts) for neutral time decay, or place $K$ slightly `OTM` in the direction of a mild target level where they expect price to settle at front expiry.

---

## 2. Payoff Shape, Max Risk & Term-Structure `IV` Dynamics

*   **Defined Max Loss:** Because the longer-dated option is always worth at least as much as (or more than) the shorter-dated option at the same strike, your maximum loss is capped at the **Net Debit paid** at entry.
*   **Sweet Spot at Front Expiry:** Maximum value occurs if the underlying sits **right near strike $K$** when the front-month leg expires worthless (`₹0`), leaving you holding a valuable back-month option.
*   **`IV` Term-Structure Advantage:** Because the long back-month leg has higher **Vega** than the short front-month leg, a **rise in back-month `IV`** (or a drop in elevated front-month event `IV` relative to back-month `IV`) boosts the spread's value. Conversely, a large breakout far away from $K$ compresses both options toward parity and causes a loss.

---

## 3. Key Takeaways

*   A **Calendar Spread** sells a near-expiry option and buys a longer-expiry option at the **same strike** for a **defined-risk net debit**.
*   It profits when price hovers near strike $K$ (capturing faster front-month **Theta decay**) and benefits if back-month **Implied Volatility** rises or holds firm.

---

## 4. Quick Self-Check

1.  Why is the **maximum loss** on a standard long Calendar Spread limited to the **net debit paid**?
2.  Where do you want the underlying price to be when the **front-month** short leg expires?
3.  Why does a **rise in Implied Volatility** generally help a Calendar Spread, unlike a standard vertical credit spread?
