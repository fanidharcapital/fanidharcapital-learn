---
title: "Education Series #350: Case Study — Spotting Overfitting, Look-Ahead Bias & Slippage in a Backtest"
pubDatetime: 2026-11-26T11:32:07+05:30
description: "Examine a backtest that looked great on paper—and uncover how over-tuned parameters, look-ahead assumptions, and zero slippage distorted the results."
tags:
  - education-series
  - module-12
  - case-study
  - backtesting
  - overfitting
---

![Case Study — Spotting Overfitting, Look-Ahead Bias & Slippage in a Backtest](/images/lessons/lesson-350.png)

Before trusting any historical test or rule set in live markets, stress-test it for **curve fitting**, **look-ahead bias**, and **realistic execution costs**.

## Three Red Flags in a Misleading Backtest

1. **Over-Specific Parameter Tuning:** Using odd lookback periods, narrow time windows, or five stacked filters tuned solely to past winners—resulting in sharp drop-off on out-of-sample data.
2. **Look-Ahead Assumption:** Entering at a candle's close *before* that candle actually closed in real time, or using end-of-day/revised figures that were unavailable during the session.
3. **Zero Slippage & Cost Blindness:** Assuming fills at exact theoretical prices with wide option spreads or fast gaps ignored.

## Key Execution Lessons

* Prefer **simple rules with clear market logic** over complex over-optimized formulas.
* Always verify performance **out-of-sample and in small-size forward testing** with realistic slippage and charges included.

*Educational content only. Not investment advice or a recommendation to trade any security.*
