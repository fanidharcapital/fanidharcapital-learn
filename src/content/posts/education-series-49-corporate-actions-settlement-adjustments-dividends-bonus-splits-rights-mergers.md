---
title: "Education Series #49: Corporate Actions & Settlement Adjustments — Dividends, Bonus, Splits, Rights & Mergers"
description: "Understand how corporate actions affect share prices, Demat holdings, and open F&O contracts in Indian markets. Learn the T+1 Ex-Date and Record Date rules, bonus/split price adjustments, Rights Entitlements (REs), and NSE/BSE F&O adjustment factors."
pubDatetime: 2026-11-22T18:20:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-49.png
tags:
  - exchanges-and-operations
  - module-02
  - corporate-actions
  - ex-date-record-date
  - bonus-stock-split
  - fo-adjustments
---

![Corporate Actions & Settlement Adjustments — Dividends, Bonus, Splits, Rights & Mergers](/images/lessons/lesson-49.png)

Welcome to **Lesson 49** of **Module 02: Exchanges & Operations** (**Lessons 31–60**) in the **Shree Fanidhar Capital Education Series**.

In **Lesson 42** and **Lesson 43**, you saw how **T+1 settlement** credits shares directly into your Demat account and how **NSDL / CDSL** maintain the master register of Beneficiary Owners (**BenPos**). Whenever a listed company announces a **Corporate Action**—such as a dividend, bonus issue, stock split, rights issue, or merger—the stock exchanges (`NSE` / `BSE`), Clearing Corporations (`NCL` / `ICCL`), and Depositories execute precise price, quantity, and contract adjustments so neither buyers nor sellers gain an unfair windfall.

Today, we unpack the exact **operational and settlement mechanics of Corporate Actions** across both Cash Equities and F&O contracts.

---

## 1. The T+1 Corporate Action Calendar: Cum-Date, Ex-Date & Record Date

Under India's **T+1 rolling settlement** regime, the **Ex-Date** and **Record Date** almost always fall on the **exact same calendar day** (unless a settlement holiday intervenes):

| Milestone Date | Meaning & Operational Rule | Who Receives the Corporate Benefit? |
| :--- | :--- | :--- |
| **Declaration Date** | Company Board approves the corporate action and notifies NSE/BSE. | Informational only—no ownership lock yet. |
| **Cum-Date (Ex-Date minus 1 trading day)** | The **last trading day** on which buying the stock entitles you to the corporate benefit. | Investors who buy on or before **Cum-Date** receive Demat credit on **T+1** (Record Date EOD) and qualify. |
| **Ex-Date / Record Date** | The day the stock begins trading **without ("Ex")** the corporate benefit, and the day the RTA pulls the Depository **BenPos** register at EOD. | Investors who buy **on or after Ex-Date** do **not** receive the benefit (their shares settle on **T+2**, after the Record Date). |

> **Golden Eligibility Rule:** To receive a dividend, bonus, stock split, or Rights Entitlement, you must **buy the shares at least one trading day *before* the Ex-Date** and hold them through the close of the **Cum-Date**.

---

## 2. How Cash Equity Prices & Demat Holdings Adjust on Ex-Date

On the morning of the **Ex-Date**, the exchange automatically adjusts the stock's **Base Price** (reference price for daily circuit limits) downward to reflect the value leaving the stock:

| Corporate Action | Impact on Share Price on Ex-Date | Impact on Demat Share Quantity | Tax / Cost-Basis Note |
| :--- | :--- | :--- | :--- |
| **Cash Dividend** (e.g., ₹20/share on a ₹1,000 stock) | Theoretical base price adjusts down by the dividend amount ($\approx ₹980$). | **Unchanged** (you keep the same number of shares). | Dividend credited directly to your registered bank account by the RTA. |
| **Bonus Issue** (e.g., **1:1** bonus — 1 free share per 1 held) | Price halves ($\text{Adjustment Factor} = 2$; ₹1,000 $\rightarrow$ ₹500). | **Doubles** (100 shares become 200 shares under the same ISIN). | Total portfolio value remains unchanged; cost basis is apportioned across total shares. |
| **Stock Split** (e.g., Face Value ₹10 split to ₹2 — **5:1**) | Price divides by 5 ($\text{Adjustment Factor} = 5$; ₹1,000 $\rightarrow$ ₹200). | **Multiplies by 5** (100 shares become 500 shares under a **new ISIN**). | Face value decreases proportionally; liquidity improves. |
| **Rights Issue** | Price adjusts based on the **Rights Ratio** and discounted **Issue Price**. | Tradable **Rights Entitlements (REs)** are temporarily credited to Demat under a separate RE ISIN. | You must either apply for shares using REs or sell the REs on the exchange before the RE trading window closes. |

*(Operational Note on Bonus / Split Credit Delay: While your share price drops on **Ex-Date**, the new bonus or split shares typically take **2 to 7 working days** to appear in your Demat account—during which your broker portal may temporarily display an unrealized drop until the RTA credits the new shares.)*

---

## 3. How F&O Contracts Adjust for Corporate Actions

What happens if you hold an open **Stock Futures** or **Stock Options** position across an Ex-Date? Exchanges ensure **zero artificial profit or loss** from corporate actions by applying an **Adjustment Factor** to **Strike Prices**, **Futures Base Prices**, and **Market Lot Sizes**:

### A. Bonus Issues & Stock Splits (Proportional Adjustment)
Suppose you hold **1 Lot of Stock A Futures** (Lot Size = **200**, Futures Price = **₹2,000**, Contract Value = **₹4,00,000**), and the company declares a **1:1 Bonus** ($\text{Adjustment Factor} = 2$):
* **New Futures Reference Price:** $\frac{₹2,000}{2} = \mathbf{₹1,000}$
* **New Option Strike Prices:** Every existing strike price is divided by **2** (e.g., the `2000 CE` becomes the `1000 CE`).
* **New Market Lot Size:** $200 \times 2 = \mathbf{400\text{ shares}}$
* **Total Contract Value:** $400 \times ₹1,000 = \mathbf{₹4,00,000}$ (**100% preserved!**)

### B. Ordinary vs. Extraordinary Dividends in F&O
SEBI and exchanges distinguish between regular dividends and **Extraordinary Dividends**:
* **Ordinary Dividend ($< 2\%$ of stock's market price):** **No F&O contract adjustment** is made (futures and option prices naturally price in expected ordinary dividends ahead of time).
* **Extraordinary Dividend ($\ge 2\%$ of stock's market price):** The full dividend amount is **subtracted directly from all Option Strike Prices and the previous day's Futures Settlement Price** on the Ex-Date, while the **Lot Size remains unchanged**.

---

## 4. Mergers, Demergers & Special Pre-Open Price Discovery

When a company undergoes a **Demerger** (spinning off a subsidiary) or a **Merger / Amalgamation**:
1. **Special Pre-Open Session (SPOS) on Ex-Date:** Instead of guessing the post-demerger price, NSE and BSE conduct a dedicated **1-hour Special Pre-Open Call Auction (9:00 AM – 10:00 AM)** on the Ex-Date (**Lesson 37**) to discover the fair equilibrium price of the parent company cleanly.
2. **F&O Contract Expiry / Re-Introduction:** For major mergers or demergers affecting F&O stocks, exchanges typically **expire existing F&O contracts early** on the day before the Ex-Date (settling them at that day's closing price) and introduce fresh F&O contracts on the restructured entity from the Ex-Date morning.

---

## Key Takeaways

* **Under T+1 settlement, Ex-Date and Record Date coincide on the same day**—meaning you must purchase shares on or before **Cum-Date (Ex-Date minus 1)** to qualify for any corporate benefit.
* **Share prices adjust downward on Ex-Date** to match cash payouts or share multiplication, keeping your net economic value neutral.
* **F&O contracts adjust automatically** via lot-size and strike-price multipliers for bonuses/splits, strike-price deductions for extraordinary dividends ($\ge 2\%$), and Special Pre-Open auctions for demergers.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
