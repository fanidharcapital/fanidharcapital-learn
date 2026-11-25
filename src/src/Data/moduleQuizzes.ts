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
        question: "What is the primary purpose of the primary market in India?",
        options: [
          "Facilitating daily intraday trading among retail investors",
          "Allowing companies to raise fresh capital by issuing new securities",
          "Settling futures and options contracts on expiry day",
          "Providing margin funding to stockbrokers",
        ],
        correctIndex: 1,
        explanation:
          "Companies raise fresh capital directly from investors in the primary market (such as IPOs), whereas existing shares trade in the secondary market.",
      },
      {
        question: "Which regulator oversees securities markets and protects investor interests in India?",
        options: [
          "RBI (Reserve Bank of India)",
          "IRDAI",
          "SEBI (Securities and Exchange Board of India)",
          "NSDL",
        ],
        correctIndex: 2,
        explanation:
          "SEBI regulates stock exchanges, brokers, mutual funds, and market participants in India.",
      },
      {
        question: "Where are an investor's shares held electronically in India?",
        options: [
          "Directly inside the broker's current bank account",
          "In a Demat account maintained with NSDL or CDSL",
          "Inside the clearing corporation's reserve vault",
          "On the stock exchange's order-matching server",
        ],
        correctIndex: 1,
        explanation:
          "Securities are held in dematerialized form with depositories (NSDL or CDSL) via a Depository Participant.",
      },
      {
        question: "What does market capitalization of a listed company equal?",
        options: [
          "Total annual revenue multiplied by profit margin",
          "Current share price multiplied by total outstanding shares",
          "Total promoter debt minus cash reserves",
          "Daily traded volume multiplied by closing price",
        ],
        correctIndex: 1,
        explanation:
          "Market capitalization equals Current Market Price (CMP) × Total Outstanding Shares.",
      },
      {
        question: "What is the role of a stock index such as NIFTY 50?",
        options: [
          "It guarantees minimum annual returns for equity investors",
          "It tracks the weighted performance of 50 major companies across key sectors",
          "It sets the upper and lower circuit limits for all listed stocks",
          "It acts as a clearing house for overnight settlements",
        ],
        correctIndex: 1,
        explanation:
          "NIFTY 50 measures the free-float market-capitalization-weighted performance of 50 large, liquid Indian companies.",
      },
    ],
  },
  "module-02": {
    moduleSlug: "module-02",
    moduleTitle: "Exchanges & operations",
    passingScore: 4,
    questions: [
      {
        question: "What does T+1 settlement mean in the Indian equity cash market?",
        options: [
          "Trades are settled one trading day after the transaction date",
          "Trades are settled on the same calendar day before market close",
          "Trades are settled one week after expiry",
          "Margin is collected one day after trade execution",
        ],
        correctIndex: 0,
        explanation:
          "Under T+1 settlement, funds and securities obligations are settled on the next working trading day after the trade date.",
      },
      {
        question: "What is the purpose of a circuit filter (price band) on an exchange?",
        options: [
          "To prevent panic or manipulative price swings beyond set percentage limits in a session",
          "To force automatic square-off of all open positions at 2:00 PM",
          "To convert market orders into limit orders during high volume",
          "To waive brokerage charges on volatile trading days",
        ],
        correctIndex: 0,
        explanation:
          "Circuit limits cap how far a stock or index can move up or down within a trading session to maintain orderly markets.",
      },
      {
        question: "What is the key difference between a Limit Order and a Market Order?",
        options: [
          "A Limit Order executes only at your specified price or better; a Market Order fills at the best available prevailing prices",
          "A Market Order is valid only during pre-open auction; a Limit Order works only after market hours",
          "A Limit Order requires zero margin; a Market Order requires 100% cash collateral",
          "A Market Order cannot be cancelled once placed",
        ],
        correctIndex: 0,
        explanation:
          "A Limit Order controls execution price (with fill risk), while a Market Order prioritizes immediate execution (with slippage risk).",
      },
      {
        question: "What is the role of a Clearing Corporation (such as NSE Clearing or ICCL)?",
        options: [
          "Providing equity research reports to retail clients",
          "Acting as a central counterparty to guarantee settlement and manage clearing risk",
          "Allocating IPO shares to retail applicants",
          "Setting repo rates for commercial banks",
        ],
        correctIndex: 1,
        explanation:
          "Clearing corporations novate trades, collect margins, and ensure guaranteed settlement between counterparties.",
      },
      {
        question: "Why is a CDSL/NSDL TPIN required when selling delivery shares from your Demat account?",
        options: [
          "To authorize debit of shares from your Demat account without giving Power of Attorney",
          "To verify your PAN card validity with the Income Tax portal",
          "To change your bank account linked to your trading account",
          "To apply for sovereign gold bonds",
        ],
        correctIndex: 0,
        explanation:
          "TPIN lets you digitally authorize Demat debit transactions securely without granting standing Power of Attorney.",
      },
    ],
  },
  "module-03": {
    moduleSlug: "module-03",
    moduleTitle: "Fundamental analysis",
    passingScore: 4,
    questions: [
      {
        question: "Which financial statement shows a company's assets, liabilities, and shareholders' equity at a specific point in time?",
        options: [
          "Cash Flow Statement",
          "Balance Sheet",
          "Profit & Loss Statement",
          "Auditor's Report",
        ],
        correctIndex: 1,
        explanation:
          "The Balance Sheet is a snapshot of assets, liabilities, and equity on a given date (Assets = Liabilities + Equity).",
      },
      {
        question: "What does a high Debt-to-Equity ratio generally indicate?",
        options: [
          "The business relies relatively more on borrowed funds than shareholders' equity to finance assets",
          "The company holds zero cash on its balance sheet",
          "The stock is trading below its face value",
          "Operating margins are guaranteed to expand",
        ],
        correctIndex: 0,
        explanation:
          "Debt-to-Equity measures financial leverage; higher leverage increases fixed interest obligations and risk during downturns.",
      },
      {
        question: "Why do analysts check Operating Cash Flow (OCF) alongside reported Net Profit?",
        options: [
          "Because accounting profits can differ from actual cash generated due to receivables, inventory, and non-cash items",
          "Because OCF replaces the need to read the Balance Sheet",
          "Because Net Profit never includes taxes or depreciation",
          "Because OCF only applies to banking stocks",
        ],
        correctIndex: 0,
        explanation:
          "Comparing OCF with Net Profit helps verify earnings quality and whether profits convert into actual cash.",
      },
      {
        question: "What does Return on Equity (ROE) measure?",
        options: [
          "How efficiently a company generates net profit from shareholders' equity",
          "The dividend yield paid out every quarter",
          "The daily price return of the stock on the exchange",
          "Total promoter holding percentage",
        ],
        correctIndex: 0,
        explanation:
          "ROE = Net Profit / Average Shareholders' Equity, showing how effectively equity capital is compounded.",
      },
      {
        question: "When comparing two companies in the same sector using the P/E ratio, what should you keep in mind?",
        options: [
          "A lower P/E is not automatically cheap if earnings growth is slowing or earnings are cyclically inflated",
          "P/E ignores share price completely",
          "A high P/E always means the company has no debt",
          "P/E can only be calculated for loss-making firms",
        ],
        correctIndex: 0,
        explanation:
          "P/E must be evaluated alongside earnings growth, return ratios, balance sheet strength, and business cycle position.",
      },
    ],
  },
  "module-04": {
    moduleSlug: "module-04",
    moduleTitle: "Technical analysis",
    passingScore: 4,
    questions: [
      {
        question: "What defines a primary uptrend on a price chart?",
        options: [
          "A sequence of higher highs (HH) and higher lows (HL)",
          "A sequence of lower highs (LH) and lower lows (LL)",
          "Price moving strictly sideways between two flat lines",
          "Falling volume on every green candle",
        ],
        correctIndex: 0,
        explanation:
          "Classic trend structure defines an uptrend by successively higher swing highs and higher swing lows.",
      },
      {
        question: "Why does a break of a major resistance level carry more weight when accompanied by strong volume?",
        options: [
          "Higher volume signals broader market participation backing the move rather than a low-liquidity spike",
          "Volume automatically turns resistance into a permanent floor with zero retest possibility",
          "High volume stops all short sellers by exchange rule",
          "Volume removes the need for a stop-loss",
        ],
        correctIndex: 0,
        explanation:
          "Strong volume confirms conviction and liquidity behind a breakout, helping filter out weak or false moves.",
      },
      {
        question: "What is the main difference between a Simple Moving Average (SMA) and an Exponential Moving Average (EMA)?",
        options: [
          "An EMA gives greater weight to recent prices, reacting faster to price changes than an SMA of the same lookback period",
          "An SMA uses only closing prices; an EMA uses only opening prices",
          "An EMA never lags behind price action",
          "An SMA works only on weekly timeframes",
        ],
        correctIndex: 0,
        explanation:
          "Both are lagging trend indicators, but EMA weights recent data more heavily so it responds sooner.",
      },
      {
        question: "What does RSI (Relative Strength Index) measure?",
        options: [
          "The speed and magnitude of recent price gains versus losses over a set lookback period (commonly 14 periods)",
          "Total open interest in index futures",
          "A company's quarterly dividend payout",
          "Bid-ask spread depth on Level 2 data",
        ],
        correctIndex: 0,
        explanation:
          "RSI oscillates between 0 and 100 to gauge momentum and relative overbought or oversold conditions.",
      },
      {
        question: "What is a key limitation of relying on a single indicator in isolation?",
        options: [
          "Indicators can give conflicting or whipsaw signals in choppy, range-bound markets",
          "Indicators update only once a month",
          "Indicators cannot be viewed on intraday charts",
          "Indicators predict exact news announcements",
        ],
        correctIndex: 0,
        explanation:
          "Every indicator has blind spots depending on market regime, making price structure and risk rules essential.",
      },
    ],
  },
  "module-05": {
    moduleSlug: "module-05",
    moduleTitle: "Price action",
    passingScore: 4,
    questions: [
      {
        question: "In a single candlestick, what information do the open, high, low, and close provide?",
        options: [
          "The timeframe's starting price, highest traded price, lowest traded price, and ending price",
          "Total institutional FII net buy value for the month",
          "Implied volatility surface across all strikes",
          "Exact stop-loss levels of all retail traders",
        ],
        correctIndex: 0,
        explanation:
          "OHLC captures the opening print, extreme range, and closing print for that specific candle timeframe.",
      },
      {
        question: "Why is context (prior trend and nearby support/resistance) critical when reading a reversal candle?",
        options: [
          "The same candle pattern carries very different probability at an established key level versus mid-range noise",
          "Candlesticks work identically regardless of location on the chart",
          "Context changes the formula used to calculate candle bodies",
          "Reversal candles only appear on 1-minute charts",
        ],
        correctIndex: 0,
        explanation:
          "Location and prior momentum determine whether a rejection wick or engulfing candle is meaningful or just noise.",
      },
      {
        question: "What is a 'false breakout' (or trap) in price action?",
        options: [
          "Price briefly pushes past a key swing high or low, triggers breakout or stop orders, and quickly reverses back into the prior range",
          "A gap up at market open that stays above yesterday's high all day",
          "A stock hitting upper circuit for five consecutive days",
          "A sideways consolidation lasting more than two weeks",
        ],
        correctIndex: 0,
        explanation:
          "False breakouts often sweep liquidity around obvious highs or lows before price snaps back inside structure.",
      },
      {
        question: "What does a tight consolidation range (narrow swings) often precede?",
        options: [
          "Potential expansion or breakout move once buyers or sellers absorb supply/demand—though direction is not guaranteed in advance",
          "Guaranteed zero movement for the rest of the contract expiry",
          "Automatic delisting of the underlying security",
          "Lower tick size on the exchange",
        ],
        correctIndex: 0,
        explanation:
          "Compression reflects balance between buyers and sellers before a potential directional expansion.",
      },
      {
        question: "Why is waiting for confirmation (such as a candle close or retest) helpful on breakouts?",
        options: [
          "It helps reduce entries on immediate spikes that fail before the candle closes",
          "It guarantees zero slippage on market orders",
          "It eliminates the need to define invalidation",
          "It doubles position size automatically",
        ],
        correctIndex: 0,
        explanation:
          "Waiting for candle close or structural confirmation filters out premature entries on wick-only pokes.",
      },
    ],
  },
  "module-06": {
    moduleSlug: "module-06",
    moduleTitle: "Futures market",
    passingScore: 4,
    questions: [
      {
        question: "What is a stock or index futures contract?",
        options: [
          "A standardized derivative agreement to buy or sell an underlying asset at a predetermined price on a specified future expiry date",
          "A perpetual ownership share with voting rights in the company",
          "A government savings bond issued by the RBI",
          "A zero-risk fixed deposit offered by a broker",
        ],
        correctIndex: 0,
        explanation:
          "Futures are standardized exchange-traded contracts obligating delivery or cash settlement at expiry.",
      },
      {
        question: "What is 'mark-to-market' (MTM) settlement in futures?",
        options: [
          "Daily calculation and settlement of profits and losses based on the contract's daily settlement price",
          "Paying brokerage only once a year",
          "Converting futures into equity shares every morning",
          "Locking in profits without closing the trade",
        ],
        correctIndex: 0,
        explanation:
          "Futures accounts are marked to market daily, crediting gains or debiting losses against margin.",
      },
      {
        question: "What does 'Cost of Carry' generally reflect in index/equity futures pricing?",
        options: [
          "The relationship between spot price, financing/interest cost, and expected dividends until expiry",
          "Daily exchange transaction tax only",
          "The number of active retail traders in the contract",
          "The strike price interval of weekly options",
        ],
        correctIndex: 0,
        explanation:
          "Futures fair value relates to spot price adjusted for interest cost minus expected dividends over the holding period.",
      },
      {
        question: "What happens if your futures position suffers losses and your available margin falls below the maintenance requirement?",
        options: [
          "You receive a margin call to replenish funds, and the broker/clearing system may square off positions if margin is not met",
          "Your loss is forgiven until the next monthly expiry",
          "The exchange converts your loss into a bonus credit",
          "Your contract automatically extends for another month for free",
        ],
        correctIndex: 0,
        explanation:
          "Insufficient margin triggers margin calls and risk-reduction square-off actions to protect clearing integrity.",
      },
      {
        question: "What does a rise in price alongside a rise in Open Interest (OI) in a futures contract typically suggest?",
        options: [
          "Fresh long positions/capital entering the contract alongside rising prices",
          "All existing buyers exiting their positions",
          "Trading has been suspended by the exchange",
          "The contract has already expired",
        ],
        correctIndex: 0,
        explanation:
          "Rising price with rising OI generally indicates new long build-up rather than short covering alone.",
      },
    ],
  },
  "module-07": {
    moduleSlug: "module-07",
    moduleTitle: "Options market",
    passingScore: 4,
    questions: [
      {
        question: "What right does a Call option buyer have?",
        options: [
          "The right (but not the obligation) to buy the underlying at the strike price on or before expiry (as per contract type)",
          "The obligation to sell the underlying at any price chosen by the seller",
          "Guaranteed profit regardless of where the underlying expires",
          "Voting rights at the company's AGM",
        ],
        correctIndex: 0,
        explanation:
          "Call buyers hold the right—not the obligation—to buy at the strike price; maximum loss is limited to the premium paid.",
      },
      {
        question: "What right does a Put option buyer have?",
        options: [
          "The right (but not the obligation) to sell the underlying at the strike price",
          "The right to receive dividends declared by the underlying compan
