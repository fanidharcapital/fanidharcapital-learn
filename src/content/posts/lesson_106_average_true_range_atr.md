---
title: "Educational Series #106: Average True Range (ATR) — Measuring Volatility for Position Sizing & Stop Placement"
description: "Learn how to use the 14-period Average True Range (ATR) to measure true daily price volatility including overnight gaps, place noise-adjusted stop-losses, and calculate exact position sizes in Indian equities."
pubDatetime: 2026-11-24T11:00:00Z
tags:
  - Module 04
  - Technical Analysis
---

In Lesson #105, you saw how Bollinger Bands visualize volatility expansion and contraction around a moving average. In **Lesson #106**, you learn to quantify that volatility in exact rupee or point terms using the **Average True Range (ATR)**—one of the most practical risk-management tools in technical analysis for placing stop-losses outside normal market noise and sizing positions consistently across calm and volatile stocks.

![Educational Series #106: Average True Range (ATR)](/images/lessons/lesson-106.png)

---

## 1. What ATR Measures (And What It Does Not)

Developed by J. Welles Wilder, **ATR** (standard setting: **14 periods**) measures the **average size of daily price movement**, explicitly accounting for **overnight gaps** between yesterday's close and today's range.

* **True Range (TR) Formula:** For any single session, True Range is the **greatest** of three values:
  1. $\text{Current High} - \text{Current Low}$
  2. $|\text{Current High} - \text{Previous Close}|$
  3. $|\text{Current Low} - \text{Previous Close}|$
* **Average True Range (ATR):** The 14-period smoothed moving average of True Range, expressed in **points or rupees** (e.g., an ATR of `₹24` means the stock moves roughly `₹24` from high to low on an average trading day).
* **Crucial Distinction:** ATR is **non-directional**. A rising ATR tells you price swings are widening (higher volatility), *not* whether the stock is going up or down.

---

## 2. Application 1: Volatility-Adjusted Stop-Loss Placement

Using a fixed percentage stop-loss (such as "always use a 2% stop") fails across different stocks: a 2% stop on a calm large-cap FMCG stock may sit miles away from structure, while a 2% stop on a high-beta NSE mid-cap gets triggered by routine morning noise before the real move begins.

| Trading Style / Timeframe | Typical ATR Stop Buffer | Structural Placement Rule |
| :--- | :--- | :--- |
| **Intraday Swing / Momentum** | **$1.0\times$ to $1.5\times$ Intraday ATR** | Place stop just outside the opening range or intraday swing low/high plus $1.0\times$ ATR buffer |
| **Daily Swing Trading (Days to Weeks)** | **$1.5\times$ to $2.0\times$ Daily ATR** | Anchor stop below the key swing low or support zone, padded by at least $1.5\times$ Daily ATR |
| **Positional Trend Following** | **$2.5\times$ to $3.0\times$ Daily ATR** | Use an ATR trailing stop ("Chandelier Exit") below highest highs so routine pullbacks do not shake you out |

---

## 3. Application 2: Equal-Risk Position Sizing Formula

ATR allows you to risk the **exact same rupee amount** on every trade regardless of whether a stock moves `₹10` a day or `₹80` a day:

$$\text{Position Size (Shares)} = \frac{\text{Maximum Account Risk per Trade (₹)}}{\text{Stop-Loss Distance per Share (₹)}}$$

### Practical NSE Example (₹5,00,000 Trading Capital)
Suppose your strict risk rule is **1% of capital per trade** = **₹5,000 maximum loss**:

* **Stock A (Low Volatility Large-Cap):** Trading at `₹1,000` with a 14-day ATR of `₹15`.
  * Stop distance ($2 \times \text{ATR}$) = `₹30` per share (Stop at `₹970`).
  * Quantity = $\frac{₹5,000}{₹30} = \mathbf{166\text{ shares}}$ (Total position value: `₹1,66,000`).
* **Stock B (High Volatility Mid-Cap):** Also trading at `₹1,000`, but with a 14-day ATR of `₹50`.
  * Stop distance ($2 \times \text{ATR}$) = `₹100` per share (Stop at `₹900`).
  * Quantity = $\frac{₹5,000}{₹100} = \mathbf{50\text{ shares}}$ (Total position value: `₹50,000`).

Notice that both stocks sit at the exact same `₹1,000` share price, yet ATR automatically trims your position size by more than two-thirds on the volatile stock so your true rupee risk stays capped at **₹5,000**.

---

## 4. Key Takeaways

* **ATR measures daily movement range (including overnight gaps)** in rupees or points—it measures **volatility**, never trend direction.
* Pad your **structural stop-loss** with **$1.5\times$ to $2.0\times$ ATR** so normal intraday wicks do not knock you out of valid setups.
* Combine ATR stop distances with a **fixed rupee risk budget** to normalize risk across both calm large-caps and fast-moving mid-caps.

---

## 5. Quick Self-Check

1. Why does **True Range** compare today's High and Low against **Yesterday's Close** instead of only using `High - Low`?
2. If a stock's 14-day ATR rises sharply from `₹18` to `₹42`, does that automatically mean the stock is in an uptrend? Why or why not?
3. Using a **₹4,000 risk cap per trade** and a **$2 \times \text{ATR}$ stop** on a stock whose 14-day ATR is `₹25`, how many shares should you buy?
