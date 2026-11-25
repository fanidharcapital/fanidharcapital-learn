export interface QuizQuestion {
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

export interface ModuleQuizData {
  moduleSlug: string;
  moduleTitle: string;
  passingScore: number;
  questions: QuizQuestion[];
}

export const MODULE_QUIZZES: Record<string, ModuleQuizData> = {
  "module-01": {
    moduleSlug: "module-01",
    moduleTitle: "Market foundations",
    passingScore: 4,
    questions: [
      {
        question: "What is the main purpose of the primary market?",
        options: [
          "Daily intraday stock trading",
          "Raising fresh capital via new share/security issuance",
          "Settling F&O contracts on expiry",
          "Margin lending by brokers",
        ],
        correctIndex: 1,
        explanation: "Primary markets raise new capital (such as IPOs); secondary markets trade existing securities.",
      },
      {
        question: "Which regulator oversees Indian securities markets?",
        options: ["RBI", "IRDAI", "SEBI", "NSDL"],
        correctIndex: 2,
        explanation: "SEBI regulates stock exchanges, market intermediaries, and investor protection in India.",
      },
      {
        question: "Where are shares held electronically in India?",
        options: [
          "Broker's current bank account",
          "Demat account with NSDL or CDSL",
          "Clearing corporation vault",
          "Exchange matching engine",
        ],
        correctIndex: 1,
        explanation: "Shares are held electronically in a Demat account via a depository (NSDL or CDSL).",
      },
      {
        question: "How is market capitalization calculated?",
        options: [
          "Annual revenue × net margin",
          "Current share price × total outstanding shares",
          "Total debt − cash",
          "Daily volume × closing price",
        ],
        correctIndex: 1,
        explanation: "Market cap equals current market price multiplied by total issued shares.",
      },
      {
        question: "What does an index like NIFTY 50 represent?",
        options: [
          "Guaranteed annual equity return",
          "Weighted performance of 50 major stocks",
          "Daily circuit limit for all shares",
          "Overnight clearing house",
        ],
        correctIndex: 1,
        explanation: "NIFTY 50 tracks the free-float market-cap-weighted movement of 50 large Indian companies.",
      },
    ],
  },
  "module-02": {
    moduleSlug: "module-02",
    moduleTitle: "Exchanges & operations",
    passingScore: 4,
    questions: [
      {
        question: "What does T+1 settlement mean in cash equities?",
        options: [
          "Settlement one trading day after trade date",
          "Same-day settlement before market open",
          "Weekly settlement on expiry",
          "Margin collected after expiry",
        ],
        correctIndex: 0,
        explanation: "T+1 settles funds and shares on the next trading day after execution.",
      },
      {
        question: "Why do exchanges apply circuit filters?",
        options: [
          "To curb extreme single-session price swings",
          "To square off all trades at 2:00 PM",
          "To waive exchange charges",
          "To block limit orders",
        ],
        correctIndex: 0,
        explanation: "Price bands limit excessive intraday volatility and support orderly price discovery.",
      },
      {
        question: "How do Limit and Market orders differ?",
        options: [
          "Limit sets max/min price; Market seeks immediate fill at prevailing prices",
          "Market works only after hours; Limit works only in pre-open",
          "Limit needs no margin; Market needs no broker",
          "Market orders cannot be cancelled before fill",
        ],
        correctIndex: 0,
        explanation: "Limit orders control price with fill risk; market orders prioritize speed with slippage risk.",
      },
      {
        question: "What is a Clearing Corporation's core role?",
        options: [
          "Publishing stock tips",
          "Guaranteeing settlement and managing clearing risk",
          "Allotting IPO shares",
          "Setting RBI repo rates",
        ],
        correctIndex: 1,
        explanation: "Clearing corporations act as central counterparty to guarantee trade settlement.",
      },
      {
        question: "Why is CDSL/NSDL TPIN used when selling shares?",
        options: [
          "To authorize Demat share debit securely",
          "To link a new PAN card",
          "To change bank IFSC code",
          "To redeem mutual funds without folio",
        ],
        correctIndex: 0,
        explanation: "TPIN authorizes delivery debit from your Demat account securely.",
      },
    ],
  },
  "module-03": {
    moduleSlug: "module-03",
    moduleTitle: "Fundamental analysis",
    passingScore: 4,
    questions: [
      {
        question: "Which statement shows assets, liabilities, and equity at a point in time?",
        options: ["Cash Flow Statement", "Balance Sheet", "P&L Statement", "Directors' Report"],
        correctIndex: 1,
        explanation: "The Balance Sheet snapshots assets, liabilities, and shareholders' equity on a given date.",
      },
      {
        question: "What does a high Debt-to-Equity ratio indicate?",
        options: [
          "Higher reliance on borrowed funds vs. equity",
          "Zero cash on balance sheet",
          "Price below face value",
          "Guaranteed margin expansion",
        ],
        correctIndex: 0,
        explanation: "Higher debt-to-equity means greater financial leverage and fixed interest obligations.",
      },
      {
        question: "Why compare Operating Cash Flow (OCF) with Net Profit?",
        options: [
          "To check whether accounting profits convert into real cash",
          "To skip reading the Balance Sheet",
          "Because OCF excludes taxes and depreciation",
          "Because OCF applies only to banks",
        ],
        correctIndex: 0,
        explanation: "Working capital and non-cash items can make net profit diverge from actual cash flow.",
      },
      {
        question: "What does Return on Equity (ROE) measure?",
        options: [
          "Net profit generated per unit of shareholders' equity",
          "Quarterly dividend payout ratio",
          "Daily stock price change",
          "Promoter shareholding share",
        ],
        correctIndex: 0,
        explanation: "ROE measures how efficiently a company generates profit from equity capital.",
      },
      {
        question: "What is a key caveat when using the P/E ratio?",
        options: [
          "Low P/E can be a value trap if earnings are falling or cyclical",
          "P/E ignores stock price",
          "High P/E always means zero debt",
          "P/E applies only to loss-making firms",
        ],
        correctIndex: 0,
        explanation: "P/E should always be read alongside growth, return ratios, balance sheet, and cycle stage.",
      },
    ],
  },
  "module-04": {
    moduleSlug: "module-04",
    moduleTitle: "Technical analysis",
    passingScore: 4,
    questions: [
      {
        question: "What defines a classic uptrend on a price chart?",
        options: [
          "Higher highs (HH) and higher lows (HL)",
          "Lower highs (LH) and lower lows (LL)",
          "Flat sideways movement only",
          "Declining volume on every up candle",
        ],
        correctIndex: 0,
        explanation: "Successively higher swing highs and higher swing lows define an uptrend.",
      },
      {
        question: "Why does volume matter on a resistance breakout?",
        options: [
          "Strong volume indicates broader participation and conviction",
          "Volume guarantees zero retest ever",
          "Volume bans short selling",
          "Volume removes stop-loss need",
        ],
        correctIndex: 0,
        explanation: "Healthy volume helps confirm genuine demand behind a breakout.",
      },
      {
        question: "How does an EMA differ from an SMA?",
        options: [
          "EMA weights recent prices more heavily, reacting faster",
          "SMA uses only open prices",
          "EMA has zero lag",
          "SMA works only on weekly charts",
        ],
        correctIndex: 0,
        explanation: "EMA places greater weight on recent prices than a simple average.",
      },
      {
        question: "What does RSI measure?",
        options: [
          "Speed and magnitude of recent gains vs. losses",
          "Total futures open interest",
          "Quarterly dividend yield",
          "Order book depth",
        ],
        correctIndex: 0,
        explanation: "RSI is a momentum oscillator bounded between 0 and 100.",
      },
      {
        question: "Why avoid relying on a single indicator alone?",
        options: [
          "Indicators can whipsaw in sideways or shifting regimes",
          "Indicators update once a month",
          "Indicators hide intraday charts",
          "Indicators predict exact news dates",
        ],
        correctIndex: 0,
        explanation: "Context, price structure, and risk rules matter more than any single indicator.",
      },
    ],
  },
  "module-05": {
    moduleSlug: "module-05",
    moduleTitle: "Price action",
    passingScore: 4,
    questions: [
      {
        question: "What four prices does a candlestick show?",
        options: [
          "Open, High, Low, Close",
          "FII buy, FII sell, DII buy, DII sell",
          "Delta, Gamma, Theta, Vega",
          "Bid, Ask, LTP, VWAP",
        ],
        correctIndex: 0,
        explanation: "Each candle captures opening, highest, lowest, and closing prices for that period.",
      },
      {
        question: "Why is chart context crucial for candlestick signals?",
        options: [
          "Signals at key levels and trends carry different weight than mid-range noise",
          "Candles behave identically everywhere",
          "Context changes candle math",
          "Signals apply only to 1-minute charts",
        ],
        correctIndex: 0,
        explanation: "Location relative to trend and support/resistance shapes signal quality.",
      },
      {
        question: "What is a false breakout?",
        options: [
          "Brief move past a key level that reverses back into range",
          "A strong gap up that holds all day",
          "Five straight upper circuits",
          "A two-week narrow range",
        ],
        correctIndex: 0,
        explanation: "False breakouts push past a level or stops and fail back inside structure.",
      },
      {
        question: "What does tight range consolidation often precede?",
        options: [
          "Potential volatility/range expansion (direction not guaranteed)",
          "Guaranteed flat prices till expiry",
          "Immediate stock delisting",
          "Lower tick size",
        ],
        correctIndex: 0,
        explanation: "Tight compression often builds before a directional or volatility expansion.",
      },
      {
        question: "Why wait for candle close or confirmation on breakouts?",
        options: [
          "It reduces entries on immediate wick failures",
          "It eliminates slippage",
          "It removes stop-loss need",
          "It doubles position size",
        ],
        correctIndex: 0,
        explanation: "Waiting for close or retest helps filter out premature wick spikes.",
      },
    ],
  },
  "module-06": {
    moduleSlug: "module-06",
    moduleTitle: "Futures market",
    passingScore: 4,
    questions: [
      {
        question: "What is a futures contract?",
        options: [
          "Standardized agreement to buy/sell at a set price on a future expiry",
          "Perpetual voting equity share",
          "RBI savings bond",
          "Zero-risk bank FD",
        ],
        correctIndex: 0,
        explanation: "Futures are standardized exchange-traded derivative contracts with fixed expiry.",
      },
      {
        question: "What is mark-to-market (MTM) in futures?",
        options: [
          "Daily P&L calculation and settlement against daily settlement price",
          "Annual brokerage billing",
          "Daily conversion into shares",
          "Locking profit without exiting",
        ],
        correctIndex: 0,
        explanation: "Futures P&L is settled daily based on the daily settlement price.",
      },
      {
        question: "What drives futures cost of carry?",
        options: [
          "Financing cost minus expected dividends until expiry",
          "STT rate alone",
          "Active retail trader count",
          "Option strike step size",
        ],
        correctIndex: 0,
        explanation: "Fair value links spot price with interest/carry cost and expected dividends.",
      },
      {
        question: "What happens if margin falls short on a losing futures trade?",
        options: [
          "Margin call and potential square-off if not replenished",
          "Loss is waived until next expiry",
          "Exchange credits bonus margin",
          "Expiry extends free by a month",
        ],
        correctIndex: 0,
        explanation: "Margin shortfalls trigger margin calls and risk square-off rules.",
      },
      {
        question: "What does rising price + rising Open Interest (OI) usually indicate?",
        options: [
          "Fresh long positions entering the contract",
          "All buyers exiting",
          "Exchange trading halt",
          "Contract already expired",
        ],
        correctIndex: 0,
        explanation: "Price up with OI up generally points to fresh long build-up.",
      },
    ],
  },
  "module-07": {
    moduleSlug: "module-07",
    moduleTitle: "Options market",
    passingScore: 4,
    questions: [
      {
        question: "What right does a Call buyer hold?",
        options: [
          "Right (not obligation) to buy underlying at strike price",
          "Obligation to sell at any price",
          "Guaranteed profit at any expiry price",
          "AGM voting rights",
        ],
        correctIndex: 0,
        explanation: "Call buyers have the right to buy at the strike; max loss is premium paid.",
      },
      {
        question: "What right does a Put buyer hold?",
        options: [
          "Right (not obligation) to sell underlying at strike price",
          "Right to receive company dividends",
          "Unlimited gain if price surges",
          "Zero premium requirement",
        ],
        correctIndex: 0,
        explanation: "Put buyers have the right to sell at the strike price.",
      },
      {
        question: "When is a Call option In-The-Money (ITM)?",
        options: [
          "When underlying price is above strike price",
          "When underlying price is below strike price",
          "When IV is zero",
          "Only on expiry afternoon",
        ],
        correctIndex: 0,
        explanation: "A Call has intrinsic value when spot price is above the strike price.",
      },
      {
        question: "What are the two parts of an option's premium?",
        options: [
          "Intrinsic value and time (extrinsic) value",
          "Face value and book value",
          "Brokerage and STT",
          "Dividend yield and P/E",
        ],
        correctIndex: 0,
        explanation: "Option premium equals intrinsic value plus extrinsic (time) value.",
      },
      {
        question: "Why is buying far OTM options near expiry risky?",
        options: [
          "Fast time decay and low chance of reaching strike in time",
          "Zero liquidity on exchanges",
          "Requires 100% contract margin",
          "Unlimited loss on flat price",
        ],
        correctIndex: 0,
        explanation: "Extrinsic value decays rapidly toward expiry and far OTM options often expire worthless.",
      },
    ],
  },
  "module-08": {
    moduleSlug: "module-08",
    moduleTitle: "Greeks & strategies",
    passingScore: 4,
    questions: [
      {
        question: "What does Delta measure?",
        options: [
          "Expected option price change per 1-unit underlying move",
          "Daily time decay",
          "Interest rate sensitivity",
          "Daily contract volume",
        ],
        correctIndex: 0,
        explanation: "Delta measures directional sensitivity to underlying price changes.",
      },
      {
        question: "What does Theta measure?",
        options: [
          "Option price sensitivity to passage of time (time decay)",
          "Implied volatility sensitivity",
          "Strike price gap",
          "Margin discount",
        ],
        correctIndex: 0,
        explanation: "Theta captures how option value changes as time passes toward expiry.",
      },
      {
        question: "What does Vega measure?",
        options: [
          "Sensitivity to changes in Implied Volatility (IV)",
          "Dividend sensitivity",
          "Days remaining to expiry",
          "Final settlement price",
        ],
        correctIndex: 0,
        explanation: "Vega measures option price sensitivity to IV shifts.",
      },
      {
        question: "Why use a Bull Call Spread?",
        options: [
          "To lower net cost/vega while capping max profit",
          "For unlimited profit with zero risk",
          "To profit from a 50% crash",
          "To remove expiry dates",
        ],
        correctIndex: 0,
        explanation: "Buying a lower Call and selling a higher Call reduces net cost and caps both risk and reward.",
      },
      {
        question: "Why is Gamma critical near expiry?",
        options: [
          "Delta shifts rapidly on price moves, accelerating P&L swings",
          "Gamma is always zero at expiry",
          "Gamma applies only to cash shares",
          "Gamma pays daily interest",
        ],
        correctIndex: 0,
        explanation: "High Gamma near expiry means Delta changes quickly with underlying moves.",
      },
    ],
  },
  "module-09": {
    moduleSlug: "module-09",
    moduleTitle: "Risk & psychology",
    passingScore: 4,
    questions: [
      {
        question: "Why is position sizing vital?",
        options: [
          "It caps capital damage from single trades or losing streaks",
          "It guarantees every trade wins",
          "It prevents overnight gaps",
          "It removes taxes",
        ],
        correctIndex: 0,
        explanation: "Sizing controls how much capital is risked per trade relative to account size.",
      },
      {
        question: "Risking ₹2,000 for a ₹6,000 target equals what risk-to-reward ratio?",
        options: ["1:3", "3:1", "1:1", "1:6"],
        correctIndex: 0,
        explanation: "₹2,000 risk versus ₹6,000 reward is 1:3 (3R reward per 1R risk).",
      },
      {
        question: "What is revenge trading?",
        options: [
          "Impulsive, oversized trades after a loss to win back money",
          "Weekend journal review",
          "Cutting size after a drawdown",
          "Setting a daily loss cap",
        ],
        correctIndex: 0,
        explanation: "Revenge trading reacts emotionally to losses and often deepens drawdowns.",
      },
      {
        question: "Why define stop-loss/invalidation before entry?",
        options: [
          "It removes emotional hesitation when price moves against you",
          "It guarantees zero slippage",
          "It stops market volatility",
          "Stops never need review",
        ],
        correctIndex: 0,
        explanation: "Pre-defining invalidation keeps decisions objective under pressure.",
      },
      {
        question: "What is the main benefit of a trading journal?",
        options: [
          "Tracking execution, rules, and mistakes objectively over time",
          "Replacing risk limits",
        
