---
title: "Educational Series #186: Breakeven Points & Net P&L Math — Computing Strike, Premium & Lot-Size Outcomes"
description: "Master exact breakeven formulas and net rupee P&L calculations at expiry for Long/Short Calls and Long/Short Puts across NSE and BSE lot sizes."
pubDatetime: 2026-11-24T18:15:00+05:30
tags:
  - Module 07
  - Options Market
---

In **Lesson #185**, we learned to read expiry hockey-stick payoff graphs. In **Lesson #186**, we lock down the **exact formulas for Breakeven Points and Net Rupee P&L at Expiry**—so you always know the exact underlying price required to break even before entering any Call or Put trade.

![Educational Series #186: Breakeven Points & Net P&L Math](/images/lessons/lesson-186.png)

---

## 1. Breakeven Formulas at Expiry (Before Transaction Charges)

Notice that for the same strike and premium, the **buyer and seller share the exact same breakeven point** (one profits beyond it, the other loses beyond it):

*   **Call Options (`Long CE` & `Short CE`):**
    $$\text{Call Breakeven} = \text{Strike Price} + \text{Premium}$$
*   **Put Options (`Long PE` & `Short PE`):**
    $$\text{Put Breakeven} = \text{Strike Price} - \text{Premium}$$

---

## 2. Expiry Settlement Value & Net Rupee P&L Formulas

At expiry (`Spot_Expiry` = final settlement price):

1.  **Call Intrinsic Settlement Value:** $\max(0,\; \text{Spot}_{\text{Expiry}} - \text{Strike})$
    *   **Long Call Net P&L:** $\big[\max(0,\; \text{Spot}_{\text{Expiry}} - \text{Strike}) - \text{Premium}\big] \times \text{Lot Size}$
    *   **Short Call Net P&L:** $\big[\text{Premium} - \max(0,\; \text{Spot}_{\text{Expiry}} - \text{Strike})\big] \times \text{Lot Size}$
2.  **Put Intrinsic Settlement Value:** $\max(0,\; \text{Strike} - \text{Spot}_{\text{Expiry}})$
    *   **Long Put Net P&L:** $\big[\max(0,\; \text{Strike} - \text{Spot}_{\text{Expiry}}) - \text{Premium}\big] \times \text{Lot Size}$
    *   **Short Put Net P&L:** $\big[\text{Premium} - \max(0,\; \text{Strike} - \text{Spot}_{\text{Expiry}})\big] \times \text{Lot Size}$

---

## 3. Worked Multi-Scenario Example

Suppose you trade **2 lots** (`Lot Size = 50`, total `100` units) of a **`24,500 PE`** at a premium of **`₹140`**:

*   **Breakeven Price:** $24,500 - 140 = \mathbf{24,360}$ (before brokerage/taxes).
*   **If Expiry Settles at `24,600`:**
    *   Settlement value = $\max(0,\; 24,500 - 24,600) = ₹0$.
    *   **Long Put Net P&L:** $(0 - 140) \times 100 = \mathbf{-₹14,000}$.
    *   **Short Put Net P&L:** $(140 - 0) \times 100 = \mathbf{+₹14,000}$.
*   **If Expiry Settles at `24,250`:**
    *   Settlement value = $24,500 - 24,250 = ₹250$.
    *   **Long Put Net P&L:** $(250 - 140) \times 100 = \mathbf{+₹11,000}$.
    *   **Short Put Net P&L:** $(140 - 250) \times 100 = \mathbf{-₹11,000}$.

*(Note: Always add a small buffer for brokerage, STT, exchange fees, stamp duty, and GST when computing your real-world breakeven.)*

---

## 4. Key Takeaways

*   **Call Breakeven** = `Strike + Premium`; **Put Breakeven** = `Strike - Premium`.
*   Always multiply per-unit P&L by **Lot Size × Number of Lots** and include a buffer for **charges and STT**.

---

## 5. Quick Self-Check

1.  You buy 1 lot (`Lot Size = 75`) of a **`25,000 CE`** at **`₹160`**. What is your exact breakeven level (before charges), and what is your rupee P&L if Nifty expires at **`25,220`**?
2.  You sell 1 lot (`Lot Size = 250`) of a **`₹1,200 PE`** at **`₹30`**. What is your breakeven level, and what is your rupee P&L if the stock expires at **`₹1,150`**?
3.  Why is your real net breakeven slightly further away than `Strike ± Premium`?
4.  
