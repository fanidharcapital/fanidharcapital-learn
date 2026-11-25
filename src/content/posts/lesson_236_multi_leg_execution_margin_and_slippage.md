---
title: "Educational Series #236: Multi-Leg Execution, Margin & Slippage — Placing Spreads Cleanly, Margin Benefits & Legging Risk"
description: "Master multi-leg order execution on NSE/BSE—eliminating legging risk with basket/spread orders, capturing SPAN + Exposure hedge margin benefits, and minimizing bid-ask slippage."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lesson #235**, we covered structured adjustments and rolling. In **Lesson #236**, we focus on the mechanics of **multi-leg execution**—how placing all legs cleanly protects you from **legging risk**, unlocks **hedge margin benefits**, and reduces **bid-ask slippage**.

![Educational Series #236: Multi-Leg Execution, Margin & Slippage](/images/lessons/lesson-236.png)

---

## 1. Eliminating Legging Risk & Capturing Margin Benefits

*   **What Is Legging Risk?** Entering or exiting a multi-leg strategy one leg at a time—for instance, selling a Call first and waiting a few minutes to buy the protective higher Call—leaves you temporarily **naked** during fast market ticks, turning a defined-risk spread into an unhedged gamble.
*   **Use Spread / Basket Orders Simultaneously:** Place multi-leg spreads together via your broker's **spread order** or **basket execution** tool so all legs fill simultaneously at a defined net debit or net credit.
*   **SPAN + Exposure Hedge Margin Benefit:** On NSE/BSE, holding the **long protective wing** alongside a short option dramatically lowers required margin compared to naked short options. Always execute or square off the **short leg before or simultaneously with the long wing** on exit—closing the long wing first temporarily spikes your margin requirement and can trigger peak-margin penalties!

---

## 2. Controlling Bid-Ask Slippage

*   **Stick to Liquid Strikes:** Trade active index/stock strikes (`ATM` and nearby `OTM` strikes with tight bid-ask spreads and strong depth) rather than illiquid far-`OTM` strikes where a `₹2–₹5` spread on each of 4 legs quietly costs thousands per lot.
*   **Use Limit Orders, Never Market Orders:** Always enter and exit multi-leg spreads with **limit prices** near the mid-price, especially during volatile opens or expiry afternoons.

---

## 3. Key Takeaways

*   Execute multi-leg strategies **simultaneously** via spread/basket orders using **limit prices** to prevent legging risk and bid-ask slippage.
*   On exit, never close the **long protective wing** before the **short leg**, or your hedge margin benefit disappears immediately.

---

## 4. Quick Self-Check

1.  What is **legging risk**, and how can a sudden 30-point index move punish a trader who enters a credit spread one leg at a time?
2.  Why should you **never close the long protective option first** when exiting a credit spread or Iron Condor on NSE/BSE?
3.  How do **wide bid-ask spreads** on illiquid strikes impact a 4-leg strategy like an Iron Condor?
