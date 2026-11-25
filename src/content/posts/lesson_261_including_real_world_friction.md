---
title: "Educational Series #261: Including Real-World Friction — Modeling Brokerage, STT, Exchange Fees, GST & Slippage"
description: "Model real-world NSE/BSE trading friction in backtests and strategy math—include brokerage, STT, exchange and SEBI charges, stamp duty, GST, and bid-ask slippage."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 09
  - Risk & Psychology
---

In **Lesson #260**, we guarded against overfitting, look-ahead bias, and survivorship bias. In **Lesson #261**, we add the cost layer that separates **paper backtest fantasy** from **real-world trading reality**: **Trading Friction**—brokerage, statutory/exchange charges, taxes, and execution slippage.

![Educational Series #261: Including Real-World Friction](/images/lessons/lesson-261.png)

---

## 1. What Real-World Friction Includes on NSE/BSE

Every trade—especially frequent intraday and options trades—incurs transaction friction across entry and exit:

*   **Brokerage & Statutory / Exchange Charges:** Flat or percentage **brokerage**, **Securities Transaction Tax (`STT`)**, **exchange transaction charges**, **SEBI turnover fees**, **stamp duty**, and **GST** on applicable charges. *(Always check current official exchange/SEBI/broker schedules and statutory rates rather than guessing old numbers.)*
*   **Bid-Ask & Execution Slippage:** In live trading, you rarely get an exact mid-market or theoretical chart fill. Fast ticks, stop-loss triggers, wide bid-ask spreads, or multi-leg option fills create **slippage** on both entry and exit.

---

## 2. Why Friction Hits High-Frequency & Tight-Target Strategies Hardest

*   If a strategy averages **`+0.35R` gross** per trade across `200` trades, and **friction + slippage costs `0.25R` per trade**, your **net expectancy drops to `+0.10R`**—and any extra slippage or rough market month can push net expectancy below zero.
*   Multi-leg strategies (such as a `4`-leg Iron Condor) incur **multiple leg fills** on entry and exit, making liquid strikes and limit/spread execution essential so friction does not eat your credit.
*   Always deduct **estimated costs and realistic slippage** when evaluating any backtest or strategy idea.

---

## 3. Key Takeaways

*   Always model **brokerage, STT, exchange/SEBI fees, stamp duty, GST, and slippage** when judging strategy profitability.
*   High trade frequency or wide bid-ask spreads magnify friction drag—protect your **net expectancy** after costs.

---

## 4. Quick Self-Check

1.  Why can a strategy with a **positive gross backtest** end up breaking even or losing money in live trading once **friction and slippage** are included?
2.  Why do **multi-leg option strategies** require extra attention to execution and bid-ask spreads compared to a single-leg trade?
3.  Which type of trader feels transaction costs more acutely: someone taking **300 short-term trades a quarter** or someone taking **25 swing trades** with wider targets?
