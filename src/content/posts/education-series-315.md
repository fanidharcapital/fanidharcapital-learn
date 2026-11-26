---
title: "Education Series #315: Gamma Exposure, Pinning & Expiry-Day Pin Risk on Weekly & Monthly Contracts"
pubDatetime: 2026-11-26T10:12:04+05:30
description: "Understand how dealer gamma hedging, heavy open interest strikes, and zero-DTE gamma acceleration create strike pinning or sudden expiry-day squeezes."
tags:
  - education-series
  - module-11
  - gamma-exposure
  - pin-risk
  - expiry-day
---

![Gamma Exposure, Pinning & Expiry-Day Pin Risk](/images/lessons/lesson-315.png)

On weekly and monthly F&O expiry days, options behave very differently from mid-month sessions because **gamma**—the rate at which option delta changes for every 1-point move in spot—accelerates dramatically near ATM strikes in the final hours.

## Positive Gamma Pinning vs. Negative Gamma Squeezes

* **Strike Pinning (Positive Dealer Gamma):** When large option writers hold net long gamma around a major open-interest strike (for example, Nifty 24,500 with massive Call + Put OI), delta-hedging flows buy dips and sell rallies—pulling spot back toward that strike into the 3:30 PM close.
* **Gamma Squeeze (Negative Dealer Gamma):** If spot breaks cleanly beyond a crowded OI wall where sellers are short gamma, hedging requires buying into strength (or selling into weakness), fueling rapid one-way late-session acceleration.

## Managing Expiry-Day Pin Risk

1. **Close Short Strikes Near ATM Before 3:00 PM IST:** Holding a short option right at the spot price into settlement exposes you to last-minute tick swings or, in stock F&O, unexpected **physical delivery obligation** if an option finishes ITM by a few paise.
2. **Avoid Oversized Zero-DTE Naked Selling:** Low rupee premiums on expiry afternoon hide massive gamma leverage—a sudden 0.8% index move in the last 30 minutes can multiply option prices several times over.
3. **Watch OI Unwinding at Key Strikes:** Rapid drop in call OI at a resistance strike alongside rising spot price confirms short-covering pressure rather than pinning.

## Key Takeaways

* High open interest acts as a **magnet during calm positive-gamma sessions** and as **rocket fuel once breached**.
* Never leave near-the-money stock options open into monthly expiry close unless you intend to take or give physical delivery.

*Educational content only. Not investment advice or a recommendation to trade any security.*
