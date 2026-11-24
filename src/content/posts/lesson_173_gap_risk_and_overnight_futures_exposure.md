---
title: "Educational Series #173: Gap Risk & Overnight Futures Exposure — Why Stop-Losses Can Slip Past Levels at 9:15 AM IST"
description: "Understand why stop-loss orders cannot guarantee fills at your trigger price across overnight gaps at 9:15 AM IST, and how to size and filter overnight futures exposure."
pubDatetime: 2026-11-24T14:45:00+05:30
tags:
  - Module 06
  - Futures Market
---

In **Lesson #172**, we examined MWPL and F&O ban rules. In **Lesson #173**, we look closely at **Gap Risk and Overnight Futures Exposure**—specifically why a stop-loss order that works reliably intraday can slip far past your level when NSE/BSE opens at **9:15 AM IST**.

![Educational Series #173: Gap Risk & Overnight Futures Exposure](/images/lessons/lesson-173.png)

---

## 1. Why Stop-Losses Cannot Fill Inside a Gap

A stop-loss order (`SL-M` or `SL-L`) sits dormant until the market trades at or through your **trigger price**:

*   **Continuous Session:** During live market hours, price usually ticks sequentially through levels, allowing your stop trigger to fire near your intended price.
*   **Overnight Gap:** Between **3:30 PM IST** and **9:15 AM IST** the next morning, global indices, crude/currency moves, macro releases, or company earnings can reprice the underlying sharply.
*   If a stock future closes at `₹1,000` with your stop at `₹980`, and opens at **9:15 AM IST** at **`₹945`**, no trades occurred between `₹980` and `₹945`:
    *   An **`SL-M` (Stop-Loss Market)** order triggers immediately at `9:15 AM` and fills near `₹945`—turning a planned `₹20` (`1R`) stop into a **`₹55` (`2.75R`) loss**.
    *   An **`SL-L` (Stop-Loss Limit)** order whose limit price is above `₹945` (say `₹975`) **stays unfilled** while price potentially drops further.

---

## 2. How to Manage Overnight Gap Risk

1.  **Reduce Overnight Lot Size Relative to Intraday:** If a setup allows `3 lots` intraday, consider carrying only `1–2 lots` overnight so even a `2R–3R` gap stays within your account's pain threshold.
2.  **Avoid Holding Unhedged Futures Across Binary Events:** Do not carry naked stock futures across **company earnings announcements**, major regulatory verdicts, or high-impact macro events unless explicitly sized for worst-case gap scenarios.
3.  **Require Strong Structural Cushion:** Only carry positions overnight when your trade already has healthy open profit buffer or sits cleanly beyond major multi-session support/resistance—not perched one tick away from invalidation.

---

## 3. Key Takeaways

*   Stop-loss orders **cannot fill at prices that never traded** inside an overnight opening gap at **9:15 AM IST**.
*   `SL-M` fills at the gapped open price (larger loss), while `SL-L` risks remaining unfilled if price opens beyond its limit.
*   Control overnight exposure with **smaller overnight sizing**, **event avoidance**, and **structural cushion**.

---

## 4. Quick Self-Check

1.  Why does an `SL-M` order placed at `₹980` fill near `₹945` if the futures contract gaps down to `₹945` at 9:15 AM IST?
2.  What is the specific risk of using a tight **`SL-L` (Stop-Loss Limit)** order during a large adverse opening gap?
3.  Name two practical adjustments you can make before 3:30 PM IST to protect your account against overnight gap shocks.
4.  
