---
title: "Education Series #320: Part 2 Review — Volatility & Greeks Decision Framework"
pubDatetime: 2026-11-26T10:12:09+05:30
description: "Synthesize Realized vs. Implied Volatility, IVR/IVP, skew, term structure, gamma risk, and theta-vega trade-offs into a single pre-trade options checklist."
tags:
  - education-series
  - module-11
  - part-2-review
  - volatility-framework
  - options-greeks
---

![Part 2 Review — Volatility & Greeks Decision Framework](/images/lessons/lesson-320.png)

Lessons `#311` through `#319` give you a complete volatility lens for structuring options trades on Indian indices and F&O stocks. Rather than picking strikes at random, run every options idea through this **five-step Volatility & Greeks filter**.

## Five-Step Pre-Trade Options Selection Filter

1. **Check Volatility Level (IV vs. 20-Day HV, IVR & IVP):**
   * Is extrinsic value rich (IVR/IVP > 60%) or compressed (IVR/IVP < 25%)?
2. **Inspect Skew & Term Structure:**
   * Are OTM puts priced far richer than calls (steep put skew)? Is the front weekly expiry inverted above next week due to an upcoming catalyst?
3. **Choose Expiration Horizon (DTE) for Your Dominant Greek:**
   * Select **15–30 DTE** for balanced theta decay, **30–45 DTE** for directional/long-vega swings, and handle **0–5 DTE** strictly with defined risk and tight gamma awareness.
4. **Match Structure to Thesis:**
   * *Directional + Low IV:* Vertical Debit Spread or Backspread.
   * *Directional + High IV:* Vertical Credit Spread (selling the rich skew side).
   * *Range + High IV:* Iron Condor / Iron Butterfly.
   * *Event Term-Structure Kink:* Calendar or Double Calendar Spread.
5. **Pre-Define Adjustment & Hard Stop Levels:**
   * Know in advance whether you will roll an untested side, roll out for a credit, or exit outright at a fixed rupee loss.

## Part 2 Self-Check Questions

* Can you explain why **IV Percentile** is less distorted by a single 1-day VIX spike than **IV Rank**?
* Do you check **front-week vs. next-week IV** before buying single-leg options ahead of RBI policy or earnings?
* Are all your short-option structures **defined-risk** with clear gamma and expiry-pin controls?

With **Part 2 (`#311`–`#320`)** complete, you are ready for the final stretch of Module 11: **Part 3: Quantitative Discipline, Systematic Rules & Advanced Frameworks (`#321`–`#330`)**.

*Educational content only. Not investment advice or a recommendation to trade any security.*
