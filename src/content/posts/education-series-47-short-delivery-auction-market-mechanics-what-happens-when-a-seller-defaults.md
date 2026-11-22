---
title: "Education Series #47: Short Delivery & Auction Market Mechanics — What Happens When a Seller Defaults"
description: "Understand what happens in Indian equity markets when a seller fails to deliver shares on T+1. Learn how NSE Clearing and ICCL run the T+1 Afternoon Auction Market, calculate auction penalties, and protect buyers through Close-Out cash compensation."
pubDatetime: 2026-11-22T18:14:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-47.png
tags:
  - exchanges-and-operations
  - module-02
  - short-delivery
  - auction-market
  - close-out
  - settlement-default
---

![Short Delivery & Auction Market Mechanics — What Happens When a Seller Defaults](/images/lessons/lesson-47.png)

Welcome to **Lesson 47** of **Module 02: Exchanges & Operations** (**Lessons 31–60**) in the **Shree Fanidhar Capital Education Series**.

In **Lesson 41** and **Lesson 42**, you saw how **NSE Clearing (NCL)** and **ICCL** guarantee settlement on **T+1** through **novation**. Even with upfront margins and Demat checks, occasionally a seller fails to deliver shares by the **T+1 morning pay-in deadline**—creating a **Short Delivery**.

When a seller defaults on share delivery, how does the Clearing Corporation make sure the innocent buyer still gets their shares (or fair financial compensation) without breaking the market? Today, we break down **Short Delivery**, the **Exchange Auction Market**, and **Close-Out Mechanics**.

---

## 1. What Causes a Short Delivery?

A **Short Delivery** occurs when a seller sells shares on **Day T** but fails to deliver the full quantity into the Clearing Corporation's settlement pool by **T+1 morning pay-in**. Common causes include:

1. **Failed Intraday Square-Off (Accidental Naked Short):** A trader shorts a stock intraday (`MIS`) expecting to buy it back before 3:15 PM, but the stock hits an **Upper Circuit** (**Lesson 36**). Because there are zero sellers left in the market, the trader is trapped with an open short position at 3:30 PM that automatically converts into a delivery obligation they cannot fulfill.
2. **Missing eDIS / TPIN Authorization:** A client sells delivery shares using **eDIS** (**Lesson 44**) and either forgets to authorize the TPIN/OTP before the cut-off or enters an incorrect quantity.
3. **BTST Counterparty Chain Default:** Trader A buys shares on Monday (T) and sells them on Tuesday morning (T+1) via **BTST** (**Lesson 42**). If the original seller from Monday defaults on T+1 morning, Trader A never receives the shares needed to fulfill Tuesday's sell obligation—triggering a cascading short delivery.
4. **Frozen or Pledged Shares Not Released in Time:** Shares are locked under a pledge or corporate freeze during pay-in processing.

---

## 2. How the Clearing Corporation Resolves Short Delivery (Step-by-Step)

Because the Clearing Corporation is the **Central Counterparty (CCP)**, the buyer is never asked to chase the defaulting seller. Instead, **NCL / ICCL** steps in immediately on **T+1**:

### Step 1: Shortage Detection & Buyer Notification (T+1 Morning)
* After **T+1 morning pay-in** (~10:30 AM – 11:00 AM), the Clearing Corporation identifies the exact undelivered share quantity.
* The innocent buyer receives a **Short Delivery Notice** from their broker confirming that shares were not received in T+1 pay-out and have been sent to the **Exchange Auction**.

### Step 2: The T+1 Afternoon Auction Session (~2:00 PM – 2:45 PM IST)
* On the **afternoon of T+1**, the exchange conducts a special **Auction Market Session** specifically to buy the missing shares from existing shareholders in the market.
* **Who Can Participate?** Institutional investors, brokers, and eligible participants holding free shares in their Demat accounts can offer shares into the auction window (within a prescribed **auction price band**, typically **±20%** around the previous close/base price).
* **Who Is Barred?** The defaulting member/client who caused the short delivery is **strictly barred** from offering shares in that auction.

### Step 3: Auction Settlement & Delivery to Buyer (T+2 Day)
* Shares bought in the **T+1 afternoon auction** settle on **T+2** and are credited directly into the **innocent buyer's Demat account**—at **zero extra cost** to the buyer (the buyer still pays only their original Day T purchase price).

---

## 3. Who Pays the Auction Cost & Penalty? (Numerical Example)

Every rupee of extra cost from the auction is recovered from the **defaulting seller** (along with exchange auction penalties and GST):

Suppose **Seller S** sells **100 shares** of Stock X at **₹1,000** on Monday (**Day T**) to **Buyer B** (Original Trade Value = **₹1,00,000**), and defaults on Tuesday morning (**T+1**):

### Case A: Shares Are Successfully Bought in the T+1 Auction (at ₹1,080)
* **Auction Purchase Value:** $100 \times ₹1,080 = ₹1,08,000$
* **What Buyer B Gets:** **100 shares** credited to Demat on **T+2** (paying only the original **₹1,00,000**).
* **What Seller S Pays:**
  * Original sale proceeds of **₹1,00,000** are withheld to pay the auction seller.
  * **Auction Price Difference:** $₹1,08,000 - ₹1,00,000 = \mathbf{₹8,000}$ debited directly from Seller S's ledger.
  * **Exchange Auction Penalty + Applicable Charges/GST:** Additional statutory penalty debited from Seller S.
* *(What if the auction price is **lower** than ₹1,000, say ₹960? Seller S does **not** get to pocket the ₹4,000 profit! Under exchange rules, any favorable auction price difference is credited to the **Investor Protection Fund (IPF)** so nobody can ever profit from defaulting.)*

---

## 4. What If Nobody Offers Shares in the Auction? (Close-Out Mechanism)

What if a stock is locked in continuous **Upper Circuits** and **zero shares** are offered during the T+1 afternoon auction?

When an auction fails due to lack of sellers, the Clearing Corporation executes a mandatory **Financial Close-Out**:
1. **Close-Out Price Calculation:** The exchange determines the **Close-Out Price**—defined as the **highest price recorded** between the Trade Date (**T**) and the Auction Day (**T+1**), **OR** the closing price on the Auction Day **plus a statutory Close-Out Markup (typically 20% for standard equities)**, whichever is higher.
2. **Cash Compensation to Buyer:** Since physical shares cannot be sourced, the Clearing Corporation cancels the share delivery and credits the **full Close-Out amount in cash** to **Buyer B** on **T+2**—compensating the buyer generously for the missed rally.
3. **Heavy Debit to Defaulting Seller:** **Seller S** is debited the full Close-Out difference plus exchange penalties.

---

## Key Takeaways

* **Short delivery happens when a seller fails to deliver shares by T+1 morning pay-in**, most commonly due to upper-circuit intraday short traps, missed eDIS authorizations, or BTST chain defaults.
* **The Clearing Corporation protects the buyer via the T+1 Afternoon Auction**, sourcing shares for T+2 Demat delivery while charging all price differences and penalties to the defaulting seller.
* **If no shares are available in the auction, a Close-Out settles the trade in cash** at the highest market price or a **+20% markup**, ensuring the buyer is fully compensated and no seller can ever profit from a default.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
