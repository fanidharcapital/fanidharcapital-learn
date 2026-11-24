---
title: "Educational Series #185: Payoff Diagrams at Expiry — Reading Hockey-Stick Graphs for Long/Short Calls & Puts"
description: "Learn how to read expiry payoff diagrams (hockey-stick charts) for Long Call, Short Call, Long Put, and Short Put positions—identifying the strike kink, flat region, and 45-degree slope."
pubDatetime: 2026-11-24T18:00:00+05:30
tags:
  - Module 07
  - Options Market
---

In **Lesson #184**, we contrasted option buyers and option sellers. In **Lesson #185**, we translate those rules into visual form: **Payoff Diagrams at Expiry**. Unlike a futures payoff—which is a straight diagonal line across all prices—every single-leg option creates a bent **"hockey-stick" curve** with a sharp **kink at the Strike Price**.

![Educational Series #185: Payoff Diagrams at Expiry](/images/lessons/lesson-185.png)

---

## 1. Anatomy of an Expiry Payoff Graph

Every payoff diagram plots two axes:
*   **Horizontal Axis (`X-Axis`):** Underlying Spot/Settlement Price at expiry.
*   **Vertical Axis (`Y-Axis`):** Net Profit (`+`) above the zero line, or Net Loss (`-`) below the zero line.
*   **The Kink (Strike Price):** Where the payoff line changes slope from **horizontal (capped)** to **diagonal (1-for-1 movement with underlying)**.
*   **The Zero-Line Crossing (Breakeven):** The exact underlying price where net profit equals `₹0` (covered mathematically in **Lesson #186**).

---

## 2. The Four Basic Hockey-Stick Shapes

1.  **Long Call (`Buy CE`):**
    *   **Below Strike:** Flat horizontal floor at `-Premium` (capped maximum loss).
    *   **Above Strike:** Bends upward at `45°`, crossing the zero line at `Strike + Premium` into open-ended profit.
2.  **Short Call (`Sell CE`):**
    *   **Below Strike:** Flat horizontal ceiling at `+Premium` (capped maximum profit).
    *   **Above Strike:** Bends downward at `45°`, crossing the zero line into open-ended loss.
3.  **Long Put (`Buy PE`):**
    *   **Above Strike:** Flat horizontal floor at `-Premium` (capped maximum loss).
    *   **Below Strike:** Bends upward as underlying price drops, crossing zero at `Strike - Premium`.
4.  **Short Put (`Sell PE`):**
    *   **Above Strike:** Flat horizontal ceiling at `+Premium` (capped maximum profit).
    *   **Below Strike:** Bends downward as underlying price drops, crossing zero at `Strike - Premium` into heavy downside loss.

---

## 3. Why Learning Single-Leg Payoffs Matters

Every multi-leg option strategy you will build later in **Module 08** (bull call spreads, iron condors, straddles, protective collars) is simply the **vertical sum of two or more hockey-stick curves**. Once you can read the four single-leg shapes by sight, complex strategy payoffs become intuitive.

---

## 4. Key Takeaways

*   Single-leg option expiry payoffs form **hockey-stick shapes** that bend sharply at the **Strike Price**.
*   **Long options** have a **flat loss floor** (`-Premium`) and diagonal profit slope; **Short options** have a **flat profit ceiling** (`+Premium`) and diagonal loss slope.

---

## 5. Quick Self-Check

1.  On a **Long Call** expiry payoff diagram, why is the line completely flat for all expiry prices below the strike price?
2.  Where does the sharp bend ("kink") always occur on a single-leg option payoff graph?
3.  How does a **Short Put** payoff graph look compared to a **Long Put** payoff graph?
4.  
