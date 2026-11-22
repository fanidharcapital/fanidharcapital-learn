---
title: "Education Series #50: Block 2 Review — Clearing, Settlement & Depository Mastery Check"
description: "Consolidate everything from Lessons 41–49 in a single operational reference blueprint. Review the end-to-end post-trade architecture of Indian capital markets—covering Clearing Corporations, T+1 rolling settlement, CDSL/NSDL Demat custody, DDPI/Margin Pledging, Client Fund Upstreaming, MTM penalties, Short Delivery Auctions, Physical F&O Expiry, and Corporate Action adjustments."
pubDatetime: 2026-11-22T18:24:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-50.png
tags:
  - exchanges-and-operations
  - module-02
  - block-2-review
  - clearing-and-settlement
  - depository-architecture
  - mastery-check
---

![Block 2 Review — Clearing, Settlement & Depository Mastery Check](/images/lessons/lesson-50.png)

Welcome to **Lesson 50** of **Module 02: Exchanges & Operations** (**Lessons 31–60**) in the **Shree Fanidhar Capital Education Series**.

You have now completed **Block 2 (Lessons 41–50)**—the post-trade backbone of Indian financial markets. While Block 1 (**Lessons 31–40**) showed how orders match on **NSE** and **BSE**, Block 2 revealed the institutional machinery that guarantees every rupee and every share changes hands safely, transparently, and on time.

Today, we tie all nine pillars of **Block 2** into a unified **Post-Trade Operational Reference Blueprint**, followed by a **10-Question Mastery Check** to test your command of Indian clearing, settlement, and depository rules.

---

## 1. Block 2 Architecture Map (Lessons 41–49 at a Glance)

| Lesson | Core Pillar | Key Institutions & Rules | Critical Takeaway for Market Participants |
| :--- | :--- | :--- | :--- |
| **#41** | **Clearing Corporations & Novation** | **NSE Clearing (NCL)**, **ICCL**, Core **SGF** | Through **novation**, the CCP becomes buyer to every seller and seller to every buyer—eliminating bilateral counterparty default risk. |
| **#42** | **T+1 Rolling Settlement** | Pay-In (T+1 AM), Direct Pay-Out (T+1 PM), Optional **T+0** | Shares and funds settle **one business day** after trade date, with purchased shares credited **directly into your Demat account**. |
| **#43** | **Depositories & Demat Custody** | **NSDL**, **CDSL**, **DPs**, **16-char BO ID**, **12-char ISIN**, **CAS** | Securities live electronically under your legal **Beneficiary Owner (BO)** name—ring-fenced from broker insolvency. |
| **#44** | **Demat Authorizations & Pledging** | **eDIS (TPIN + OTP)**, **DDPI**, **Margin Pledge / Re-pledge** | Shares never leave your Demat account without authorization; pledged shares stay in your BO ID and still earn **100% dividends/bonuses**. |
| **#45** | **Client Fund Segregation & Upstreaming** | **USCNBA / DSCNBA**, Daily **EOD Upstreaming**, **Quarterly Settlement** | Brokers cannot keep client cash overnight; idle funds upstream daily to the CCP and sweep back periodically to your bank. |
| **#46** | **MTM Settlement & Short-Margin Penalties** | Daily **MTM Cash Reset**, **Peak Margin**, **0.5% / 1% / 5%** slabs | Futures P&L settles daily in cash; maintain a cash buffer above SPAN + Exposure to prevent margin calls and daily shortfall penalties. |
| **#47** | **Short Delivery & Auction Market** | **T+1 Afternoon Auction**, **T+2 Delivery**, **Close-Out (+20%)** | When a seller defaults, the CCP buys shares in the afternoon auction (or pays cash Close-Out) at the defaulting seller's expense. |
| **#48** | **Physical Settlement in Stock F&O** | **E-4 to E Margin Escalation (10% $\rightarrow$ 100%)**, **ITM Option Exercise** | All single-stock F&O contracts physically settle at expiry; exit un-funded positions before Expiry Day RMS cut-off. |
| **#49** | **Corporate Action Adjustments** | **Cum-Date vs. Ex-Date / Record Date**, **Adjustment Factors**, **SPOS** | Under T+1, buy on or before **Cum-Date (Ex-Date minus 1)** for eligibility; F&O strikes/lot sizes adjust automatically to keep value neutral. |

---

## 2. End-to-End Post-Trade Lifecycle (From Order Match to Finality)

1. **Trade Execution (Day T, 9:15 AM – 3:30 PM):** Order matches on NSE/BSE; **NCL/ICCL** immediately steps in via **novation** (**Lesson 41**).
2. **EOD Upstreaming & Netting (Day T Evening):** Broker upstreams all unutilized client cash to the Clearing Corporation (**Lesson 45**), while the CCP calculates multilateral net funds/securities obligations and daily F&O **MTM** (**Lesson 46**).
3. **Morning Pay-In (Day T+1, ~10:30 AM):** Sellers deliver Demat shares (via **DDPI / eDIS**, **Lesson 44**) and buyers' clearing banks remit funds (**Lesson 42**). Any share shortage routes to the **T+1 Afternoon Auction** (**Lesson 47**).
4. **Afternoon Direct Pay-Out (Day T+1, ~1:30 PM – 3:30 PM):** Clearing Corporation credits shares **directly into buyers' NSDL/CDSL Demat accounts** (**Lesson 43**) and credits sale proceeds to sellers' settlement ledgers.

---

## 3. Block 2 Mastery Check (10 Self-Assessment Questions)

Test your operational understanding against the answer key below:

1. **Novation:** Why does a buyer on NSE never have to worry if the original seller goes bankrupt after trade execution?
2. **T+1 Record Date:** If a stock's **Ex-Date and Record Date** for a dividend fall on **Thursday**, what is the latest trading day you can buy the shares to receive the dividend?
3. **BO ID Anatomy:** A Demat account has the 16-character BO ID `1208160045678901`. Which depository hosts it, and what do the first 8 digits represent?
4. **Margin Pledge Benefits:** When you pledge 200 shares of ITC for F&O margin and ITC declares a dividend, who receives the dividend—you or your broker?
5. **Upstreaming Rule:** Can a stock broker legally retain idle client funds in its own bank account overnight? Where must those funds go at End-of-Day?
6. **MTM & Margin Buffer:** Your futures position recovers for a net weekly profit by Thursday, yet you suffered a short-margin penalty on Wednesday. How did that happen?
7. **Auction Surplus Rule:** If a defaulting seller sold shares at ₹500 and the Clearing Corporation buys them back in the T+1 auction at ₹480, does the defaulting seller pocket the ₹20/share difference?
8. **Stock F&O Expiry:** You hold **1 Lot of Long ITM Stock Call Options** through 3:30 PM on monthly expiry day without squaring off. What happens on T+1?
9. **Extraordinary Dividend in F&O:** A stock trading at ₹1,000 declares a ₹35 dividend (3.5% of market price). How do exchanges adjust existing Stock Option strike prices on Ex-Date?
10. **Running Account Sweep:** If you have a credit balance in your trading account and place **zero trades for 30 consecutive calendar days**, within how many working days must the broker refund your money?

---

## 4. Mastery Check Answer Key

1. **Because of Novation (Lesson 41):** `NSE Clearing (NCL)` becomes the legal buyer to every seller and seller to every buyer, backed by upfront margins and the **Core Settlement Guarantee Fund (Core SGF)**.
2. **Wednesday (Cum-Date, Lesson 42 & 49):** Shares bought on Wednesday settle on **T+1 (Thursday)**, placing your name in the Depository **BenPos** register at Thursday EOD.
3. **CDSL (Lesson 43):** Numeric 8-digit DP IDs (`12081600`) belong to **CDSL** (whereas NSDL DP IDs begin with `IN`), and the first 8 characters identify the **Depository Participant (DP)**.
4. **You (the Beneficiary Owner, Lesson 44):** Under SEBI's Margin Pledge framework, pledged shares stay inside your own Demat account, so **100% of dividends, bonuses, and splits** flow directly to you.
5. **No (Lesson 45):** Under SEBI's **Upstreaming of Client Funds** framework, brokers cannot retain client funds overnight and must upstream all idle balances daily to the **Clearing Corporation** (in cash, lien-marked FDs, or overnight mutual fund units).
6. **Daily MTM Cash Debit (Lesson 46):** Wednesday's adverse price move triggered an EOD **Mark-to-Market cash debit** that pushed your free ledger balance below the required SPAN + Exposure margin before Thursday's rebound occurred.
7. **No (Lesson 47):** Exchange rules prohibit anyone from profiting off a delivery default; any favorable auction price difference is transferred to the **Investor Protection Fund (IPF)**.
8. **Mandatory Physical Delivery (Lesson 48):** A Long ITM Stock Call exercises automatically at expiry, obligating you to pay **$\text{Strike Price} \times \text{Lot Size}$** in cash to take physical Demat delivery of the shares.
9. **Strike Price Reduction (Lesson 49):** Because ₹35 is $\ge 2\%$ of the stock price (an **Extraordinary Dividend**), exchanges subtract ₹35 from all option strike prices and the previous futures settlement price on Ex-Date while keeping lot size unchanged.
10. **Within 3 working days (Lesson 45):** Under SEBI's **30-day inactivity rule**, brokers must return idle client credit balances within **3 working days** of completing 30 consecutive days without trading.

---

## What's Next: Block 3 (Lessons 51–60) — Market Infrastructure, Surveillance & Institutional Operations

With **Block 1 (Order Execution)** and **Block 2 (Clearing, Settlement & Depositories)** complete, **Block 3 (Lessons 51–60)** will explore **SEBI Market Surveillance (ASM / GSM), Bulk & Block Deals, Insider Trading & SAST Disclosures, Algorithmic & Co-Location Infrastructure, Cyber Security & Investor Grievance Redressal (SCORES / SMART ODR)**—completing **Module 02: Exchanges & Operations**!

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
