import type { QuizQuestion } from "@/data/moduleQuizzes";

export const FINAL_EXAM_CONFIG = {
  title: "365-Day Market Mastery Final Assessment",
  passingScore: 15,
  storageKey: "sfc_final_exam_best",
};

export const FINAL_EXAM_QUESTIONS: QuizQuestion[] = [
  {
    question: "1. What is the key difference between primary and secondary equity markets?",
    options: [
      "Primary issues new securities for fresh capital; secondary trades existing shares",
      "Primary is only for F&O; secondary is only for bonds",
      "Primary settles on T+1; secondary settles on T+5",
      "Primary is regulated by RBI; secondary is regulated by SEBI",
    ],
    correctIndex: 0,
    explanation: "IPOs and fresh issuances happen in the primary market; existing shares trade in the secondary market.",
  },
  {
    question: "2. Under T+1 settlement in India, when does a Tuesday trade settle (assuming Wednesday is a working day)?",
    options: ["Same Tuesday evening", "Wednesday (next trading day)", "Thursday", "Following Monday"],
    correctIndex: 1,
    explanation: "T+1 settles funds and securities one trading day after the trade date.",
  },
  {
    question: "3. Why is CDSL/NSDL TPIN required when selling delivery shares?",
    options: [
      "To authorize Demat share debit securely",
      "To change bank IFSC code",
      "To waive STT on delivery trades",
      "To convert shares into futures",
    ],
    correctIndex: 0,
    explanation: "TPIN authorizes depository debit transactions without needing a standing Power of Attorney.",
  },
  {
    question: "4. Which statement shows assets, liabilities, and equity on a specific date?",
    options: ["Cash Flow Statement", "Balance Sheet", "Profit & Loss Statement", "Auditor's Note"],
    correctIndex: 1,
    explanation: "The Balance Sheet snapshots assets, liabilities, and equity at a point in time.",
  },
  {
    question: "5. Why compare Operating Cash Flow (OCF) with Net Profit?",
    options: [
      "To check whether accounting profits convert into real cash",
      "Because OCF replaces the Balance Sheet",
      "Because Net Profit ignores taxes",
      "Because OCF applies only to banks",
    ],
    correctIndex: 0,
    explanation: "Working capital and non-cash items can make reported profit differ from actual cash flow.",
  },
  {
    question: "6. What defines a classic primary uptrend on a price chart?",
    options: [
      "Higher highs (HH) and higher lows (HL)",
      "Lower highs (LH) and lower lows (LL)",
      "Flat sideways range only",
      "Falling volume on every rally",
    ],
    correctIndex: 0,
    explanation: "Successively higher swing highs and higher swing lows define uptrend structure.",
  },
  {
    question: "7. How does an EMA differ from an SMA?",
    options: [
      "EMA weights recent prices more heavily and reacts faster",
      "SMA uses only opening prices",
      "EMA has zero lag",
      "SMA works only on monthly charts",
    ],
    correctIndex: 0,
    explanation: "EMA places greater weight on recent price prints than an equal-weighted SMA.",
  },
  {
    question: "8. What is a false breakout in price action?",
    options: [
      "Brief move past a key level that reverses back into range",
      "Gap up that holds all day",
      "Three straight upper circuits",
      "Multi-week narrow consolidation",
    ],
    correctIndex: 0,
    explanation: "False breakouts push past a level or stops and fail back inside structure.",
  },
  {
    question: "9. What does daily Mark-to-Market (MTM) settlement do in futures?",
    options: [
      "Settles daily P&L against the daily settlement price",
      "Waives margin calls until expiry",
      "Converts futures into equity shares daily",
      "Locks profit without closing the trade",
    ],
    correctIndex: 0,
    explanation: "Futures positions are marked to market daily against the daily settlement price.",
  },
  {
    question: "10. What does rising futures price + rising Open Interest (OI) usually suggest?",
    options: [
      "Fresh long positions entering the contract",
      "All buyers exiting positions",
      "Exchange trading halt",
      "Contract expiration",
    ],
    correctIndex: 0,
    explanation: "Rising price alongside rising OI generally signals fresh long build-up.",
  },
  {
    question: "11. What right does a Call option buyer hold?",
    options: [
      "Right (not obligation) to buy underlying at strike price",
      "Obligation to sell at any price",
      "Guaranteed profit at any expiry price",
      "AGM voting rights",
    ],
    correctIndex: 0,
    explanation: "Call buyers hold the right to buy at the strike; max loss is the premium paid.",
  },
  {
    question: "12. An option's total premium equals which two components?",
    options: [
      "Intrinsic value + time (extrinsic) value",
      "Face value + book value",
      "Brokerage + STT",
      "Dividend yield + P/E",
    ],
    correctIndex: 0,
    explanation: "Option Premium = Intrinsic Value + Extrinsic (Time) Value.",
  },
  {
    question: "13. Which Option Greek measures sensitivity to a 1-point move in the underlying?",
    options: ["Delta", "Theta", "Vega", "Rho"],
    correctIndex: 0,
    explanation: "Delta estimates how much an option's price changes per 1-point underlying move.",
  },
  {
    question: "14. What does Option Vega measure?",
    options: [
      "Sensitivity of option price to Implied Volatility (IV) changes",
      "Daily time decay",
      "Dividend sensitivity",
      "Margin per lot",
    ],
    correctIndex: 0,
    explanation: "Vega measures how much option premium shifts when Implied Volatility changes.",
  },
  {
    question: "15. Why use a Bull Call Spread?",
    options: [
      "Lower net cost/vega while capping max risk and max reward",
      "Unlimited profit with zero risk",
      "Profit from a 50% crash",
      "Remove contract expiry dates",
    ],
    correctIndex: 0,
    explanation: "Selling a higher Call against a long lower Call reduces net cost and defines max loss/gain.",
  },
  {
    question: "16. Risking ₹2,500 for a ₹7,500 target equals what risk-to-reward ratio?",
    options: ["1:3", "3:1", "1:1", "1:5"],
    correctIndex: 0,
    explanation: "Risking 1R (₹2,500) for 3R (₹7,500) is a 1:3 risk-to-reward ratio.",
  },
  {
    question: "17. Why define stop-loss/invalidation before entering a trade?",
    options: [
      "It removes emotional hesitation when price moves against you",
      "It guarantees zero slippage",
      "It prevents market gaps",
      "It lowers STT",
    ],
    correctIndex: 0,
    explanation: "Pre-defining invalidation keeps risk control objective under pressure.",
  },
  {
    question: "18. What does an RBI repo rate hike typically transmit?",
    options: [
      "Higher borrowing costs and tighter financial conditions",
      "Instant drop in bank loan rates",
      "Automatic doubling of EPS",
      "Month-long market closure",
    ],
    correctIndex: 0,
    explanation: "Rate hikes raise borrowing costs and tighten liquidity across the economy.",
  },
  {
    question: "19. Why is survivorship bias a trap when backtesting strategies?",
    options: [
      "Ignoring delisted/failed stocks overstates historical returns",
      "It happens only on 5-min charts",
      "It means using future prices",
      "It occurs only with zero leverage",
    ],
    correctIndex: 0,
    explanation: "Excluding failed or delisted companies inflates perceived past performance.",
  },
  {
    question: "20. First question in a post-trade case review of a losing trade?",
    options: [
      "Did I follow my pre-trade risk, sizing, and entry/exit rules?",
      "How do I blame the broker?",
      "Should I double next trade size?",
      "How do I delete the trade?",
    ],
    correctIndex: 0,
    explanation: "Evaluating process execution first keeps review objective and constructive.",
  },
];
