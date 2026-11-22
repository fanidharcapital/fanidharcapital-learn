---
title: "Education Series #44: Demat Authorizations & Pledging — PoA vs. DDPI, eDIS (TPIN) & Margin Pledge Mechanics"
description: "Learn how shares move safely out of your Demat account without unauthorized misuse. Compare Power of Attorney (PoA), Demat Debit and Pledge Instruction (DDPI), eDIS (TPIN + OTP), and SEBI's Margin Pledge / Re-pledge framework."
pubDatetime: 2026-11-22T18:06:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-44.png
tags:
  - exchanges-and-operations
  - module-02
  - ddpi-poa
  - edis-tpin
  - margin-pledge
  - demat-security
---

![Demat Authorizations & Pledging — PoA vs. DDPI, eDIS (TPIN) & Margin Pledge Mechanics](/images/lessons/lesson-44.png)

Welcome to **Lesson 44** of **Module 02: Exchanges & Operations** (**Lessons 31–60**) in the **Shree Fanidhar Capital Education Series**.

In **Lesson 43**, you saw how **NSDL** and **CDSL** safeguard your shares under your unique **16-character BO ID**. Because your shares sit in a Demat account operated through a **Depository Participant (DP)**, **no broker can debit or pledge your shares without explicit authorization**.

Today, we examine how Indian capital markets authorize share deliveries and collateral creation safely—covering **PoA vs. DDPI**, **eDIS (TPIN + OTP)**, and SEBI's **Margin Pledge / Re-pledge** system.

---

## 1. Why Demat Authorizations Exist

When you **buy** shares, they flow automatically into your Demat account via the Clearing Corporation's direct pay-out (**Lesson 42**). No authorization is required to *receive* shares.

However, when you **sell** shares from your Demat holdings—or **pledge** shares as trading collateral—your DP needs legal permission to debit or encumber those securities. Historically, brokers relied on broad **Power of Attorney (PoA)** agreements, which carried misuse risks if an unethical broker transferred client shares without consent.

To eliminate that risk, SEBI replaced open-ended PoA practices with two tightly controlled mechanisms: **eDIS** and **DDPI**.

---

## 2. eDIS (Electronic Delivery Instruction Slip) vs. DDPI vs. Legacy PoA

| Authorization Method | How It Works | Operational Convenience | Security & Control |
| :--- | :--- | :--- | :--- |
| **eDIS (TPIN + OTP)** | You authorize each sell order (or daily sell batch) directly on the **CDSL / NSDL portal** using a static **6-digit TPIN** plus a dynamic **OTP** sent to your registered mobile/email. | Requires daily/per-trade authorization before selling delivery holdings; GTT/algo sell orders wait until authorized. | **Highest per-transaction control**—zero standing mandate given to the broker. |
| **DDPI (Demat Debit and Pledge Instruction)** | A standardized, **purpose-specific** standing authorization introduced by SEBI to replace PoA—strictly limited to delivering shares sold on exchanges and creating margin pledges. | **Seamless execution**—delivery sell orders, GTT sell triggers, and pledge requests execute automatically without daily TPIN/OTP friction. | **High regulatory safety**—explicitly prohibits off-market transfers or non-exchange debits. |
| **Legacy PoA (Power of Attorney)** | Older blanket legal document granting brokers broad authority to operate the Demat account. | Seamless, but largely phased out for new accounts in favor of **DDPI**. | Broader legal wording; investors are advised to revoke old PoAs and switch to **DDPI** or **eDIS**. |

> **Operational Tip for Active Traders:** If you use **GTT (Good Till Triggered)** sell orders or automated exit rules (**Lesson 35**), activating **DDPI** prevents your sell order from failing due to missing daily **eDIS** authorization.

---

## 3. How SEBI's Margin Pledge / Re-pledge System Works

In **Lesson 39**, you learned that approved Demat shares can be used as non-cash collateral for F&O or intraday margin. Before September 2020, brokers required clients to transfer shares out of their Demat account into a "Broker Collateral Pool Account"—exposing client shares to broker default risk.

SEBI abolished title-transfer collateral and introduced the **Demat Margin Pledge / Re-pledge Framework**:

### Step-by-Step Margin Pledge Flow
1. **Pledge Initiation:** You select eligible shares/ETFs in your broker's console to pledge for margin.
2. **Depository OTP Confirmation:** NSDL or CDSL sends an authorization link/OTP directly to your registered mobile/email. **The pledge is only created once you approve it with the depository.**
3. **Shares Stay in Your Demat Account:** Unlike the old system, **the shares never leave your BO ID**. They remain visibly inside your Demat account with a **"Pledged"** flag—meaning you continue receiving **100% of all dividends, bonus shares, and stock splits** directly!
4. **Haircut Deduction & Collateral Credit:** The broker/Clearing Corporation applies the prescribed **haircut %** (e.g., 10% on Liquid ETFs, 15%–25% on blue-chip equities) and credits the remaining value as usable trading margin.
5. **Re-pledge to Clearing Corporation:** Your broker can only **re-pledge** those exact securities onward to **NSE Clearing (NCL) / ICCL** for your margin obligations—never for any other client or proprietary borrowing.

### Numerical Example of a Margin Pledge
Suppose you pledge **100 shares** of an approved Nifty 50 stock trading at **₹2,000** (Total Market Value = **₹2,00,000**) carrying a **15% haircut**:
* **Gross Holding Value:** ₹2,00,000
* **Less Haircut (15%):** $₹2,00,000 \times 15\% = ₹30,000$
* **Net Collateral Margin Available:** $₹2,00,000 - ₹30,000 = \mathbf{₹1,70,000}$

*(Remember: Under SEBI's **50:50 cash-to-collateral ratio** rule for overnight F&O positions, at least 50% of required margin must come from cash or cash equivalents like Liquid ETFs/T-Bills, while up to 50% can come from pledged equity shares.)*

---

## 4. Unpledging & Selling Pledged Shares

* **Standard Unpledge:** You submit an unpledge request in your broker terminal (provided you have sufficient free margin to cover open positions). The pledge flag is typically removed by the next working morning (**T+1**).
* **Instant Sell of Pledged Shares:** Most modern brokers also support **"Instant Unpledge & Sell"** during market hours—automatically releasing the pledge against your sell trade so your shares deliver smoothly on **T+1**.

---

## Key Takeaways

* **No shares can leave your Demat account without authorization**—either per-transaction via **eDIS (TPIN + OTP)** or via SEBI's restricted **DDPI** mandate.
* **DDPI safely replaces legacy PoAs**, allowing seamless GTT/automated sell executions while strictly prohibiting unauthorized off-market transfers.
* **Margin Pledge keeps shares inside your own Demat account**, preserving your ownership and corporate action benefits (dividends, bonuses, splits) while unlocking collateral margin after a haircut.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
