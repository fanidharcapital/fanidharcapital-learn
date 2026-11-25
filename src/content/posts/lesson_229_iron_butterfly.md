---
title: "Educational Series #229: Iron Butterfly — Tighter Range-Bound Credit Structure, Max Profit Zone & Wing Protection"
description: "Learn how an Iron Butterfly works—selling both an ATM Call and ATM Put with protective OTM wings to collect higher upfront credit in a tight range-bound market."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lesson #228**, we examined the **Iron Condor**, which places short strikes `OTM` for a wide profit zone. In **Lesson #229**, we bring both short strikes together right at the money (`ATM`) to form the **Iron Butterfly**—collecting **more upfront credit** in exchange for a **tighter profit zone**.

![Educational Series #229: Iron Butterfly](/images/lessons/lesson-229.png)

---

## 1. Construction: Short Straddle Body + Protective Wings

Using the **same underlying and same expiry** ($K_{\text{low}} < K_{\text{ATM}} < K_{\text{high}}$):

1.  **Sell `1 ATM` Put (`-PE` at $K_{\text{ATM}}$) + Sell `1 ATM` Call (`-CE` at $K_{\text{ATM}}$):** Collects maximum extrinsic premium right at spot.
2.  **Buy `1 OTM` Put (`+PE` at $K_{\text{low}}$) + Buy `1 OTM` Call (`+CE` at $K_{\text{high}}$):** Caps downside and upside tail risk at a fixed wing width $W$.

---

## 2. Payoff Math (Symmetric Wing Width $W = K_{\text{ATM}} - K_{\text{low}} = K_{\text{high}} - K_{\text{ATM}}$)

| Metric | Formula (Per Unit) | Expiry Condition |
| :--- | :--- | :--- |
| **Max Profit** | $\text{Total Net Credit}$ | Peak profit occurs **exactly at $K_{\text{ATM}}$** at expiry. |
| **Max Loss** | $\text{Wing Width } (W) - \text{Total Net Credit}$ | Occurs if spot closes **$\le K_{\text{low}}$ or $\ge K_{\text{high}}$**. |
| **Breakevens** | $K_{\text{ATM}} - \text{Total Net Credit}$ and $K_{\text{ATM}} + \text{Total Net Credit}$ | Tighter breakeven band than an Iron Condor. |

*   *Illustrative Example (1 lot = 50):* Nifty at `24,500` $\rightarrow$ Sell `24,500 CE` + Sell `24,500 PE` (credit `₹240`), Buy `24,800 CE` + Buy `24,200 PE` (debit `₹90`) $\rightarrow$ **Total Net Credit = `₹150`** (`₹7,500` max profit), **Wing Width = `300`**, **Max Loss = `₹150`** (`₹7,500` max loss), **Breakevens = `24,350` and `24,650`**.

---

## 3. Iron Butterfly vs. Iron Condor Trade-Off

*   **Higher Upfront Credit & Better Reward-to-Risk Ratio:** Because `ATM` options carry the highest extrinsic value, an Iron Butterfly collects substantially more credit than an Iron Condor of the same wing width, shrinking max loss.
*   **Narrower Profit Band & Faster Pin Sensitivity:** Spot has less room to roam before breaching breakevens, making the Iron Butterfly best suited for **pinning / tight consolidation** or **high-`IV` mean-reversion** setups.

---

## 4. Key Takeaways

*   An **Iron Butterfly** combines a **Short Straddle** at $K_{\text{ATM}}$ with protective `OTM` wings, generating higher credit and defined tail risk.
*   Compared to an Iron Condor, it offers **higher max credit and tighter max loss**, but requires price to stay inside a **narrower range**.

---

## 5. Quick Self-Check

1.  If you build a `24,500` **Iron Butterfly** with **`250`-point wings** and collect a **total net credit of `₹140`**, what are your **max profit**, **max loss**, and **upper/lower breakevens**?
2.  Why does an Iron Butterfly collect more upfront credit than an Iron Condor with the same wing width?
3.  Under what market behavior does an Iron Condor tend to feel more forgiving than an Iron Butterfly?
