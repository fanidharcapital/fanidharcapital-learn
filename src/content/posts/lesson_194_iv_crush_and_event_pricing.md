---
title: "Educational Series #194: IV Crush & Event Pricing — Why Option Buyers Can Lose Even When Direction Is Right"
description: "Understand how Implied Volatility builds up before earnings, RBI policy, or budget events and collapses immediately afterward (IV Crush)—causing option buyers to lose even on right-direction moves."
pubDatetime: 2026-11-24T20:15:00+05:30
tags:
  - Module 07
  - Options Market
---

In **Lesson #193**, we learned how Implied Volatility expands and contracts option premiums. In **Lesson #194**, we examine one of the most notorious traps in options trading: **IV Crush**—why an option buyer can correctly predict that a stock will rise on earnings, watch the stock gap up, and *still lose money* at the open!

![Educational Series #194: IV Crush & Event Pricing](/images/lessons/lesson-194.png)

---

## 1. How Event Pricing & IV Crush Happen

Before a known scheduled catalyst—such as **quarterly earnings**, an **RBI monetary policy decision**, **Union Budget**, or major **election/macro data**:

1.  **Pre-Event IV Expansion:** Uncertainty rises, so demand for Calls and Puts pushes **Implied Volatility (`IV`) sharply higher**. Option premiums swell with extra event extrinsic value.
2.  **The Event Hits & Uncertainty Vanishes:** As soon as the earnings numbers or policy decision are released, the unknown becomes known.
3.  **Post-Event IV Crush:** Because event uncertainty is now gone, **`IV` collapses abruptly** back toward normal levels—wiping out a huge chunk of extrinsic value across all strikes at the next market open.

---

## 2. Worked Example: Right Direction, Net Loss

Suppose a stock trades at **`₹1,000`** the afternoon before quarterly earnings:
*   Because event `IV` is heavily inflated, the **`₹1,000 ATM Call`** trades at **`₹65`** (`₹0` intrinsic + `₹65` event-inflated extrinsic value).
*   Next morning, the company reports solid results and the stock gaps up **`+3.5%` to `₹1,035`**.
*   At `₹1,035`, the `₹1,000 CE` now has **`₹35` of intrinsic value**, while post-earnings **IV crush** collapses remaining extrinsic value from `₹65` down to **`₹12`**.
*   New option price = `₹35 + ₹12 = ₹47`—meaning the Call buyer who bought at `₹65` is **down `-₹18` per share (`-27.7%`) despite the stock rallying `+3.5%`!**

---

## 3. How to Avoid Getting Burned by IV Crush

*   **Compare Implied Move vs. Realistic Move:** Before buying options into an event, check how large a move is already priced into the `ATM` premium—if the market is already pricing in a `6%` swing, a `3%` move won't pay off for a naked buyer.
*   **Wait for Post-Event Structure or Use Defined-Risk Spreads:** Later in **Module 08**, you will learn how debit spreads (buying one strike and selling a further strike) partially offset IV crush compared to naked option buying.

---

## 4. Key Takeaways

*   **IV Crush** is the rapid collapse of Implied Volatility immediately after a scheduled event removes uncertainty.
*   Naked option buyers entering right before earnings or major announcements can **lose money even when price moves in their predicted direction** if the move is smaller than what elevated `IV` already priced in.

---

## 5. Quick Self-Check

1.  Why does Implied Volatility typically **rise before** an earnings release and **drop sharply right after**?
2.  In the worked example (`₹1,000 CE` bought at `₹65` before earnings), why did the option fall to `₹47` even though the stock rose `+3.5%` to `₹1,035`?
3.  What must happen for a naked pre-earnings option buyer to actually profit after **IV crush** hits?
4.  
