---
title: "Educational Series #160: Cash vs. Non-Cash Collateral & Haircuts — Pledged Shares, Margin Buffers & Avoiding Forced Square-Offs"
description: "Learn how cash versus non-cash collateral (such as pledged shares) works for futures margin, how haircuts reduce collateral value, and why cash rules matter for MTM and shortfalls."
pubDatetime: 2026-11-24T11:30:00+05:30
tags:
  - Module 06
  - Futures Market
---

In **Lesson #159**, we examined SPAN margin, exposure margin, and peak margin snapshots. In **Lesson #160**, we wrap up **Part 2** by looking at **what backs your margin**: **Cash vs. Non-Cash Collateral** and **Haircuts**. Many traders pledge shares or mutual funds for margin and assume every rupee of holding value is available—until a **haircut**, **cash-ratio rule**, or **MTM loss** catches them off guard.

![Educational Series #160: Cash vs. Non-Cash Collateral & Haircuts](/images/lessons/lesson-160.png)

---

## 1. What Is a Haircut on Collateral?

If you pledge eligible securities (such as shares or ETFs) to obtain futures margin, the clearing corporation and broker do not credit 100% of their market price. Instead, they apply a **haircut** (a percentage reduction based on volatility, liquidity, and exchange risk lists):

*   **Collateral Value Formula:** $\text{Usable Collateral Value} = \text{Market Value of Securities} \times (1 - \text{Haircut \%})$.
*   **Example:** If you pledge shares worth `₹5,00,000` with a **`20%` haircut**, the usable collateral value credited is `₹4,00,000` (`₹5,00,000 × 0.80`). If the underlying shares drop in price, collateral value falls further.

---

## 2. Cash vs. Non-Cash Collateral Rules

Exchange and clearing rules distinguish between **cash** (or cash-equivalent collateral) and **non-cash collateral** (such as pledged equity shares):

*   **Cash Requirement Ratio:** Exchanges require a minimum proportion of total margin to be met in **cash/cash-equivalents** rather than 100% non-cash securities. If your account only has pledged shares and zero free cash, you may still face a shortfall or interest/charges on the cash component.
*   **MTM Losses & Shortfalls:** Adverse Mark-to-Market losses and certain fees/charges require adequate cash/margin coverage—relying solely on pledged stocks with no liquid cash buffer leaves little room when markets move fast.

---

## 3. Avoiding Forced Square-Offs & Margin Stress

1.  **Keep Free Cash Alongside Pledged Collateral:** Treat pledged shares as supporting collateral, and keep **unencumbered cash** in your trading ledger to absorb MTM swings and cash-component rules.
2.  **Account for Haircut Changes:** Exchanges periodically update approved securities lists and haircut percentages—especially during volatile periods—so never assume a fixed collateral number permanently.
3.  **Respect Risk-Management Cutoffs:** If margin utilization climbs high during a sharp move against your position, reduce exposure proactively rather than waiting for automated risk square-off at unfavorable prices.

---

## 4. Key Takeaways

*   A **haircut** reduces the usable margin value of pledged non-cash collateral below its market value.
*   Margin rules separate **cash** from **non-cash collateral**, requiring sufficient cash/margin cushion rather than relying only on pledged shares.
*   Maintaining a **cash buffer** and monitoring collateral haircuts helps prevent shortfalls and forced square-offs.

---

## 5. Quick Self-Check

1.  If you pledge shares worth `₹3,00,000` and a `15%` haircut applies, how much usable margin value does that collateral provide?
2.  Why is relying 100% on pledged shares with zero free cash risky when trading futures?
3.  How can a drop in the market price of your pledged shares affect your futures margin position even if the futures contract itself hasn't moved?
4.  
