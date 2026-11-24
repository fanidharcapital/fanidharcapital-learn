---
title: "Educational Series #190: Intrinsic Value vs. Extrinsic (Time) Value — Breaking Down What Makes Up Option Premium"
description: "Learn how every option premium splits into Intrinsic Value and Extrinsic (Time) Value, how to calculate both for Calls and Puts, and what happens to extrinsic value at expiry."
pubDatetime: 2026-11-24T19:15:00+05:30
tags:
  - Module 07
  - Options Market
---

In **Lesson #189**, we classified options into `ITM`, `ATM`, and `OTM`. In **Lesson #190**, we dissect **what you actually pay or collect when trading an option**: **Option Premium**, which always breaks down into two exact components—**Intrinsic Value** and **Extrinsic (Time) Value**.

![Educational Series #190: Intrinsic Value vs. Extrinsic (Time) Value](/images/lessons/lesson-190.png)

---

## 1. The Core Option Premium Equation

$$\text{Option Premium} = \text{Intrinsic Value} + \text{Extrinsic (Time) Value}$$

1.  **Intrinsic Value:** The real, tangible in-the-money value built into the option right now (always **`₹0` or positive**—never negative):
    *   **Call (`CE`) Intrinsic Value:** $\max(0,\; \text{Spot Price} - \text{Strike Price})$
    *   **Put (`PE`) Intrinsic Value:** $\max(0,\; \text{Strike Price} - \text{Spot Price})$
    *   *Key Rule:* Every **`ATM` and `OTM` option has `₹0` intrinsic value**—100% of its premium is extrinsic value.
2.  **Extrinsic Value (Time Value):** Everything in the option premium *above* intrinsic value:
    $$\text{Extrinsic Value} = \text{Option Premium} - \text{Intrinsic Value}$$
    *   Extrinsic value represents the market's price for **uncertainty and opportunity** before expiry—driven primarily by **time remaining to expiry**, **implied volatility**, and interest/dividend carry.

---

## 2. Worked Numerical Breakdown (Spot = `24,500`)

| Contract | Moneyness | Market Premium | Intrinsic Value | Extrinsic (Time) Value |
| :--- | :--- | :--- | :--- | :--- |
| **`24,300 CE`** | `ITM` (`200` pts in) | `₹265` | `24,500 - 24,300 = ₹200` | `265 - 200 = ₹65` |
| **`24,500 CE`** | `ATM` | `₹135` | `₹0` | `135 - 0 = ₹135` (Peak time value!) |
| **`24,700 CE`** | `OTM` (`200` pts out) | `₹55` | `₹0` | `55 - 0 = ₹55` |
| **`24,700 PE`** | `ITM` (`200` pts in) | `₹260` | `24,700 - 24,500 = ₹200` | `260 - 200 = ₹60` |

---

## 3. What Happens to Extrinsic Value by Expiry?

*   Notice in the table above that **`ATM` strikes carry the highest extrinsic (time) value** because they sit right on the razor's edge of finishing `ITM` or `OTM`.
*   By **`3:30 PM IST` on expiry day**, remaining time drops to zero, so **extrinsic value collapses to `₹0` across every strike**. At settlement, only **intrinsic value** survives.

---

## 4. Key Takeaways

*   **Option Premium = Intrinsic Value + Extrinsic Value**.
*   Only **`ITM` options** have intrinsic value; **`ATM` and `OTM` options** consist **100% of extrinsic value**.
*   All **extrinsic value decays to `₹0`** by expiry settlement.

---

## 5. Quick Self-Check

1.  Suppose a stock's spot price is **`₹800`**, and the **`₹780 CE`** is trading at **`₹34`**. Split the `₹34` premium into **Intrinsic Value** and **Extrinsic Value**.
2.  Using the same **`₹800`** spot price, the **`₹820 CE`** is trading at **`₹12`**. How much of that `₹12` is intrinsic value, and how much is extrinsic value?
3.  Which moneyness category (`Deep ITM`, `ATM`, or `Far OTM`) typically carries the **largest absolute amount of extrinsic value**?
4.  
