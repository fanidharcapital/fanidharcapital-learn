---
title: "Educational Series #239: Common Multi-Leg Strategy Mistakes — Legging Risk, Wide Spreads, Unhedged Tails & Over-Adjusting"
description: "Identify and eliminate the five most costly multi-leg option trading mistakes—legging in, trading illiquid wide spreads, leaving unhedged tails, oversizing on low margin, and expiry-pinning neglect."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lesson #238**, we walked through well-structured case studies. In **Lesson #239**, we look at the flip side—the **most common multi-leg option mistakes** that turn promising setups into avoidable losses, and how to prevent every single one.

![Educational Series #239: Common Multi-Leg Strategy Mistakes](/images/lessons/lesson-239.png)

---

## 1. Five Costly Multi-Leg Mistakes & Their Fixes

| Mistake | Why It Hurts | Clean Fix |
| :--- | :--- | :--- |
| **1. Legging In / Out One Leg at a Time** | Exposes you to naked directional spikes and temporary margin spikes if the long wing is closed first. | Use **simultaneous spread/basket orders** with limit prices; never close the long wing before the short leg. |
| **2. Trading Illiquid Strikes With Wide Bid-Ask Spreads** | Losing `₹3–₹5` per leg on entry and exit across 4 legs destroys your expected value before price even moves. | Trade **high-volume `ATM`/near-`OTM` strikes** with tight bid-ask spreads. |
| **3. Leaving Unhedged Tails (Naked Strangles / Ratio Spreads)** | One overnight gap or black-swan surge can erase months of small credit gains. | Cap tail risk with **protective outer wings** (`Iron Condor` / `Vertical Spread`) or strict hard stops. |
| **4. Oversizing Because Spread Margin Looks Low** | Low hedge margin tricks traders into taking 5x–10x lots, turning one max-loss event into a huge account hit. | Calculate lot count strictly from **Defined Max Loss $\le 1R$**. |
| **5. Over-Adjusting & Expiry-Day Pinning Neglect** | Chasing every tick adds slippage/costs; holding short strikes into final-hour expiry invites wild **Gamma** and **physical settlement** obligations on stock options. | Follow pre-set exit rules and square off stock/near-ATM spreads well before expiry close. |

---

## 2. Key Takeaways

*   Most multi-leg losses come from **preventable process errors**—sloppy execution, illiquid strikes, unhedged tails, oversized lots, or reactive over-adjusting.
*   Consistent execution discipline is just as vital as picking the right strategy.

---

## 3. Quick Self-Check

1.  Why is trading a 4-leg Iron Condor on **illiquid far-`OTM` stock options** with wide bid-ask spreads a hidden trap?
2.  What happens if you hold a short or near-`ITM` **stock option spread** right into expiry afternoon on NSE/BSE without checking physical settlement rules?
3.  Which single rule prevents traders from abusing the **low margin benefit** of credit spreads?
