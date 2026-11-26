---
title: "Education Series #341: Case Study — Term Structure Event Kink & Calendar Spread Execution"
pubDatetime: 2026-11-26T11:14:10+05:30
description: "Trace how a front-expiry IV spike ahead of a scheduled event creates a term-structure kink suited to a calendar spread—and where spot risk lies."
tags:
  - education-series
  - module-12
  - case-study
  - term-structure
  - calendar-spreads
---

![Case Study — Term Structure Event Kink & Calendar Spread Execution](/images/lessons/lesson-341.png)

When an upcoming scheduled catalyst falls inside the **current weekly expiry** while next week or the monthly expiry has no immediate catalyst, **front-expiry IV** can jump well above **back-expiry IV**.

## Case Walkthrough: Event Kink Around a Strike Zone

* **Term Structure Read:** Front-week ATM IV sits noticeably higher than next-week ATM IV, and spot is trading near a well-defined pivot strike.
* **Structure Choice:** Selling the front-expiry strike and buying the next-expiry strike (**calendar spread**) takes advantage of faster front-leg decay and potential front-IV normalization if spot stays reasonably contained near the strike.
* **Key Watchouts:** If spot breaks sharply away from the strike—or if a broad volatility shock lifts *all* expiries unexpectedly—the spread's value can deteriorate quickly, requiring disciplined exit rules.

## Key Execution Lessons

* **Compare Front vs. Back IV Before Entering:** Calendar spreads make the most structural sense when front-week IV is elevated relative to back-week IV.
* **Pre-Plan Range Exit Rules:** Know at what spot move or spread loss you will exit rather than hoping a runaway trend snaps back.

*Educational content only. Not investment advice or a recommendation to trade any security.*
