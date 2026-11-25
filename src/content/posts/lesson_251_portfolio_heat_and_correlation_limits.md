---
title: "Educational Series #251: Portfolio Heat & Correlation Limits — Managing Overlapping Index, Sector & F&O Exposure"
description: "Control portfolio-wide risk—calculate total Portfolio Heat across open positions, spot hidden correlations across Nifty, Bank Nifty, and sector stocks, and enforce exposure caps."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 09
  - Risk & Psychology
---

In **Lesson #250**, we sized individual trades to `1R`. In **Lesson #251**, we zoom out to the **entire portfolio**—showing how **Portfolio Heat** and **Correlation Limits** prevent five "separate" `1.5R` trades from turning into one massive `7.5R` loss during a broad market shock.

![Educational Series #251: Portfolio Heat & Correlation Limits](/images/lessons/lesson-251.png)

---

## 1. Measuring & Capping Total Portfolio Heat

**Portfolio Heat** is the **sum of open `1R` risk** across all active positions if every open trade hit its stop-loss simultaneously:

$$\text{Total Portfolio Heat} = \sum (\text{Open Risk per Position})$$

*   *Example:* Holding `4` open trades each risking `1.5%` of capital equals **`6.0%` Portfolio Heat**. Setting a hard ceiling—such as **`4% to 6%` maximum total heat** (or `3R–4R` open risk)—ensures that even a sudden broad market gap cannot inflict a double-digit drawdown in one day.
*   *Trailing Stops Free Up Heat:* Once a trade moves in your favor and you trail its stop-loss to **breakeven**, its open downside risk drops toward `0R`, freeing room for a new setup.

---

## 2. Managing Hidden Correlation Across NSE/BSE & F&O

*   **Correlation Spikes in Sell-Offs:** Holding long trades simultaneously in **Nifty Futures, Bank Nifty Call Spreads, HDFC Bank, and ICICI Bank** is *not* four independent bets—in a macro or RBI rate surprise, all four move together.
*   **Practical Correlation & Bucket Caps:**
    *   Cap maximum risk in any **single sector or index theme** (e.g., max `2R` in Financials or IT at once).
    *   Combine **cash equity + futures + options delta/defined-loss exposure** into one unified heat sheet so leveraged F&O trades are never counted separately from stock holdings.

---

## 3. Key Takeaways

*   **Portfolio Heat** measures your combined worst-case open risk across all active positions—keep it capped within strict limits.
*   Treat overlapping **indices, sector stocks, and F&O positions** as **correlated exposure** rather than independent bets.

---

## 4. Quick Self-Check

1.  If you have **`3` open stock positions** each risking `₹6,000` and **`1` option spread** with `₹7,000` defined max loss on a `₹5,00,000` account, what is your current **Portfolio Heat** in rupees and percentage?
2.  Why do **Nifty, Bank Nifty, and frontline banking stocks** behave like a single correlated bet during sharp market sell-offs?
3.  How does moving a stop-loss to **breakeven** on a winning trade affect your available Portfolio Heat?
