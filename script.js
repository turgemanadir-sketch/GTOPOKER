// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lessons Data - Each lesson has content and quiz questions
const lessons = [
    {
        id: 1,
        title: "What is GTO?",
        description: "Learn the fundamentals of Game Theory Optimal poker strategy.",
        duration: "5 min",
        questions: 3,
        content: `
            <p>GTO (Game Theory Optimal) poker is a strategy that makes you unexploitable. It's based on mathematical principles that ensure you can't be beaten in the long run, regardless of how your opponents play.</p>
            
            <h3>Why Learn GTO?</h3>
            <p>Traditional poker advice often focuses on exploiting specific opponents. But what if you don't know your opponent? GTO provides a solid baseline strategy that works against anyone.</p>
            
            <div class="example-box">
                <h4>Simple Example</h4>
                <p>Imagine playing rock-paper-scissors. If you always play rock, your opponent will exploit you by playing paper. But if you play each option randomly (33% each), you can't be exploited. That's the essence of GTO.</p>
            </div>
            
            <h3>Key Principles</h3>
            <ul>
                <li><strong>Balance:</strong> Mix your plays so opponents can't predict your actions</li>
                <li><strong>Unexploitability:</strong> Play in a way that prevents opponents from taking advantage</li>
                <li><strong>Optimal Frequencies:</strong> Do certain actions at mathematically correct rates</li>
            </ul>
            
            <p>Don't worry - you don't need to memorize complex math. Understanding the concepts will naturally improve your game.</p>
        `,
        quiz: [
            {
                question: "What is the main goal of GTO poker?",
                scenario: "Understanding GTO Fundamentals",
                options: [
                    { text: "To win every hand", correct: false },
                    { text: "To be unexploitable by opponents", correct: true },
                    { text: "To always bluff", correct: false },
                    { text: "To play only premium hands", correct: false }
                ],
                explanation: "GTO aims to make you unexploitable. You play in a balanced way so opponents can't take advantage of your strategy, regardless of how they play."
            },
            {
                question: "Why is balance important in GTO?",
                scenario: "Core GTO Concept",
                options: [
                    { text: "It makes you unpredictable", correct: true },
                    { text: "It guarantees you win", correct: false },
                    { text: "It's easier to remember", correct: false },
                    { text: "It impresses other players", correct: false }
                ],
                explanation: "Balance makes your strategy unpredictable. If you mix strong and weak hands in similar ways, opponents can't exploit patterns in your play."
            },
            {
                question: "When should you use GTO strategy?",
                scenario: "Applying GTO",
                options: [
                    { text: "Only against professional players", correct: false },
                    { text: "As a baseline against unknown opponents", correct: true },
                    { text: "Never - always exploit opponents", correct: false },
                    { text: "Only in tournaments", correct: false }
                ],
                explanation: "GTO works best as a baseline strategy, especially against unknown opponents. Once you identify opponent weaknesses, you can adjust to exploit them."
            }
        ]
    },
    {
        id: 2,
        title: "Position is Power",
        description: "Understand why your seat at the table is crucial for GTO play.",
        duration: "6 min",
        questions: 3,
        content: `
            <p>In poker, <strong>position</strong> refers to where you sit relative to the dealer button. It's one of the most important concepts in GTO poker.</p>
            
            <h3>Why Position Matters</h3>
            <p>When you act last (late position), you have more information. You see what everyone else does before making your decision. This is a huge advantage!</p>
            
            <div class="example-box">
                <h4>Position Example</h4>
                <p>You have A♠K♥ on the button (best position). Everyone folds to you. You can raise confidently because you'll act last on all future streets. Compare this to having the same hand in early position - much riskier!</p>
            </div>
            
            <h3>Position Categories</h3>
            <ul>
                <li><strong>Early Position:</strong> First to act - play tight, only strong hands</li>
                <li><strong>Middle Position:</strong> More flexibility - can play more hands</li>
                <li><strong>Late Position (Button/Cutoff):</strong> Maximum power - play the widest range</li>
                <li><strong>Blinds:</strong> Forced bets - defend appropriately but carefully</li>
            </ul>
            
            <h3>GTO Position Strategy</h3>
            <p>GTO players adjust their ranges based on position. You can play <strong>more hands</strong> in late position and should play <strong>fewer hands</strong> in early position.</p>
            
            <p>This isn't about being scared - it's about math. Late position hands are simply more profitable.</p>
        `,
        quiz: [
            {
                question: "What is the main advantage of late position?",
                scenario: "Position: Button vs Early Position",
                options: [
                    { text: "You get better cards", correct: false },
                    { text: "You act last and have more information", correct: true },
                    { text: "You can bet more money", correct: false },
                    { text: "Other players fear you", correct: false }
                ],
                explanation: "Acting last means you see what everyone else does before you decide. This information advantage is why position is so valuable in poker."
            },
            {
                question: "You have 9♠8♠. Where should you be most willing to play this hand?",
                scenario: "Suited Connector - Position Decision",
                options: [
                    { text: "Early position - show strength", correct: false },
                    { text: "Late position - more playability", correct: true },
                    { text: "Position doesn't matter", correct: false },
                    { text: "Never play this hand", correct: false }
                ],
                explanation: "Suited connectors like 9♠8♠ play much better in late position. You need to see flops cheaply and have position post-flop to realize their value."
            },
            {
                question: "In early position, your GTO strategy should be:",
                scenario: "Early Position Strategy",
                options: [
                    { text: "Play many hands to be unpredictable", correct: false },
                    { text: "Play tight - only strong hands", correct: true },
                    { text: "Always fold", correct: false },
                    { text: "Always raise", correct: false }
                ],
                explanation: "Early position requires a tighter range. You'll be out of position post-flop, so you need stronger hands to compensate for this disadvantage."
            }
        ]
    },
    {
        id: 3,
        title: "Pre-Flop Ranges",
        description: "Learn which hands to play and how to play them before the flop.",
        duration: "7 min",
        questions: 3,
        content: `
            <p>A <strong>range</strong> is the set of hands you play in a given situation. GTO is all about playing balanced ranges that can't be exploited.</p>
            
            <h3>Hand Categories</h3>
            <ul>
                <li><strong>Premium Hands:</strong> AA, KK, QQ, AK - Always play these, usually with a raise</li>
                <li><strong>Strong Hands:</strong> JJ, TT, AQ, AJ - Play from most positions</li>
                <li><strong>Playable Hands:</strong> 99-22, suited connectors, suited aces - Position dependent</li>
                <li><strong>Marginal Hands:</strong> Weak aces, offsuit connectors - Late position only or fold</li>
            </ul>
            
            <div class="example-box">
                <h4>Range Example</h4>
                <p>From the button, your opening range might include: All pairs, all aces, most kings, suited connectors, and more. That's about 40-50% of hands!</p>
                <p>From early position: Only premium pairs (JJ+), AK, AQ, maybe KQs. That's only about 10-15% of hands.</p>
            </div>
            
            <h3>Standard Pre-Flop Actions</h3>
            <p><strong>Raise:</strong> Standard opening is 2.5-3BB. This builds the pot with your strong hands and gives you initiative.</p>
            <p><strong>Call:</strong> Usually from the blinds with decent hands when someone else raised. Sometimes called "defending your blind."</p>
            <p><strong>3-Bet:</strong> Re-raising someone who already raised. Do this with your strongest hands and some bluffs for balance.</p>
            <p><strong>Fold:</strong> Most hands should be folded! Even pros fold 70-80% of their hands pre-flop.</p>
            
            <h3>Key Principle</h3>
            <p>Don't try to memorize exact ranges. Instead, understand that you play <strong>tighter in early position</strong> and <strong>wider in late position</strong>. This is the foundation of GTO pre-flop play.</p>
        `,
        quiz: [
            {
                question: "You're on the button with A♠K♥. Action folds to you. What should you do?",
                scenario: "Position: Button | Stack: 100BB | Blinds: 0.5BB/1BB",
                options: [
                    { text: "Fold - too risky", correct: false },
                    { text: "Call - see the flop cheaply", correct: false },
                    { text: "Raise to 2.5-3BB", correct: true },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "A♠K♥ is a premium hand. From the button, you should raise to build the pot and take initiative. A standard raise to 2.5-3BB is optimal GTO sizing."
            },
            {
                question: "You have 7♥7♦ in early position. What's the GTO approach?",
                scenario: "Position: Early Position | Stack: 100BB",
                options: [
                    { text: "Always fold small pairs", correct: false },
                    { text: "Fold or raise (mixed strategy)", correct: true },
                    { text: "Always limp", correct: false },
                    { text: "Always raise to 10BB", correct: false }
                ],
                explanation: "Small pairs in early position are marginal. GTO mixes between folding and raising. Never limp - it's exploitable. The exact frequency depends on table dynamics."
            },
            {
                question: "What percentage of hands should you play from early position?",
                scenario: "Pre-Flop Range Understanding",
                options: [
                    { text: "About 50% - play loose", correct: false },
                    { text: "About 10-15% - play tight", correct: true },
                    { text: "100% - be unpredictable", correct: false },
                    { text: "0% - always fold", correct: false }
                ],
                explanation: "From early position, you should play roughly 10-15% of hands - only your strongest holdings. This compensates for your positional disadvantage."
            }
        ]
    },
    {
        id: 4,
        title: "Continuation Betting",
        description: "Master the art of betting after you raised pre-flop.",
        duration: "6 min",
        questions: 3,
        content: `
            <p>A <strong>continuation bet (c-bet)</strong> is when you bet on the flop after you were the pre-flop aggressor (raiser). It's one of the most common plays in poker.</p>
            
            <h3>Why C-Bet?</h3>
            <p>When you raised pre-flop, you showed strength. Most flops miss most hands, so continuing to bet maintains your story and puts pressure on opponents.</p>
            
            <div class="example-box">
                <h4>C-Bet Example</h4>
                <p>You raised with A♥K♦ from the button. One player called. Flop: 9♣ 5♠ 2♦</p>
                <p>You missed, but your opponent doesn't know that! A c-bet of 50-75% pot is standard. Your opponent will fold most of their hands.</p>
            </div>
            
            <h3>GTO C-Betting Strategy</h3>
            <ul>
                <li><strong>Frequency:</strong> C-bet about 50-70% of the time (not always!)</li>
                <li><strong>Size:</strong> Usually 33-75% of the pot, depending on board texture</li>
                <li><strong>Board Texture:</strong> Bet more on dry boards (like K♠ 7♣ 2♦), less on wet boards (like J♠ T♠ 9♥)</li>
                <li><strong>Position:</strong> C-bet more often when you have position</li>
            </ul>
            
            <h3>When NOT to C-Bet</h3>
            <p>Don't c-bet 100% of the time - that's exploitable! Sometimes check with both strong hands (for balance) and weak hands (to give up).</p>
            
            <p><strong>Bad boards for c-betting:</strong> Connected, suited boards that hit your opponent's calling range (like 8♠ 7♠ 6♥)</p>
            
            <h3>Balance is Key</h3>
            <p>Mix strong hands and bluffs in your c-betting range. This makes you unpredictable and unexploitable.</p>
        `,
        quiz: [
            {
                question: "You raised pre-flop with A♥K♦ and got called. Flop: 7♣ 2♦ 9♠. What should you do?",
                scenario: "Position: Button | Pot: 6BB | You: 97.5BB",
                options: [
                    { text: "Check - you missed completely", correct: false },
                    { text: "Continuation bet 3-4BB", correct: true },
                    { text: "Go all-in", correct: false },
                    { text: "Bet 0.5BB", correct: false }
                ],
                explanation: "Even though you missed, a c-bet is standard GTO play. You have position, initiative, and overcards. Betting 50-66% pot (3-4BB) is optimal on this dry board."
            },
            {
                question: "What should you include in your c-betting range?",
                scenario: "GTO C-Bet Balance",
                options: [
                    { text: "Only your strong hands", correct: false },
                    { text: "Only bluffs", correct: false },
                    { text: "A mix of strong hands and bluffs", correct: true },
                    { text: "Every hand you have", correct: false }
                ],
                explanation: "GTO requires balance. C-bet with both strong hands (for value) and bluffs (to win pots you'd otherwise lose). This makes you unpredictable."
            },
            {
                question: "The flop comes J♠ T♠ 9♥ (very connected). How should this affect your c-betting?",
                scenario: "Board Texture Consideration",
                options: [
                    { text: "C-bet more often - show strength", correct: false },
                    { text: "C-bet less often - board hits opponent's range", correct: true },
                    { text: "Always c-bet regardless of board", correct: false },
                    { text: "Never c-bet on this board", correct: false }
                ],
                explanation: "Connected boards hit your opponent's calling range hard. They likely have pairs, draws, or made hands. C-bet less frequently and check more often."
            }
        ]
    },
    {
        id: 5,
        title: "Pot Odds & Equity",
        description: "Learn the math behind profitable poker decisions.",
        duration: "8 min",
        questions: 3,
        content: `
            <p>Understanding <strong>pot odds</strong> and <strong>equity</strong> is crucial for making profitable decisions. Don't worry - the math is simpler than you think!</p>
            
            <h3>What are Pot Odds?</h3>
            <p>Pot odds are the ratio of the pot size to the cost of your call. They tell you how often you need to win to make calling profitable.</p>
            
            <div class="example-box">
                <h4>Pot Odds Example</h4>
                <p>Pot: $100 | Opponent bets: $50 | You need to call: $50</p>
                <p>Total pot if you call: $150 | Your cost: $50</p>
                <p>Pot odds: 150:50 = 3:1</p>
                <p>You need to win 25% of the time to break even (1 / (3+1) = 0.25)</p>
            </div>
            
            <h3>What is Equity?</h3>
            <p>Equity is your chance of winning the hand. If you have a flush draw, you have about 35% equity (you'll make your flush roughly 1 in 3 times).</p>
            
            <h3>The Decision</h3>
            <p>Compare your equity to the pot odds:</p>
            <ul>
                <li><strong>Equity > Pot Odds Required:</strong> Call (profitable)</li>
                <li><strong>Equity < Pot Odds Required:</strong> Fold (unprofitable)</li>
            </ul>
            
            <h3>Common Scenarios</h3>
            <p><strong>Flush Draw (9 outs):</strong> ~35% equity on the flop</p>
            <p><strong>Open-Ended Straight Draw (8 outs):</strong> ~32% equity on the flop</p>
            <p><strong>Gutshot Straight Draw (4 outs):</strong> ~16% equity on the flop</p>
            <p><strong>Overcards (6 outs):</strong> ~24% equity on the flop</p>
            
            <h3>GTO Application</h3>
            <p>GTO players use pot odds and equity to determine correct calling and betting frequencies. You don't need to calculate exactly - just understand the concept!</p>
        `,
        quiz: [
            {
                question: "Pot is $100. Opponent bets $50. You need to call $50. What pot odds are you getting?",
                scenario: "Pot Odds Calculation",
                options: [
                    { text: "2:1", correct: false },
                    { text: "3:1", correct: true },
                    { text: "1:1", correct: false },
                    { text: "4:1", correct: false }
                ],
                explanation: "Total pot if you call: $150. Your cost: $50. Pot odds: 150:50 = 3:1. You need to win 25% of the time to break even."
            },
            {
                question: "You have a flush draw (35% equity). Pot odds require 30% to call. What should you do?",
                scenario: "Equity vs Pot Odds",
                options: [
                    { text: "Fold - too risky", correct: false },
                    { text: "Call - you have enough equity", correct: true },
                    { text: "Raise - show strength", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "Your equity (35%) is greater than what pot odds require (30%). This is a profitable call in the long run. This is fundamental GTO math."
            },
            {
                question: "You're in the big blind with 5♠6♠. A player raises to 3BB. Pot is now 4.5BB. Should you call?",
                scenario: "Position: Big Blind | Your Stack: 100BB",
                options: [
                    { text: "Fold - weak hand", correct: false },
                    { text: "Call - good pot odds and playability", correct: true },
                    { text: "3-bet to 9BB", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "You're getting 4.5:2 = 2.25:1 pot odds (need ~30% equity). Suited connectors have good playability and can flop strong draws. This is a standard GTO call."
            }
        ]
    },
    {
        id: 6,
        title: "3-Betting Strategy",
        description: "Master when and how to re-raise pre-flop for maximum value.",
        duration: "9 min",
        questions: 3,
        content: `
            <p>A <strong>3-bet</strong> is a re-raise before the flop. It's a powerful tool in GTO poker that builds pots with strong hands and applies pressure to opponents.</p>
            
            <h3>Why 3-Bet?</h3>
            <ul>
                <li><strong>Value:</strong> Build bigger pots with premium hands</li>
                <li><strong>Fold Equity:</strong> Win the pot immediately when opponents fold</li>
                <li><strong>Initiative:</strong> Take control of the hand</li>
                <li><strong>Balance:</strong> Prevent opponents from exploiting you</li>
            </ul>
            
            <h3>3-Bet Sizing Guide</h3>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>In Position</th>
                        <th>Out of Position</th>
                        <th>Reasoning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>vs Button</td>
                        <td class="highlight">3x raise</td>
                        <td class="highlight">3.5x raise</td>
                        <td>Smaller when IP, larger OOP</td>
                    </tr>
                    <tr>
                        <td>vs Cutoff</td>
                        <td class="highlight">3x raise</td>
                        <td class="highlight">3.5x raise</td>
                        <td>Standard sizing</td>
                    </tr>
                    <tr>
                        <td>vs Early Position</td>
                        <td class="highlight">3x raise</td>
                        <td class="highlight">4x raise</td>
                        <td>Larger vs tight ranges</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="example-box">
                <h4>3-Bet Example</h4>
                <p>Cutoff raises to 2.5BB. You're on the button with A♠Q♠.</p>
                <p><strong>GTO Play:</strong> 3-bet to 7.5BB (3x the original raise)</p>
                <p>This size gives you fold equity while building a pot when called. You have position post-flop, which is a huge advantage.</p>
            </div>
            
            <h3>3-Bet Range by Position</h3>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Your Position</th>
                        <th>Value Hands</th>
                        <th>Bluff Hands</th>
                        <th>Frequency</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Button</td>
                        <td>QQ+, AK, AQs</td>
                        <td>A5s-A2s, K9s-K7s, suited connectors</td>
                        <td class="highlight">~10-12%</td>
                    </tr>
                    <tr>
                        <td>Small Blind</td>
                        <td>JJ+, AQ+</td>
                        <td>A5s-A2s, KTs, suited connectors</td>
                        <td class="highlight">~8-10%</td>
                    </tr>
                    <tr>
                        <td>Big Blind</td>
                        <td>TT+, AJ+</td>
                        <td>A5s-A2s, suited connectors</td>
                        <td class="highlight">~8-10%</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Key Principles</h3>
            <p><strong>Polarized Range:</strong> Mix premium hands (value) with weaker hands that have good blockers (bluffs). Avoid medium-strength hands that play poorly when 4-bet.</p>
            <p><strong>Position Matters:</strong> 3-bet more often when you have position. You'll have an easier time post-flop.</p>
            <p><strong>Stack Depth:</strong> With shorter stacks (20-40BB), 3-bet more for value. With deeper stacks (100BB+), you can 3-bet more hands profitably.</p>
        `,
        quiz: [
            {
                question: "Cutoff raises to 3BB. You're on the button with K♠K♥. What should you do?",
                scenario: "Position: Button | Stack: 100BB | Pot: 4.5BB",
                options: [
                    { text: "Call - trap them", correct: false },
                    { text: "3-bet to 9BB", correct: true },
                    { text: "Fold - too risky", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "KK is a premium hand perfect for 3-betting. Standard sizing is 3x the raise (9BB). This builds the pot and maintains initiative. Calling is too passive and allows opponents to see flops cheaply."
            },
            {
                question: "Why do we include bluffs in our 3-betting range?",
                scenario: "GTO 3-Bet Balance",
                options: [
                    { text: "To confuse opponents", correct: false },
                    { text: "To balance our range and remain unexploitable", correct: true },
                    { text: "To lose money faster", correct: false },
                    { text: "It's not recommended", correct: false }
                ],
                explanation: "Bluffs in your 3-bet range create balance. If you only 3-bet premium hands, opponents can exploit you by folding everything. Mixing in bluffs makes you unpredictable and unexploitable."
            },
            {
                question: "You're in the small blind. Button raises to 2.5BB. You have A♥5♥. What's the GTO approach?",
                scenario: "Position: Small Blind | Stack: 100BB",
                options: [
                    { text: "Always fold suited aces", correct: false },
                    { text: "3-bet to 8.75BB (sometimes)", correct: true },
                    { text: "Always call", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "A5s is a good 3-bet bluff candidate. It has blocker value (blocks AA and AK) and plays well post-flop. GTO mixes between 3-betting and folding. Never just call from SB - you'll be out of position."
            }
        ]
    },
    {
        id: 7,
        title: "Board Texture Reading",
        description: "Learn to analyze flops and adjust your strategy accordingly.",
        duration: "8 min",
        questions: 3,
        content: `
            <p>Understanding <strong>board texture</strong> is crucial for GTO play. Different flops require different strategies based on how they connect with ranges.</p>
            
            <h3>Board Texture Categories</h3>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Texture Type</th>
                        <th>Example</th>
                        <th>Characteristics</th>
                        <th>Strategy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Dry</strong></td>
                        <td>K♠ 7♣ 2♦</td>
                        <td>Disconnected, rainbow</td>
                        <td class="highlight">C-bet often, large size</td>
                    </tr>
                    <tr>
                        <td><strong>Wet</strong></td>
                        <td>J♠ T♠ 9♥</td>
                        <td>Connected, suited, draws</td>
                        <td class="highlight">C-bet less, check more</td>
                    </tr>
                    <tr>
                        <td><strong>Static</strong></td>
                        <td>A♠ A♥ 5♣</td>
                        <td>Paired board, few draws</td>
                        <td class="highlight">Small bets, check often</td>
                    </tr>
                    <tr>
                        <td><strong>Dynamic</strong></td>
                        <td>8♠ 7♠ 6♦</td>
                        <td>Many turn cards change equity</td>
                        <td class="highlight">Bet to protect equity</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="example-box">
                <h4>Dry Board Example</h4>
                <p>You raised pre-flop with A♥K♦. Flop: K♠ 7♣ 2♦</p>
                <p>This is a <strong>dry board</strong>. Few draws exist, and you have top pair. C-bet 66-75% pot. Your opponent will fold most hands, and when called, you likely have the best hand.</p>
            </div>
            
            <h3>Range Advantage Analysis</h3>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Board</th>
                        <th>Favors</th>
                        <th>Reason</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A♠ K♥ Q♦</td>
                        <td>Pre-flop Raiser</td>
                        <td>Hits premium range hard</td>
                        <td class="highlight">Bet aggressively</td>
                    </tr>
                    <tr>
                        <td>7♠ 6♠ 5♥</td>
                        <td>Caller</td>
                        <td>Hits suited connectors</td>
                        <td class="highlight">Check more often</td>
                    </tr>
                    <tr>
                        <td>2♣ 2♦ 2♠</td>
                        <td>Neutral</td>
                        <td>Rarely hits either range</td>
                        <td class="highlight">Small bets or check</td>
                    </tr>
                    <tr>
                        <td>J♠ T♠ 4♠</td>
                        <td>Caller</td>
                        <td>Many flush/straight draws</td>
                        <td class="highlight">Check or small bet</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="example-box">
                <h4>Wet Board Example</h4>
                <p>You raised with A♠K♥. Flop: J♠ T♠ 9♥</p>
                <p>This is a <strong>wet board</strong>. Your opponent's calling range hits this hard (many straight and flush draws). Check more often or use smaller bet sizes. Don't commit too much with just overcards.</p>
            </div>
            
            <h3>Adjusting C-Bet Frequency</h3>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Factor</th>
                        <th>C-Bet More</th>
                        <th>C-Bet Less</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Board Texture</td>
                        <td>Dry, disconnected</td>
                        <td>Wet, connected</td>
                    </tr>
                    <tr>
                        <td>Position</td>
                        <td class="highlight">In position</td>
                        <td>Out of position</td>
                    </tr>
                    <tr>
                        <td>Opponents</td>
                        <td>Single opponent</td>
                        <td class="highlight">Multiple opponents</td>
                    </tr>
                    <tr>
                        <td>Your Range</td>
                        <td>Range advantage</td>
                        <td>Range disadvantage</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Key Takeaway</h3>
            <p>GTO isn't about always betting or always checking. It's about adjusting frequencies based on board texture, position, and range interactions. Master board reading to make optimal decisions.</p>
        `,
        quiz: [
            {
                question: "You raised pre-flop. Flop comes K♠ 7♣ 2♦. What type of board is this?",
                scenario: "Board Texture Analysis",
                options: [
                    { text: "Wet board - many draws", correct: false },
                    { text: "Dry board - disconnected", correct: true },
                    { text: "Dynamic board", correct: false },
                    { text: "Paired board", correct: false }
                ],
                explanation: "This is a classic dry board - rainbow (different suits), disconnected (no straight draws), and static (few cards change equity). Perfect for c-betting with a wide range."
            },
            {
                question: "Flop: J♠ T♠ 9♥. You have A♠K♥ (missed). What should you do?",
                scenario: "Position: Button | Pot: 6BB | Wet Board",
                options: [
                    { text: "Bet large - show strength", correct: false },
                    { text: "Check - board hits opponent's range", correct: true },
                    { text: "Go all-in", correct: false },
                    { text: "Always c-bet regardless", correct: false }
                ],
                explanation: "This wet, connected board hits your opponent's calling range hard. They likely have pairs, draws, or made hands. Checking is often best with just overcards. Save your chips for better spots."
            },
            {
                question: "Which board favors the pre-flop raiser the most?",
                scenario: "Range Advantage Understanding",
                options: [
                    { text: "7♠ 6♠ 5♥ - connected", correct: false },
                    { text: "A♠ K♥ Q♦ - high cards", correct: true },
                    { text: "2♣ 3♦ 4♠ - low cards", correct: false },
                    { text: "8♠ 8♥ 8♦ - trips", correct: false }
                ],
                explanation: "A-K-Q heavily favors the raiser's range. Premium hands like AA, KK, QQ, AK, AQ all hit this board hard. The caller's range rarely contains these hands. Bet aggressively here."
            }
        ]
    },
    {
        id: 8,
        title: "Bet Sizing Theory",
        description: "Master the art of choosing optimal bet sizes in different situations.",
        duration: "9 min",
        questions: 3,
        content: `
            <p><strong>Bet sizing</strong> is one of the most important skills in GTO poker. The size of your bet should accomplish specific goals and be balanced across your range.</p>
            
            <h3>Standard Bet Sizing Guide</h3>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Street</th>
                        <th>Small Size</th>
                        <th>Medium Size</th>
                        <th>Large Size</th>
                        <th>When to Use</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Flop</td>
                        <td class="highlight">33%</td>
                        <td class="highlight">50-66%</td>
                        <td class="highlight">75-100%</td>
                        <td>Small: Dry boards | Large: Wet boards</td>
                    </tr>
                    <tr>
                        <td>Turn</td>
                        <td class="highlight">33-50%</td>
                        <td class="highlight">66-75%</td>
                        <td class="highlight">100-150%</td>
                        <td>Adjust based on board texture</td>
                    </tr>
                    <tr>
                        <td>River</td>
                        <td class="highlight">33-50%</td>
                        <td class="highlight">66-75%</td>
                        <td class="highlight">100%+</td>
                        <td>Large: Polarized | Small: Merged</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Why Size Matters</h3>
            <ul>
                <li><strong>Pot Control:</strong> Smaller bets keep pots manageable with marginal hands</li>
                <li><strong>Value Extraction:</strong> Larger bets get more money in with strong hands</li>
                <li><strong>Fold Equity:</strong> Larger bets generate more folds</li>
                <li><strong>Pot Odds:</strong> Your bet size determines opponent's calling odds</li>
            </ul>
            
            <div class="example-box">
                <h4>Bet Sizing Example - Dry Board</h4>
                <p>Flop: K♠ 7♣ 2♦ | Pot: 10BB | You have K♥Q♥ (top pair)</p>
                <p><strong>GTO Sizing:</strong> Bet 3-5BB (33-50% pot)</p>
                <p>On dry boards, you don't need large bets. Opponent has few draws, so a small bet accomplishes your goals while risking less.</p>
            </div>
            
            <h3>Bet Sizing Strategy by Board Type</h3>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Board Type</th>
                        <th>Recommended Size</th>
                        <th>Reasoning</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dry, Static</td>
                        <td class="highlight">33-50% pot</td>
                        <td>Few draws, range advantage</td>
                        <td>K♠ 7♣ 2♦</td>
                    </tr>
                    <tr>
                        <td>Wet, Dynamic</td>
                        <td class="highlight">66-100% pot</td>
                        <td>Protect equity, charge draws</td>
                        <td>J♠ T♠ 9♥</td>
                    </tr>
                    <tr>
                        <td>Paired Board</td>
                        <td class="highlight">25-33% pot</td>
                        <td>Rarely hits either range</td>
                        <td>A♠ A♥ 5♣</td>
                    </tr>
                    <tr>
                        <td>High Card Heavy</td>
                        <td class="highlight">50-66% pot</td>
                        <td>Favors raiser's range</td>
                        <td>A♠ K♥ Q♦</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="example-box">
                <h4>Bet Sizing Example - Wet Board</h4>
                <p>Flop: 8♠ 7♠ 6♦ | Pot: 10BB | You have A♠A♥ (overpair)</p>
                <p><strong>GTO Sizing:</strong> Bet 7-10BB (66-100% pot)</p>
                <p>On wet boards with many draws, bet larger to protect your hand and charge draws the correct price. Don't give free cards!</p>
            </div>
            
            <h3>Multi-Street Sizing Strategy</h3>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Line</th>
                        <th>Flop</th>
                        <th>Turn</th>
                        <th>River</th>
                        <th>Goal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Value (Strong)</td>
                        <td>50%</td>
                        <td class="highlight">66%</td>
                        <td class="highlight">75-100%</td>
                        <td>Build pot gradually</td>
                    </tr>
                    <tr>
                        <td>Bluff</td>
                        <td>33%</td>
                        <td>50%</td>
                        <td class="highlight">66-75%</td>
                        <td>Minimize risk early</td>
                    </tr>
                    <tr>
                        <td>Thin Value</td>
                        <td>33%</td>
                        <td>50%</td>
                        <td>50%</td>
                        <td>Extract value, control pot</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>GTO Sizing Principles</h3>
            <p><strong>Balance:</strong> Use similar sizes with both value hands and bluffs. Don't let your bet size reveal your hand strength.</p>
            <p><strong>Geometry:</strong> Plan your sizes across streets to get stacks in efficiently with strong hands.</p>
            <p><strong>Opponent's Range:</strong> Adjust sizes based on how your opponent's range interacts with the board.</p>
        `,
        quiz: [
            {
                question: "Flop: K♠ 7♣ 2♦ (dry). Pot: 10BB. You have K♥Q♥. What's the optimal c-bet size?",
                scenario: "Dry Board Bet Sizing",
                options: [
                    { text: "15BB (150% pot) - huge bet", correct: false },
                    { text: "3-5BB (33-50% pot)", correct: true },
                    { text: "0.5BB - tiny bet", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "On dry boards, smaller bets (33-50% pot) are optimal. You have range advantage, and opponent has few draws. A small bet accomplishes your goals while risking less chips."
            },
            {
                question: "Why should you use similar bet sizes with both value hands and bluffs?",
                scenario: "GTO Bet Sizing Balance",
                options: [
                    { text: "To confuse yourself", correct: false },
                    { text: "To remain balanced and unexploitable", correct: true },
                    { text: "It doesn't matter", correct: false },
                    { text: "To bet faster", correct: false }
                ],
                explanation: "Using similar sizes with value and bluffs keeps you balanced. If you bet small with bluffs and large with value, opponents can exploit you by folding to large bets and calling small ones."
            },
            {
                question: "Flop: 8♠ 7♠ 6♦ (wet). Pot: 10BB. You have A♠A♥. What size should you bet?",
                scenario: "Wet Board Protection",
                options: [
                    { text: "1BB - tiny bet", correct: false },
                    { text: "3BB - small bet", correct: false },
                    { text: "7-10BB (66-100% pot)", correct: true },
                    { text: "Check - give up", correct: false }
                ],
                explanation: "On wet, connected boards, bet larger (66-100% pot) to protect your hand and charge draws. Many cards can kill your action, so build the pot now while you likely have the best hand."
            }
        ]
    },
    {
        id: 9,
        title: "Bluffing Frequencies",
        description: "Learn the mathematical foundations of optimal bluffing in GTO poker.",
        duration: "10 min",
        questions: 3,
        content: `
            <p>In GTO poker, <strong>bluffing</strong> isn't about reading souls - it's about math. You need to bluff at specific frequencies to remain unexploitable.</p>
            
            <h3>The Bluffing Formula</h3>
            <p>Your optimal bluffing frequency depends on your bet size. The formula is:</p>
            <div class="example-box">
                <h4>Bluff-to-Value Ratio</h4>
                <p><strong>Bluff Ratio = Bet Size / (Pot + Bet Size)</strong></p>
                <p>Example: You bet 50% pot (5BB into 10BB pot)</p>
                <p>Bluff Ratio = 5 / (10 + 5) = 5/15 = 1/3</p>
                <p><strong>For every 3 value bets, you should have 1 bluff</strong></p>
            </div>
            
            <h3>Optimal Bluffing Frequencies by Bet Size</h3>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Bet Size</th>
                        <th>Bluff Ratio</th>
                        <th>Value %</th>
                        <th>Bluff %</th>
                        <th>Interpretation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="highlight">33% Pot</td>
                        <td>1:4</td>
                        <td>80%</td>
                        <td>20%</td>
                        <td>Mostly value, few bluffs</td>
                    </tr>
                    <tr>
                        <td class="highlight">50% Pot</td>
                        <td>1:3</td>
                        <td>75%</td>
                        <td>25%</td>
                        <td>Standard balanced ratio</td>
                    </tr>
                    <tr>
                        <td class="highlight">66% Pot</td>
                        <td>2:5</td>
                        <td>71%</td>
                        <td>29%</td>
                        <td>More bluffs with larger size</td>
                    </tr>
                    <tr>
                        <td class="highlight">100% Pot</td>
                        <td>1:2</td>
                        <td>67%</td>
                        <td>33%</td>
                        <td>Polarized range</td>
                    </tr>
                    <tr>
                        <td class="highlight">150% Pot</td>
                        <td>3:5</td>
                        <td>63%</td>
                        <td>37%</td>
                        <td>Highly polarized</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Why This Math Works</h3>
            <p>These frequencies make your opponent <strong>indifferent</strong> to calling or folding. They can't exploit you because:</p>
            <ul>
                <li>If they fold too much, your bluffs print money</li>
                <li>If they call too much, your value bets print money</li>
                <li>At GTO frequencies, they break even either way</li>
            </ul>
            
            <div class="example-box">
                <h4>Practical Example</h4>
                <p>River: Pot is 20BB. You bet 10BB (50% pot).</p>
                <p>Your range should be: <span class="highlight">75% value, 25% bluffs</span></p>
                <p>If you have 12 value combos, you should have 4 bluff combos (12:4 = 3:1 ratio)</p>
                <p>This makes your opponent indifferent. They need 25% equity to call, and you're bluffing 25% of the time. Perfect balance!</p>
            </div>
            
            <h3>Choosing Bluff Candidates</h3>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Criteria</th>
                        <th>Good Bluff</th>
                        <th>Bad Bluff</th>
                        <th>Why</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Blockers</td>
                        <td class="highlight">A♥5♥ (blocks AA, A5)</td>
                        <td>7♣2♦ (blocks nothing)</td>
                        <td>Blockers reduce opponent's strong hands</td>
                    </tr>
                    <tr>
                        <td>Equity</td>
                        <td class="highlight">Flush draw (9 outs)</td>
                        <td>Complete air (0 outs)</td>
                        <td>Backup equity gives two ways to win</td>
                    </tr>
                    <tr>
                        <td>Showdown Value</td>
                        <td>Complete air</td>
                        <td class="highlight">Weak pair</td>
                        <td>Hands with showdown value should check</td>
                    </tr>
                    <tr>
                        <td>Story</td>
                        <td class="highlight">Credible line</td>
                        <td>Inconsistent betting</td>
                        <td>Your bets should tell a believable story</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Multi-Street Bluffing</h3>
            <p>When bluffing multiple streets, your frequency should <strong>decrease</strong> each street:</p>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Street</th>
                        <th>Bluff Frequency</th>
                        <th>Reasoning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Flop</td>
                        <td class="highlight">High (30-40%)</td>
                        <td>Many bluff candidates, fold equity</td>
                    </tr>
                    <tr>
                        <td>Turn</td>
                        <td class="highlight">Medium (20-30%)</td>
                        <td>Some bluffs give up, continue with equity</td>
                    </tr>
                    <tr>
                        <td>River</td>
                        <td class="highlight">Low (15-25%)</td>
                        <td>Only best bluff candidates remain</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Key Takeaways</h3>
            <p><strong>Larger bets require more bluffs:</strong> When you bet big, you need more bluffs to balance your range.</p>
            <p><strong>Choose bluffs with blockers:</strong> Hands that block opponent's strong hands make the best bluffs.</p>
            <p><strong>Don't over-bluff:</strong> Bluffing too much is the fastest way to lose money. Stick to GTO frequencies.</p>
        `,
        quiz: [
            {
                question: "You bet 50% pot on the river. What should your bluff-to-value ratio be?",
                scenario: "GTO Bluffing Math",
                options: [
                    { text: "1:1 (50% bluffs)", correct: false },
                    { text: "1:3 (25% bluffs)", correct: true },
                    { text: "1:10 (10% bluffs)", correct: false },
                    { text: "Never bluff", correct: false }
                ],
                explanation: "With a 50% pot bet, you need a 1:3 bluff-to-value ratio (25% bluffs, 75% value). This makes your opponent indifferent to calling or folding, keeping you unexploitable."
            },
            {
                question: "Which hand makes the best river bluff candidate?",
                scenario: "River: K♠ Q♥ J♠ 8♠ 2♠ | You missed your draw",
                options: [
                    { text: "7♣2♦ - complete air", correct: false },
                    { text: "A♠9♠ - blocks nut flush", correct: true },
                    { text: "6♥6♦ - weak pair", correct: false },
                    { text: "T♥9♥ - straight", correct: false }
                ],
                explanation: "A♠9♠ is the best bluff. It blocks the nut flush (A♠X♠) and has no showdown value. 6♥6♦ should check (has showdown value). 7♣2♦ blocks nothing. T9 is a straight, not a bluff!"
            },
            {
                question: "Why do larger bet sizes require more bluffs in your range?",
                scenario: "Bet Sizing and Bluff Frequency",
                options: [
                    { text: "To confuse opponents", correct: false },
                    { text: "To maintain proper bluff-to-value ratio and remain balanced", correct: true },
                    { text: "Larger bets require fewer bluffs", correct: false },
                    { text: "It doesn't matter", correct: false }
                ],
                explanation: "Larger bets give opponents worse pot odds, so they fold more often. To prevent them from exploiting you by folding everything, you need more bluffs to punish their folds. This keeps you balanced."
            }
        ]
    },
    {
        id: 10,
        title: "Defending Against 3-Bets",
        description: "Learn how to respond optimally when facing a 3-bet pre-flop.",
        duration: "9 min",
        questions: 3,
        content: `
            <p>Facing a <strong>3-bet</strong> is one of the most important decisions in poker. Your response determines whether you're exploitable or playing GTO.</p>
            
            <h3>Your Three Options</h3>
            <ul>
                <li><strong>Fold:</strong> Give up the pot (most common)</li>
                <li><strong>Call:</strong> See a flop in or out of position</li>
                <li><strong>4-Bet:</strong> Re-raise again (for value or as a bluff)</li>
            </ul>
            
            <h3>Minimum Defense Frequency (MDF)</h3>
            <p>MDF tells you how often you must continue (call or 4-bet) to prevent opponents from profitably bluffing you.</p>
            <div class="example-box">
                <h4>MDF Formula</h4>
                <p><strong>MDF = Pot / (Pot + Bet to Call)</strong></p>
                <p>Example: You raise to 2.5BB, opponent 3-bets to 8BB</p>
                <p>Pot = 4BB (your raise + blinds) | Call = 5.5BB more</p>
                <p>MDF = 4 / (4 + 5.5) = 4/9.5 = <span class="highlight">42%</span></p>
                <p>You must continue with at least 42% of your opening range to avoid being exploited.</p>
            </div>
            
            <h3>Defense Strategy by Position</h3>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Your Position</th>
                        <th>vs 3-Bet From</th>
                        <th>Continue %</th>
                        <th>4-Bet %</th>
                        <th>Call %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Button</td>
                        <td>Small Blind</td>
                        <td class="highlight">45-50%</td>
                        <td>12-15%</td>
                        <td>33-35%</td>
                    </tr>
                    <tr>
                        <td>Button</td>
                        <td>Big Blind</td>
                        <td class="highlight">45-50%</td>
                        <td>12-15%</td>
                        <td>33-35%</td>
                    </tr>
                    <tr>
                        <td>Cutoff</td>
                        <td>Button</td>
                        <td class="highlight">40-45%</td>
                        <td>10-12%</td>
                        <td>30-33%</td>
                    </tr>
                    <tr>
                        <td>Early Position</td>
                        <td>Any</td>
                        <td class="highlight">50-55%</td>
                        <td>15-18%</td>
                        <td>35-37%</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Calling vs 4-Betting Guide</h3>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Hand Type</th>
                        <th>Action</th>
                        <th>Examples</th>
                        <th>Reasoning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Premium</td>
                        <td class="highlight">4-Bet (value)</td>
                        <td>QQ+, AK</td>
                        <td>Too strong to fold, build pot</td>
                    </tr>
                    <tr>
                        <td>Strong</td>
                        <td>Call</td>
                        <td>JJ, TT, AQ</td>
                        <td>Good but not great, see flop</td>
                    </tr>
                    <tr>
                        <td>Playable</td>
                        <td>Call (IP) / Fold (OOP)</td>
                        <td>99-77, suited connectors</td>
                        <td>Need position to realize equity</td>
                    </tr>
                    <tr>
                        <td>Bluff Candidates</td>
                        <td class="highlight">4-Bet (bluff)</td>
                        <td>A5s-A2s, K9s-K7s</td>
                        <td>Blockers + fold equity</td>
                    </tr>
                    <tr>
                        <td>Marginal</td>
                        <td>Fold</td>
                        <td>Weak aces, small pairs OOP</td>
                        <td>Poor playability, low equity</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="example-box">
                <h4>Defense Example - In Position</h4>
                <p>You raise to 2.5BB from button with J♠J♥. Small blind 3-bets to 8BB.</p>
                <p><strong>GTO Play: Call</strong></p>
                <p>JJ is too strong to fold but not strong enough to 4-bet for value (you're crushed by QQ+, AK). Calling keeps their bluffs in and lets you see a flop with position.</p>
            </div>
            
            <h3>4-Bet Sizing Strategy</h3>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Situation</th>
                        <th>Size (In Position)</th>
                        <th>Size (Out of Position)</th>
                        <th>Goal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>vs 3-Bet</td>
                        <td class="highlight">2.2-2.5x</td>
                        <td class="highlight">2.5-3x</td>
                        <td>Standard sizing</td>
                    </tr>
                    <tr>
                        <td>For Value</td>
                        <td>2.2-2.5x</td>
                        <td>2.5-3x</td>
                        <td>Build pot, get called</td>
                    </tr>
                    <tr>
                        <td>As Bluff</td>
                        <td class="highlight">2.2-2.5x</td>
                        <td class="highlight">2.5-3x</td>
                        <td>Same size for balance</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="example-box">
                <h4>4-Bet Example</h4>
                <p>You raise to 2.5BB from cutoff with K♠K♥. Button 3-bets to 8BB.</p>
                <p><strong>GTO Play: 4-bet to 18-20BB</strong></p>
                <p>KK is premium - 4-bet for value. Size is 2.25-2.5x the 3-bet. This builds the pot and puts pressure on opponent's range.</p>
            </div>
            
            <h3>Common Mistakes</h3>
            <ul>
                <li><strong>Folding too much:</strong> If you fold more than 50-60%, opponents can 3-bet you relentlessly</li>
                <li><strong>Only 4-betting premiums:</strong> This makes you predictable. Mix in bluffs with blockers</li>
                <li><strong>Calling out of position:</strong> Without position, you need stronger hands to call 3-bets</li>
                <li><strong>4-betting too large:</strong> Oversized 4-bets commit you to the pot unnecessarily</li>
            </ul>
            
            <h3>Key Principles</h3>
            <p><strong>Defend your range:</strong> Continue with enough hands to prevent exploitation.</p>
            <p><strong>Position matters:</strong> Call more in position, fold more out of position.</p>
            <p><strong>Balance your 4-bets:</strong> Include both value hands and bluffs with good blockers.</p>
        `,
        quiz: [
            {
                question: "You raise to 2.5BB from button with J♠J♥. Small blind 3-bets to 8BB. What should you do?",
                scenario: "Position: Button | Stack: 100BB | Facing 3-Bet",
                options: [
                    { text: "Fold - too risky", correct: false },
                    { text: "Call - see a flop with position", correct: true },
                    { text: "4-bet to 20BB", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "JJ is too strong to fold but not strong enough to 4-bet for value. Calling is optimal - you have position, good equity, and can see a flop. 4-betting gets you in tough spots vs QQ+, AK."
            },
            {
                question: "What is Minimum Defense Frequency (MDF)?",
                scenario: "GTO Defense Concept",
                options: [
                    { text: "How often you should bluff", correct: false },
                    { text: "How often you must continue to prevent being exploited", correct: true },
                    { text: "How often you should fold", correct: false },
                    { text: "It doesn't matter", correct: false }
                ],
                explanation: "MDF is the minimum frequency you must continue (call or 4-bet) to prevent opponents from profitably bluffing you. If you fold too much, they can 3-bet you with any two cards profitably."
            },
            {
                question: "You raise to 2.5BB from cutoff with K♠K♥. Button 3-bets to 8BB. What should you do?",
                scenario: "Premium Hand vs 3-Bet",
                options: [
                    { text: "Fold - avoid confrontation", correct: false },
                    { text: "Call - trap them", correct: false },
                    { text: "4-bet to 18-20BB", correct: true },
                    { text: "Limp", correct: false }
                ],
                explanation: "KK is a premium hand - 4-bet for value! Standard sizing is 2.25-2.5x the 3-bet (18-20BB). This builds the pot and puts pressure on their range. Calling is too passive with such a strong hand."
            }
        ]
    }
];

// App State
let completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || [];
let currentLessonId = null;
let currentQuizQuestion = 0;
let quizScore = 0;
let quizAnswered = false;

// DOM Elements
const lessonsGrid = document.getElementById('lessonsGrid');
const lessonViewer = document.getElementById('lessonViewer');
const closeLesson = document.getElementById('closeLesson');
const lessonNumber = document.getElementById('lessonNumber');
const lessonTitle = document.getElementById('lessonTitle');
const lessonBody = document.getElementById('lessonBody');
const lessonContent = document.getElementById('lessonContent');
const startQuizBtn = document.getElementById('startQuizBtn');
const quizContentWrapper = document.getElementById('quizContentWrapper');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const quizContent = document.getElementById('quizContent');
const quizQuestion = document.getElementById('quizQuestion');
const quizScenario = document.getElementById('quizScenario');
const quizOptions = document.getElementById('quizOptions');
const quizResult = document.getElementById('quizResult');
const resultIcon = document.getElementById('resultIcon');
const resultTitle = document.getElementById('resultTitle');
const resultExplanation = document.getElementById('resultExplanation');
const nextBtn = document.getElementById('nextBtn');
const quizComplete = document.getElementById('quizComplete');
const finalScore = document.getElementById('finalScore');
const scoreMessage = document.getElementById('scoreMessage');
const continueBtn = document.getElementById('continueBtn');

// Initialize App
function init() {
    renderLessons();
}

// Render Lesson Cards
function renderLessons() {
    lessonsGrid.innerHTML = '';
    
    lessons.forEach((lesson, index) => {
        const isCompleted = completedLessons.includes(lesson.id);
        const isLocked = index > 0 && !completedLessons.includes(lessons[index - 1].id);
        
        const card = document.createElement('div');
        card.className = `lesson-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`;
        
        if (!isLocked) {
            card.addEventListener('click', () => openLesson(lesson.id));
        }
        
        card.innerHTML = `
            <span class="lesson-number">Lesson ${lesson.id}</span>
            <h3>${lesson.title}</h3>
            <p>${lesson.description}</p>
            <div class="lesson-meta">
                <span>📚 ${lesson.duration}</span>
                <span>❓ ${lesson.questions} questions</span>
            </div>
            ${isLocked ? '<div class="lock-icon">🔒</div>' : ''}
        `;
        
        lessonsGrid.appendChild(card);
    });
}

// Open Lesson
function openLesson(lessonId) {
    currentLessonId = lessonId;
    const lesson = lessons.find(l => l.id === lessonId);
    
    lessonNumber.textContent = `Lesson ${lesson.id}`;
    lessonTitle.textContent = lesson.title;
    lessonBody.innerHTML = lesson.content;
    
    // Reset any previous quiz UI state when entering a lesson
    quizResult.classList.add('hidden');
    quizComplete.classList.add('hidden');
    
    lessonContent.classList.remove('hidden');
    quizContentWrapper.classList.add('hidden');
    lessonViewer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close Lesson
closeLesson.addEventListener('click', () => {
    lessonViewer.classList.add('hidden');
    document.body.style.overflow = 'auto';
    currentLessonId = null;
});

// Start Quiz
startQuizBtn.addEventListener('click', () => {
    // Ensure result/completion panels are hidden before starting
    quizResult.classList.add('hidden');
    quizComplete.classList.add('hidden');
    
    lessonContent.classList.add('hidden');
    quizContentWrapper.classList.remove('hidden');
    currentQuizQuestion = 0;
    quizScore = 0;
    quizAnswered = false;
    showQuizQuestion();
});

// Show Quiz Question
function showQuizQuestion() {
    const lesson = lessons.find(l => l.id === currentLessonId);
    const question = lesson.quiz[currentQuizQuestion];
    
    // Update progress
    const progress = ((currentQuizQuestion + 1) / lesson.quiz.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = `Question ${currentQuizQuestion + 1} of ${lesson.quiz.length}`;
    
    // Show question
    quizQuestion.textContent = question.question;
    quizScenario.textContent = question.scenario;
    
    // Clear and create options
    quizOptions.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.addEventListener('click', () => selectQuizAnswer(index));
        quizOptions.appendChild(button);
    });
    
    // Show quiz content, hide result and completion
    quizContent.classList.remove('hidden');
    quizResult.classList.add('hidden');
    quizComplete.classList.add('hidden');
    quizAnswered = false;
}

// Handle Quiz Answer
function selectQuizAnswer(selectedIndex) {
    if (quizAnswered) return;
    
    quizAnswered = true;
    const lesson = lessons.find(l => l.id === currentLessonId);
    const question = lesson.quiz[currentQuizQuestion];
    const buttons = quizOptions.querySelectorAll('.option-btn');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Mark correct and incorrect
    buttons.forEach((btn, index) => {
        if (question.options[index].correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex) {
            btn.classList.add('incorrect');
        }
    });
    
    // Update score
    const isCorrect = question.options[selectedIndex].correct;
    if (isCorrect) {
        quizScore++;
    }
    
    // Show result after delay
    setTimeout(() => {
        showQuizResult(isCorrect, question.explanation);
    }, 1000);
}

// Show Quiz Result
function showQuizResult(isCorrect, explanation) {
    quizContent.classList.add('hidden');
    quizResult.classList.remove('hidden');
    
    if (isCorrect) {
        resultIcon.textContent = '✅';
        resultTitle.textContent = 'Correct!';
        resultTitle.style.color = 'var(--success)';
    } else {
        resultIcon.textContent = '❌';
        resultTitle.textContent = 'Not quite right';
        resultTitle.style.color = 'var(--error)';
    }
    
    resultExplanation.textContent = explanation;
}

// Next Question
nextBtn.addEventListener('click', () => {
    const lesson = lessons.find(l => l.id === currentLessonId);
    currentQuizQuestion++;
    
    if (currentQuizQuestion < lesson.quiz.length) {
        showQuizQuestion();
    } else {
        showQuizComplete();
    }
});

// Show Quiz Complete
function showQuizComplete() {
    quizResult.classList.add('hidden');
    quizComplete.classList.remove('hidden');
    
    const lesson = lessons.find(l => l.id === currentLessonId);
    const percentage = (quizScore / lesson.quiz.length) * 100;
    finalScore.textContent = `${quizScore} / ${lesson.quiz.length} (${percentage.toFixed(0)}%)`;
    
    // Set icon/title based on score
    const iconEl = quizComplete.querySelector('.complete-icon');
    const titleEl = quizComplete.querySelector('h3');
    if (percentage === 100) {
        if (iconEl) iconEl.textContent = '🏆';
        if (titleEl) titleEl.textContent = 'Lesson Complete!';
        
        // Trigger festive confetti animation for perfect score
        triggerFestiveConfetti();
    } else if (percentage >= 66) {
        if (iconEl) iconEl.textContent = '✅';
        if (titleEl) titleEl.textContent = 'Quiz Finished';
    } else {
        if (iconEl) iconEl.textContent = '📊';
        if (titleEl) titleEl.textContent = 'Quiz Finished';
    }
    
    let message = '';
    if (percentage >= 66) {
        message = percentage === 100
            ? "Great job! You've mastered this lesson. Keep going!"
            : "Nice work! You passed. Try again for a perfect score.";
        // Mark lesson as completed (for unlocking) if passed threshold
        if (!completedLessons.includes(currentLessonId)) {
            completedLessons.push(currentLessonId);
            localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
        }
    } else {
        message = "Good effort! Review the lesson and try again to master the concepts.";
    }
    
    scoreMessage.textContent = message;
}

// Trigger festive confetti animation
function triggerFestiveConfetti() {
    // Create confetti container
    let confettiContainer = document.querySelector('.confetti-container');
    if (!confettiContainer) {
        confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        document.body.appendChild(confettiContainer);
    }

    // Clear any existing confetti
    confettiContainer.innerHTML = '';

    // Confetti emojis and shapes
    const confettiEmojis = ['🎉', '🎊', '✨', '🌟', '💫', '🎈', '🎁', '🏆'];
    const shapeClasses = ['confetti-square', 'confetti-circle', 'confetti-diamond', 'confetti-triangle', 'confetti-star'];

    // Create confetti pieces across the screen
    for (let i = 0; i < 25; i++) {
        // Random emoji confetti
        if (Math.random() > 0.4) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
            piece.style.left = Math.random() * 100 + '%';
            piece.style.animationDelay = Math.random() * 2 + 's';
            piece.style.animationDuration = (2.5 + Math.random() * 1.5) + 's';
            confettiContainer.appendChild(piece);
        }
        
        // Colorful shapes
        const shape = document.createElement('div');
        const shapeClass = shapeClasses[Math.floor(Math.random() * shapeClasses.length)];
        shape.className = `confetti-shape ${shapeClass}`;
        shape.style.left = Math.random() * 100 + '%';
        shape.style.animationDelay = Math.random() * 2.5 + 's';
        shape.style.animationDuration = (3 + Math.random() * 1) + 's';
        confettiContainer.appendChild(shape);
    }

    // Remove confetti after animation completes
    setTimeout(() => {
        if (confettiContainer && confettiContainer.parentNode) {
            confettiContainer.remove();
        }
    }, 6000);
}

// Continue Learning
continueBtn.addEventListener('click', () => {
    lessonViewer.classList.add('hidden');
    document.body.style.overflow = 'auto';
    renderLessons();
    currentLessonId = null;
});

// Initialize on page load
init();
