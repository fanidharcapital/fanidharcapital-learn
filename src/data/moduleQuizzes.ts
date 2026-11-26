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
    passingScore: 2,
    questions: [
      {
        question: "What is the main purpose of the primary market?",
        options: [
          "Daily intraday stock trading",
          "Raising fresh capital via new share issuance",
          "Settling F&O contracts on expiry",
          "Margin lending by brokers",
        ],
        correctIndex: 1,
        explanation: "Primary markets raise new capital (such as IPOs); secondary markets trade existing securities.",
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
    passingScore: 2,
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
    ],
  },
  "module-03": {
    moduleSlug: "module-03",
    moduleTitle: "Fundamental analysis",
    passingScore: 2,
    questions: [
      {
        question: "Which statement shows assets, liabilities, and equity at a point in time?",
        options: ["Cash Flow Statement", "Balance Sheet", "P&L Statement", "Directors' Report"],
        correctIndex: 1,
        explanation: "The Balance Sheet snapshots assets, liabilities, and shareholders' equity on a given date.",
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
    ],
  },
  "module-04": {
    moduleSlug: "module-04",
    moduleTitle: "Technical analysis",
    passingScore: 2,
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
    ],
  },
  "module-05": {
    moduleSlug: "module-05",
    moduleTitle: "Price action",
    passingScore: 2,
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
    passingScore: 2,
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
    passingScore: 2,
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
    ],
  },
  "module-08": {
    moduleSlug: "module-08",
    moduleTitle: "Greeks & strategies",
    passingScore: 2,
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
    ],
  },
  "module-09": {
    moduleSlug: "module-09",
    moduleTitle: "Risk & psychology",
    passingScore: 2,
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
    ],
  },
  "module-10": {
    moduleSlug: "module-10",
    moduleTitle: "Institutions & macro",
    passingScore: 2,
    questions: [
      {
        question: "What do FII/FPI and DII flow figures track?",
        options: [
          "Foreign vs. domestic institutional equity activity",
          "Retail app downloads",
          "Warehouse storage capacity",
          "Exchange software licenses",
        ],
        correctIndex: 0,
        explanation: "FPI/FII tracks foreign institutional flows; DII tracks domestic institutions like mutual funds.",
      },
      {
        question: "What does an RBI repo rate hike typically transmit?",
        options: [
          "Higher borrowing costs and tighter financial conditions",
          "Instant drop in bank loan rates",
          "Month-long market closure",
          "Automatic doubling of EPS",
        ],
        correctIndex: 0,
        explanation: "Higher policy rates influence lending rates, credit growth, yields, and valuations.",
      },
      {
        question: "Why do institutions watch liquidity and market depth?",
        options: [
          "To enter or exit large size without heavy price impact",
          "To trade only penny stocks",
          "Only on market holidays",
          "To read future EPS",
        ],
        correctIndex: 0,
        explanation: "Large orders need sufficient liquidity to avoid severe slippage.",
      },
    ],
  },
  "module-11": {
    moduleSlug: "module-11",
    moduleTitle: "Advanced concepts",
    passingScore: 2,
    questions: [
      {
        question: "What is slippage in trade execution?",
        options: [
          "Difference between expected and actual average fill price",
          "Dividend payout delay",
          "Annual Demat AMC",
          "Income tax refund",
        ],
        correctIndex: 0,
        explanation: "Slippage is the gap between expected and realized execution price.",
      },
      {
        question: "Why is survivorship bias a backtest trap?",
        options: [
          "Ignoring delisted/failed stocks overstates historical performance",
          "It happens only on 5-min charts",
          "It means using future prices",
          "It occurs only with zero leverage",
        ],
        correctIndex: 0,
        explanation: "Looking only at surviving companies hides failures and inflates past returns.",
      },
      {
        question: "What is overfitting (curve-fitting)?",
        options: [
          "Tuning rules tightly to past noise so out-of-sample results suffer",
          "Using simple rules across regimes",
          "Including realistic transaction costs",
          "Testing on unseen data",
        ],
        correctIndex: 0,
        explanation: "Overfitted models memorize past quirks rather than durable patterns.",
      },
    ],
  },
  "module-12": {
    moduleSlug: "module-12",
    moduleTitle: "Case studies",
    passingScore: 2,
    questions: [
      {
        question: "First question in a losing-trade case review?",
        options: [
          "Did I follow my risk, sizing, and entry/exit rules?",
          "How do I blame the broker?",
          "Should I double next trade size?",
          "How do I hide the trade?",
        ],
        correctIndex: 0,
        explanation: "Audit process adherence first before judging by one trade's outcome.",
      },
      {
        question: "Disciplined response after three planned stop-outs in a choppy session?",
        options: [
          "Honor daily loss limits, pause/reduce risk, and reassess regime",
          "Remove loss cap and size up",
          "Jump into an unfamiliar contract",
          "Ignore losses till month-end",
        ],
        correctIndex: 0,
        explanation: "Respecting loss limits protects capital during unfavorable sessions.",
      },
      {
        question: "Core takeaway of the 13-week curriculum?",
        options: [
          "Structure, risk control, and self-review build sustainable habits",
          "Chart patterns guarantee daily profits",
          "Indicators replace risk management",
          "Prices move in straight lines",
        ],
        correctIndex: 0,
        explanation: "Lasting progress comes from disciplined process, risk management, and review.",
      },
    ],
  },
  "module-13": {
    moduleSlug: "module-13",
    moduleTitle: "Asset allocation, tax reality & execution engineering",
    passingScore: 2,
    questions: [
      {
        question: "What is the main advantage of separating emergency cash, long-term lock-ins, and active trading capital?",
        options: [
          "It prevents forced liquidation of long-term or emergency funds during trading drawdowns",
          "It eliminates taxes on all F&O gains",
          "It guarantees higher returns than index funds",
          "It removes margin requirements in derivatives",
        ],
        correctIndex: 0,
        explanation: "Multi-bucket allocation isolates short-term liquidity and long-term goals from active market risk.",
      },
      {
        question: "Why evaluate post-tax real return rather than nominal yield alone?",
        options: [
          "Taxes and inflation erode actual purchasing power over time",
          "Nominal yield is only calculated on savings accounts",
          "Post-tax return ignores brokerage and STT",
          "Inflation never affects fixed-income schemes",
        ],
        correctIndex: 0,
        explanation: "Real return adjusts after-tax gains for inflation to reflect true purchasing power.",
      },
      {
        question: "How should position sizing adapt when market volatility expands?",
        options: [
          "Scale down position size or throttle risk so dollar volatility stays controlled",
          "Increase leverage to recover faster",
          "Disable stop-losses until volatility drops",
          "Ignore regime shifts if a setup looks familiar",
        ],
        correctIndex: 0,
        explanation: "Volatility scaling and drawdown throttles keep risk exposure proportional in shifting regimes.",
      },
    ],
  },
  "module-14": {
    moduleSlug: "module-14",
    moduleTitle: "Final certification quiz",
    passingScore: 2,
    questions: [
      {
        question: "What ties together asset allocation, tax awareness, and execution engineering across the 13-week track?",
        options: [
          "Protecting capital first while executing repeatable setups within clear risk limits",
          "Maximizing daily trade count regardless of slippage",
          "Relying on a single indicator for every timeframe",
          "Treating active trading capital and emergency cash as one pool",
        ],
        correctIndex: 0,
        explanation: "Sustainable trading pairs disciplined execution and risk controls with sound capital allocation.",
      },
      {
        question: "Why is live trade auditing and journaling essential after execution?",
        options: [
          "It separates rule-following errors from normal variance and improves execution consistency",
          "It changes past fill prices after market close",
          "It replaces pre-trad
