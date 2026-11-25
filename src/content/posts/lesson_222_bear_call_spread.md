---
title: "Educational Series #222: Bear Call Spread (Credit Call Spread) — Structure, Credit Collected, Resistance Buffer & Defined Upside Risk"
description: "Learn how a Bear Call Spread (Credit Call Spread) works—how to construct it, calculate credit collected, max profit, max loss, and breakeven, and use resistance buffers with defined upside risk."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lesson #221**, we explored the bullish **Bull Put Spread**. In **Lesson #222**, we look at the bearish-to-neutral credit counterpart: the **Bear Call Spread** (or **Credit Call Spread**)—collecting a **net credit** upfront when you expect price to stay below or pull back from a resistance zone.

![Educational Series #222: Bear Call Spread](/images/lessons/lesson-222.png)

---

## 1. How a Bear Call Spread Is Constructed

Using the **same underlying and same expiry**:
*   **Sell 1 Lower-Strike Call (`-CE` at $K_{\text{low}}$):** Collects premium; benefits if spot stays below $K_{\text{low}}$ and time erodes extrinsic value.
*   **Buy 1 Higher-Strike Call (`+CE` at $K_{\text{high}}$):** Caps upside risk if price rallies past $K_{\text{high}}$, keeping risk defined and margin lower than a naked short call.

---

## 2. Payoff Math: Net Credit, Max Profit, Max Loss & Breakeven

Let $\text{Net Credit} = P_{\text{low}} - P_{\text{high}}$ (per unit) and $\text{Spread Width} = K_{\text{high}} - K_{\text{low}}$:

| Metric | Formula (Per Unit) | What Happens at Expiry |
| :--- | :--- | :--- |
| **Max Profit** | $\text{Net Credit}$ | Occurs if spot $\le K_{\text{low}}$; both calls expire worthless and you keep full credit. |
| **Max Loss** | $\text{Spread Width} - \text{Net Credit}$ | Occurs if spot $\ge K_{\text{high}}$; full spread width minus net credit collected. |
| **Breakeven** | $K_{\text{low}} + \text{Net Credit}$ | Spot level at expiry where short-call loss equals the net credit received. |

*   *Illustrative Example (1 lot = 50):* Sell `24,700 CE` at `₹90` and buy `24,900 CE` at `₹40` $\rightarrow$ **Net Credit = `₹50`** (`₹2,500` per lot), **Spread Width = `200`**, **Max Loss = `₹150`** (`₹7,500` per lot), **Breakeven = `24,750`**.

---

## 3. Resistance Buffer & Defined Upside Risk

*   **Resistance Cushion:** Anchoring the short call above a clear chart resistance zone or call-OI ceiling gives a buffer against minor upside noise.
*   **Upside Breakout Risk:** Because a Bear Call Spread is short a call, a **strong upside breakout** pushes spot toward/past breakeven and max loss—so defined wing protection plus clear stop/exit rules remain essential.

---

## 4. Key Takeaways

*   A **Bear Call Spread** sells a lower call and buys a higher call in the **same expiry** for a **net credit**, profiting if spot remains below breakeven.
*   Placing the short call near resistance provides a buffer, while the long call defines maximum upside risk.

---

## 5. Quick Self-Check

1.  If a Bear Call Spread brings in a **net credit of `₹45`** across a **`200`-point** spread (`24,800 CE` short / `25,000 CE` long), what are the **Max Profit**, **Max Loss**, and **Breakeven**?
2.  What happens if the underlying index stages a sharp rally well above **`25,000`** by expiry?
3.  Why is placing the short call blindly with zero attention to chart resistance risky even with a wing bought?
