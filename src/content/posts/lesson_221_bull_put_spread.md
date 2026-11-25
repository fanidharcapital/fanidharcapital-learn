---
title: "Educational Series #221: Bull Put Spread (Credit Put Spread) — Structure, Credit Collected, Support Buffer & Defined Downside Risk"
description: "Learn how a Bull Put Spread (Credit Put Spread) works—how to construct it, calculate credit collected, max profit, max loss, and breakeven, and use support buffers with defined downside risk."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lessons #219–#220**, we examined **debit spreads** where you pay money upfront. In **Lesson #221**, we shift to **credit spreads** with the **Bull Put Spread** (also called a **Credit Put Spread**)—a bullish-to-neutral income/defined-risk structure that collects a **net credit** upfront.

![Educational Series #221: Bull Put Spread](/images/lessons/lesson-221.png)

---

## 1. How a Bull Put Spread Is Constructed

Using the **same underlying and same expiry**:
*   **Sell 1 Higher-Strike Put (`-PE` at $K_{\text{high}}$):** Generates credit; benefits if price stays above $K_{\text{high}}$ and time decays.
*   **Buy 1 Lower-Strike Put (`+PE` at $K_{\text{low}}$):** Acts as protective downside wing—capping worst-case loss and reducing margin compared to a naked short put.

---

## 2. Payoff Math: Net Credit, Max Profit, Max Loss & Breakeven

Let $\text{Net Credit} = P_{\text{high}} - P_{\text{low}}$ (per unit) and $\text{Spread Width} = K_{\text{high}} - K_{\text{low}}$:

| Metric | Formula (Per Unit) | What Happens at Expiry |
| :--- | :--- | :--- |
| **Max Profit** | $\text{Net Credit}$ | Occurs if spot $\ge K_{\text{high}}$; both puts expire worthless and you keep full credit. |
| **Max Loss** | $\text{Spread Width} - \text{Net Credit}$ | Occurs if spot $\le K_{\text{low}}$; full spread width minus net credit collected. |
| **Breakeven** | $K_{\text{high}} - \text{Net Credit}$ | Spot level at expiry where short-put loss equals the net credit received. |

*   *Illustrative Example (1 lot = 50):* Sell `24,300 PE` at `₹95` and buy `24,100 PE` at `₹45` $\rightarrow$ **Net Credit = `₹50`** (`₹2,500` per lot), **Spread Width = `200`**, **Max Loss = `₹150`** (`₹7,500` per lot), **Breakeven = `24,250`**.

---

## 3. Support Buffer & Defined Downside Risk

*   **Support Cushion:** Placing the short put below a meaningful chart support zone or put-OI shelf gives the underlying room to wobble or consolidate without immediately breaching your short strike.
*   **Positive Theta & Negative Vega:** Typically benefits from **time decay** and **falling/contained `IV`**, while the long put caps tail risk if a sharp sell-off hits. Notice the asymmetry: **smaller max credit vs. larger max loss**—requiring disciplined stop rules and sizing.

---

## 4. Key Takeaways

*   A **Bull Put Spread** sells a higher put and buys a lower put in the **same expiry** for a **net credit**, profiting if price stays above breakeven.
*   The long put defines worst-case loss, while placing the short strike with chart/OI context creates a **support buffer**.

---

## 5. Quick Self-Check

1.  If you sell a `24,400 PE` for `₹80` and buy a `24,200 PE` for `₹35`, what are your **Net Credit**, **Max Profit**, **Max Loss**, and **Breakeven**?
2.  Why is the **max loss** on a credit spread typically larger than the **max profit** collected upfront?
3.  How does the bought lower put help compared to selling a put naked?
