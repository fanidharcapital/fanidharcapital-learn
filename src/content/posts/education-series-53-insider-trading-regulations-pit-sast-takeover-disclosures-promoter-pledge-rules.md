---
title: "Education Series #53: Insider Trading Regulations (PIT), SAST Takeover Disclosures & Promoter Pledge Rules"
description: "Understand the core SEBI disclosure and governance frameworks that protect public shareholders in India. Learn how Prohibition of Insider Trading (PIT) regulations, Trading Window closures, SAST Takeover triggers (5% and 25% Open Offer rules), and System Driven Disclosures (SDD) for promoter pledges work."
pubDatetime: 2026-11-22T18:31:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-53.png
tags:
  - exchanges-and-operations
  - module-02
  - insider-trading
  - sebi-pit
  - sast-takeover-code
  - promoter-pledge
---

![Insider Trading Regulations (PIT), SAST Takeover Disclosures & Promoter Pledge Rules](/images/lessons/lesson-53.png)

Welcome to **Lesson 53** of **Module 02: Exchanges & Operations** (**Lessons 31–60**) in the **Shree Fanidhar Capital Education Series**.

In **Lesson 51** and **Lesson 52**, you saw how exchanges detect abnormal price spikes through **ASM/GSM/ESM** and report large institutional transactions through **Bulk and Block Deals**. Yet two major questions remain for public market fairness:

1. What stops company insiders—promoters, directors, CFOs, or auditors—from trading on confidential earnings or merger news before the public hears about it?
2. How are minority shareholders notified—and given a fair exit—when a large acquirer accumulates a controlling stake or when promoters pledge their shares for loans?

SEBI enforces three pillars of market integrity to answer both questions: **SEBI (Prohibition of Insider Trading) Regulations [PIT]**, **SEBI (Substantial Acquisition of Shares and Takeovers) Regulations [SAST]**, and **Promoter Encumbrance / Pledge Disclosure Rules**.

---

## 1. SEBI Prohibition of Insider Trading (PIT) Regulations

The foundation of the **SEBI PIT Regulations** is simple: **everyone in the market must have equal access to price-sensitive information at the same time**.

### Key Definitions Every Market Participant Should Know
* **Unpublished Price Sensitive Information (UPSI):** Any non-public information directly or indirectly relating to a company or its securities that is likely to materially affect the share price once published—such as quarterly financial results, dividends, mergers/demergers, major order wins/cancellations, or key management changes.
* **Insider & Designated Persons (DPs):** Any **Connected Person** (directors, promoters, key managerial personnel, statutory auditors, legal advisors, merchant bankers) or any person in possession of or having access to **UPSI**.
* **Strict Prohibition:** An Insider is strictly prohibited from:
  1. **Communicating or leaking UPSI** to anyone (except strictly for legitimate purposes under a Confidentiality Agreement).
  2. **Trading in securities** while in possession of UPSI.

### Operational Guardrails Enforced on Insiders
1. **Mandatory Trading Window Closure:** Listed companies must close the **Trading Window** for all Designated Persons from the **end of every financial quarter** (e.g., March 31, June 30, September 30, December 31) until **48 hours after the financial results are publicly declared** to NSE and BSE.
2. **Pre-Clearance & Contra-Trade Lock-In:** Even when the Trading Window is open, Designated Persons must obtain **pre-clearance** from the company's Compliance Officer for trades above threshold limits and are barred from executing a **contra-trade** (buying and selling, or selling and buying) for **6 months**.
3. **Structured Digital Database (SDD) & System Driven Disclosures (SDD):** Companies maintain a tamper-proof **Structured Digital Database** logging every person who accesses UPSI, while **NSDL/CDSL** automatically report promoter/director trades exceeding **₹10 Lakh** in a calendar quarter to the exchanges within **2 trading days**.

---

## 2. SEBI SAST Regulations (The Takeover Code)

Whenever an investor, fund, or rival company accumulates a substantial stake in a listed company, **SEBI (Substantial Acquisition of Shares and Takeovers) Regulations (SAST)** require progressive public disclosures—and mandate an **Open Offer** to protect minority shareholders if control changes hands:

| Shareholding / Voting Rights Milestone | Regulatory Trigger under SAST | Required Action & Timeline |
| :--- | :--- | :--- |
| **Crossing 5% Threshold** (Regulation 29(1)) | Initial Substantial Acquisition Disclosure | Acquirer must disclose total holding to the target company and NSE/BSE within **2 working days**. |
| **Every ±2% Change Above 5%** (Regulation 29(2)) | Continual Creeping Disclosure | Any subsequent acquisition or disposal of **2% or more** (even if holding drops below 5%) must be disclosed within **2 working days**. |
| **Reaching 25% Voting Rights** (Regulation 3(1)) | **Mandatory Open Offer Trigger** | Acquirer must make a public **Open Offer** to buy at least an additional **26% of the company's shares** from public shareholders at a SEBI-regulated minimum offer price. |
| **Creeping Acquisition > 5% per Financial Year** (Regulation 3(2)) | **Creeping Limit Breach** | An acquirer already holding **25% to 75%** can acquire up to **5% additional voting rights per financial year** without an Open Offer; crossing **+5% in a single FY** triggers a mandatory **Open Offer**. |
| **Acquisition of Control** (Regulation 4) | Direct or Indirect Change of Control | Acquiring management control (even below 25% shareholding) triggers a mandatory **Open Offer** for at least **26%**. |

> **Why the 26% Open Offer Protects Minority Investors:** If a new corporate group buys out a founder's 30% controlling stake, minority shareholders are never forced to stay trapped under unfamiliar new management—the acquirer must offer to buy public shares at the **highest negotiated/market benchmark price**.

---

## 3. Promoter Pledge & Encumbrance Disclosures

Promoters frequently pledge their personal shareholding as collateral to raise corporate loans or working capital. While pledging is legal, heavy promoter pledging carries severe operational risk: **if the stock price falls sharply and the promoter fails to top up collateral, lenders dump the pledged shares directly into the open market**, triggering cascading price crashes.

To eliminate hidden pledge risks, SEBI enforces strict transparency:
* **Broad Definition of "Encumbrance":** Includes not only formal Demat pledges (**Lesson 44**), but also **Non-Disposal Undertakings (NDUs)**, negative liens, or any covenant restricting the promoter's free transfer of shares.
* **System Driven Disclosures (SDD):** Whenever a promoter creates, invokes, or releases a pledge in **NSDL / CDSL**, the depository **automatically feeds the pledge data directly to NSE and BSE**—removing manual reporting delays.
* **Mandatory Reason Disclosure:** If total promoter encumbrance exceeds **50% of the promoter's shareholding** OR **20% of the company's total share capital**, the promoter must publicly disclose the **detailed reasons** for the encumbrance (e.g., personal loan vs. company working capital) within **2 working days**.

---

## 4. Where Investors Can Verify Disclosures Directly on NSE & BSE

Before investing in any company, you can verify live filings directly under the stock's **"Corporate Filings / Announcements"** tab on `nseindia.com` or `bseindia.com`:
1. **Insider Trading (`PIT`):** Shows exact dates, buy/sell quantities, and post-trade holding percentages of promoters and directors.
2. **SAST Disclosures (`Reg 29`):** Tracks institutional investors or acquirers crossing **5%** or adding **+2%** blocks.
3. **Shareholding Pattern (Quarterly):** Displays the exact **Promoter %**, **Public %**, and **% of Promoter Shares Pledged/Encumbered** at the end of every quarter.

---

## Key Takeaways

* **SEBI PIT Regulations prohibit trading on or leaking Unpublished Price Sensitive Information (UPSI)**, enforcing mandatory quarterly **Trading Window closures** and **6-month contra-trade locks** on insiders.
* **SAST Takeover Regulations enforce transparency at 5% (and every ±2% shift)** and protect minority shareholders via a mandatory **26% Open Offer** whenever an acquirer reaches **25% voting rights** or acquires control.
* **Depository System Driven Disclosures (SDD)** automatically publish promoter pledges and insider trades on NSE and BSE, allowing investors to spot high-pledge leverage risks early.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
