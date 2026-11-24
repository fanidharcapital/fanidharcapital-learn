---
title: "Educational Series #162: Calendar Spreads & Margin Benefits — Trading Near vs. Far Month Contracts and Spread Risks"
description: "Learn how calendar spreads work in futures by pairing near-month and next/far-month contracts, how margin benefits arise from offsetting legs, and what spread and leg risks to watch."
pubDatetime: 2026-11-24T12:00:00+05:30
tags:
  - Module 06
  - Futures Market
---

In **Lesson #161**, we covered position sizing from `1R` risk to avoid the leverage trap. In **Lesson #162**, we look at **Calendar Spreads**: taking opposite positions in two different expiry months of the *same* underlying (for example, long Near Month and short Next Month, or vice versa) on NSE/BSE.

![Educational Series #162: Calendar Spreads & Margin Benefits](/images/lessons/lesson-162.png)

---

## 1. How a Futures Calendar Spread Works

A **calendar spread** (also called an inter-month spread) pairs two contracts with the same underlying and lot size but different expiry dates:

*   **Bullish / Long Spread Example:** Buy Near-Month futures and sell Next-Month futures (profiting if the spread widens or near month outperforms next month, depending on pricing structure).
*   **Bearish / Short Spread Example:** Sell Near-Month futures and buy Next-Month futures.
*   **Rollover Connection:** As covered in **Lesson #156**, rolling a position from near month to next month is essentially exiting one leg and entering the other—often executed as a combined spread order to manage execution pricing together.

---

## 2. Why Calendar Spreads Carry Lower Margin Than Naked Legs

Because the two legs share the **same underlying** and move largely together over normal sessions:

*   Broad market or stock swings affect both legs in the same direction, partially offsetting directional risk.
*   Clearing margin models recognize this **offsetting/hedge benefit**, requiring lower total margin than holding two standalone directional futures contracts separately.

---

## 3. Key Risks in Calendar Spreads

Lower margin does **not** mean zero risk:

1.  **Spread Widening / Narrowing Risk:** The **price difference (spread)** between near and next month fluctuates with cost of carry, dividends, rollover demand, and sentiment. The spread can move against you even when the underlying index or stock barely moves.
2.  **Liquidity & Slippage on the Far Leg:** Next-month or far-month contracts often have thinner depth and wider bid-ask spreads than the active near-month contract—especially early in the series—increasing execution cost.
3.  **Legging & Expiry Risk:** If you place legs separately instead of as a spread (where supported) or hold across expiry/settlement cutoffs, one leg can fill at a worse price or face expiry margin/delivery rules.

---

## 4. Key Takeaways

*   A **calendar spread** pairs two expiry months of the same underlying in opposite directions.
*   Offsetting exposure typically yields **margin benefits** compared to two unhedged positions.
*   Watch **spread movement**, **far-month liquidity/slippage**, and **expiry/leg execution rules**.

---

## 5. Quick Self-Check

1.  What defines a **futures calendar spread**?
2.  Why do calendar spreads generally require less margin than holding two separate directional futures positions?
3.  How can a trader lose money on a calendar spread even if the underlying stock's cash price ends the day nearly unchanged?
4.  
