---
title: "Educational Series #237: Position Sizing for Multi-Leg Strategies — Sizing by Defined Max Loss / 1R & Portfolio Margin Limits"
description: "Learn how to size multi-leg option strategies properly—calculating lot count from defined worst-case max loss (1R) rather than low margin requirements, and capping correlated portfolio risk."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lesson #236**, we saw how protective wings dramatically reduce margin requirements on NSE/BSE. In **Lesson #237**, we address the most common trap created by that low margin: **oversizing lots**—showing how to size every multi-leg trade strictly by **defined max loss (`1R`)** and **portfolio margin caps**.

![Educational Series #237: Position Sizing for Multi-Leg Strategies](/images/lessons/lesson-237.png)

---

## 1. Size by Defined Max Loss (`1R`), Never by Margin Alone

Because a vertical spread or Iron Condor requires far less margin than a naked option, beginners often deploy 5x–10x too many lots. Instead, calculate lot count directly from your **`1R` risk budget**:

$$\text{Number of Lots} = \left\lfloor \frac{\text{Account Risk per Trade } (1R)}{\text{Worst-Case Max Loss per Unit} \times \text{Lot Size}} \right\rfloor$$

*   *Illustrative Example:* Suppose your trading capital is `₹5,00,000` and your **`1R` risk limit is `1.5%` (`₹7,500`)**. You trade a Bull Put Spread (`Lot Size = 50`) with a `200`-point width and `₹50` net credit $\rightarrow$ **Max Loss per unit = `₹150`**, or **`₹7,500` per lot** (`150 × 50`). Even if exchange margin is only `₹25,000` per lot (allowing you to afford 15+ lots), your **`1R` rule restricts you to `1 lot`**.

---

## 2. Respecting Credit-Spread Asymmetry & Portfolio Correlation

*   **The Credit-Spread Asymmetry Trap:** On a credit spread collecting `₹40` against a `₹160` max loss (`1:4` reward-to-risk), **one full loss erases four wins**. Sizing by `1R` ensures a single gap move never causes catastrophic drawdown.
*   **Portfolio Margin & Correlation Caps:** Keep an overall ceiling on total deployed option margin (for example, `30%–50%` of capital) and treat simultaneous spreads on **Nifty, Bank Nifty, and FinNifty** as **correlated exposure**—because a broad market gap hits all three at the same time.

---

## 3. Key Takeaways

*   Always compute lot size from **worst-case defined max loss (`1R`)**, never from how many lots your broker margin allows.
*   Account for **credit-spread payoff asymmetry** and cap **correlated index/sector exposure** across your portfolio.

---

## 4. Quick Self-Check

1.  If your **`1R` risk budget is `₹10,000`** and an Iron Condor (`Lot Size = 50`) has a **defined max loss of `₹100` per unit** (`₹5,000` per lot), how many lots should you trade?
2.  Why is sizing a credit spread based purely on **available broker margin** dangerous?
3.  If you hold Bull Put Spreads simultaneously on **Nifty** and **Bank Nifty**, why must you treat them as **correlated portfolio risk**?
