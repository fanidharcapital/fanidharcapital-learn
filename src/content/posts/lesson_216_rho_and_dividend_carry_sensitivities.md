---
title: "Educational Series #216: Rho (\rho) & Dividend/Carry Sensitivities — Interest Rate & Cost-of-Carry Effects in Indian Options"
description: "Understand Rho and cost-of-carry/dividend effects in option pricing—how interest rates and expected dividends affect Call vs. Put values and why carry matters more on longer-dated options."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lesson #215**, we covered Vega and Implied Volatility sensitivity. In **Lesson #216**, we complete our tour of the five standard Greeks by examining **Rho ($\rho$)**—sensitivity to **interest rates**—alongside **cost-of-carry and expected dividend** effects in Indian options.

![Educational Series #216: Rho & Dividend/Carry Sensitivities](/images/lessons/lesson-216.png)

---

## 1. What Rho ($\rho$) Measures: Call vs. Put Direction

**Rho ($\rho$)** measures how much an option's theoretical price changes for a **`1%` (`100 bps`) change in interest rates**, holding other inputs constant:

*   **Call Options (`+CE`):** Generally have **positive Rho (`+ρ`)**. Higher interest rates increase cost of carry / forward value relative to cash holding, tending to lift Call values slightly.
*   **Put Options (`+PE`):** Generally have **negative Rho (`-ρ`)**. Higher interest rates tend to slightly reduce Put values.
*   **Short Options (`-CE` / `-PE`):** Reverse the sign of Rho relative to long options.

---

## 2. Cost of Carry, Dividends & Practical Weight on NSE/BSE

In Indian derivatives, option pricing connects closely to **cost of carry** (interest rates minus expected dividend yield—which you saw in futures pricing in Module 06):

*   **Expected Dividends:** When an underlying stock goes ex-dividend, its spot price typically adjusts downward by roughly the dividend amount—which tends to **pressure Call values** and **support Put values** if not already priced in.
*   **Why Rho Is Secondary for Most Short-Term Traders:** For short-dated weekly or near-month index/stock option trades, **Delta, Gamma, Theta, and Vega** move far more than Rho. Rho and carry become more noticeable on **longer-dated expiries** or when comparing forward/synthetic pricing across expiries.

---

## 3. Key Takeaways

*   **Rho ($\rho$)** measures option price sensitivity to **interest rate shifts** (`+ρ` for long calls, `-ρ` for long puts).
*   Interest rates and **expected dividends** shape cost-of-carry/forward pricing, though **Delta, Gamma, Theta, and Vega** dominate day-to-day short-term option trading.

---

## 4. Quick Self-Check

1.  In general, does a **Long Call** have **positive or negative Rho**, and why is Rho usually less impactful than **Theta** or **Vega** on a short-term weekly trade?
2.  How does an upcoming **expected dividend** on a stock typically affect Call vs. Put pricing?
3.  When do interest-rate and cost-of-carry effects become more noticeable in option pricing?
4.  
