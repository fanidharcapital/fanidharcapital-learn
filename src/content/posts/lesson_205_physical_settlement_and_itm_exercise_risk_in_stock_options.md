---
title: "Educational Series #205: Physical Settlement & ITM Exercise Risk in Stock Options — Avoiding Unwanted Share Delivery at Expiry"
description: "Understand how physical settlement works for In-The-Money stock options on NSE, why delivery margins increase in expiry week, and how to square off or roll before cutoff times."
pubDatetime: 2026-11-25T09:30:00+05:30
tags:
  - Module 07
  - Options Market
---

In **Lesson #204**, we covered expiry-day mechanics. In **Lesson #205**, we focus on a crucial operational rule for Indian equity traders: **Physical Settlement and `ITM` Exercise Risk in Stock Options**. Just like single-stock futures (Lesson #171), single-stock options on NSE are **physically settled** at expiry—meaning any `ITM` stock option left open past expiry rules triggers share delivery obligations.

![Educational Series #205: Physical Settlement & ITM Exercise Risk in Stock Options](/images/lessons/lesson-205.png)

---

## 1. How Physical Settlement Works for `ITM` Stock Options at Expiry

When a single-stock option finishes **In-The-Money (`ITM`)** at expiry settlement:

*   **Long Call (`Buy CE`, `ITM`):** You have the right to buy the underlying shares at the **Strike Price**—meaning you must bring **100% of the physical settlement value (`Strike Price × Lot Size`)** in funds to take delivery of the shares.
*   **Short Call (`Sell CE`, `ITM`):** You are obligated to **deliver the underlying shares** (`Lot Size` quantity) at the **Strike Price**. If you do not hold those shares in demat, short-delivery auction/close-out rules and penalties apply.
*   **Long Put (`Buy PE`, `ITM`):** You have the right to **deliver the underlying shares** at the **Strike Price**—meaning you must hold the required demat shares to deliver into settlement.
*   **Short Put (`Sell PE`, `ITM`):** You are obligated to **take delivery and pay 100% of the strike settlement value (`Strike Price × Lot Size`)** for the shares.

---

## 2. Expiry-Week Delivery Margins & Broker Square-Off Cutoffs

To prevent unfunded physical delivery defaults, clearing corporations and brokers enforce strict expiry-week controls on stock options:

1.  **Delivery Margin Phase-In:** Ahead of expiry, additional **delivery margins** scale up on open stock option positions (especially near/ITM strikes).
2.  **Pre-Expiry Broker Square-Off:** If your account does not have sufficient cash/funds (for buying shares) or demat shares/delivery margin (for delivering shares) by the broker's expiry cutoff window, the broker may **square off the position**—sometimes at unfavorable late-session prices.
3.  **Watch STT on Exercise/Delivery:** As highlighted in **Lesson #203**, holding an `ITM` option into expiry settlement/exercise triggers **STT calculated on the settlement/exercise value** rather than just a routine premium trade.

---

## 3. Simple Rule to Avoid Unwanted Share Delivery

*   If you trade stock options for directional or volatility views—not to accumulate or deliver physical shares—**close or roll open stock option positions ahead of expiry-week delivery margin escalations and broker cutoffs**.

---

## 4. Key Takeaways

*   **Stock options on NSE are physically settled** when expiring **`ITM`**, requiring full cash funding or demat shares—unlike cash-settled index options.
*   Brokers phase in **delivery margins** and enforce **pre-expiry square-off cutoffs** when full delivery readiness isn't met.
*   Square off or roll stock options **before expiry-week delivery windows** unless you intentionally plan to settle in shares.

---

## 5. Quick Self-Check

1.  What happens if you hold an **`ITM` Long Call** on a stock option through expiry without having full cash to buy the shares?
2.  What happens if you hold an **`ITM` Short Put** on a stock option through expiry?
3.  How does closing or rolling a stock option **before expiry week** protect you from both physical delivery and late-session forced square-offs?
4.  
