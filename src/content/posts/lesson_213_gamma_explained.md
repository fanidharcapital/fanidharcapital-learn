---
title: "Educational Series #213: Gamma (\Gamma) Explained — Rate of Change of Delta, Acceleration & Expiry Gamma Risk"
description: "Understand Option Gamma—how it measures the rate at which Delta changes as price moves, why Gamma peaks near ATM close to expiry, and how it creates acceleration and whipsaw risk."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lesson #212**, we saw that Delta estimates option price movement for small underlying moves—assuming Delta stays still. In reality, **Delta moves as the underlying moves**, and **Gamma ($\Gamma$)** is the Greek that measures **how fast Delta changes**.

![Educational Series #213: Gamma Explained](/images/lessons/lesson-213.png)

---

## 1. What Gamma Does to Delta

$$\Delta_{\text{new}} \approx \Delta_{\text{old}} + (\Gamma \times \Delta S)$$

*   **Long Options (`+CE` or `+PE`):** Carry **Positive Gamma (`+Γ`)**. When price moves in your favor, your Delta grows in your favor (accelerating gains); if price moves against you, your Delta shrinks (dampening further point loss per move).
*   **Short Options (`-CE` or `-PE`):** Carry **Negative Gamma (`-Γ`)**. When price moves sharply against your short strike, your position builds **adverse Delta faster and faster**—turning a manageable position into a fast-growing directional headache if unhedged.

---

## 2. Where Gamma Is Highest: `ATM` Near Expiry

Gamma is **not** uniform across all strikes or dates:
1.  **Highest Near `ATM`:** Deep `ITM` (Delta near `±1`) and far `OTM` (Delta near `0`) have little room left for Delta to shift, so their Gamma is relatively low. **`ATM` strikes** sit right at the inflection zone where small price moves rapidly flip options between `OTM` and `ITM`—giving them the **highest Gamma**.
2.  **Surges as Expiry Approaches:** With plenty of days to expiry, Delta shifts gradually over time. In the final days (`0–2 DTE`), **`ATM` Gamma spikes sharply**, driving big percentage swings in option premiums and rapid Delta flips.

---

## 3. Key Takeaways

*   **Gamma ($\Gamma$)** measures how quickly **Delta** changes per unit move in the underlying.
*   **Long options** have **positive Gamma**; **short options** have **negative Gamma** (requiring disciplined risk/stop rules when price trends hard).
*   `ATM` Gamma is highest and **accelerates near expiry**, creating both explosive swings and sharp whipsaws.

---

## 4. Quick Self-Check

1.  If a Call option has **Delta `+0.50`** and **Gamma `+0.04`**, roughly what is the new Delta if the underlying rises by **`5` points**?
2.  Why do **short option sellers** face heightened **negative Gamma** danger on fast, trending moves?
3.  Why is Gamma typically much lower on a deep `ITM` option than on an `ATM` option?
4.  
