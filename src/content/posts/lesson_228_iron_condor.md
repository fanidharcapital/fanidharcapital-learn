---
title: "Educational Series #228: Iron Condor — Defined-Risk Range Strategy Combining Bull Put Spread & Bear Call Spread"
description: "Learn how an Iron Condor works—combining an OTM Bull Put Spread and an OTM Bear Call Spread for a net credit, calculating max profit, max loss, and breakevens with capped wing risk."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lesson #227**, we saw that a Short Strangle harvests range-bound Theta decay but leaves tail risk uncapped. In **Lesson #228**, we solve that tail-risk problem with the **Iron Condor**—one of the most popular **defined-risk** range strategies in options trading.

![Educational Series #228: Iron Condor](/images/lessons/lesson-228.png)

---

## 1. Four-Leg Construction (Two Credit Spreads Combined)

An **Iron Condor** combines an `OTM` **Bull Put Spread** below spot and an `OTM` **Bear Call Spread** above spot in the **same expiry** ($K_1 < K_2 < \text{Spot} < K_3 < K_4$):

1.  **Buy Far-`OTM` Put (`+PE` at $K_1$):** Downside protective wing.
2.  **Sell `OTM` Put (`-PE` at $K_2$):** Short downside strike (anchored near support).
3.  **Sell `OTM` Call (`-CE` at $K_3$):** Short upside strike (anchored near resistance).
4.  **Buy Far-`OTM` Call (`+CE` at $K_4$):** Upside protective wing.

---

## 2. Payoff Math (Symmetric Wing Width $W = K_2 - K_1 = K_4 - K_3$)

Let $\text{Total Net Credit} = (P_{K_2} - P_{K_1}) + (P_{K_3} - P_{K_4})$:

| Metric | Formula (Per Unit) | Expiry Condition |
| :--- | :--- | :--- |
| **Max Profit** | $\text{Total Net Credit}$ | Spot closes **between $K_2$ and $K_3$**; all four options expire worthless. |
| **Max Loss** | $\text{Wing Width } (W) - \text{Total Net Credit}$ | Spot closes **$\le K_1$ or $\ge K_4$**; one wing reaches max loss while the other expires worthless. |
| **Lower Breakeven** | $K_2 - \text{Total Net Credit}$ | Downside break-even threshold. |
| **Upper Breakeven** | $K_3 + \text{Total Net Credit}$ | Upside break-even threshold. |

*   *Illustrative Example (1 lot = 50):* Nifty at `24,500` $\rightarrow$ Buy `24,000 PE` / Sell `24,200 PE` (credit `₹35`) + Sell `24,800 CE` / Buy `25,000 CE` (credit `₹35`) $\rightarrow$ **Total Net Credit = `₹70`** (`₹3,500` max profit), **Wing Width = `200`**, **Max Loss = `₹130`** (`₹6,500` per lot), **Breakevens = `24,130` and `24,870`**.

---

## 3. Why Traders Use Iron Condors

*   **Capped Tail Risk & Lower Margin:** The outer wings (`+PE` at $K_1$ and `+CE` at $K_4$) cap worst-case losses on gap moves and reduce margin versus a naked Short Strangle.
*   **Time Decay & `IV` Contraction:** Benefits from **`+Theta`** and **`-Vega`** while price stays inside the channel between support and resistance.

---

## 4. Key Takeaways

*   An **Iron Condor** pairs a **Bull Put Spread** and a **Bear Call Spread** for a **net credit** with **defined risk on both sides**.
*   Max profit occurs if spot finishes between the two inner short strikes, while max loss is capped at `Wing Width − Total Net Credit`.

---

## 5. Quick Self-Check

1.  In an Iron Condor with **`200`-point wings** on each side and a **total net credit of `₹65`**, what are the **max profit** and **max loss** per unit?
2.  Where must the underlying index close at expiry for the Iron Condor to achieve its **maximum profit**?
3.  How do the outer long options ($K_1$ and $K_4$) improve risk management compared to a **Short Strangle**?
