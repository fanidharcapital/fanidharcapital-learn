---
title: "Education Series #314: Term Structure Trading — Calendar Spreads, Double Calendars & Event Kinks"
pubDatetime: 2026-11-26T10:12:03+05:30
description: "Trade across expirations using horizontal calendar and double-calendar spreads to exploit event-driven IV kinks and differential theta decay."
tags:
  - education-series
  - module-11
  - term-structure
  - calendar-spreads
  - double-calendar
---

![Term Structure Trading — Calendar Spreads, Double Calendars & Event Kinks](/images/lessons/lesson-314.png)

While skew compares IV across *strikes* on the same date, **term structure** compares ATM IV across *different expiration dates* (current weekly, next weekly, and monthly expiries).

## Contango vs. Backwardation in Option Term Structure

* **Normal Contango (Upward Slope):** Longer-dated monthly options carry higher IV than near-term weekly options because more uncertainty can unfold over 30 days than over 5 days.
* **Event Backwardation (Inverted Kink):** When an RBI policy decision, Union Budget, or major global CPI print sits inside the front weekly expiry, front-week IV spikes above next-week IV.

## Structuring Calendar & Double-Calendar Spreads

1. **ATM Calendar Spread:** Sell the front-expiry ATM option (where theta decay is fastest and event IV is elevated) and buy the next-expiry ATM option at the same strike.
   * *Best When:* You expect spot to stay near the strike through front expiry and front-week IV to normalize afterward.
2. **Double Calendar Spread:** Sell an OTM put and OTM call in the front expiry, and buy the same OTM strikes in the next expiry—widening your profit tent across a broader expected range.

## Risk Controls for Horizontal Spreads

* **Large Spot Trend Risk:** A sharp directional breakout far past your strikes collapses the value of the spread; exit if spot breaches your pre-defined range boundaries.
* **Vega Sensitivity:** Remember that a calendar spread is **net long vega** on the back month—if overall market IV crashes across *all* expiries simultaneously, back-month vega loss can offset front-month theta gains.

## Key Takeaways

* Calendar spreads work best when **front-month IV is unusually elevated relative to back-month IV** and spot remains contained.
* Always verify liquidity and bid-ask spreads in the next-week or monthly leg before entering.

*Educational content only. Not investment advice or a recommendation to trade any security.*
