---
title: "Educational Series #203: Costs & Taxes in Options Trading — Brokerage, STT on Premium vs. Exercise, Exchange Fees, Stamp Duty & GST"
description: "Master the comprehensive list of costs and taxes affecting options traders in India. Learn how brokerage, STT (on premium vs. exercise), SEBI fees, Stamp Duty, and GST impact your bottom line."
pubDatetime: 2026-11-24T10:21:00+05:30
tags:
  - Module 07
  - Options Market
---

In **Lesson #203**, we conclude **Part 3** by addressing a topic few beginners calculate accurately but professionals obsess over: **Costs & Taxes in Options Trading**. In India, the difference between a profitable trading system and a losing one is often determined by the friction of transaction costs and taxes. This lesson serves as your definitive breakdown of these essential charges on NSE and BSE.

![Educational Series #203: Costs & Taxes in Options Trading](/images/lessons/lesson-203.png)

---

## 1. The Cost Components Breakdown

Every single options trade you execute incurs the following charges. These are deducted automatically by your broker.

| Cost Head | Rate / Basis | Applicability & Notes |
| :--- | :--- | :--- |
| **Brokerage** | Varies (e.g., Flat ₹20/trade or % of turnover) | Check your specific broker plan. The most variable cost. |
| **Securities Transaction Tax (STT)** | **`0.1%` of Sell Value** (on Option Premium) | **HIGH IMPACT.** Charged only on the **sell side** of any option trade. *(Note: STT on Exercised ITM options is calculated differently—see below).* |
| **Exchange Transaction Charges** | **`~0.035%` of Turnover** (NSE/BSE) | Charged on both Buy and Sell sides. (Turnover = `Premium × Lot Size`). |
| **GST (Goods & Services Tax)** | **`18%` of (Brokerage + Exchange Charges)** | A tax levied on the services provided by the broker and exchange. |
| **SEBI Turnover Fees** | **`₹10 per Crore` of Turnover** (`0.00001%`) | A minor regulatory fee charged on both sides. |
| **Stamp Duty** | **`0.003%` (Buy) / `0.015%` (Sell)** | State-level tax on legal documents (varies slightly by state). |

---

## 2. The Critical STT Trap: Premium vs. Exercise

STT is the single largest tax cost for options traders, and its calculation method changes depending on whether you square off the position or let it expire.

1.  **Squaring Off (Normal Trading):** STT is **`0.1%`** of the **sell premium value**.
2.  **Exercising / Cash Settlement (Expiry Day):** If you hold an ITM option until expiry, it is exercised (index) or physically settled (stock). In this scenario, STT is charged at **`0.125%`** of the **Total Intrinsic Settlement Value**—not the premium!
    *   *The Trap:* If you buy an OTM option for `₹2` and it finishes `ITM` by `₹500` at expiry, holding it to expiry will trigger STT on `₹500`, potentially costing you more than the entire premium you originally paid!
    *   *Lesson:* **Always square off ITM options before expiry** unless you fully intend to take physical delivery.

---

## 3. Impact on Your Break-Even

Transaction costs and taxes add a significant buffer to your break-even point, especially in high-volume, low-premium trading.

*   *Example:* Buying and selling 1 lot of Nifty (Lot Size 75) at a premium of `₹100`.
    *   Total Turnover (Buy + Sell) = `150 × 75 = ₹11,250`.
    *   Exchange + SEBI + Stamp Duty = `~₹4.50`.
    *   GST (`18%` of brokerage + exchange) = `~₹4.00`.
    *   STT (Sell side only) = `0.1% of 7500 = ₹7.50`.
    *   Brokerage (Flat ₹20 + ₹20) = `₹40.00`.
    *   **Total Cost = `₹56.00`** (approximately).
    *   To cover costs, your trade must move the equivalent of **`~₹0.75`** per Nifty point (`56 / 75`) just to break even!

---

## 4. Key Takeaways

*   Options trading involves multiple costs: **Brokerage, STT, Exchange Fees, SEBI Fees, Stamp Duty, and GST**.
*   **STT (`0.1%` on sell premium)** is the largest tax component.
*   Holding `ITM` options to expiry triggers a punitive **STT (`0.125%` of intrinsic value)**.
*   Always calculate transaction costs into your **true break-even point** before entering a trade.

---

## 5. Quick Self-Check

1.  Explain the difference in **Securities Transaction Tax (`STT`)** calculation between squaring off a position before expiry and holding an In-The-Money (`ITM`) option until expiry.
2.  Why is it often considered financially disastrous to hold a deeply In-The-Money option contract until expiry if you only intended to trade the premium?
3.  Name the six specific cost components that constitute the total transaction charges deducted from an options trader's account in India.
4.  
