---
title: "Educational Series #250: Dynamic Position Sizing — Fixed Fractional (1R), Volatility-Adjusted (ATR) & Anti-Martingale Scaling"
description: "Master dynamic position sizing—compute share and F&O lot quantities using Fixed Fractional (1R) and ATR volatility stops, and scale smoothly with Anti-Martingale rules."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 09
  - Risk & Psychology
---

In **Lesson #249**, we saw why keeping per-trade risk (`1R`) small prevents catastrophic drawdowns. In **Lesson #250**, we translate that `1R` rupee budget into exact share or F&O lot quantities using **Dynamic Position Sizing**—adapting to stop distance, market volatility (`ATR`), and account equity changes.

![Educational Series #250: Dynamic Position Sizing](/images/lessons/lesson-250.png)

---

## 1. Fixed Fractional (`1R`) & Volatility-Adjusted (`ATR`) Sizing

Instead of buying a fixed arbitrary number of shares or lots on every trade, calculate quantity from your **`1R` risk budget** and your **invalidation stop distance**:

$$\text{Quantity (Shares)} = \left\lfloor \frac{\text{Account Equity} \times \text{Risk \%}}{\text{Entry Price} - \text{Stop-Loss Price}} \right\rfloor$$

*   **Volatility-Adjusted (`ATR`) Sizing:** When you set stop distance using a multiple of **Average True Range** (for example, `1.5 × ATR`), position size adjusts automatically to market volatility:
    *   In a **high-volatility / wide-`ATR`** stock, stop distance is wider $\rightarrow$ you buy **fewer shares/lots** so rupee risk stays fixed at `1R`.
    *   In a **calm / tighter-`ATR`** stock, stop distance is narrower $\rightarrow$ you buy **proportionally more shares/lots** for the exact same `1R` risk.

---

## 2. Anti-Martingale Scaling (Never Double Down on Losses)

*   **Martingale Trap (Dangerous):** Doubling position size after a loss to "recover faster"—a fast path to ruin during a losing streak.
*   **Anti-Martingale Scaling (Disciplined):** Because `1R` is a fixed percentage of **current account equity**, your position size **scales up gradually** as your account grows and **automatically shrinks** during drawdowns—protecting capital when cold and compounding when hot.

---

## 3. Key Takeaways

*   **Fixed Fractional + `ATR` sizing** keeps your rupee risk constant across calm and volatile instruments alike.
*   Use **Anti-Martingale scaling** (sizing off current equity) and **never double down** on losing positions.

---

## 4. Quick Self-Check

1.  With `₹8,00,000` capital and a **`1%` (`₹8,000`) `1R` budget**, how many shares should you buy if your entry is `₹1,250` and your `ATR`-based stop-loss is `₹1,210`?
2.  Why does an `ATR`-based sizing model automatically reduce your share count when a stock's daily volatility doubles?
3.  What is the core difference between **Martingale** and **Anti-Martingale** position sizing?
