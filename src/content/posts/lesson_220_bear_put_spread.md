---
title: "Educational Series #220: Bear Put Spread (Debit Put Spread) — Structure, Max Profit, Max Loss, Breakeven & Controlled Bearish Risk"
description: "Learn how a Bear Put Spread (Debit Put Spread) works—how to construct it, calculate max profit, max loss, and breakeven, and manage bearish risk with defined cost and lower time/volatility drag."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lesson #219**, we covered the **Bull Call Spread** for bullish moves. In **Lesson #220**, we mirror that structure on the downside with the **Bear Put Spread** (or **Debit Put Spread**)—designed for moderately bearish views where you want **defined risk** and **controlled cost**.

![Educational Series #220: Bear Put Spread](/images/lessons/lesson-220.png)

---

## 1. How a Bear Put Spread Is Constructed

Using the **same underlying and same expiry**:
*   **Buy 1 Higher-Strike Put (`+PE` at $K_{\text{high}}$):** Gains value as the underlying falls (often near `ATM` or slightly `ITM`/`OTM`).
*   **Sell 1 Lower-Strike Put (`-PE` at $K_{\text{low}}$):** Reduces upfront debit paid while capping further profit once spot drops below $K_{\text{low}}$.

---

## 2. Payoff Math: Net Debit, Max Loss, Max Profit & Breakeven

Let $\text{Net Debit} = P_{\text{high}} - P_{\text{low}}$ (per unit) and $\text{Spread Width} = K_{\text{high}} - K_{\text{low}}$:

| Metric | Formula (Per Unit) | What Happens at Expiry |
| :--- | :--- | :--- |
| **Max Loss** | $\text{Net Debit}$ | Occurs if spot $\ge K_{\text{high}}$; both puts expire worthless (`0` intrinsic value). |
| **Max Profit** | $\text{Spread Width} - \text{Net Debit}$ | Occurs if spot $\le K_{\text{low}}$; spread captures full strike width minus net debit. |
| **Breakeven** | $K_{\text{high}} - \text{Net Debit}$ | Spot level at expiry where downside gain equals the upfront net debit. |

*   *Illustrative Example (1 lot = 50):* Buy `24,500 PE` at `₹135` and sell `24,300 PE` at `₹55` $\rightarrow$ **Net Debit = `₹80`** (`₹4,000` per lot), **Spread Width = `200`**, **Max Profit = `₹120`** (`₹6,000` per lot), **Breakeven = `24,420`**.

---

## 3. Controlled Bearish Risk & Practical Advantages

*   **Defined Worst-Case Loss:** Unlike shorting futures or naked calls, your maximum loss is strictly capped at the **net debit** paid.
*   **Lower Drag Than a Naked Put:** Selling the lower put offsets part of your **negative Theta** and **positive Vega** exposure—helpful if a breakdown takes a few sessions or `IV` eases after an initial drop, though upside on a crash is capped at $K_{\text{low}}$.

---

## 4. Key Takeaways

*   A **Bear Put Spread** buys a higher put and sells a lower put in the **same expiry** for a **net debit**, creating a defined bearish payoff range.
*   It reduces cost and time/volatility drag versus a naked long put while capping profit below the lower strike.

---

## 5. Quick Self-Check

1.  If you buy a `1,000 PE` for `₹28` and sell a `960 PE` for `₹10` in the same expiry, what is your **Net Debit**, **Max Profit**, and **Breakeven**?
2.  When is a **Bear Put Spread** more appropriate than holding a single naked **Long Put**?
3.  What happens at expiry if the underlying closes **above** the higher strike ($K_{\text{high}}$)?
