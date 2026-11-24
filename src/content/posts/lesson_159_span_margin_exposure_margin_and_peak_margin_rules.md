---
title: "Educational Series #159: SPAN Margin, Exposure Margin & Peak Margin Rules — Exchange Risk Models & Shortfall Penalties"
description: "Understand how SPAN margin, exposure margin, and peak margin rules work on NSE/BSE, and how intraday and end-of-day margin snapshots affect compliance and shortfall penalties."
pubDatetime: 2026-11-24T11:15:00+05:30
tags:
  - Module 06
  - Futures Market
---

In **Lesson #158**, we covered upfront margin and leverage math. In **Lesson #159**, we look under the hood of exchange margin mechanics: **SPAN margin**, **exposure margin**, and **peak margin rules**. Understanding how these components add up and how margin is checked across the trading day helps you avoid unexpected margin shortfalls and penalties.

![Educational Series #159: SPAN Margin, Exposure Margin & Peak Margin Rules](/images/lessons/lesson-159.png)

---

## 1. Core Margin Components in Derivatives

When you take a futures position on Indian exchanges, total margin requirements combine risk components designed to cover normal volatility plus tail/concentration risk:

1.  **SPAN / Value-at-Risk (VaR) Risk Margin:** Models potential portfolio loss across price and volatility scenarios over a defined lookback/horizon per clearing-corporation methodology.
2.  **Exposure Margin:** An additional margin layer collected over and above risk/SPAN margin to buffer against sharp market moves, basis shifts, or concentration risks.
3.  **Additional / Special / Delivery Margins:** Extra margins imposed by exchanges or clearing corporations during heightened volatility, specific surveillance/ban conditions, or physical delivery windows.

---

## 2. How Peak Margin & Margin Shortfall Rules Work

Under SEBI/clearing-corporation margin frameworks:

*   **Intraday Snapshots:** Exchanges take multiple random **intraday margin snapshots** during market hours to capture your **peak margin requirement** for the day, alongside end-of-day margin checks.
*   **Why Intraday Peaks Matter:** Even if you square off a trade before 3:30 PM, holding an oversized intraday position during a snapshot sets a high peak requirement. If your available margin dips below the required margin at snapshot or end-of-day checks, **shortfall reporting and exchange penalties** can apply.

---

## 3. Practical Margin Buffer Habits

*   **Avoid Trading Right on the Edge:** If your available margin is `₹2,05,000` and a position needs `₹2,00,000`, a small adverse price move or volatility jump can push required margin above available funds.
*   **Watch Volatility & Expiry Shifts:** Margin requirements are dynamic—they can rise when volatility spikes or when expiry/delivery rules take effect. Keep headroom in your account.

---

## 4. Key Takeaways

*   Total futures margin combines **risk/SPAN margin**, **exposure margin**, and any applicable **additional/special/delivery margins**.
*   Margin is monitored across **intraday snapshots (peak margin)** and end-of-day settlement—not just at market close.
*   Maintaining **margin headroom** protects you from shortfalls, penalties, and forced risk square-offs.

---

## 5. Quick Self-Check

1.  What is the general purpose of **exposure margin** alongside base risk/SPAN margin?
2.  Why can a trader face a **peak margin shortfall** even if they close a position before the market closes at 3:30 PM?
3.  Why is operating with zero spare margin risky during volatile sessions or expiry week?
4.  
