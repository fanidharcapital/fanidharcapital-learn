---
title: "Educational Series #114: Position Sizing & Risk per Trade — Protecting Capital Against Losing Streaks"
description: "Learn how fixed fractional risk per trade protects your trading capital during inevitable losing streaks, how to calculate position sizes accurately on NSE/BSE, and how correlated bets multiply risk."
pubDatetime: 2026-11-24T10:22:00Z
tags:
  - Module 04
  - Technical Analysis
---

In Lesson #113, you learned how to anchor stop-losses to true chart invalidation levels and volatility buffers rather than arbitrary percentage rules. In **Lesson #114**, you connect your stop-loss distance directly to **Position Sizing & Risk per Trade**—the mathematical guardrail that ensures no single bad setup or losing streak can permanently cripple your trading capital.

![Educational Series #114: Position Sizing & Risk per Trade](/images/lessons/lesson-114.png)

---

## 1. Fixed Fractional Risk: The Core Formula

A disciplined trader decides **before entering** how much capital they are willing to lose if the stop-loss is hit—commonly **0.5% to 2.0%** of total trading equity per trade:

$$\text{Rupee Risk per Trade} = \text{Account Capital} \times \text{Risk \%}$$

$$\text{Position Size (Quantity)} = \frac{\text{Rupee Risk per Trade}}{\text{Entry Price} - \text{Stop-Loss Price}}$$

*(For short setups, the denominator is $\text{Stop-Loss Price} - \text{Entry Price}$.)*

### Why Risking 1%–2% Beats All-In Conviction
Even skilled systems experience losing streaks—five, eight, or ten consecutive stop-outs can happen in choppy markets:

| Risk per Trade | Account After 6 Consecutive Losses | Account After 10 Consecutive Losses | Gain Required to Recover 10 Losses |
| :--- | :--- | :--- | :--- |
| **1% Fixed Fractional** | ~94.1% of capital | ~90.4% of capital | ~10.6% gain |
| **2% Fixed Fractional** | ~88.6% of capital | ~81.7% of capital | ~22.4% gain |
| **10% Oversized Bet** | ~53.1% of capital | ~34.9% of capital | ~186.5% gain |

Notice the asymmetry of drawdowns: losing 10% takes just over **11%** to get back to breakeven, whereas losing 65% requires a **186%** surge just to return to starting capital.

---

## 2. Hidden Risk Multipliers in Indian Equities (NSE / BSE)

Calculating position size on one isolated trade is only half the job—watch out for two subtle portfolio traps:

1. **Correlated Sector & Index Bets:** Buying five different NSE PSU or banking stocks on the same day—each with a 1% stop—does not give you five *independent* 1% risks if an overnight macro or sector shock hits all five together. Treat correlated positions as a **shared cluster risk**.
2. **Position Value vs. Risk Amount:** A `₹1,00,000` position with a `3%` stop risks `₹3,000`—whereas a `₹1,00,000` position with a `10%` stop risks `₹10,000`. Always size by **rupee distance to stop**, never by gut feel or round-lot habit alone.

---

## 3. Practical Execution Rules for Position Sizing

* **Lock Risk Before Checking Quantity:** Decide your maximum rupee risk first, locate the technical invalidation level (Lesson #113), measure the per-share stop distance, and divide to get share quantity.
* **Respect Minimum Lot / Liquidity Constraints:** When trading derivatives or lower-priced cash stocks, verify that your calculated quantity fits comfortably within position limits and normal daily liquidity without creating outsized slippage (Lesson #112).
* **Do Not Double Down on Losers Without a New Setup:** Adding shares to a falling trade after stop-loss logic has been breached turns a controlled 1% plan into an unplanned drawdown.

---

## 4. Key Takeaways

* **Position size** is an output of **account risk budget ÷ stop-loss distance**, not a guess.
* Capping risk at **0.5%–2% per trade** keeps drawdowns manageable during losing streaks and avoids steep recovery math.
* Account for **correlated holdings** across the same NSE sector or index so multiple simultaneous trades do not stack into one oversized bet.

---

## 5. Quick Self-Check

1. If you trade a `₹10,00,000` account with a **1% risk rule**, a stock entry at `₹500`, and a technical stop-loss at `₹480`, how many shares can you buy?
2. Why is recovering from a **50% account drawdown** much harder than recovering from a **10% drawdown**?
3. How can taking **four correlated trades** in the same sector create more real risk than your per-trade percentage suggests?
