---
title: "Educational Series #260: Avoiding Backtesting Traps — Overfitting (Curve-Fitting), Look-Ahead Bias & Survivorship Bias"
description: "Spot and prevent the three classic backtesting traps—overfitting (curve-fitting), look-ahead bias, and survivorship bias—so historical tests stay honest and realistic."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 09
  - Risk & Psychology
---

In **Lesson #259**, we outlined how to run structured historical backtests across market regimes. In **Lesson #260**, we expose **three traps that make backtests look artificially amazing on paper while failing in live trading**: **Overfitting (Curve-Fitting)**, **Look-Ahead Bias**, and **Survivorship Bias**.

![Educational Series #260: Avoiding Backtesting Traps](/images/lessons/lesson-260.png)

---

## 1. Three Classic Backtesting Traps

*   **Overfitting (Curve-Fitting):** Adding too many narrow filters or tweaking parameters until a rule fits past noise almost by hand (for example, *"only buy on Tuesdays at 10:17 AM when RSI is between 54.2 and 58.9 and volume is 1.43x"*). The more degrees of freedom you tune to past data, the more likely the rule breaks on fresh live data.
*   **Look-Ahead Bias:** Accidentally using information in a historical test that **would not have been known at the time of the trade**—such as judging a breakout by the *final close* of a candle before that candle actually closed, using end-of-day data for an intraday decision, or spotting a swing high/low only after future bars confirmed it.
*   **Survivorship Bias:** Testing stock strategies only on **companies still listed and thriving today** while excluding stocks that collapsed, delisted, or dropped out of indices over the years. That quietly inflates historical returns and understates crash/delisting risk.

---

## 2. Keeping Historical Tests Honest

*   Favor **simple, economically logical rules** with few parameters over complex curve-fitted conditions.
*   Enforce **strict point-in-time rules** so no future candle or post-trade information leaks into historical entries or stops.
*   When testing equities, account for **delisted or fallen stocks** rather than cherry-picking today's winners.

---

## 3. Key Takeaways

*   **Overfitting** tunes to past noise; **look-ahead bias** peeks into the future; **survivorship bias** ignores fallen or delisted stocks.
*   Simple rules and strict point-in-time discipline keep backtest expectancy believable.

---

## 4. Quick Self-Check

1.  Why is a strategy with **eight tightly tuned parameters** on one historical dataset at high risk of underperforming in live markets?
2.  Give an example of **look-ahead bias** on a daily or intraday chart.
3.  How does **survivorship bias** distort a historical backtest on individual stocks?
