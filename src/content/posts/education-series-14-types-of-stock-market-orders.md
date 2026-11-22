---
title: "Education Series #14: Types of Stock Market Orders — Market, Limit, Stop-Loss & More"
description: "Learn how Market Orders, Limit Orders, Stop-Loss Orders (SL & SL-M), GTT, and AMO work on NSE and BSE—and when to use each order type to control execution price and manage downside risk."
pubDatetime: 2026-11-21T20:40:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-14.png
tags:
  - market-foundations
  - order-types
  - market-order
  - limit-order
  - stop-loss
---
Welcome to **Lesson 14** of **Module 01: Market foundation** (**Lessons 01–30**) in the **Shree Fanidhar Capital Education Series**.

![Types of Stock Market Orders — Market, Limit, Stop-Loss & More](/images/lessons/lesson-14.png)

Knowing *which* stock to buy is only half the equation; knowing **how to place your order** determines the exact price you pay, whether your trade gets filled, and how well you protect yourself against sudden price drops.

On Indian stock exchanges (**NSE** and **BSE**), every buy or sell instruction you send through your broker app uses a specific **Order Type**. Choosing the wrong order type in a fast-moving or thinly traded stock can cost you several percentage points in avoidable slippage.

---

## 1. Market Order (Immediate Execution at Best Available Price)

A **Market Order** instructs your broker to buy or sell a stock **immediately at whatever best price is currently available** in the exchange order book.

* **Priority:** **Speed / Certainty of Execution** over price control.
* **How It Fills:**
  * A **Market Buy** matches against the lowest available **Ask** price(s).
  * A **Market Sell** matches against the highest available **Bid** price(s).
* **Best Used When:** Trading highly liquid large-cap stocks (like NIFTY 50 constituents) with tight Bid-Ask spreads where immediate entry or exit matters more than ₹0.05–₹0.20 price differences.
* **Key Risk (Slippage):** In illiquid small-caps or during sudden news spikes, a Market Order can sweep through multiple order-book levels and execute at a much worse price than the Last Traded Price (LTP). *(Note: Exchanges also apply Market Price Protection / dynamic price bands to prevent extreme freak trades).*

---

## 2. Limit Order (Full Control Over Execution Price)

A **Limit Order** lets you specify the **exact maximum price you are willing to pay** (when buying) or the **minimum price you are willing to accept** (when selling).

* **Priority:** **Price Control** over guaranteed execution.
* **How It Works:**
  * **Buy Limit Order:** Placed **at or below** the current market price. Example: Stock LTP is ₹505; you place a Buy Limit at **₹495**. The order executes *only* if the price drops to ₹495 or lower.
  * **Sell Limit Order:** Placed **at or above** the current market price. Example: Stock LTP is ₹505; you place a Sell Limit at **₹520**. The order executes *only* if the price rises to ₹520 or higher.
* **Best Used When:** Accumulating stocks at target entry levels, booking profits at target prices, or trading mid-cap/small-cap stocks with wide Bid-Ask spreads.
* **Key Risk:** If the market price never reaches your limit price, the order remains pending and expires unexecuted at 3:30 PM IST.

---

## 3. Stop-Loss Orders (SL and SL-M)

A **Stop-Loss (SL) Order** is a conditional risk-management order that stays dormant in the exchange system until the stock touches a predefined **Trigger Price**. Once triggered, it becomes an active sell (or buy) order to cap your loss.

Indian brokers offer two variants:

### A. SL-Limit Order (`SL`)
Requires **two prices**: a **Trigger Price** and a **Limit Price**.
* **Example (Protecting a Long Position):** You bought a stock at **₹1,000**. You set a Sell SL order with **Trigger Price = ₹950** and **Limit Price = ₹945**.
  * Once the stock trades at or below **₹950**, your Sell Limit order at **₹945** is released to the exchange.
  * It will execute at any available Bid between **₹950 and ₹945**, protecting you from selling below ₹945 during a momentary flash spike.
  * **Risk:** If the stock gaps down straight from ₹952 to ₹935, the order triggers at ₹950 but remains **unfilled** because the market is below your ₹945 limit.

### B. SL-Market Order (`SL-M`)
Requires **only one price**: the **Trigger Price**.
* Once the Trigger Price is hit, it immediately fires a **Market Order** to exit at the best available Bid.
* **Advantage:** Virtually guarantees exit once triggered.
* **Risk:** Susceptible to slippage if liquidity is thin when triggered. *(Note: Exchanges restrict SL-M orders in certain segments like stock options to prevent freak executions; SL-Limit is standard across all segments).*

---

## 4. Other Essential Order Types & Validities in India

Beyond Market, Limit, and Stop-Loss, modern Indian trading platforms offer specialized order instructions:

* **GTT (Good Till Triggered):** Standard exchange orders expire at **3:30 PM IST** if unfilled. A **GTT order** stays active on your broker's server for up to **1 year** (until triggered, executed, or canceled)—ideal for long-term investors setting target buy zones, profit targets, or trailing stop-losses without re-entering orders daily.
* **AMO (After Market Order):** Allows you to place buy or sell orders **after market hours** (typically between 3:45 PM and 8:57 AM IST) so your order is automatically queued for the next trading session's opening.
* **Order Validity — DAY vs. IOC:**
  * **DAY (Regular):** Remains open until executed or until market close at 3:30 PM IST.
  * **IOC (Immediate or Cancel):** Executes whatever quantity is immediately available at your specified price and cancels any unfilled balance right away.
* **Product Codes — CNC vs. MIS:**
  * **CNC (Cash and Carry):** For **equity delivery** trades where you pay 100% upfront and hold shares in your Demat account.
  * **MIS (Margin Intraday Square-off):** For **intraday** trades that must be squared off before market close (typically around 3:15–3:20 PM IST) or else auto-squared off by the broker.

---

## 5. Quick Decision Matrix

| Order Type | You Control | Execution Guarantee? | Best Use Case |
| :--- | :--- | :--- | :--- |
| **Market Order** | Speed (Immediate) | **Yes** (subject to circuit/band) | Urgent entry/exit in highly liquid large-cap stocks. |
| **Limit Order** | Exact Price | **No** (fills only at limit or better) | Disciplined buying/selling and illiquid stocks. |
| **SL-Limit (`SL`)** | Trigger + Worst Fill Price | **No** (can skip in sharp gaps) | Controlled stop-loss exits without freak slippage. |
| **SL-Market (`SL-M`)** | Trigger Price Only | **High** (executes as market order) | Guaranteed stop-loss exit in liquid stocks/indices. |
| **GTT Order** | Long-Term Trigger + Limit | **No** (triggers within 1 year) | Positional target entries, profit booking, or multi-month SL. |

---

## Key Takeaways

* **Default to Limit Orders for discipline:** Unless you urgently need immediate execution in a highly liquid stock, a **Limit Order** protects you from Bid-Ask spread slippage.
* **Always respect the Trigger vs. Limit rule in `SL` orders:** For a Sell Stop-Loss, keep the **Limit Price slightly below the Trigger Price** (e.g., Trigger ₹950, Limit ₹945) so the order has room to fill in a falling market.
* **Match Product Type to Holding Horizon:** Choose **CNC** when buying shares to hold overnight or long term in your Demat account, and **MIS** only for same-day intraday trades.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
