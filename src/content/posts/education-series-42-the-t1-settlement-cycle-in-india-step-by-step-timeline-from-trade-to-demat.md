---
title: "Education Series #42: The T+1 Settlement Cycle in India — Step-by-Step Timeline from Trade to Demat"
description: "Follow the complete post-trade lifecycle in Indian equity markets. Understand how India transitioned from T+2 to T+1 rolling settlement, trace the exact pay-in and pay-out timeline from T-Day to T+1 Day, and see what T+0 optional settlement means for liquidity."
pubDatetime: 2026-11-22T18:01:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-42.png
tags:
  - exchanges-and-operations
  - module-02
  - t1-settlement
  - rolling-settlement
  - pay-in-pay-out
  - demat-settlement
---

![The T+1 Settlement Cycle in India — Step-by-Step Timeline from Trade to Demat](/images/lessons/lesson-42.png)

Welcome to **Lesson 42** of **Module 02: Exchanges & Operations** (**Lessons 31–60**) in the **Shree Fanidhar Capital Education Series**.

In **Lesson 41**, you learned how **NSE Clearing (NCL)** and **ICCL** step in as Central Counterparties through **novation** to guarantee every matched trade. Now, we examine **when** and **how** the actual exchange of cash and shares takes place.

India is a global pioneer in post-trade efficiency—having completed its full market-wide transition from **T+2** to **T+1 rolling settlement** in January 2023 (and introducing optional **T+0** instant/same-day settlement tracks). Today, we trace the exact **T+1 Settlement Cycle** hour by hour from trade execution to Demat credit.

---

## 1. What Does "T+1 Rolling Settlement" Mean?

In exchange terminology:
* **"T"** stands for **Trade Date** (the trading day on which your order executes on NSE or BSE).
* **"+1"** means **one working business day** after the Trade Date (excluding weekends and exchange/settlement holidays).
* **"Rolling Settlement"** means each trading day's obligations are netted and settled independently on their respective **T+1** day—unlike older weekly account-period settlements where trades accumulated until the end of the week.

| Milestone | Old Regime (Pre-2023) | Current Standard (**T+1**) | Optional Fast Track (**T+0**) |
| :--- | :--- | :--- | :--- |
| **Trade Execution** | Monday (T) | Monday (T) | Monday (T, up to cut-off) |
| **Funds & Shares Settlement** | Wednesday (T+2) | **Tuesday (T+1)** | **Same Day Monday (T+0)** |
| **Capital Lock-In Time** | 2 business days | **1 business day** | Same-day liquidity |

---

## 2. Step-by-Step Timeline: From Trade (T) to Demat Credit (T+1)

Here is what happens behind the scenes across your broker, the Clearing Corporation (**NCL / ICCL**), the Clearing Banks, and the Depositories (**CDSL / NSDL**):

### Day T (Trade Day — e.g., Monday)
1. **9:15 AM – 3:30 PM (Trade Execution):** Your buy or sell order matches on NSE or BSE.
2. **3:30 PM – 5:00 PM (Trade Confirmation & Custodial Confirmation):** Exchanges transmit executed trade files to the Clearing Corporation. Institutional trades (FPIs/MFs) undergo custodial confirmation.
3. **Evening of Day T (Multilateral Netting & Obligation Download):** The Clearing Corporation nets all buys and sells per Clearing Member and downloads **Net Funds and Securities Pay-In / Pay-Out Obligations** to brokers and custodians.
4. **Contract Note Issued:** Your broker sends your digital **Contract Note** within 24 hours, detailing exact trade prices, STT, brokerage, exchange transaction charges, stamp duty, and net payable/receivable amounts.

### Day T+1 (Settlement Day — e.g., Tuesday)
1. **Morning — Pay-In of Funds & Securities (Typically by ~10:30 AM – 11:00 AM IST):**
   * **Sellers' Obligations (Securities Pay-In):** Shares sold on Day T are debited from the seller's Demat account (via **EDIS / DDPI** or Early Pay-In) and transferred to the Clearing Corporation's pool/settlement account.
   * **Buyers' Obligations (Funds Pay-In):** Clearing banks debit the buying broker's clearing account and credit the Clearing Corporation's settlement account.
2. **Midday — Settlement Processing & Shortage Check:**
   * The Clearing Corporation verifies that 100% of due funds and securities have arrived. If any seller fails to deliver shares on time, a **short delivery** is flagged for the afternoon **Auction Market** (**Lesson 47**).
3. **Afternoon — Pay-Out of Funds & Securities (Typically by ~1:30 PM – 3:30 PM IST):**
   * **Buyers Receive Shares (Securities Pay-Out):** Under SEBI's **Direct Payout to Client Demat Account** framework, the Clearing Corporation credits purchased shares **directly into the buyer's Demat account** (bypassing broker pool accounts for enhanced investor protection).
   * **Sellers Receive Funds (Funds Pay-Out):** Clearing banks credit sale proceeds to the selling broker's settlement account, which is then reflected in the client's trading ledger.

---

## 3. Operational Impact on Retail & Active Traders

Understanding the exact T+1 clock prevents common operational confusion:

* **BTST (Buy Today, Sell Tomorrow):** If you buy shares on Monday (T), they are not yet in your Demat account on Tuesday morning (T+1) when markets open at 9:15 AM—they arrive in the afternoon pay-out. While exchanges permit selling on T+1 before afternoon pay-out, if the counterparty who sold to you on Monday defaults (**short delivery**), you could face an auction shortage on Wednesday!
* **Dividend / Bonus / Split Record Date Rule:** Under T+1 settlement, **Ex-Date and Record Date usually coincide on the same day**. To be eligible for a dividend, bonus, or stock split, you must **buy the shares at least one trading day *before* the Ex-Date / Record Date** so that shares sit in your Demat account by the end of the Record Date.
* **Settlement Holidays vs. Trading Holidays:** Occasionally, banks/depositories are closed (e.g., on regional bank holidays or Buddha Purnima / Parsi New Year) while NSE and BSE remain open for trading. On such **Settlement Holidays**, trades executed on T and T+1 merge and settle together on the next common working day.

---

## 4. What About Optional T+0 Settlement?

SEBI has also rolled out an optional **T+0 (Same-Day) Settlement Cycle** alongside T+1 for eligible liquid stocks:
* Trades executed before the afternoon cut-off (typically **1:30 PM**) settle by **4:30 PM the very same day**, giving investors instant access to funds or Demat shares without waiting overnight.
* T+1 remains the primary, universal default across all listed equities, while T+0 serves as an opt-in liquidity layer.

---

## Key Takeaways

* **India's standard T+1 rolling settlement** completes both funds and Demat share transfers within **one business day** after the trade date.
* **Pay-In happens on T+1 morning and Pay-Out happens on T+1 afternoon**, with Clearing Corporations crediting shares **directly into your Demat account**.
* **Record Date & Settlement Holidays matter:** Always buy at least one trading day before an Ex-Date/Record Date for corporate action eligibility, and watch for bank settlement holidays that combine two days' settlements.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
