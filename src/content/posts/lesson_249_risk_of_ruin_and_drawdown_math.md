---
title: "Educational Series #249: Risk of Ruin & Drawdown Math — Why a 50% Loss Requires a 100% Gain to Recover"
description: "Understand the asymmetric math of trading drawdowns and Risk of Ruin—why deep percentage losses require exponentially larger gains to recover, and how strict 1R limits protect principal."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 09
  - Risk & Psychology
---

In **Part 1**, we explored how cognitive biases and emotional triggers distort decisions during live NSE/BSE sessions. In **Lesson #249**, we open **Part 2: Advanced Risk Governance & Capital Preservation** with the unforgiving arithmetic behind account survival: **Drawdown Math** and **Risk of Ruin**.

![Educational Series #249: Risk of Ruin & Drawdown Math](/images/lessons/lesson-249.png)

---

## 1. Why Drawdowns Hurt Geometrically

When your trading capital shrinks, every subsequent percentage gain is calculated on a **smaller remaining base**:

$$\text{Required Recovery \%} = \frac{\text{Drawdown \%}}{1 - \text{Drawdown \%}}$$

| Account Drawdown | Remaining Capital (From `₹10,00,000`) | Gain Needed Just to Break Even |
| :--- | :--- | :--- |
| **`-10%`** | `₹9,00,000` | **`+11.1%`** |
| **`-20%`** | `₹8,00,000` | **`+25.0%`** |
| **`-25%`** | `₹7,50,000` | **`+33.3%`** |
| **`-50%`** | `₹5,00,000` | **`+100.0%`** |
| **`-75%`** | `₹2,50,000` | **`+300.0%`** |

---

## 2. What Drives Risk of Ruin

**Risk of Ruin** is the probability that a trader's account drops below a critical threshold (where continuing to trade effectively becomes impossible). Three factors push Risk of Ruin higher:

1.  **Oversized Bet Size (`% Risk per Trade`):** Risking `10%–15%` per trade means a normal cluster of `5–6` losses inflicts a devastating drawdown.
2.  **Unfavorable Win Rate / Payoff Balance:** Low expectancy or uncontained tail losses accelerate capital erosion.
3.  **Losing-Streak Variance:** Even a `55%` win-rate strategy regularly experiences `5–8` consecutive losses over a large sample—keeping `1R` at **`1%–2%`** ensures those streaks remain shallow and recoverable.

---

## 3. Key Takeaways

*   Drawdowns are **asymmetric**—a `50%` loss demands a `100%` return just to return to breakeven.
*   Keeping per-trade risk (`1R`) small (`1%–2%` of equity) is your primary shield against **Risk of Ruin**.

---

## 4. Quick Self-Check

1.  If a `₹5,00,000` trading account suffers a **`40%` drawdown** down to `₹3,00,000`, what percentage return is needed on the remaining capital just to get back to `₹5,00,000`?
2.  Why can even a profitable strategy with a **`55%` win rate** experience `6` losses in a row?
3.  How does capping `1R` at **`1%` of equity** keep a 6-trade losing streak manageable?
