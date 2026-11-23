---
title: "Educational Series #85: Discounted Cash Flow (DCF) Foundations — Time Value of Money, WACC & Terminal Value"
description: "Learn how intrinsic valuation works from first principles using Discounted Cash Flow (DCF)—covering the time value of money, projected free cash flows, discount rates (WACC), and Terminal Value."
pubDatetime: 2026-11-23T16:48:00+05:30
featured: false
draft: false
image: /images/lessons/lesson-85.png
tags:
  - fundamental-analysis
  - module-03
  - dcf-valuation
  - time-value-of-money
  - wacc
  - terminal-value
---

![Discounted Cash Flow (DCF) Foundations — Time Value of Money, WACC & Terminal Value](/images/lessons/lesson-85.png)

Welcome to **Lesson 85** of **Module 03: Fundamental Analysis** (**Lessons 61–90**) in the **Shree Fanidhar Capital Educational Series**.

In **Lesson 84**, we covered **Enterprise Value (`EV`)** and **`EV / EBITDA`** as capital-structure-neutral relative multiples. Multiples compare a company against peers or its own history—but **Discounted Cash Flow (`DCF`)** valuation attempts to estimate a business's **intrinsic value** directly from the future cash flows it can generate. Today, we lay out the foundations of **`DCF`**: **Time Value of Money**, **Projected Cash Flows**, **Discount Rate (`WACC`)**, and **Terminal Value**.

---

## 1. The Core Idea: Time Value of Money & Present Value

A rupee received **today** is worth more than a rupee received **three years from now** because today's rupee can be invested to earn a return in the meantime—and future cash flows also carry uncertainty.

Discounting a future cash flow ($CF_t$) back to today (`Present Value`, $PV$) at a discount rate ($r$) over $t$ periods works as follows:

$$\text{PV} = \frac{CF_t}{(1 + r)^t}$$

For a multi-year forecast of cash flows ($CF_1, CF_2, \dots, CF_n$) plus a **Terminal Value** ($TV_n$) at the end of year $n$, total **Enterprise Value** from a `DCF` is:

$$\text{Enterprise Value (EV)} = \sum_{t=1}^{n} \frac{CF_t}{(1 + r)^t} + \frac{TV_n}{(1 + r)^n}$$

*(To move from **Enterprise Value** to **Equity Value**, add unrestricted cash/non-operating investments and subtract total debt and minority/preference claims; dividing by diluted shares gives intrinsic value per share.)*

---

## 2. The Three Building Blocks of a `DCF`

| Building Block | What It Represents | Key Analytical Sensitivities |
| :--- | :--- | :--- |
| **1. Explicit Forecast Cash Flows (`CF_1` to `CF_n`)** | Expected cash flows over a projection window (often `5–10` years), typically **Free Cash Flow (`FCF = CFO − Capex`)** or unlevered free cash flow. | Sensitive to revenue growth, operating margins (`OPM`), working capital, and `Capex` intensity. |
| **2. Discount Rate (`WACC` / Required Return)** | **Weighted Average Cost of Capital (`WACC`)** blends the after-tax cost of debt and cost of equity weighted by capital structure—reflecting risk and opportunity cost. | Even a small shift in `r` (say `11%` to `13%`) noticeably changes present values, especially for long-dated cash flows. |
| **3. Terminal Value (`TV`)** | Captures the value of all cash flows **beyond** the explicit forecast period—commonly via the **Gordon Growth (Perpetuity) Method** or an **exit multiple**. | Often accounts for a large share of total `DCF` value; **perpetual growth rate ($g$)** should stay conservative (typically at or below long-term nominal GDP growth). |

### Perpetuity Terminal Value Formula
Under the Gordon Growth model at the end of year $n$, using a perpetual growth rate $g$ (where $r > g$):

$$TV_n = \frac{CF_n \times (1 + g)}{r - g}$$

---

## 3. Worked Mini-Illustration: Discounting a 3-Year Cash Flow Stream + Terminal Value

Suppose a business is projected to generate `FCF` of **`₹100 Cr`** in Year 1, **`₹115 Cr`** in Year 2, and **`₹132.25 Cr`** in Year 3 (`15%` growth during the explicit window), followed by a conservative **`5%` perpetual growth rate ($g$)** thereafter, discounted at **`12%` ($r$)**:

* **Year 3 Terminal Value ($TV_3$):**
  $$TV_3 = \frac{132.25 \times (1 + 0.05)}{0.12 - 0.05} = \frac{138.86}{0.07} \approx ₹1,983.75\text{ Cr}$$
* **Present Values at `12%` Discount Rate:**
  * $\text{PV}(\text{Year 1: } ₹100) = \frac{100}{(1.12)^1} \approx ₹89.29\text{ Cr}$
  * $\text{PV}(\text{Year 2: } ₹115) = \frac{115}{(1.12)^2} \approx ₹91.68\text{ Cr}$
  * $\text{PV}(\text{Year 3 FCF: } ₹132.25 + TV_3\text{ } ₹1,983.75 = ₹2,116.00\text{ Cr}) = \frac{2,116.00}{(1.12)^3} \approx ₹1,506.06\text{ Cr}$
* **Implied Present Value (`EV`):** $89.29 + 91.68 + 1,506.06 \approx ₹1,687.03\text{ Cr}$.

Notice how **Terminal Value** drives most of the total—which is why conservative assumptions on $g$ and $r$ are critical.

---

## 4. Why `DCF` Is a Thinking Tool, Not a Precision Calculator

* **Garbage In, Garbage Out:** A `DCF` does not produce an exact "true price" to the paisa—it translates your **assumptions** about growth, margins, reinvestment, and risk into a valuation estimate.
* **Run Scenario Ranges (`Bear / Base / Bull`):** Instead of relying on a single point estimate, test how intrinsic value changes under more conservative growth, higher discount rates, or lower terminal multiples.

---

## Key Takeaways

* **`DCF` discounts projected future cash flows (`FCF`) and Terminal Value back to Present Value** using the time value of money and a risk-adjusted discount rate (`WACC`).
* **Small changes in discount rate (`r`) or perpetual growth (`g`) can swing valuation significantly**, making conservative assumptions and range/sensitivity checks essential.
* **Use `DCF` to test what expectations are priced into a stock**, rather than treating a single spreadsheet output as absolute truth.

---

*Disclaimer: This lesson is published by Shree Fanidhar Capital strictly for educational and informational purposes. It does not constitute investment advice, a stock recommendation, or solicitation to buy or sell any security.*
