---
title: "Education Series #311: Realized Volatility (HV) vs. Implied Volatility (IV) — Variance Risk Premium in Indian Indices"
pubDatetime: 2026-11-26T10:12:00+05:30
description: "Compare backward-looking Historical/Realized Volatility (HV) against forward-looking Implied Volatility (IV) and understand why the Variance Risk Premium exists on Nifty and Bank Nifty."
tags:
  - education-series
  - module-11
  - implied-volatility
  - realized-volatility
  - variance-risk-premium
---

![Realized Volatility (HV) vs. Implied Volatility (IV)](/images/lessons/lesson-311.png)

Options pricing revolves around two distinct measures of price movement: **Realized (Historical) Volatility (HV)**—how much the underlying actually moved over a past window—and **Implied Volatility (IV)**—how much future movement the options market is currently pricing into premiums.

## HV vs. IV at a Glance

| Metric | Measurement Window | What It Tells You |
| :--- | :--- | :--- |
| **Realized / Historical Volatility (HV)** | Backward-looking (e.g., 10-day, 20-day, 30-day close-to-close returns) | Actual annualized standard deviation of spot price movement that already happened |
| **Implied Volatility (IV)** | Forward-looking (derived from live option prices via Black-Scholes) | Market consensus forecast of annualized movement until option expiry |

## Understanding the Variance Risk Premium (VRP)

Across Indian indices like Nifty 50 and Bank Nifty, **Implied Volatility tends to trade higher than subsequent Realized Volatility** over most calm and moderately trending periods. This positive spread ($\text{IV} - \text{HV} > 0$) is called the **Variance Risk Premium (VRP)**.

* **Why VRP Exists:** Institutional portfolios continuously buy downside puts for tail protection, bidding up option prices above fair realized variance, while option sellers demand compensation for bearing sudden gap risk.
* **When VRP Flips Negative:** During acute macro shocks, unexpected election/policy surprises, or panic sell-offs, realized daily swings exceed prior implied volatility—punishing unhedged short-volatility positions.

## Key Takeaways

* Always compare **current IV against 20-day HV** before selling or buying options; rich positive spread favors defined-risk credit spreads, while unusually compressed IV near multi-month HV lows favors debit spreads.
* Harvesting the **Variance Risk Premium** requires defined risk and position limits so rare volatility spikes never erase steady theta gains.

*Educational content only. Not investment advice or a recommendation to trade any security.*
