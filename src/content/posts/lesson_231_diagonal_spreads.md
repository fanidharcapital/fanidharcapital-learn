---
title: "Educational Series #231: Diagonal Spreads (Poor Man's Covered Call / Put) — Combining Strike & Expiry Differences With Defined Risk"
description: "Learn how Diagonal Spreads work—combining a longer-dated deep-ITM option with a shorter-dated OTM option (Poor Man's Covered Call/Put) for capital efficiency, rolling income, and defined risk."
pubDatetime: 2026-11-25T10:10:00+05:30
tags:
  - Module 08
  - Option Greeks & Strategies
---

In **Lesson #230**, we explored Calendar Spreads using the **same strike** across different expiries. In **Lesson #231**, we combine **different strikes AND different expiries** to build **Diagonal Spreads**—most famously used as a **Poor Man's Covered Call (`PMCC`)** or **Poor Man's Covered Put (`PMCP`)**.

![Educational Series #231: Diagonal Spreads](/images/lessons/lesson-231.png)

---

## 1. How a Poor Man's Covered Call (`PMCC`) Is Constructed

Instead of buying `100` shares or a full futures contract and selling an `OTM` Call against it, a `PMCC` substitutes a **longer-dated deep-`ITM` Call** as a lower-capital stock surrogate:

*   **Buy 1 Longer-Dated Deep-`ITM` Call (`+CE`, e.g., `~0.75–0.85 Delta`, 1–3+ months out):** Moves closely with the underlying (`high Delta`), carries minimal extrinsic value, and caps downside loss.
*   **Sell 1 Shorter-Dated `OTM` Call (`-CE`, e.g., `~0.25–0.35 Delta`, current weekly/monthly cycle):** Collects rapid short-term **Theta decay** and lowers overall net debit.

*(A **Poor Man's Covered Put** mirrors this on the bearish side: buy a longer-dated deep-`ITM` Put and sell a shorter-dated `OTM` Put.)*

---

## 2. The Golden Rule: Strike Width $\ge$ Net Debit Paid

When structuring a `PMCC`, check the distance between your long strike ($K_{\text{long}}$) and short strike ($K_{\text{short}}$):

$$\text{Strike Width } (K_{\text{short}} - K_{\text{long}}) \ge \text{Net Debit Paid}$$

*   **Why This Matters:** If the underlying surges aggressively past $K_{\text{short}}$ before front expiry, you want the intrinsic spread width you capture to **exceed the net debit you paid**—otherwise a big rally in your favor could still result in a net loss!
*   **Rolling Income Potential:** If price stays below $K_{\text{short}}$ at front expiry, the short call expires worthless and you can sell another short call in the next cycle, progressively reducing your cost basis.

---

## 3. Key Takeaways

*   A **Diagonal Spread (`PMCC` / `PMCP`)** pairs a **longer-dated deep-`ITM` option** with a **shorter-dated `OTM` option**, delivering directional exposure plus rolling Theta income with far less capital than holding shares/futures.
*   Always verify that **Strike Width $\ge$ Net Debit Paid** so a sharp move past the short strike remains profitable.

---

## 4. Quick Self-Check

1.  How does a **Diagonal Spread** differ structurally from both a **Vertical Spread** and a **Calendar Spread**?
2.  In a **Poor Man's Covered Call**, why should the **strike width** ($K_{\text{short}} - K_{\text{long}}$) be at least equal to or greater than the **net debit paid**?
3.  What happens if the underlying stays just below the short call strike at front expiry?
