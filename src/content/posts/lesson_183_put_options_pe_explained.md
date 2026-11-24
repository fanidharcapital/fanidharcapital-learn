---
title: "Educational Series #183: Put Options (PE) Explained — Buying Puts vs. Selling (Writing) Puts on NSE/BSE"
description: "Understand how Put Options (PE) work on NSE and BSE—comparing Put Buyers (bearish/protective right to sell) and Put Sellers/Writers (bullish/neutral obligation) with rupee examples."
pubDatetime: 2026-11-24T17:30:00+05:30
tags:
  - Module 07
  - Options Market
---

In **Lesson #182**, we covered Call Options (`CE`). In **Lesson #183**, we examine **Put Options (`PE` — Put European)**—the mirror-image contract that gains value when the underlying falls, comparing **Put Buyers** and **Put Sellers (Writers)** on NSE and BSE.

![Educational Series #183: Put Options (PE) Explained](/images/lessons/lesson-183.png)

---

## 1. What Does a Put Option (`PE`) Represent?

A **Put Option** gives the buyer the **right, without obligation, to sell** the underlying asset at the specified **Strike Price** at expiry:

*   **Put Buyer (`Long PE`):** Wants the underlying price to drop **well below** `Strike Price - Premium Paid`.
    *   *Maximum Loss:* Limited to the **premium paid**.
    *   *Maximum Profit:* Increases as the underlying falls toward zero (`Strike Price - Premium Paid`).
*   **Put Seller / Writer (`Short PE`):** Collects the upfront premium and wants the underlying price to stay **at or above the Strike Price** through expiry.
    *   *Maximum Profit:* Capped at the **premium collected**.
    *   *Maximum Loss:* Substantial if the underlying drops sharply below the strike (`Strike Price - Spot - Premium`, bounded only by the underlying falling to zero).

---

## 2. Numerical Example (Put Buyer vs. Put Seller)

Suppose a stock is trading at **`₹1,500`**, and the **`₹1,480 PE`** trades at a premium of **`₹35`** (lot size `500`, total premium = `₹17,500`):

*   **Scenario A — Stock Expires at `₹1,520` (Above `₹1,480` Strike):**
    *   The right to sell at `₹1,480` when the market is at `₹1,520` has **zero value** (`₹0`).
    *   **Put Buyer:** Loses the **`₹35` premium (`-₹17,500`)**.
    *   **Put Seller:** Keeps the entire **`₹35` premium (`+₹17,500`)**.
*   **Scenario B — Stock Expires at `₹1,400` (Below `₹1,480` Strike):**
    *   The `₹1,480 PE` settles at `₹1,480 - ₹1,400 = ₹80`.
    *   **Put Buyer:** Net profit = `₹80 - ₹35 = +₹45` per share (**`+₹22,500`** per lot, before charges).
    *   **Put Seller:** Net loss = `₹35 - ₹80 = -₹45` per share (**`-₹22,500`** per lot, before charges).

---

## 3. Dual Role of Put Options: Speculation & Insurance

1.  **Directional Bearish Play:** Buying a Put (`Long PE`) expresses a bearish view without taking on uncapped short-futures risk.
2.  **Portfolio / Stock Insurance (Protective Put):** Investors holding shares or index exposure can buy Puts as downside insurance—capping worst-case drop below the strike price for the cost of the premium.

---

## 4. Key Takeaways

*   A **Put Option (`PE`)** gains intrinsic value when the underlying falls **below the strike price**.
*   **Put Buyers** profit from sharp downward moves with capped premium risk; **Put Sellers** profit if price holds above support/strike, taking on downside assignment/settlement risk.

---

## 5. Quick Self-Check

1.  If you buy a `24,400 PE` at a premium of `₹90`, at what expiry level does the Put Option have **zero** intrinsic value?
2.  In that same `24,400 PE` (`₹90` premium), what is the **Put Buyer's** net profit or loss per unit if the index settles at `24,250`?
3.  Why do long-term equity investors sometimes buy Put Options even when they hope their shares go *up*?
4.  
