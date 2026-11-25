---
title: "Educational Series #208: Option Market Case Studies (Index & Stock) — End-to-End Walkthroughs of Strike Selection, Payoff & Risk"
description: "Walk through two end-to-end educational case studies—one Index Option setup and one Stock Option setup—covering structure, OI/IV context, strike selection, breakeven, and risk management."
pubDatetime: 2026-11-25T09:20:00+05:30
tags:
  - Module 07
  - Options Market
---

In **Lesson #207**, we combined price action with option-chain and volatility context. In **Lesson #208**, we put everything together across **two end-to-end educational case studies**—one **Index Option** trade and one **Stock Option** trade—walking through structure, OI/IV checks, strike selection, breakeven math, and risk controls.

![Educational Series #208: Option Market Case Studies (Index & Stock)](/images/lessons/lesson-208.png)

---

## Case Study 1: Index Option (Bullish Breakout After Retest)

*   **Account & Risk Rule:** `₹5,00,000` capital; `1%` risk per trade $\rightarrow$ **$1R = ₹5,000$**.
*   **Lens 1 — Chart Structure:** Nifty Index breaks above a multi-session consolidation ceiling on the `15m`/`1H` chart and holds a higher-low retest above support (`24,500` zone).
*   **Lens 2 — Option Chain (`OI` / `ΔOI`):** Strong **Put writing** builds around `24,400–24,500` support, while `24,600` Call OI sees covering/shift higher as price holds above the breakout zone.
*   **Lens 3 — Volatility & `DTE`:** Normal India VIX regime; `6` trading days to expiry—enough runway for a timely multi-session move without zero-DTE chaos.
*   **Strike Selection, Breakeven & Sizing:**
    *   Spot is at `24,540`; trader selects the **`24,550 ATM CE`** at **`₹125`** (lot size `50` $\rightarrow$ `₹6,250` premium per lot).
    *   **Breakeven at Expiry:** `24,550 + 125 = 24,675` (before transaction costs).
    *   Sets a structural/premium stop-loss at `₹75` (`ΔP_opt = ₹50` per unit) $\rightarrow$ **Risk per 1 lot** = `₹50 × 50 = ₹2,500`.
    *   **Position Size:** `₹5,000 ÷ ₹2,500 = 2 lots` (`₹12,500` total premium outlay, matching `1R` stop risk).
*   **Management:** Exits if price loses the retest structure / hits the `₹75` stop (`-1R`), or scales/takes profit as momentum reaches target before expiry decay accelerates.

---

## Case Study 2: Stock Option (Bearish Breakdown With Expiry & Delivery Filter)

*   **Account & Risk Rule:** `₹5,00,000` capital; **$1R = ₹5,000$** (capped at `0.75R = ₹3,750` for a single-stock swing trade).
*   **Lens 1 — Chart Structure:** A liquid NSE F&O stock breaks down below a major daily/hourly support shelf at `₹1,200` with lower highs and bearish follow-through.
*   **Lens 2 — Option Chain & Calendar:** Call OI builds above `₹1,200` resistance; **14 trading days** remain to monthly expiry (avoiding expiry-week delivery margin hikes), no earnings shock scheduled for the next two weeks, and the stock is **not** in F&O ban.
*   **Strike Selection, Breakeven & Sizing:**
    *   Spot is at `₹1,192`; trader selects the **`₹1,200 ITM PE`** (or **`₹1,190 ATM PE`**) at **`₹32`** (lot size `250` $\rightarrow$ `₹8,000` debit per lot).
    *   **Breakeven at Expiry:** `1,200 - 32 = ₹1,168` (before transaction costs).
    *   Sets a stop-loss at `₹17` (`ΔP_opt = ₹15` per unit) $\rightarrow$ **Risk per 1 lot** = `₹15 × 250 = ₹3,750`.
    *   **Position Size:** `1 lot` (`₹3,750` risk within `0.75R` cap).
*   **Settlement & Exit Rule:** Because single-stock options are **physically settled**, the trader sets a hard rule to **square off the position before expiry week**—never holding an `ITM` stock option into expiry settlement.

---

## Key Takeaways

*   A disciplined option trade links **Chart Structure**, **Option Chain `OI`/`ΔOI`**, and **`IV`/`DTE`/Expiry Rules** to exact **breakeven math** and **`1R` sizing**.
*   Single-stock option trades require explicit checks for **monthly expiry distance, earnings/ban status, and pre-expiry square-off** to avoid physical delivery.

---

## Quick Self-Check

1.  In **Case Study 1**, why did the trader size to **`2 lots`** based on the `₹50` option stop-loss (`₹2,500` per lot) rather than buying as many lots as `₹5,00,000` could fund?
2.  What is the expiry breakeven price (before costs) for the **`₹1,200 PE`** bought at **`₹32`** in **Case Study 2**?
3.  Why did the trader in **Case Study 2** commit to closing the stock option ahead of expiry week?
4.  
