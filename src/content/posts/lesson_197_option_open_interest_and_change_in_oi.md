---
title: "Educational Series #197: Option Open Interest (OI) & Change in OI — Identifying Support/Resistance Walls & Writing Zones"
description: "Decode Option Open Interest (OI) and Change in OI (ΔOI). Learn how to use these metrics to identify major Support and Resistance levels and detect active option writing zones on NSE/BSE."
pubDatetime: 2026-11-24T09:15:00+05:30
tags:
  - Module 07
  - Options Market
---

In **Lesson #196**, we learned how to navigate the layout of the option chain. In **Lesson #197**, we dive into the most critical data column within that chain: **Open Interest (`OI`) and Change in OI (`ΔOI`)**. While price reflects what traders are *doing*, OI reveals where they are **committed**—making it essential for identifying support, resistance, and market sentiment.

![Educational Series #197: Option Open Interest (OI) & Change in OI](/images/lessons/lesson-197.png)

---

## 1. What Is Open Interest (OI)?

**Open Interest (`OI`)** represents the total number of outstanding option contracts that have been **written (sold) but have not yet been squared off** (closed by an offsetting buy) or exercised.

*   *Crucial Distinction:* **Volume** is the number of contracts traded *today*. **Open Interest** is the cumulative total remaining *open* at the end of the previous trading day (updated periodically during the live session).
*   Because every option buyer must have an option seller, **Total OI = Total Long Positions = Total Short Positions**.
*   High OI generally indicates high liquidity and market interest at that specific strike price.

---

## 2. Interpreting OI for Sentiment (Support & Resistance Walls)

When analyzing the option chain, pay attention to which strikes hold the *largest absolute* OI:

1.  **High Call OI (`CE`):** Indicates a **Resistance Wall**. Traders have sold a massive number of Calls, betting the price will **not** cross this level. If price approaches, these writers will actively defend the zone.
2.  **High Put OI (`PE`):** Indicates a **Support Wall**. Traders have sold a huge number of Puts, betting the price will **stay above** this level. These writers act as a floor for the market.

*A concentration of high OI in both Calls and Puts at the same strike is often an **ATM Straddle**, indicating expectations of a major breakout or high volatility.*

---

## 3. Analyzing Momentum (Change in OI - ΔOI)

While total OI shows the base, **Change in OI (`ΔOI`)** shows the *real-time activity* and momentum during the current trading session:

*   **Increasing `ΔOI` (Built-Up):** New contracts are being added (net selling).
    *   *Rising `OI` + Rising Price:* Short Covering (unlikely in ΔOI) / Long Buildup (common in futures).
    *   *Rising `OI` + Falling Price:* **Aggressive Call Writing** (bearish).
    *   *Rising `OI` + Rising Price:* **Aggressive Put Writing** (bullish).
*   **Decreasing `ΔOI` (Unwinding):** Traders are closing existing positions (net buying).
    *   *Falling `OI` + Falling Price:* Long Liquidation (buyers exiting).
    *   *Falling `OI` + Rising Price:* **Short Covering** (often fuels rallies, especially near resistance).
    *   *Falling `OI` + Falling Price:* **Put Unwinding** (often accelerates falls, especially near support).

---

## 4. Key Takeaways

*   **Open Interest (`OI`)** is the total number of open short positions. High OI creates significant **Support/Resistance Walls**.
*   **Change in OI (`ΔOI`)** reveals the market's current bias: **Put Writing** confirms bullishness; **Call Writing** confirms bearishness; **Unwinding** indicates capitulation or covering.

---

## 5. Quick Self-Check

1.  What is the fundamental difference between **Option Volume** and **Option Open Interest (`OI`)**?
2.  If the **Change in Open Interest (`ΔOI`)** for the `24,700 Call` is sharply positive while the index is falling, what does this indicate?
3.  Explain why a strike with exceptionally high **Put Open Interest** is often referred to as a potential "Support Wall."
4.  
