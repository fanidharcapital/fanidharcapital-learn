---
title: "Education Series #25: Price Limits and Circuit Breakers — Upper and Lower Circuits"
description: "Understand the mandatory safety mechanisms on NSE and BSE designed to curb extreme market volatility. Learn how daily Price Bands (Upper and Lower Circuits) and Market-Wide Index Circuit Breakers protect investors by halting trading during crashes or speculative bubbles."
pubDatetime: 2026-11-22T13:05:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-25.png
tags:
  - market-foundations
  - circuit-breakers
  - price-bands
  - nse-bse
  - risk-management
  - market-halt
---

![Price Limits and Circuit Breakers — Upper and Lower Circuits](/images/lessons/lesson-25.png)

Markets are driven by human emotion, and sometimes those emotions—fear or greed—become extreme. To prevent a total collapse or an irrational speculative bubble from running unchecked, the Indian stock exchanges (**NSE** and **BSE**) employ automatic safety mechanisms known as **Price Limits** and **Circuit Breakers**.

Think of these as the fuses in your electrical panel. If too much power surges through the system, the fuse blows to prevent the whole house from catching fire.

---

## 1. Daily Price Bands (For Individual Stocks)

Every individual stock listed on the NSE and BSE operates within a daily boundary called a **Price Band**. These bands prevent a stock's price from moving excessively in a single trading session.

The price band defines the maximum (Upper Circuit) and minimum (Lower Circuit) price at which a stock can trade during the day.

### Upper Circuit (Maximum Price)
This is the highest price the stock can reach. Once hit, all pending buy orders at that price are frozen, and sellers must match against existing buy demand.
*   **Signifies:** Extreme greed or positive news, causing buying frenzy.

### Lower Circuit (Minimum Price)
This is the lowest price the stock can drop to. Once hit, all pending sell orders at that price are frozen, and buyers must match against existing sell supply.
*   **Signifies:** Extreme panic or negative news, causing a selling avalanche.

### How Price Bands Are Set
*   **Most Stocks (F&O Segment):** Stocks that are part of the Futures & Options (Derivatives) segment typically do **not** have fixed daily circuit limits. Instead, they have **dynamic price bands** (usually 10% initially) that reset throughout the day as the price moves quickly.
*   **Non-F&O Stocks (Cash Segment):** Smaller, illiquid stocks have fixed, static bands to prevent manipulation. These are usually set at:
    *   **20%** (Upper or Lower)
    *   **10%**
    *   **5%**
    *   **2%** (for very volatile penny stocks)

If a stock hits the 20% Upper Circuit, trading in that stock is usually halted for the remainder of the day, or it may enter a call-auction phase depending on the duration left in the session.

---

## 2. Market-Wide Index Circuit Breakers (For Nifty & Sensex)

While individual stocks have bands, the entire market has a master switch. **Market-Wide Circuit Breakers** apply to the **NIFTY 50** and **SENSEX** indices. These are triggered by significant movements (up or down) in either index.

When triggered, trading in **all equity and equity derivatives segments nationwide is halted** simultaneously.

SEBI mandates these halts at three stages of decline (or rise, though lower circuits are much more common):

| Trigger Level (Index Drop) | Halt Duration | When It Typically Hits (Examples) |
| :--- | :--- | :--- |
| **10%** | **45-minute halt** | During a severe global panic (e.g., COVID crash initial phase). |
| **15%** | **1-hour and 45-minute halt** | If the panic intensifies further within the same session. |
| **20%** | **Full-day halt** | Total market meltdown; trading ceases for the day. |

### Calculation Reference Point
The 10%, 15%, and 20% trigger limits are calculated based on the **previous day's closing value** of the Nifty 50 and Sensex. The specific trigger points are recalculated and published by the exchanges at the start of every quarter.

---

## 3. Dynamic Price Bands (The Flexi Approach for F&O Stocks)

For the majority of actively traded stocks (those in the F&O segment), exchanges use **Dynamic Price Bands** instead of fixed daily limits.

This system works by defining a baseline percentage range (often **±10%** or **±5%**) around the stock's last traded price. If the price moves rapidly and hits this boundary, the system triggers a cooling-off period.

1.  The stock hits the dynamic band.
2.  A halt occurs (usually 15 minutes).
3.  A call-auction session runs to find a new equilibrium price.
4.  The band is then expanded further (e.g., to 15% or 20%) when trading resumes.

This mechanism allows the price to adjust naturally to news without allowing an unrestricted crash or rally in a single moment.

---

## Key Takeaways

*   **Price Bands protect you from irrationality:** They act as automatic circuit breakers designed to curb panic selling or speculative buying sprees.
*   **Know your stock's limits:** If you trade small-cap stocks (non-F&O), always check if they have fixed 5%, 10%, or 20% bands so you aren't caught holding a stock that freezes limit-down.
*   **Market-Wide halts are rare but severe:** A 10% or 15% drop in Nifty/Sensex indicates a catastrophic market event; these halts give everyone time to digest news and prevent systemic collapse.
*   **Upper Circuits aren't always good:** While it means the stock price is rising, hitting an Upper Circuit also means you cannot sell your shares if you wanted to, as all buyers have vanished or are already matched.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
