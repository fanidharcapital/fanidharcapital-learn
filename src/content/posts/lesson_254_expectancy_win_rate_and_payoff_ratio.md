---
title: "Educational Series #254: Expectancy, Win Rate & Payoff Ratio — Understanding the Mathematical Edge of Any System"
description: "Calculate Mathematical Expectancy—see how Win Rate and Payoff Ratio (Reward-to-Risk) combine to define a trading system's true edge after brokerage, STT, taxes, and slippage."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 09
  - Risk & Psychology
---

In **Lessons #249–#253**, we focused on capital preservation and drawdown limits. In **Lesson #254**, we quantify what makes a trading strategy profitable over time: **Mathematical Expectancy**—the interplay between **Win Rate** and **Payoff Ratio**.

![Educational Series #254: Expectancy, Win Rate & Payoff Ratio](/images/lessons/lesson-254.png)

---

## 1. The Expectancy Formula

**Expectancy ($E$)** tells you how much you expect to make (or lose) **on average per trade** in `R`-multiples (or rupees) over a large sample:

$$E = (\text{Win Rate} \times \text{Average Win}) - (\text{Loss Rate} \times \text{Average Loss})$$

*   *Example A (Trend-Following System):* `40%` Win Rate, Average Win = `+2.5R`, `60%` Loss Rate, Average Loss = `1.0R`:
    $$E = (0.40 \times 2.5R) - (0.60 \times 1.0R) = 1.00R - 0.60R = \mathbf{+0.40R \text{ per trade}}$$
*   *Example B (High-Win-Rate Credit Spread / Mean-Reversion System):* `68%` Win Rate, Average Win = `+0.75R`, `32%` Loss Rate, Average Loss = `1.0R`:
    $$E = (0.68 \times 0.75R) - (0.32 \times 1.0R) = 0.51R - 0.32R = \mathbf{+0.19R \text{ per trade}}$$

---

## 2. Why Neither Win Rate Nor Payoff Ratio Works Alone

*   A **`80%` win rate** still loses money if your average win is `+0.2R` and your average loss is `-1.5R` ($0.80 \times 0.2 - 0.20 \times 1.5 = \mathbf{-0.14R}$).
*   A **`3:1` reward-to-risk ratio** still loses money if your win rate is only `20%` ($0.20 \times 3.0 - 0.80 \times 1.0 = \mathbf{-0.20R}$).
*   **Always Subtract Real Friction:** Compute **Net Expectancy** *after* deducting brokerage, STT, exchange fees, GST, and slippage—a thin gross edge can turn negative once costs are included.

---

## 3. Key Takeaways

*   **Positive Expectancy** requires balancing **Win Rate** and **Payoff Ratio** together—never chase win rate in isolation.
*   Evaluate your **Net Expectancy after all transaction costs** over a meaningful sample of trades.

---

## 4. Quick Self-Check

1.  Calculate the **Expectancy in `R`** for a system with a **`45%` win rate**, an **average win of `+2.0R`**, and an **average loss of `1.0R`**.
2.  How can a trader with a **`75%` win rate** still end up with a **negative expectancy** over 100 trades?
3.  Why is measuring **Net Expectancy after brokerage, STT, and slippage** critical for active intraday and options traders?
