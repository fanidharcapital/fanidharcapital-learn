---
title: "Educational Series #214: Theta (Θ) Explained — Daily Time Decay Curves, Decay Acceleration & Seller vs. Buyer Impact"
description: "Master Option Theta—how daily time decay erodes extrinsic value, why Theta accelerates near expiry for ATM options, and how positive vs. negative Theta shapes buyer and seller P&L."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lesson #213**, we examined Gamma acceleration as spot moves. In **Lesson #214**, we formalize the time-decay force introduced intuitively in Lesson #192: **Theta ($\Theta$)**—the rate at which an option's value changes as **one day passes**, holding spot price and implied volatility constant.

![Educational Series #214: Theta Explained](/images/lessons/lesson-214.png)

---

## 1. Positive Theta vs. Negative Theta

*   **Long Options (`+CE` / `+PE`):** Have **Negative Theta (`-Θ`)**. Every passing day removes a slice of extrinsic time value—a headwind the option buyer must overcome with favorable price movement or rising volatility.
*   **Short Options (`-CE` / `-PE`):** Have **Positive Theta (`+Θ`)**. As extrinsic value decays toward `₹0` by expiry, time decay works in the seller's favor—provided price stays contained and `IV` doesn't surge against the position.

---

## 2. How Theta Behaves Across Strikes and Time

1.  **Peak on `ATM` Options:** Because `ATM` options hold the largest extrinsic value and sit at maximum uncertainty, their daily decay is steepest.
2.  **Non-Linear Acceleration Near Expiry:** Theta is not a flat daily dollar amount from day one—for `ATM` contracts, decay **steepens in the final days before expiry**, while **intrinsic value** remains untouched by Theta.
3.  **Watch the Trade-Off With Gamma:** In option structures (and across buyer vs. seller roles), **high positive Theta** often comes paired with **negative Gamma**—meaning you collect steady time decay in calm/range markets, but must guard against sharp moves.

---

## 3. Key Takeaways

*   **Theta ($\Theta$)** measures daily extrinsic value erosion as time ticks toward expiry (assuming constant spot and `IV`).
*   **Option buyers** face **negative Theta**; **option sellers** generally benefit from **positive Theta**, which accelerates on `ATM` options near expiry.

---

## 4. Quick Self-Check

1.  Why does a **Long Call** experience **negative Theta** even if the underlying index doesn't drop?
2.  Does **Theta** erode the **intrinsic value** of an `ITM` option, or only its **extrinsic value**?
3.  Why does daily decay on an `ATM` option typically accelerate in the final days before expiry?
4.  
