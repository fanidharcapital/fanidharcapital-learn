---
title: "Education Series #01: Anatomy of Indian Equity Markets & T+1 Settlement"
description: "How Indian stock exchanges, brokers, clearing corporations, depositories, and the T+1 settlement cycle work together from order placement to share delivery."
pubDatetime: 2026-11-20T10:00:00+05:30
modDatetime: 2026-11-21T11:37:00+05:30
featured: true
draft: false
tags:
  - module-01
  - market-foundations
  - t-plus-1
  - settlement
---

## Overview

Every equity trade on an Indian stock exchange depends on a coordinated chain of market infrastructure institutions. Understanding who does what—and what happens after an order is matched—is essential before studying price discovery, order types, or risk management.

In **Lesson 01** of **Module 01: Market Foundations**, we map out the core architecture of Indian equity markets and walk through the **T+1 settlement cycle**.

---

## 1. Core Market Participants & Infrastructure

* **Investors & Traders:** Market participants who place buy or sell orders using a Unique Client Code (UCC) mapped to PAN, bank, and demat details.
* **SEBI-Registered Stockbrokers & Trading Members:** Provide order-routing terminals/apps, verify margin and KYC compliance, and interface with exchanges and clearing members.
* **Stock Exchanges (NSE & BSE):** Provide the electronic order book and matching engine where buy and sell orders are matched transparently during market hours.
* **Clearing Corporations (such as NCL and ICCL):** Step in as central counterparties via **novation**, netting obligations, managing risk/margins, and guaranteeing settlement completion.
* **Depositories (NSDL & CDSL) & Clearing Banks:** Hold shares electronically in demat accounts and execute funds/securities pay-in and pay-out across bank and depository accounts.

---

## 2. How the T+1 Settlement Cycle Works

Under **T+1** settlement, trades executed on **Trade Day (`T`)** are settled on the **next working day (`T+1`)**:

1. **Order Placement & Matching (`Day T`):** Your order is routed through your broker to the exchange matching engine and executed when matching price/time conditions are met.
2. **Trade Confirmation & Clearing (`Day T`):** Executed trades flow to the clearing corporation, which confirms trade details, calculates net obligations, and enforces margin requirements.
3. **Pay-In, Pay-Out & Demat Credit (`Day T+1`):** Funds and securities obligations are settled on `T+1`, with eligible shares credited to the buyer's demat account and sale proceeds credited/settled according to clearing and broker settlement rules.

![Anatomy of an Indian Equity Trade (T to T+1)](/images/lessons/lesson-01-settlement-flow.svg)

---

## 3. Why Market Structure & T+1 Matter

* **Reduced Counterparty & Settlement Risk:** Central clearing and shorter `T+1` settlement compress exposure windows between trade execution and final settlement.
* **Capital Efficiency:** Faster settlement cycles release funds and securities sooner for subsequent market activity.
* **Operational Clarity:** Knowing the difference between **trade execution (`Day T`)** and **settlement (`Day T+1`)** prevents confusion around holdings, corporate actions, and funds availability.

---

## Key Takeaways

* **Exchanges** match orders, **clearing corporations** guarantee settlement, and **depositories + clearing banks** move shares and funds.
* **T+1** means settlement occurs on the working day following the trade date (`T`).
* A trade matching on your screen on `Day T` is only the starting line—clearing and `T+1` settlement complete the lifecycle.

---

*Educational Note: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes and does not constitute investment advice or a recommendation to buy or sell any security.*
