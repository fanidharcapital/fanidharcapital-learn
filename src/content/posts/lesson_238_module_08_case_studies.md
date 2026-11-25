---
title: "Educational Series #238: Module 08 Case Studies (Directional & Range) — End-to-End Walkthroughs of Spreads & Hedged Setups"
description: "Walk through three complete end-to-end Module 08 option case studies—a Bull Call Spread trend trade, an Iron Condor range setup, and a Protective Collar equity/futures hedge."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lessons #211–#237**, you learned the Greeks, vertical spreads, range strategies, hedging structures, and risk rules. In **Lesson #238**, we bring them together in **three end-to-end case studies**—showing how regime, strike selection, `1R` sizing, and exit rules connect in practice.

![Educational Series #238: Module 08 Case Studies](/images/lessons/lesson-238.png)

---

## 1. Case Study A: Bull Call Spread in a Breakout Trend (Low/Normal `IV`)

*   **Context:** Nifty breaks above a multi-day resistance level at `24,500` with strong breadth and **low `India VIX` (`~11.5`)**. Target zone is `24,700`; invalidation is a close back below `24,420`.
*   **Structure (`Lot Size = 50`):** Buy `24,500 CE` at `₹135` + Sell `24,700 CE` at `₹55` $\rightarrow$ **Net Debit = `₹80`** (`₹4,000` max loss per lot), **Max Profit = `₹120`** (`₹6,000` per lot), **Breakeven = `24,580`**.
*   **Risk & Exit Plan:** With a `₹8,000` `1R` budget, trader enters **2 lots** (max risk `₹8,000`). Exit plan: book profit near `24,700` (`~75%–85%` of max spread width) or exit immediately if spot closes below `24,420`.

---

## 2. Case Study B: Iron Condor in a Range-Bound Market (Elevated `IV`)

*   **Context:** Ahead of a scheduled policy week, `India VIX` is elevated (`~16.5`), while Nifty has spent two weeks oscillating between clear support at `24,200` and resistance at `24,800`.
*   **Structure (`Lot Size = 50`):** Buy `24,000 PE` / Sell `24,200 PE` (credit `₹38`) + Sell `24,800 CE` / Buy `25,000 CE` (credit `₹37`) $\rightarrow$ **Total Credit = `₹75`** (`₹3,750` max profit per lot), **Wing Width = `200`**, **Max Loss = `₹125`** (`₹6,250` per lot).
*   **Risk & Exit Plan:** With a `₹6,250` `1R` budget, trader enters **1 lot**. Exit plan: close early at **`60%` of credit (`₹45` profit)** post-event `IV` crush, or exit at a hard stop if buyback cost reaches `₹150` (`₹75` net loss) or price breaks out past `24,200` / `24,800`.

---

## 3. Case Study C: Protective Collar on a Stock / Futures Holding

*   **Context:** Investor holds `1` market lot equivalent (`500` shares) of a large-cap stock trading at `₹1,200` ahead of quarterly results, wanting crash protection without paying heavy net premium.
*   **Structure:** Buy `1` lot `1,160 PE` at `₹18` + Sell `1` lot `1,260 CE` at `₹16` $\rightarrow$ **Net Debit = `₹2` per share** (`₹1,000` total cost).
*   **Result:** Downside is floored at `₹1,160` (`-3.3%` max drop), upside is capped at `₹1,260` (`+5.0%` gain), and lot size matches shares `1:1`.

---

## 4. Key Takeaways

*   Every clean multi-leg trade follows the same chain: **Market Structure + `IV` Regime $\rightarrow$ Matching Strategy $\rightarrow$ S/R Strikes $\rightarrow$ `1R` Lot Size $\rightarrow$ Pre-Defined Exit**.

---

## 5. Quick Self-Check

1.  In **Case Study A**, why did low `India VIX` favor a **Bull Call Debit Spread** rather than selling a naked option?
2.  In **Case Study B**, how did elevated `India VIX` and the `24,200–24,800` support/resistance channel guide strike placement and profit-taking?
3.  In **Case Study C**, how did selling the `1,260 CE` help finance the downside `1,160 PE` protection?
