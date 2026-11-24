---
title: "Educational Series #178: Futures Case Studies (NSE Index & Stock) — End-to-End Walkthroughs With Margin, Basis & Risk"
description: "Walk through two end-to-end educational case studies—one NSE Index Future and one NSE Stock Future—combining structure, OI, basis, 1R lot sizing, margin buffer, and exit management."
pubDatetime: 2026-11-24T16:00:00+05:30
tags:
  - Module 06
  - Futures Market
---

In **Lesson #177**, we established daily loss limits and drawdown circuit breakers. In **Lesson #178**, we bring all concepts together through **two educational end-to-end walkthroughs**—one **NSE Index Future** trade and one **NSE Stock Future** trade—showing how structure, Open Interest, basis, `1R` sizing, margin headroom, and expiry rules work side by side.

![Educational Series #178: Futures Case Studies (NSE Index & Stock)](/images/lessons/lesson-178.png)

---

## Case Study 1: NSE Index Future (Trend Continuation Breakout)

*   **Account Capital & Risk Rule:** `₹6,00,000` total capital; `1%` risk per trade $\rightarrow$ **$1R = ₹6,000$**.
*   **Context & Confluence:**
    *   **Layer 1 (Price Structure):** Near-month Index Future consolidates beneath a multi-day resistance zone on the `15m`/`1H` chart, then breaks out cleanly and retests the breakout zone with higher lows.
    *   **Layer 2 (OI & Volume):** Volume expands on the breakout and Open Interest rises steadily (**Long Buildup**), confirming fresh institutional participation rather than mere short covering.
    *   **Layer 3 (Basis & Calendar):** 18 days remain to expiry; futures trade at a normal, steady carry premium over spot with tight `1–2` tick bid-ask spreads.
*   **Position Sizing & Margin Check:**
    *   Entry at `24,200`; structural stop-loss below retest swing low at `24,140` $\rightarrow$ **Stop Distance = `60` points**.
    *   Suppose lot size is `50` $\rightarrow$ **Risk Per 1 Lot** = $60 \times 50 = ₹3,000$.
    *   **Allowed Lots** = $\frac{₹6,000}{₹3,000} = 2\text{ lots}$.
    *   If margin per lot is `₹1,65,000`, 2 lots require `₹3,30,000`, leaving **`₹2,70,000` free cash buffer** for MTM swings and peak margin safety.
*   **Execution & Management:** Entered via marketable limit order on retest confirmation; `SL-L` placed below `24,140`; partial profit booked at `2R` (`+120` points) and remaining lot trailed below higher swing lows.

---

## Case Study 2: NSE Stock Future (Swing Setup With Expiry & Event Filter)

*   **Account Capital & Risk Rule:** `₹6,00,000` total capital; **$1R = ₹6,000$** (capped lower at `0.75R = ₹4,500` because it is a single-stock overnight swing trade).
*   **Pre-Trade Operational Checklist:**
    *   **Ban List & MWPL:** Stock is **not** in NSE F&O ban (MWPL utilization ~62%).
    *   **Event & Expiry Check:** No quarterly earnings scheduled for the next 3 weeks, and **16 trading days** remain until expiry—well clear of physical delivery margin hikes.
*   **Setup & Sizing:**
    *   Stock pulls back into prior breakout support at `₹1,500` on declining pullback volume, then prints a strong bullish rejection candle (**Layer 1**), while futures OI stabilizes and turns higher (**Layer 2**) with normal carry basis (**Layer 3**).
    *   Entry at `₹1,505`; structural stop below swing low at `₹1,490` $\rightarrow$ **Stop Distance = `₹15`**.
    *   Suppose lot size is `300` $\rightarrow$ **Risk Per 1 Lot** = $₹15 \times 300 = ₹4,500$.
    *   **Allowed Lots** = $\frac{₹4,500}{₹4,500} = 1\text{ lot}$ (never rounded up to 2 lots).
*   **Exit & Delivery Rule:** Target set at `1:2.2` (`₹1,538`); regardless of target status, rule requires exiting or rolling **at least 4–5 sessions before expiry** so physical delivery obligation is never triggered.

---

## Key Takeaways

*   Every futures trade integrates **three analytical layers** (Structure, OI, Basis) with **four operational checks** (`1R` lot math, cash buffer, ban/event status, and expiry/delivery rules).
*   Single-stock futures warrant **stricter overnight risk caps** and **mandatory pre-expiry exit/rollover discipline** due to gap and physical-delivery risks.

---

## Quick Self-Check

1.  In **Case Study 1**, why did the trader take `2 lots` instead of the `3 lots` their `₹6,00,000` margin balance could technically afford?
2.  In **Case Study 2**, why did the trader reduce their risk budget from `1R` (`₹6,000`) to `0.75R` (`₹4,500`) for a positional stock future?
3.  Which three non-chart checks were verified before entering the stock future in **Case Study 2**?
4.  
