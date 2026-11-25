---
title: "Educational Series #219: Bull Call Spread (Debit Call Spread) — Structure, Max Profit, Max Loss, Breakeven & Lower Theta/IV Drag"
description: "Learn how a Bull Call Spread (Debit Call Spread) works—how to construct it, calculate max profit, max loss, and breakeven, and why selling a higher strike reduces net Theta and Vega drag."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Part 1**, we covered how the Greeks measure directional, acceleration, time, and volatility sensitivities. In **Lesson #219**, we open **Part 2: Directional Option Strategies** with the classic moderately bullish defined-risk trade: the **Bull Call Spread** (also called a **Debit Call Spread**).

![Educational Series #219: Bull Call Spread](/images/lessons/lesson-219.png)

---

## 1. How a Bull Call Spread Is Constructed

Using the **same underlying and same expiry**:
*   **Buy 1 Lower-Strike Call (`+CE` at $K_{\text{low}}$):** Provides bullish upside exposure (often near `ATM` or slightly `ITM`/`OTM`).
*   **Sell 1 Higher-Strike Call (`-CE` at $K_{\text{high}}$):** Offsets part of the upfront cost, creating a **net debit** entry while capping upside gain above $K_{\text{high}}$.

---

## 2. Payoff Math: Net Debit, Max Loss, Max Profit & Breakeven

Let $\text{Net Debit} = P_{\text{low}} - P_{\text{high}}$ (per unit) and $\text{Spread Width} = K_{\text{high}} - K_{\text{low}}$:

| Metric | Formula (Per Unit) | What Happens at Expiry |
| :--- | :--- | :--- |
| **Max Loss** | $\text{Net Debit}$ | Occurs if spot $\le K_{\text{low}}$; both calls expire worthless (`0` intrinsic value). |
| **Max Profit** | $\text{Spread Width} - \text{Net Debit}$ | Occurs if spot $\ge K_{\text{high}}$; spread reaches full intrinsic width minus net debit paid. |
| **Breakeven** | $K_{\text{low}} + \text{Net Debit}$ | Spot level at expiry where intrinsic gain equals the upfront net debit. |

*   *Illustrative Example (1 lot = 50):* Buy `24,500 CE` at `₹140` and sell `24,700 CE` at `₹60` $\rightarrow$ **Net Debit = `₹80`** (`₹4,000` per lot), **Spread Width = `200`**, **Max Profit = `₹120`** (`₹6,000` per lot), **Breakeven = `24,580`**.

---

## 3. Why It Reduces Theta & Vega Drag vs. a Naked Long Call

*   **Lower Net Debit & Capital at Risk:** Selling the higher call reduces your upfront cash outlay and worst-case loss compared to buying a single call outright.
*   **Reduced Theta & Vega Exposure:** Because the short higher-strike call has **positive Theta** and **negative Vega**, it partially offsets the **negative Theta** and **positive Vega** of the long lower-strike call—making the trade less punished by slow time decay or mild post-entry `IV` softening, at the cost of a **capped upside**.

---

## 4. Key Takeaways

*   A **Bull Call Spread** buys a lower call and sells a higher call in the **same expiry** for a **net debit**, capping both risk and reward.
*   Selling the upper call lowers cost and dampens **Theta/Vega drag** compared to a naked long call, while limiting gains above the short strike.

---

## 5. Quick Self-Check

1.  If a Bull Call Spread costs a **net debit of `₹65`** across a **`150`-point** strike spread, what are the **max loss**, **max profit**, and **breakeven** (using lower strike $K_{\text{low}}$)?
2.  Why is a Bull Call Spread often preferred over a naked Long Call when expecting a **measured/target-capped rally** rather than an explosive runaway move?
3.  How does the short higher-strike call alter **Theta** and **Vega** compared to buying the lower call alone?
4.  
