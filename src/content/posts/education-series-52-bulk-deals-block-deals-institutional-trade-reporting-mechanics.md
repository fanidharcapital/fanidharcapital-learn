---
title: "Education Series #52: Bulk Deals, Block Deals & Institutional Trade Reporting Mechanics"
description: "Understand how mutual funds, FPIs, promoters, and large institutional investors execute multi-crore equity transactions on NSE and BSE without crashing market prices. Learn the exact thresholds, Block Deal Windows (Morning & Afternoon), ±1% price bands, and EOD transparency disclosures."
pubDatetime: 2026-11-22T18:29:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-52.png
tags:
  - exchanges-and-operations
  - module-02
  - bulk-deals
  - block-deals
  - institutional-trading
  - exchange-disclosures
---

![Bulk Deals, Block Deals & Institutional Trade Reporting Mechanics](/images/lessons/lesson-52.png)

Welcome to **Lesson 52** of **Module 02: Exchanges & Operations** (**Lessons 31–60**) in the **Shree Fanidhar Capital Education Series**.

In **Lesson 33** and **Lesson 51**, you saw how the normal continuous order book matches retail and institutional orders tick-by-tick, and how abnormal volume spikes trigger surveillance alerts. Now ask a practical institutional question:

**How does a Mutual Fund, Foreign Portfolio Investor (FPI), or Promoter buy or sell ₹500 crore worth of shares in a single day without triggering massive price slippage or circuit breakers?**

To solve that challenge while preserving complete market transparency, **SEBI, NSE, and BSE** provide two distinct institutional trade mechanisms: **Bulk Deals** and **Block Deals**.

---

## 1. Bulk Deal vs. Block Deal — Core Differences at a Glance

Although financial headlines often confuse the two terms, **Bulk Deals** and **Block Deals** operate under completely different rules, order books, and qualifying thresholds:

| Feature | Bulk Deal | Block Deal |
| :--- | :--- | :--- |
| **Qualifying Threshold** | Total quantity bought or sold in a single day exceeds **0.50% of the company's total listed equity shares** (across one or multiple trades). | Minimum order size of **₹10 Crore** in a single negotiated transaction. |
| **Order Book / Trading Window** | Executed in the **normal continuous market order book** during regular trading hours (**9:15 AM – 3:30 PM**). | Executed exclusively inside **two dedicated 15-minute Block Deal Windows** (**BL** series on NSE) separate from the normal order book. |
| **Order Matching & Visibility** | Visible to all market participants in real time inside regular market depth; matches against any resting retail/institutional orders. | Matched privately between willing institutional counterparties at an agreed price within the **±1% reference price band**; does not disturb normal order-book depth. |
| **Price Band Limit** | Subject to the stock's normal daily price band (e.g., 5%, 10%, 20%, or dynamic F&O band). | Strictly capped within **±1% of the applicable reference price** (previous close or VWAP). |
| **Delivery / Netting Rule** | Can be cumulative across the day (may include intraday buy + sell legs if either side exceeds 0.5%). | Strictly **delivery-only (100% gross settlement)**—zero intraday squaring off permitted inside the Block Deal window. |
| **Public Disclosure** | Brokers must report to the exchange immediately/EOD; exchanges publish all Bulk Deals **after market close (~6:00 PM IST)** with client names. | Exchanges publish all Block Deals **after market close (~6:00 PM IST)** with buyer/seller names, quantity, and execution price. |

---

## 2. How the Two Dedicated Block Deal Windows Work (NSE & BSE)

To ensure large pre-negotiated institutional deals execute cleanly at fair benchmark prices, SEBI mandates **two separate 15-minute Block Deal Windows** every trading day:

| Block Deal Session | Trading Window Timing (IST) | Applicable Reference Price | Permitted Execution Price Range |
| :--- | :--- | :--- | :--- |
| **Window 1: Morning Session** | **8:45 AM – 9:00 AM** (during the Pre-Open window) | Previous trading day's official **Closing Price** | **±1%** of Previous Close |
| **Window 2: Afternoon Session** | **2:05 PM – 2:20 PM** (during regular market hours) | **Volume Weighted Average Price (VWAP)** of trades executed in the regular market between **1:45 PM and 2:00 PM** | **±1%** of the 1:45–2:00 PM VWAP |

### Step-by-Step Institutional Execution Flow
1. **Institutional Negotiation (Off-Screen / Broker Desk):** Before the window opens, an institutional broker (or investment bank) lines up a seller (e.g., a Private Equity fund exiting 3% stake) and matching institutional buyers (e.g., domestic Mutual Funds and FPIs) at an agreed price within **±1%** of the benchmark.
2. **Exact Order Entry Inside the 15-Minute Window:** Both the buy order and sell order are entered into the exchange's **Block Deal Window (`BL` series)** for the **exact same quantity and exact same price**.
3. **Instant Match & T+1 Settlement:** The exchange matching engine pairs the orders immediately without sweeping the regular order book, and the trade settles on **T+1** through **NSE Clearing / ICCL** (**Lesson 42**).
4. **Unmatched Order Expiry:** Any Block Deal order not matched before the 15-minute window closes (9:00 AM or 2:20 PM) is **automatically cancelled**—it never spills over into the regular market.

---

## 3. Numerical Example: Bulk Deal vs. Block Deal in Action

Suppose **Company Alpha** has **10,00,00,000 (10 Crore) listed equity shares**, currently trading at **₹400 per share** (Total Market Cap = **₹4,000 Crore**):

* **0.50% Bulk Deal Threshold:** $10,00,00,000 \times 0.50\% = \mathbf{5,00,000\text{ shares}}$ (Worth **₹20 Crore** at ₹400).
* **Scenario A (Bulk Deal):** A domestic fund buys **6,00,000 shares (0.60% equity)** across 18 separate orders in the normal market between 10:00 AM and 2:30 PM. Because cumulative daily buy volume exceeds **0.50%**, the exchange reports it as a **Bulk Deal** after market close.
* **Scenario B (Block Deal):** An FPI sells **3,00,000 shares** at **₹398** (Total Value = **₹11.94 Crore**) to an Insurance Company inside the **2:05 PM – 2:20 PM Block Deal Window**. Even though 3,00,000 shares is **0.30%** (below the 0.50% Bulk Deal cutoff), because the single trade exceeds **₹10 Crore** and executed inside the dedicated Block window, it is reported as a **Block Deal** after market close!
* **Scenario C (Both!):** If a single trade inside the Block Deal window is worth **₹25 Crore** AND represents **0.625%** of total equity, it qualifies and appears in **both** the Block Deal and Bulk Deal EOD reports.

---

## 4. How Investors Read EOD Bulk & Block Deal Data Responsibly

Every evening, NSE and BSE publish daily CSV/web reports listing the **Security Symbol, Client Name, Buy/Sell Side, Quantity Traded, and Trade Price**. While tracking institutional flows is valuable, smart investors avoid three common traps:

1. **Always Check Both Sides of a Trade:** A high-profile fund buying 1% via a Block Deal often matches directly against a founder or PE investor selling that exact 1%—look at **who is selling** just as closely as **who is buying**.
2. **Beware of Intraday Algorithmic Churn in Bulk Deals:** High-frequency trading (HFT) desks routinely buy and sell >0.50% of a small-cap stock's equity within the same day for a few paise spread—always verify whether the client ended the day as a **net buyer** or merely executed simultaneous **Buy + Sell** intraday entries.
3. **Never Chase Gap-Ups Blindly Next Morning:** EOD disclosures arrive **after market close**, meaning smart money has already transacted at the disclosed price. Treat Bulk/Block disclosures as fundamental ownership clues rather than mechanical buy signals.

---

## Key Takeaways

* **Bulk Deals occur in the normal order book** whenever a client's single-day buy or sell volume exceeds **0.50% of a company's listed shares**, whereas **Block Deals require a minimum ₹10 Crore trade** inside dedicated **15-minute windows (8:45–9:00 AM & 2:05–2:20 PM)**.
* **Block Deals enforce a strict ±1% price band and 100% delivery settlement**, enabling multi-crore institutional transfers without destabilizing retail order-book liquidity.
* **Mandatory End-of-Day disclosures by NSE and BSE** reveal the exact institutional buyer, seller, quantity, and execution price—ensuring post-trade transparency for all market participants.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
