---
title: "Educational Series #192: Time Decay (Theta Intuition) — Why Option Premium Erodes Non-Linearly Into Expiry"
description: "Understand how time decay (Theta) erodes extrinsic value day by day, why decay accelerates non-linearly in the final days before expiry, and how weekends and holidays behave."
pubDatetime: 2026-11-24T19:45:00+05:30
tags:
  - Module 07
  - Options Market
---

In **Lesson #191**, we saw how extrinsic value varies across `Deep ITM`, `ATM`, and `Far OTM` strikes. In **Lesson #192**, we examine **Time Decay (`Theta` intuition)**—the relentless clock working against option buyers and in favor of option sellers as every option marches toward zero extrinsic value at expiry.

![Educational Series #192: Time Decay (Theta Intuition)](/images/lessons/lesson-192.png)

---

## 1. What Is Time Decay?

Every option has a **finite expiration date**. Because extrinsic value pays for the remaining time in which the underlying could move favorably:
*   Each passing trading day reduces remaining time—eroding the option's **extrinsic value** (assuming spot price and volatility stay unchanged).
*   **Intrinsic value never decays**—if a `24,300 CE` has `₹200` of intrinsic value at Spot `24,500`, that `₹200` remains intact as long as Spot stays at `24,500`. Only the **extrinsic portion** decays.

---

## 2. Why Time Decay Is Non-Linear (The Decay Curve)

Time decay does **not** happen in a straight line (`1/30th` per day):

1.  **30 to 15 Days to Expiry:** Extrinsic value erodes **gradually**—the underlying still has plenty of calendar time to make a large move.
2.  **14 to 5 Days to Expiry:** Decay picks up noticeable pace as the window for a big move narrows.
3.  **Final 3 Days Into Expiry (`0–3 DTE`):** For **`ATM` options**, extrinsic decay **accelerates steeply**—dropping faster and faster during the final sessions until extrinsic value hits `₹0` at `3:30 PM IST` on expiry day.
4.  **Far `OTM` Nuance:** Far-OTM options lose most of their small extrinsic value *earlier* in the cycle because the probability of reaching a distant strike collapses well before expiry afternoon.

---

## 3. Practical Implications for Traders

*   **Don't Hold Long `ATM`/`OTM` Options Passively in Sideways Markets:** If a breakout stalls and price goes sideways for two days near expiry, time decay quietly drains your position even without price hitting your chart stop.
*   **Respect Expiry-Week Acceleration:** Option sellers benefit most from rapid final-week decay, while option buyers need **prompt momentum** when trading short-dated weekly expiries.

---

## 4. Key Takeaways

*   **Time decay erodes extrinsic value only**—never intrinsic value.
*   For `ATM` options, time decay is **non-linear**, accelerating sharply in the final days leading into expiry.
*   **Option buyers** need timely movement; **option sellers** harvest time decay as the clock ticks down.

---

## 5. Quick Self-Check

1.  If a `24,300 CE` trades at `₹250` when Spot is `24,500`, how much of that `₹250` is vulnerable to **time decay**, and how much is protected as **intrinsic value** (assuming Spot stays at `24,500`)?
2.  Why does an **`ATM` option** lose extrinsic value much faster in the **last 2–3 days before expiry** than it did 25 days earlier?
3.  What happens to an option buyer's P&L when the underlying stock consolidates sideways for several days near expiry?
4.  
