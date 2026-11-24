---
title: "Educational Series #107: Volume-Based Indicators — VWAP, On-Balance Volume (OBV) & Delivery/Volume Context"
description: "Learn how to use VWAP for intraday institutional fair value, On-Balance Volume (OBV) for cumulative accumulation tracking, and NSE delivery volume data for positional conviction."
pubDatetime: 2026-11-24T12:00:00Z
tags:
  - Module 04
  - Technical Analysis
---

In Lesson #106, you used Average True Range (ATR) to measure price volatility and size positions objectively. In **Lesson #107**, you return to **volume**—moving beyond raw vertical volume bars (Lesson #99) to structured **volume-based indicators**: **VWAP**, **On-Balance Volume (OBV)**, and **NSE Delivery Volume** data.

![Educational Series #107: Volume-Based Indicators](/images/lessons/lesson-107.png)

---

## 1. Volume-Weighted Average Price (VWAP)

**VWAP** calculates the average price a stock or index has traded at throughout the session, weighted by volume at every price level:

$$\text{VWAP} = \frac{\sum (\text{Typical Price} \times \text{Volume})}{\sum \text{Volume}}$$

### Why Institutions Anchor to VWAP
* **Execution Benchmark:** Mutual funds, FIIs, DIIs, and algorithmic execution desks judge their order execution against VWAP—buying *below* VWAP is considered good execution for a buy mandate, while selling *above* VWAP is considered strong execution for a sell mandate.
* **Intraday Regime Filter:**
  * **Price Holding Above Rising VWAP:** Buyers are willing to pay progressively higher volume-weighted prices; pullbacks into VWAP frequently act as dynamic intraday support.
  * **Price Trading Below Falling VWAP:** Sellers control order flow; bounces into VWAP often meet institutional supply.
* **Important Reset Rule:** Standard intraday VWAP **resets to zero at 9:15 AM IST** every trading day—meaning it is an **intraday** benchmark (and why Anchored VWAP from major earnings gaps or swing highs/lows is used on Daily charts).

---

## 2. On-Balance Volume (OBV): Cumulative Buying vs. Selling Flow

Developed by Joseph Granville, **OBV** keeps a running cumulative total of volume based on closing price direction:
* If today's **Close > Previous Close**: $\text{OBV} = \text{Previous OBV} + \text{Today's Volume}$
* If today's **Close < Previous Close**: $\text{OBV} = \text{Previous OBV} - \text{Today's Volume}$
* If today's **Close = Previous Close**: $\text{OBV}$ remains unchanged.

### How to Read OBV on Daily & Weekly Charts
1. **Trend Confirmation:** When price makes Higher Highs and OBV makes Higher Highs alongside it, upward volume flow confirms the rally.
2. **Leading OBV Breakout (Accumulation Clue):** During a multi-week sideways base, if **OBV breaks out to a new high *before* price clears horizontal resistance**, institutions are quietly accumulating shares on up-days while keeping price contained inside the range.
3. **Bearish OBV Divergence:** If price grinds to a marginal new high while OBV rolls over into Lower Highs, heavy volume is occurring on red days—warning of underlying distribution.

---

## 3. NSE Delivery Volume vs. Total Traded Volume (Indian Equities Edge)

Unlike many global markets where intraday speculation and positional delivery are blended in public volume feeds, the **National Stock Exchange (NSE)** publishes exact **Deliverable Quantity** and **Delivery Percentage (`% Deli Qty to Traded Qty`)** after market close:

| Volume Metric | What It Represents | Practical Analytical Signal |
| :--- | :--- | :--- |
| **High Total Volume + High Delivery % (`>50%–65%`)** | Large share blocks actually settled into demat accounts rather than squared off intraday | **Genuine Institutional Commitment:** Strongest confirmation for breakouts and trend reversals |
| **High Total Volume + Very Low Delivery % (`<15%–25%`)** | Heavy intraday algorithmic/retail churning with minimal overnight holding | **Speculative Churn:** Breakout is more prone to fading once intraday traders square off before 3:15 PM |
| **Sudden Multi-Day Delivery Spike Inside a Flat Base** | Quiet positional absorption ahead of a directional move | Early institutional footprint worth adding to your breakout watchlist |

---

## 4. Key Takeaways

* **Intraday VWAP** anchors institutional fair value during the live session—use pullbacks to rising VWAP in strong trends rather than chasing stretched moves far from VWAP.
* **On-Balance Volume (OBV)** tracks cumulative directional volume flow and often breaks out **ahead of price** during quiet institutional accumulation.
* Combining chart breakouts with **NSE Delivery Volume spikes** separates real positional accumulation from short-lived intraday noise.

---

## 5. Quick Self-Check

1. Why does standard **VWAP** apply specifically to intraday charts unless manually anchored to a historical event date?
2. What does it suggest when **OBV breaks above its prior peak** while a stock's price is still consolidating just below resistance?
3. On NSE cash equities, why is a breakout accompanied by **60% delivery volume** far stronger than one with **18% delivery volume**?

