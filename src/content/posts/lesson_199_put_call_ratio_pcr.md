---
title: "Educational Series #199: Put-Call Ratio (PCR) — OI-Based vs. Volume-Based PCR & Contrarian Context"
description: "Decode the Put-Call Ratio (PCR). Learn how to calculate and interpret both OI-based and Volume-based PCR for Nifty/Sensex, and use them as contrarian sentiment indicators."
pubDatetime: 2026-11-25T09:45:00+05:30
tags:
  - Module 07
  - Options Market
---

In **Lesson #198**, we learned to combine price, OI, and volume. In **Lesson #199**, we zoom out to view the entire market sentiment through a single, powerful metric: the **Put-Call Ratio (`PCR`)**. The PCR is one of the most popular indicators in Indian derivatives trading, used primarily as a **contrarian sentiment gauge** to identify potential market tops and bottoms.

![Educational Series #199: Put-Call Ratio (PCR)](/images/lessons/lesson-199.png)

---

## 1. What Is the Put-Call Ratio?

The PCR measures the relationship between the total number of Puts and Calls traded or outstanding for a given underlying (like Nifty or a stock).

$$\text{Put-Call Ratio (PCR)} = \frac{\text{Total Put Contracts}}{\text{Total Call Contracts}}$$

It is calculated using either **Volume** or **Open Interest (`OI`)**.

---

## 2. OI-Based vs. Volume-Based PCR

| Metric | Calculation Basis | Time Horizon & Use Case |
| :--- | :--- | :--- |
| **OI-Based PCR** | Total Open Interest (`ΣOI_Puts` / `ΣOI_Calls`) | **Accumulated Sentiment:** Reflects the net positioning of option writers *over time*. This is the most widely used and reliable PCR for gauging major trend extremes. |
| **Volume-Based PCR** | Total Daily Volume (`ΣVol_Puts` / `ΣVol_Calls`) | **Day-to-Day Sentiment:** Reflects the immediate bias of traders *for that single trading session*. More volatile and prone to intraday noise. |

*Note: When traders simply say "PCR," they usually mean the **OI-Based PCR** of the Nifty index.*

---

## 3. Interpreting PCR (The Contrarian Signal)

The PCR is interpreted **contrarianly**. When the crowd gets too heavily positioned in one direction, the market often reverses.

| Market Condition | PCR Value (General Nifty Range) | Interpretation & Contrarian View |
| :--- | :--- | :--- |
| **Extreme Fear** | **`< 0.70 – 0.80`** | Puts are heavily outnumbered by Calls. The market is extremely bearish or complacent. **Contrarian View: Market Bottom / Potential Bounce.** |
| **Neutral / Normal** | **`0.90 – 1.10`** | Market is relatively balanced; the trend has room to continue. |
| **Extreme Greed** | **`1.30 – 1.50+`** | Puts are heavily outnumbering Calls (hedging or speculation). The market is overly euphoric or fearful of a drop. **Contrarian View: Market Top / Potential Correction.** |

*Warning: In a very strong trending market, the PCR can remain "overbought" or "oversold" for extended periods. Always combine PCR with price action and OI walls.*

---

## 4. Key Takeaways

*   The **Put-Call Ratio (`PCR`)** is a primary contrarian indicator of market sentiment.
*   **OI-Based PCR** is preferred for analyzing accumulated sentiment and identifying major trend extremes.
*   Extreme **low** PCR values signal potential bottoms; extreme **high** PCR values signal potential tops.

---

## 5. Quick Self-Check

1.  Explain why the Put-Call Ratio (`PCR`) is considered a **contrarian indicator**.
2.  What is the primary difference in interpretation between a **high** OI-based PCR and a **low** OI-based PCR for the Nifty?
3.  Between OI-based PCR and Volume-based PCR, which one is generally considered more reliable for identifying long-term trend reversals?
4.  
