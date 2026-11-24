---
title: "Educational Series #196: Anatomy of an Option Chain — Reading Calls (Left), Strikes (Center) & Puts (Right) on NSE/BSE"
description: "Master the layout of the NSE/BSE option chain: Calls on the left, Puts on the right, and the critical central column of Strike Prices. Learn how to navigate live market data."
pubDatetime: 2026-11-25T09:00:00+05:30
tags:
  - Module 07
  - Options Market
---

In **Part 2**, we mastered the pricing fundamentals of options (`IV`, `Theta`, `Moneyness`). Now, in **Part 3: Option-Chain Terminology & Market Microstructure**, we learn how to read the battlefield. **Lesson #196** is your guide to the **Option Chain**—the central data table provided by NSE and BSE that lists all available option contracts for a specific underlying asset.

![Educational Series #196: Anatomy of an Option Chain](/images/lessons/lesson-196.png)

---

## 1. The Standard Layout (Mirror Image)

While broker interfaces vary, the standard NSE option chain layout is a matrix where **Call (`CE`) data sits on the left** and **Put (`PE`) data sits on the right**, with the common **Strike Prices** running down the center.

Imagine a vertical mirror. The center strike prices (`24,500`, `24,600`, etc.) are the reflection line.

*   **Left Side (Call Options — `CE`):**
    *   *Columns typically include:* LTP (Last Traded Price), Change, Bid/Ask, Volume, and most importantly, **Open Interest (`OI`)**.
*   **Center Column:**
    *   **Strike Prices:** Listed sequentially (e.g., in steps of `50` or `100` for Nifty). These are the reference prices.
*   **Right Side (Put Options — `PE`):**
    *   *Columns mirror the left:* OI, Volume, Bid/Ask, Change, and LTP.

*Tip: Always ensure you are viewing the correct **Expiry Date** before analyzing the chain.*

---

## 2. Reading Moneyness on the Chain

The option chain visually displays moneyness based on the current underlying **Spot Price** (usually highlighted in the center column).

1.  **Calls (`CE` - Left):**
    *   **`ITM` (In-The-Money):** Strikes *above* the current Spot Price.
    *   **`OTM` (Out-of-The-Money):** Strikes *below* the current Spot Price.
2.  **Puts (`PE` - Right):**
    *   **`ITM` (In-The-Money):** Strikes *below* the current Spot Price.
    *   **`OTM` (Out-of-The-Money):** Strikes *above* the current Spot Price.

*(Note: This visual hierarchy is the opposite of the numerical price ladder.)*

---

## 3. Finding Liquidity

The option chain is your primary tool for gauging liquidity. You should primarily focus on:

*   **ATM and Near-OTM Strikes:** These strikes generally have the highest **Volume** and **Open Interest (`OI`)**, ensuring tight **Bid-Ask Spreads** and easy entry/exit.
*   **Far-OTM Strikes:** These often have very low volume and wide spreads, making them dangerous to trade due to high **slippage**.

---

## 4. Key Takeaways

*   An **Option Chain** lists all Calls (left) and Puts (right) for a specific underlying, anchored by central **Strike Prices**.
*   Moneyness is determined by the relationship between the central Spot Price and the specific strikes.
*   Focus liquidity analysis on ATM and near-OTM contracts where Volume and OI are concentrated.

---

## 5. Quick Self-Check

1.  In the standard NSE option chain layout, on which side (left or right) are the **Put Options (`PE`)** typically displayed?
2.  If the Nifty Spot Price is `24,480`, where on the chain will you locate the **In-The-Money (`ITM`) Call options** (above or below the `24,500` strike)?
3.  Why is it critical to check the **Expiry Date** at the top of the option chain before making trading decisions?
4.  
