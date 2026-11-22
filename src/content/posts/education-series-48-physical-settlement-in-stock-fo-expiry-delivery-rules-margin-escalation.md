---
title: "Education Series #48: Physical Settlement in Stock F&O — Expiry Delivery Rules & Margin Escalation"
description: "Understand how Indian single-stock Futures and Options settle through mandatory physical delivery at expiry. Learn which F&O positions result in share delivery vs. cash receipt, how staggered physical delivery margins escalate in the last 4 trading days, and how to avoid expiry-week traps."
pubDatetime: 2026-11-22T18:17:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-48.png
tags:
  - exchanges-and-operations
  - module-02
  - physical-settlement
  - stock-fo-expiry
  - delivery-margins
  - derivatives-operations
---

![Physical Settlement in Stock F&O — Expiry Delivery Rules & Margin Escalation](/images/lessons/lesson-48.png)

Welcome to **Lesson 48** of **Module 02: Exchanges & Operations** (**Lessons 31–60**) in the **Shree Fanidhar Capital Education Series**.

In **Lesson 46** and **Lesson 47**, you saw how daily **Mark-to-Market (MTM)** settles F&O profits and losses in cash and how **T+1 share delivery** works in the equity segment. Now, those two worlds collide on **F&O Expiry Day**.

While **Index Derivatives** (NIFTY, BANKNIFTY, SENSEX) settle purely in **cash**, **all Single-Stock Futures and Options on NSE and BSE are mandatorily Physically Settled** at expiry. If you hold an open stock derivative contract past expiry close without squaring it off, you must **deliver or take delivery of actual Demat shares** worth the full contract value!

---

## 1. Cash Settlement vs. Physical Settlement in Indian F&O

| Derivative Segment | Settlement Mode at Expiry | What Happens If Held Past Expiry Close? |
| :--- | :--- | :--- |
| **Index Futures & Options** (NIFTY, BANKNIFTY, FINNIFTY, SENSEX) | **Cash Settled** | Settled purely via cash credit/debit based on the final index closing price—no shares change hands. |
| **Single-Stock Futures & Options** (e.g., RELIANCE, HDFCBANK, INFY, TCS) | **Physically Settled** | Open futures and **In-the-Money (ITM)** stock options convert into mandatory **T+1 Demat share delivery** or **full cash payment for shares**. |

---

## 2. Which Stock F&O Positions Lead to Physical Delivery?

At expiry close (3:30 PM on the monthly expiry day), **NSE Clearing (NCL)** and **ICCL** assign physical delivery obligations based on your exact open position:

| Open Position Held Through Expiry | Physical Obligation Created | What You Must Provide on Expiry / T+1 |
| :--- | :--- | :--- |
| **Long Stock Futures** | **Buy / Receive Shares** | Full contract cash value ($\text{Futures Settlement Price} \times \text{Lot Size}$) to receive Demat shares. |
| **Short Stock Futures** | **Sell / Deliver Shares** | Actual shares in your Demat account ($\text{1 Lot} \times \text{Lot Size}$) for delivery to the Clearing Corporation. |
| **Long In-the-Money (ITM) Call Option** | **Buy / Receive Shares** | Cash equal to $\text{Strike Price} \times \text{Lot Size}$ to buy the shares. |
| **Short In-the-Money (ITM) Call Option** | **Sell / Deliver Shares** | Actual Demat shares ($\text{Lot Size}$) delivered at the **Strike Price**. |
| **Long In-the-Money (ITM) Put Option** | **Sell / Deliver Shares** | Actual Demat shares ($\text{Lot Size}$) delivered at the **Strike Price**. |
| **Short In-the-Money (ITM) Put Option** | **Buy / Receive Shares** | Cash equal to $\text{Strike Price} \times \text{Lot Size}$ to buy the shares. |
| **Out-of-the-Money (OTM) Stock Options** | **Expires Worthless** | Zero obligation—contract expires at ₹0 with no share or cash delivery. |

> **Critical Warning on Close-to-the-Money (CTM) Options:** Even if a stock option expires **₹0.05 In-the-Money** (unless you explicitly submit a **"Do Not Exercise" [DNE]** instruction where permitted by exchange/broker rules for close-to-the-money contracts), automatic exercise triggers **full 1-lot physical delivery**—turning a ₹5,000 option premium trade into a **₹6,00,000–₹10,00,000** share delivery obligation!

---

## 3. Staggered Physical Delivery Margin Escalation (Expiry Week)

Because physical settlement requires **100% of the contract value** in cash or Demat shares—far higher than the normal ~20%–25% F&O SPAN + Exposure margin—exchanges enforce a **staggered margin escalation** during the **last 4 trading days** leading up to expiry (**E-4, E-3, E-2, E-1, and Expiry Day E**):

| Trading Day Before Expiry | Minimum Physical Delivery Margin Collected (On Top of Normal Margin) | Operational Impact on Traders |
| :--- | :--- | :--- |
| **E-4 (4 trading days prior)** | **10%** of Delivery Margin | Total margin requirement begins climbing steadily. |
| **E-3 (3 trading days prior)** | **25%** of Delivery Margin | Requires higher free cash/collateral buffer. |
| **E-2 (2 trading days prior)** | **45%** of Delivery Margin | Unfunded positions trigger margin alerts. |
| **E-1 (1 trading day prior)** | **70%** of Delivery Margin | Brokers restrict fresh leveraged stock F&O entries without full funds/shares. |
| **Expiry Day (E)** | **100%** of Full Contract Value (or Early Pay-In of Demat shares) | **Any position lacking 100% cash or Demat shares is squared off by Broker RMS** before expiry close. |

*(Note: For **Long ITM Options**, exchanges also apply staggered expiry-week delivery margins on E-4 through E so option buyers cannot carry an ITM option into expiry without the cash or shares needed to settle it.)*

---

## 4. Numerical Example: Why Expiry-Day Delivery Risk Catches Traders Off Guard

Suppose **1 Lot of Stock Z = 500 shares**, currently trading at **₹1,600** (Full Contract Value = $500 \times ₹1,600 = \mathbf{₹8,00,000}$):

1. **Normal Mid-Month Trading:** You buy 1 Lot of Stock Z Futures using ~**₹1,75,000** in margin.
2. **Expiry Week (E-4 to E):** As expiry approaches, your required margin escalates step-by-step from **₹1,75,000** all the way up to **₹8,00,000 (100% contract value)** on Expiry Day.
3. **What Happens If You Don't Have ₹8,00,000 Cash?**
   * If you square off your futures position before your broker's expiry-day RMS cut-off (typically ~12:00 PM – 2:30 PM on Expiry Day), you exit cleanly in cash.
   * If you fail to add ₹8,00,000 cash and fail to exit before the cut-off, your broker's RMS will **auto square-off** your position at market price (incurring auto square-off charges and potential slippage).
   * Worse, if you held a **Short Stock Futures** or **Short ITM Call** without owning the 500 Demat shares and could not exit due to an **Upper Circuit**, your failed delivery enters the **Exchange Auction Market** (**Lesson 47**) with heavy penalties!

---

## 5. Practical Rules for Navigating Stock F&O Expiry Safely

1. **Know Your Broker's Expiry-Day Cut-Off Time:** Most brokers square off un-funded stock F&O positions between **12:00 PM and 2:30 PM** on Expiry Day—do not wait until 3:29 PM unless you hold 100% cash or Demat shares.
2. **Watch Illiquid OTM/ITM Stock Options:** Wide bid-ask spreads in the final hour of expiry can make closing a deep or borderline ITM stock option expensive—exit early while order-book depth is healthy.
3. **Covered Call / Cash-Secured Put Advantage:** If you **actually own** the exact lot size of shares in your Demat account (e.g., for a Covered Call) and complete **Early Pay-In (EPI)** of shares, physical settlement delivers your shares smoothly at the strike price with zero auction risk.

---

## Key Takeaways

* **All single-stock Futures and ITM Options settle via mandatory physical delivery on T+1**, whereas Index F&O settles purely in cash.
* **Margins escalate steeply over the final 4 trading days (E-4 to Expiry)** until **100% of the full contract value** (in cash or Demat shares) is required on Expiry Day.
* **Exit stock F&O positions well before Expiry Day cut-off** unless you deliberately intend to take or give physical Demat delivery and hold 100% required cash or shares.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
