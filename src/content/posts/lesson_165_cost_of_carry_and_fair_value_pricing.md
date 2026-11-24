---
title: "Educational Series #165: Cost of Carry & Fair Value Pricing — Interest Rates, Dividends, Days to Expiry & Implied Yield"
description: "Understand the cost-of-carry model behind futures fair value—how interest rates, expected dividends, days to expiry, and implied yield shape futures pricing."
pubDatetime: 2026-11-24T12:45:00+05:30
tags:
  - Module 06
  - Futures Market
---

In **Lesson #164**, we defined basis and expiry convergence. In **Lesson #165**, we examine **why** futures normally trade at a theoretical fair value above or below spot: **Cost of Carry**—driven by financing/interest costs, expected dividends, and time remaining until expiry.

![Educational Series #165: Cost of Carry & Fair Value Pricing](/images/lessons/lesson-165.png)

---

## 1. The Cost-of-Carry Intuition

Buying the underlying asset in the cash market and holding it until futures expiry involves **holding costs and holding benefits**:

1.  **Interest / Financing Cost ($r$):** Capital tied up in holding the underlying carries an opportunity/financing cost over the holding period. Higher interest rates generally push **fair value** higher relative to spot.
2.  **Dividend Yield / Expected Dividends ($q$):** Holding underlying shares/indices can entitle the holder to dividends before expiry. Higher expected dividends reduce net carry, pulling **fair value** lower relative to spot (which is why ex-dividend windows often show a futures discount or smaller premium).
3.  **Days to Expiry ($T$):** Net carry accumulates over time. With more days remaining until expiry, the interest-minus-dividend effect has more time to compound/accrue; as days to expiry decline, that carry gap shrinks.

$$\text{Net Carry} \approx \text{Interest Cost} - \text{Dividend Yield (over time to expiry)}$$

---

## 2. Fair Value & Implied Yield

*   **Theoretical Fair Value:** Represents the no-arbitrage futures price implied by spot, financing cost, expected dividends, and time to expiry.
*   **Implied Yield (Implied Carry):** Shows the annualized return/yield implied by the current market spread between futures and spot over the remaining days to expiry:

$$\text{Implied Yield (Annualized)} \approx \left(\frac{\text{Futures Price}}{\text{Spot Price}} - 1\right) \times \frac{365}{\text{Days to Expiry}}$$

When market futures prices sit above or below fair value, institutional arbitrage desks monitor implied yield versus funding/borrowing rates (which we cover in **Lesson #168**).

---

## 3. Why Traders Check Carry Before Reading "Premium" as Bullish

A positive futures price (`Futures > Spot`) is not automatically a sign of extreme bullishness if interest rates and days to expiry naturally justify a carry premium. Conversely, a discount ahead of a large dividend payout may reflect dividend carry rather than panic selling.

---

## 4. Key Takeaways

*   **Cost of carry** links spot and futures through **interest rates**, **expected dividends**, and **days to expiry**.
*   Higher interest rates and longer time to expiry tend to raise carry; expected dividends lower carry.
*   Compare actual market basis against **fair value / implied yield** rather than reading every premium or discount in isolation.

---

## 5. Quick Self-Check

1.  How do **higher interest rates** and **expected dividends** push futures fair value in opposite directions relative to spot?
2.  Why does the carry spread generally narrow as **days to expiry** approach zero?
3.  Why shouldn't a trader automatically assume `Futures > Spot` means unusual bullish frenzy?
4.  
