---
title: "Education Series #288: Earnings & Event Playbooks — Directional Spreads vs. Defined-Risk Range & Volatility Structures"
pubDatetime: 2026-11-26T09:30:00+05:30
description: "How to choose between debit spreads, credit spreads, and iron condors around quarterly earnings and corporate events to neutralize implied volatility crush."
tags:
  - education-series
  - module-10
  - earnings-playbook
  - options-strategies
  - implied-volatility
---

![Earnings & Event Playbooks](/image/lessons/lesson-288.png)

Quarterly earnings on heavyweights like Reliance, HDFC Bank, Infosys, or TCS routinely trigger 3%–7% overnight gaps. Buying naked ATM calls or puts ahead of results is one of the most common traps in options trading because implied volatility (IV) drops sharply the moment numbers are released—a phenomenon known as **IV crush**.

## Matching Structure to Your Event Thesis

| Market View | Preferred Defined-Risk Structure | Why It Works Around Events |
| :--- | :--- | :--- |
| **Moderately Bullish** | Bull Call Spread or Bull Put Credit Spread | Short leg offsets elevated pre-event IV and reduces net vega exposure |
| **Moderately Bearish** | Bear Put Spread or Bear Call Credit Spread | Caps downside/upside risk while neutralizing post-result IV drop |
| **Range-Bound / Overpriced Move** | Iron Condor or Iron Butterfly | Profits when the stock moves less than the option chain's implied move |
| **Post-Earnings Trend Continuation** | Single-leg option or debit spread *after* the gap | Enters once IV has already reset lower and post-earnings drift begins |

## Calculating the Option-Implied Expected Move

Before selecting any structure, add the prices of the ATM Call and ATM Put for the nearest expiry:

$$\text{Implied Move (\%)} \approx \frac{\text{ATM Call} + \text{ATM Put}}{\text{Spot Price}} \times 100$$

* If historical earnings moves average **3.5%** and the option chain is pricing **6.5%**, selling defined-risk premium (iron condor or credit spread) has a statistical volatility edge.
* If you expect a directional breakout, buying a **vertical debit spread** lowers your breakeven and protects you from paying inflated extrinsic value on the far leg.

## Risk Guardrails for Stock F&O Earnings

* Never hold **naked short straddles or strangles** across earnings on individual stocks—a single unexpected guidance shock can wipe out months of gains.
* Watch F&O lot sizes and liquidity in OTM strikes; widen wings only where bid-ask spreads remain tight.

*Educational content only. Not investment advice or a recommendation to trade any security.*
