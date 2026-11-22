---
title: "Education Series #51: SEBI & Exchange Surveillance — ASM, GSM, ESM & Price Band Restrictions Explained"
description: "Understand how SEBI, NSE, and BSE protect retail investors from speculative price manipulation and extreme volatility. Learn the exact triggers, stage-wise curbs, 100% margin rules, and Trade-for-Trade (T2T) restrictions under ASM, GSM, and ESM frameworks."
pubDatetime: 2026-11-22T18:26:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-51.png
tags:
  - exchanges-and-operations
  - module-02
  - sebi-surveillance
  - asm-gsm-esm
  - trade-for-trade
  - investor-protection
---

![SEBI & Exchange Surveillance — ASM, GSM, ESM & Price Band Restrictions Explained](/images/lessons/lesson-51.png)

Welcome to **Lesson 51** of **Module 02: Exchanges & Operations** (**Lessons 31–60**) in the **Shree Fanidhar Capital Education Series**.

In **Block 1 (Lessons 31–40)**, you learned how orders match and how circuit breakers pause runaway price moves. In **Block 2 (Lessons 41–50)**, you saw how Clearing Corporations and Depositories settle trades safely.

Now we begin **Block 3 (Lessons 51–60): Market Infrastructure, Surveillance & Institutional Operations**—starting with the automated early-warning radar that **SEBI, NSE, and BSE** run continuously behind every tick: **Market Surveillance Frameworks (`ASM`, `GSM`, and `ESM`)**.

---

## 1. Why Surveillance Frameworks Exist (And What They Mean)

When a stock suddenly surges 200% in two weeks on thin volumes without any fundamental earnings catalyst—or shows high promoter pledge, concentrated shareholding, or unusual client concentration—exchanges place the stock under **Preventive Surveillance**.

> **Crucial Clarification for Investors:** Shortlisting of a security under **ASM**, **GSM**, or **ESM** is purely an **automated, pre-emptive market surveillance measure** based on objective parameters agreed upon by SEBI and the exchanges. It is **not** a regulatory penalty or proof of wrongdoing—rather, it is a **"caution flag"** designed to cool excessive speculation and protect retail investors from sudden liquidity traps.

---

## 2. The Three Core Exchange Surveillance Frameworks

Indian stock exchanges enforce three primary multi-stage surveillance frameworks depending on market capitalization, price-earnings anomalies, and fundamental health:

| Framework | Full Name | Primary Target & Triggers | Key Trading & Margin Curbs |
| :--- | :--- | :--- | :--- |
| **ASM** | **Additional Surveillance Measure** | Stocks exhibiting abnormal price/volume variation, high client concentration, high P/E multiples, or sharp swings across **Short-Term (ST-ASM)** and **Long-Term (LT-ASM)** tracks. | Price band tightening (**5% or 2%**), **100% upfront margin** (zero intraday leverage), and **Trade-for-Trade (T2T)** settlement in higher stages. |
| **GSM** | **Graded Surveillance Measure** | Companies with **weak financial fundamentals** (e.g., low/negative net worth, low net fixed assets, or high P/E disconnected from earnings) witnessing abnormal price rises. | Progressive **6-stage tightening** (Stages 0 to VI): T2T settlement, **5% / 2% price bands**, **Additional Surveillance Deposit (ASD)** up to **100%**, and trading restricted to **once a week (Mondays)** in Stage IV+. |
| **ESM** | **Enhanced Surveillance Measure** | **Micro-cap / Small-cap companies** (typically market capitalization **$< ₹1,000\text{ crore}$**) experiencing sharp price spikes or high volatility. | **Stage I:** 100% margin + T2T settlement + **5% or 2%** price band.<br>**Stage II:** **2% price band** + T2T + trading allowed **only via Periodic Call Auction** (or restricted weekly windows). |

---

## 3. Deep Dive: Long-Term ASM (LT-ASM) Stage-Wise Restrictions

Most active traders encounter **Long-Term ASM (Stages I to IV)** or **Short-Term ASM (Stages I & II)** when scanning momentum stocks. Here is how restrictions escalate across **LT-ASM**:

| LT-ASM Stage | Applicable Price Band | Margin Requirement | Settlement Mode |
| :--- | :--- | :--- | :--- |
| **Stage I** | **5%** (or existing lower band) | **100%** of trade value (effective from T+3 day of entry) | Normal rolling settlement (intraday allowed with 100% margin) |
| **Stage II** | **5%** (or lower) | **100%** upfront margin | **Trade-for-Trade (T2T)** — intraday netting prohibited; every buy/sell requires full delivery |
| **Stage III** | **5%** (or lower) | **100%** upfront margin | **Trade-for-Trade (T2T)** + enhanced exchange monitoring |
| **Stage IV** | **2%** daily price band | **100%** upfront margin | **Trade-for-Trade (T2T)** — strict delivery-only execution |

*(Note: **Short-Term ASM [ST-ASM]** targets sudden 5-day or 15-day price/volume spikes and imposes **100% margin** and **5% price bands** quickly, with periodic weekly/bi-weekly reviews for exit once volatility subsides.)*

---

## 4. What Does "Trade-for-Trade (T2T / BE / XT)" Actually Do to Your Order?

Whenever a stock enters **T2T** (identified on NSE by the **`BE`** series instead of **`EQ`**, and on BSE by **`T`** or **`XT`** groups), three strict operational rules apply:

1. **Zero Intraday Square-Off (`MIS` Blocked):** You **cannot buy and sell the same stock on the same day**. If you buy 100 shares in the morning, you **must** take delivery on **T+1** (and pay 100% cash) before you can sell them.
2. **BTST Is Blocked:** Because every buy trade in a T2T stock requires mandatory full Demat receipt before selling, **Buy Today Sell Tomorrow (BTST)** is prohibited—attempting to sell before T+1 Demat pay-out triggers a **Short Delivery Auction** (**Lesson 47**).
3. **Zero Margin Pledge Eligibility:** Shares under ASM/GSM/T2T are removed from the Clearing Corporation's approved collateral list—meaning you cannot pledge them for F&O margin (**Lesson 44**).

---

## 5. How Exchanges Review & Exit Stocks from Surveillance

* **Periodic Review Cycles:** Exchanges conduct scheduled reviews (weekly for ST-ASM/ESM, monthly/quarterly for LT-ASM and GSM) to evaluate whether price volatility, client concentration, and valuation ratios have normalized.
* **Step-Down Exit:** A stock that meets exit criteria steps down gradually (e.g., from LT-ASM Stage IV $\rightarrow$ III $\rightarrow$ II $\rightarrow$ I $\rightarrow$ Normal `EQ` segment) rather than dropping all restrictions overnight.
* **Where to Check Before Trading:** Always check the stock's **Series (`EQ` vs. `BE`)**, **Surveillance Indicator (`ASM-I`, `GSM-II`, `ESM-I`)**, and **Applicable Price Band** directly on the **NSE/BSE quote page** or your broker's order window before placing an order.

---

## Key Takeaways

* **ASM, GSM, and ESM are automated preventive caution frameworks** used by SEBI, NSE, and BSE to curb speculative excess and protect investors—not punitive verdicts.
* **Higher surveillance stages impose 100% upfront margins, 5% or 2% price bands, and Trade-for-Trade (T2T) settlement**, eliminating intraday leverage and BTST trading.
* **Always verify a stock's series (`EQ` vs. `BE`) and surveillance tag before entering a trade** so you are never caught off guard by T2T delivery rules or narrow 2% circuit limits.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
