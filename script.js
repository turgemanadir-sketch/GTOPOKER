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
        questions: 5,
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
            },
            {
                question: "Why should you play a wider range of hands in late position?",
                scenario: "Position Strategy",
                options: [
                    { text: "Because you have better cards there", correct: false },
                    { text: "Because you act last and can make better decisions", correct: true },
                    { text: "Because you need to balance your early position folds", correct: false },
                    { text: "Because opponents respect your raises more", correct: false }
                ],
                explanation: "Late position allows you to act with more information, making marginal hands more profitable. You can see how opponents act before making your decision, which makes more hands playable."
            },
            {
                question: "What makes a poker strategy 'unexploitable' according to GTO?",
                scenario: "GTO Review from Lesson 1",
                options: [
                    { text: "Playing only premium hands", correct: false },
                    { text: "Being balanced so opponents can't take advantage of patterns", correct: true },
                    { text: "Always betting when you have position", correct: false },
                    { text: "Never bluffing", correct: false }
                ],
                explanation: "GTO strategy is unexploitable because it's balanced. You mix strong hands and bluffs in similar ways, preventing opponents from exploiting predictable patterns in your play."
            }
        ]
    },
    {
        id: 3,
        title: "Pre-Flop Ranges",
        description: "Learn which hands to play and how to play them before the flop.",
        duration: "7 min",
        questions: 8,
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
            },
            {
                question: "Which hand category includes suited connectors like 8♠7♠?",
                scenario: "Hand Categories from Lesson",
                options: [
                    { text: "Premium Hands", correct: false },
                    { text: "Strong Hands", correct: false },
                    { text: "Playable Hands", correct: true },
                    { text: "Marginal Hands", correct: false }
                ],
                explanation: "Suited connectors like 8♠7♠ are classified as 'Playable Hands' - they're position dependent and work better in late position where you can see flops cheaply."
            },
            {
                question: "What is the standard opening raise size mentioned in the lesson?",
                scenario: "Pre-Flop Action Sizing",
                options: [
                    { text: "1.5-2BB", correct: false },
                    { text: "2.5-3BB", correct: true },
                    { text: "4-5BB", correct: false },
                    { text: "6-8BB", correct: false }
                ],
                explanation: "The lesson states that standard opening is 2.5-3BB. This builds the pot with strong hands while giving you initiative and maintaining balance."
            },
            {
                question: "According to the lesson, what percentage of hands do even pros fold pre-flop?",
                scenario: "Pre-Flop Folding Frequency",
                options: [
                    { text: "50-60%", correct: false },
                    { text: "60-70%", correct: false },
                    { text: "70-80%", correct: true },
                    { text: "80-90%", correct: false }
                ],
                explanation: "The lesson mentions that even pros fold 70-80% of their hands pre-flop. Most hands should be folded - this is normal and optimal play."
            },
            {
                question: "Why do you act last when you're in late position?",
                scenario: "Review from Lesson 2",
                options: [
                    { text: "Because you have the dealer button", correct: false },
                    { text: "Because you see what others do before deciding", correct: true },
                    { text: "Because you get better cards", correct: false },
                    { text: "Because you can bet more", correct: false }
                ],
                explanation: "From lesson 2: Late position is powerful because you act last and have more information. You see what everyone else does before making your decision."
            },
            {
                question: "What makes GTO strategy unexploitable?",
                scenario: "Review from Lesson 1",
                options: [
                    { text: "Playing only premium hands", correct: false },
                    { text: "Always betting for value", correct: false },
                    { text: "Being balanced and unpredictable", correct: true },
                    { text: "Never bluffing", correct: false }
                ],
                explanation: "From lesson 1: GTO is unexploitable because it's balanced. You mix strong and weak hands in similar ways, preventing opponents from exploiting patterns in your play."
            }
        ]
    },
    {
        id: 4,
        title: "Continuation Betting",
        description: "Master the art of betting after you raised pre-flop.",
        duration: "6 min",
        questions: 11,
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
            },
            {
                question: "You raised K♠Q♠ pre-flop and got called. Flop: K♥8♣3♦. What's your c-betting decision?",
                scenario: "C-Bet with Top Pair",
                options: [
                    { text: "Check - could be trapped", correct: false },
                    { text: "Bet 4BB for value", correct: true },
                    { text: "Bet 1BB as a blocker", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "Top pair good kicker should c-bet for value on this dry board. A standard 60-70% pot bet gets value from worse kings, pairs, and draws while maintaining initiative."
            },
            {
                question: "According to the lesson, what c-betting frequency should you aim for?",
                scenario: "C-Bet Frequency",
                options: [
                    { text: "100% - always c-bet", correct: false },
                    { text: "50-70% of the time", correct: true },
                    { text: "25-40% of the time", correct: false },
                    { text: "Never c-bet", correct: false }
                ],
                explanation: "The lesson states you should c-bet about 50-70% of the time. Not always - that would be exploitable. You need balance between betting and checking."
            },
            {
                question: "You raised A♠J♠ and got called. Flop: 8♠7♠6♥ (very connected). Your action?",
                scenario: "Wet Board C-Bet Decision",
                options: [
                    { text: "Bet large - show strength", correct: false },
                    { text: "Check behind - bad board for c-betting", correct: true },
                    { text: "Bet small as probe", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "This connected board hits opponent's calling range hard. Even with a flush draw, checking is often better on boards like 876 with two suits."
            },
            {
                question: "What hand categories should you play from early position?",
                scenario: "Review from Lesson 3",
                options: [
                    { text: "All playable hands", correct: false },
                    { text: "Premium and strong hands only", correct: true },
                    { text: "Only premium hands", correct: false },
                    { text: "Any suited cards", correct: false }
                ],
                explanation: "From lesson 3: Early position requires tight ranges. Play premium hands (AA, KK, QQ, AK) and strong hands (JJ, TT, AQ, AJ)."
            },
            {
                question: "Why is acting last in position so valuable?",
                scenario: "Review from Lesson 2",
                options: [
                    { text: "You get better cards", correct: false },
                    { text: "You see opponents' actions before deciding", correct: true },
                    { text: "You can bet more money", correct: false },
                    { text: "Opponents fear you more", correct: false }
                ],
                explanation: "From lesson 2: Position gives you information advantage. Acting last means you see what everyone does before making your decision."
            },
            {
                question: "1/2 cash game. You raised A♥K♦ to $6, tight player called. Flop: A♠9♣4♦. Pot $13. Your play?",
                scenario: "Live Cash Game",
                options: [
                    { text: "Check - might be trapped", correct: false },
                    { text: "Bet $8-10 for value", correct: true },
                    { text: "Bet $2 to keep bluffs in", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "Top pair top kicker on A94 rainbow is strong. C-bet for value - standard 60-75% pot sizing gets value from worse hands."
            },
            {
                question: "Online tournament, you raised 9♠9♥ from button, BB called. Flop: K♠Q♥J♦. BB checks. Decision?",
                scenario: "Tournament Play",
                options: [
                    { text: "Bet for value - pocket pair is strong", correct: false },
                    { text: "Check behind - dangerous board", correct: true },
                    { text: "Bet small to see where you stand", correct: false },
                    { text: "Shove all-in", correct: false }
                ],
                explanation: "KQJ is terrible for pocket 9s. This board hits BB's calling range hard. Check behind and give up unless you improve."
            },
            {
                question: "Home game, A♠8♠ from cutoff, button called. Flop: A♥7♣2♦, you bet, called. Turn: 3♠. Action?",
                scenario: "Multi-Street",
                options: [
                    { text: "Check - weak kicker dangerous", correct: false },
                    { text: "Bet again for value", correct: true },
                    { text: "Go all-in for protection", correct: false },
                    { text: "Check and give up", correct: false }
                ],
                explanation: "Top pair decent kicker should continue betting on safe turn. The 3♠ doesn't change much. Get value from worse hands."
            }
        ]
    },
    {
        id: 5,
        title: "Pot Odds & Equity",
        description: "Learn the math behind profitable poker decisions.",
        duration: "8 min",
        questions: 13,
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
            },
            {
                question: "Pot is $80. Opponent bets $40. You need to call $40. What pot odds are you getting?",
                scenario: "Pot Odds Calculation",
                options: [
                    { text: "2:1", correct: true },
                    { text: "3:1", correct: false },
                    { text: "1:1", correct: false },
                    { text: "4:1", correct: false }
                ],
                explanation: "Total pot if you call: $120. Your cost: $40. Pot odds: 120:40 = 3:1, but you're getting 2:1 on your money ($80 pot + $40 bet = $120 total, you pay $40)."
            },
            {
                question: "You have an open-ended straight draw (32% equity). Pot odds require 25% to call. What should you do?",
                scenario: "Equity vs Pot Odds Decision",
                options: [
                    { text: "Fold - not strong enough", correct: false },
                    { text: "Call - profitable long-term", correct: true },
                    { text: "Raise as semi-bluff", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "Your 32% equity exceeds the 25% required by pot odds. This makes calling profitable over time, which is fundamental to GTO decision-making."
            },
            {
                question: "You have a gutshot straight draw (16% equity). Pot odds require 20% to call. What should you do?",
                scenario: "Insufficient Equity Decision",
                options: [
                    { text: "Call anyway - might get lucky", correct: false },
                    { text: "Fold - not enough equity", correct: true },
                    { text: "Raise to build pot", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "Your 16% equity is less than the 20% required by pot odds. This makes calling unprofitable long-term, so folding is the correct GTO play."
            },
            {
                question: "What makes GTO strategy unexploitable?",
                scenario: "Review from Lesson 1",
                options: [
                    { text: "Playing only premium hands", correct: false },
                    { text: "Balanced play that prevents exploitation", correct: true },
                    { text: "Always betting for value", correct: false },
                    { text: "Never bluffing", correct: false }
                ],
                explanation: "From lesson 1: GTO is unexploitable because it's balanced. You mix strong and weak hands similarly, preventing opponents from exploiting patterns."
            },
            {
                question: "Why should you c-bet less frequently on connected boards?",
                scenario: "Review from Lesson 4",
                options: [
                    { text: "To confuse opponents", correct: false },
                    { text: "Connected boards hit opponent's calling range", correct: true },
                    { text: "To save money", correct: false },
                    { text: "It doesn't matter", correct: false }
                ],
                explanation: "From lesson 4: Connected boards like J♠T♠9♥ hit your opponent's calling range hard. They likely have pairs, draws, or made hands, so c-bet less frequently."
            },
            {
                question: "Which position allows you to play the widest range of hands?",
                scenario: "Review from Lesson 2",
                options: [
                    { text: "Early position", correct: false },
                    { text: "Middle position", correct: false },
                    { text: "Late position (Button/Cutoff)", correct: true },
                    { text: "Small blind", correct: false }
                ],
                explanation: "From lesson 2: Late position gives maximum power because you act last with more information, allowing you to play the widest range profitably."
            },
            {
                question: "You're in a $1/$2 game. Pot is $45, opponent bets $30. You have A♠K♠ on K♥9♣4♠ board. Decision?",
                scenario: "Live Cash Game | Top Pair Decision",
                options: [
                    { text: "Fold - could be trapped", correct: false },
                    { text: "Call - good hand with draws", correct: true },
                    { text: "Raise to $90", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "Top pair top kicker with nut flush draw has strong equity. Getting 2.5:1 pot odds ($75:$30), you have way more than the required 29% equity to call."
            },
            {
                question: "Online tournament: Blinds 100/200. Pot is 650, opponent bets 400. You have 8♠7♠ on 9♠6♣2♠ board. Action?",
                scenario: "Tournament | Flush Draw Decision",
                options: [
                    { text: "Fold - tournament survival", correct: false },
                    { text: "Call - strong draw with good odds", correct: true },
                    { text: "Raise all-in", correct: false },
                    { text: "Raise to 1200", correct: false }
                ],
                explanation: "Flush draw (~35% equity) getting 2.6:1 odds (1050:400) needs only 28% equity. Your draw is profitable to call even in tournament play."
            },
            {
                question: "Home game: Pot $60, opponent bets $40. You have Q♥J♥ on A♠Q♣5♥ board. Your play?",
                scenario: "Home Game | Middle Pair Decision",
                options: [
                    { text: "Call - middle pair is decent", correct: false },
                    { text: "Fold - likely behind", correct: true },
                    { text: "Raise to $120", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "Middle pair on ace-high board is weak. Getting 2.5:1 odds but likely behind to aces, better queens, or two pair. Insufficient equity to continue."
            },
            {
                question: "Casino: Pot $200, opponent bets $150. You have 10♠9♠ on J♠8♣2♠ board. Decision?",
                scenario: "Casino Game | Combo Draw",
                options: [
                    { text: "Fold - too expensive", correct: false },
                    { text: "Call - strong combo draw", correct: true },
                    { text: "Raise to $450", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "Open-ended straight draw + flush draw gives ~15 outs (54% equity). Getting 2.3:1 odds (350:150) needs only 30% equity. Easy call with massive equity."
            }
        ]
    },
    {
        id: 6,
        title: "3-Betting Strategy",
        description: "Master when and how to re-raise pre-flop for maximum value.",
        duration: "9 min",
        questions: 10,
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
            <h4>Against Button Raises:</h4>
            <ul>
                <li><strong>In Position:</strong> 3x raise - Smaller sizing when you have position advantage</li>
                <li><strong>Out of Position:</strong> 3.5x raise - Slightly larger to compensate for positional disadvantage</li>
            </ul>
            
            <h4>Against Cutoff Raises:</h4>
            <ul>
                <li><strong>In Position:</strong> 3x raise - Standard sizing</li>
                <li><strong>Out of Position:</strong> 3.5x raise - Standard sizing</li>
            </ul>
            
            <h4>Against Early Position Raises:</h4>
            <ul>
                <li><strong>In Position:</strong> 3x raise - Standard sizing</li>
                <li><strong>Out of Position:</strong> 4x raise - Larger sizing against tight ranges</li>
            </ul>
            
            <div class="example-box">
                <h4>3-Bet Example</h4>
                <p>Cutoff raises to 2.5BB. You're on the button with A♠Q♠.</p>
                <p><strong>GTO Play:</strong> 3-bet to 7.5BB (3x the original raise)</p>
                <p>This size gives you fold equity while building a pot when called. You have position post-flop, which is a huge advantage.</p>
            </div>
            
            <h3>3-Bet Range by Position</h3>
            <h4>Button (Best Position):</h4>
            <ul>
                <li><strong>Value Hands:</strong> QQ+, AK, AQs</li>
                <li><strong>Bluff Hands:</strong> A5s-A2s, K9s-K7s, suited connectors</li>
                <li><strong>Frequency:</strong> ~10-12% of hands</li>
            </ul>
            
            <h4>Small Blind:</h4>
            <ul>
                <li><strong>Value Hands:</strong> JJ+, AQ+</li>
                <li><strong>Bluff Hands:</strong> A5s-A2s, KTs, suited connectors</li>
                <li><strong>Frequency:</strong> ~8-10% of hands</li>
            </ul>
            
            <h4>Big Blind:</h4>
            <ul>
                <li><strong>Value Hands:</strong> TT+, AJ+</li>
                <li><strong>Bluff Hands:</strong> A5s-A2s, suited connectors</li>
                <li><strong>Frequency:</strong> ~8-10% of hands</li>
            </ul>
            
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
            },
            {
                question: "Early position raises to 3BB. You're in middle position with Q♠Q♥. What's your play?",
                scenario: "Position: MP | Stack: 100BB",
                options: [
                    { text: "Fold - too dangerous", correct: false },
                    { text: "Call - see flop safely", correct: false },
                    { text: "3-bet to 9BB", correct: true },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "QQ is a premium hand that should almost always 3-bet for value. Against early position, 3-betting builds the pot with a strong hand and takes initiative."
            },
            {
                question: "What sizing should you use when 3-betting out of position?",
                scenario: "3-Bet Sizing Strategy",
                options: [
                    { text: "2x the original raise", correct: false },
                    { text: "3.5-4x the original raise", correct: true },
                    { text: "5x the original raise", correct: false },
                    { text: "All-in", correct: false }
                ],
                explanation: "When out of position, use larger 3-bet sizing (3.5-4x) to compensate for your positional disadvantage. This charges opponents more to see flops when you'll act first."
            },
            {
                question: "You have J♠J♦ on the button. Cutoff raises to 2.5BB. What's the GTO approach?",
                scenario: "Position: Button | Stack: 100BB",
                options: [
                    { text: "Always fold", correct: false },
                    { text: "Always call", correct: false },
                    { text: "Mix between 3-betting and calling", correct: true },
                    { text: "Always 3-bet", correct: false }
                ],
                explanation: "JJ from the button vs cutoff is a mixed strategy spot. GTO sometimes 3-bets for value/protection and sometimes calls to keep opponent's range wide. Both are profitable."
            },
            {
                question: "Why is position important in poker?",
                scenario: "Review from Lesson 2",
                options: [
                    { text: "You get better cards", correct: false },
                    { text: "You act last and have more information", correct: true },
                    { text: "You can bet more money", correct: false },
                    { text: "Dealers favor you", correct: false }
                ],
                explanation: "From lesson 2: Position gives you information advantage. Acting last means seeing what everyone does before making your decision, making all your decisions more profitable."
            },
            {
                question: "What percentage of hands should you play from early position?",
                scenario: "Review from Lesson 3",
                options: [
                    { text: "50% - be aggressive", correct: false },
                    { text: "10-15% - play tight", correct: true },
                    { text: "100% - be unpredictable", correct: false },
                    { text: "0% - always fold", correct: false }
                ],
                explanation: "From lesson 3: Early position requires playing only 10-15% of hands - your strongest holdings. This tight range compensates for your positional disadvantage."
            },
            {
                question: "You raised pre-flop and the flop is K♠7♣2♦. Should you c-bet?",
                scenario: "Review from Lesson 4",
                options: [
                    { text: "Never - too dry", correct: false },
                    { text: "Often - dry board favors aggressor", correct: true },
                    { text: "Only with a king", correct: false },
                    { text: "Always go all-in", correct: false }
                ],
                explanation: "From lesson 4: Dry boards like K72 rainbow are excellent for c-betting. You have range advantage and opponents have few draws. C-bet frequently with larger sizing."
            },
            {
                question: "You bet 50% pot. What should your value-to-bluff ratio be?",
                scenario: "Review from Lesson 5",
                options: [
                    { text: "50% value, 50% bluffs", correct: false },
                    { text: "75% value, 25% bluffs", correct: true },
                    { text: "90% value, 10% bluffs", correct: false },
                    { text: "100% value, 0% bluffs", correct: false }
                ],
                explanation: "From lesson 5: When betting 50% pot, you need 75% value and 25% bluffs (3:1 ratio). This makes opponents indifferent to calling or folding, keeping you balanced."
            }
        ]
    },
    {
        id: 7,
        title: "Board Texture Reading",
        description: "Learn to analyze flops and adjust your strategy accordingly.",
        duration: "8 min",
        questions: 10,
        content: `
            <p>Understanding <strong>board texture</strong> is crucial for GTO play. Different flops require different strategies based on how they connect with ranges.</p>
            
            <h3>Board Texture Categories</h3>
            <h4>Dry Boards:</h4>
            <ul>
                <li><strong>Example:</strong> K♠ 7♣ 2♦</li>
                <li><strong>Characteristics:</strong> Disconnected, rainbow suits</li>
                <li><strong>Strategy:</strong> C-bet often with large sizing</li>
            </ul>
            
            <h4>Wet Boards:</h4>
            <ul>
                <li><strong>Example:</strong> J♠ T♠ 9♥</li>
                <li><strong>Characteristics:</strong> Connected, suited, many draws</li>
                <li><strong>Strategy:</strong> C-bet less frequently, check more often</li>
            </ul>
            
            <h4>Static Boards:</h4>
            <ul>
                <li><strong>Example:</strong> A♠ A♥ 5♣</li>
                <li><strong>Characteristics:</strong> Paired board, few draws possible</li>
                <li><strong>Strategy:</strong> Use small bets, check often</li>
            </ul>
            
            <h4>Dynamic Boards:</h4>
            <ul>
                <li><strong>Example:</strong> 8♠ 7♠ 6♦</li>
                <li><strong>Characteristics:</strong> Many turn cards change equity</li>
                <li><strong>Strategy:</strong> Bet to protect equity</li>
            </ul>
            
            <div class="example-box">
                <h4>Dry Board Example</h4>
                <p>You raised pre-flop with A♥K♦. Flop: K♠ 7♣ 2♦</p>
                <p>This is a <strong>dry board</strong>. Few draws exist, and you have top pair. C-bet 66-75% pot. Your opponent will fold most hands, and when called, you likely have the best hand.</p>
            </div>
            
            <h3>Range Advantage Analysis</h3>
            <h4>Boards Favoring Pre-flop Raiser:</h4>
            <ul>
                <li><strong>A♠ K♥ Q♦:</strong> Hits premium range hard - Bet aggressively</li>
            </ul>
            
            <h4>Boards Favoring Caller:</h4>
            <ul>
                <li><strong>7♠ 6♠ 5♥:</strong> Hits suited connectors - Check more often</li>
                <li><strong>J♠ T♠ 4♠:</strong> Many flush/straight draws - Check or small bet</li>
            </ul>
            
            <h4>Neutral Boards:</h4>
            <ul>
                <li><strong>2♣ 2♦ 2♠:</strong> Rarely hits either range - Small bets or check</li>
            </ul>
            
            <div class="example-box">
                <h4>Wet Board Example</h4>
                <p>You raised with A♠K♥. Flop: J♠ T♠ 9♥</p>
                <p>This is a <strong>wet board</strong>. Your opponent's calling range hits this hard (many straight and flush draws). Check more often or use smaller bet sizes. Don't commit too much with just overcards.</p>
            </div>
            
            <h3>Adjusting C-Bet Frequency</h3>
            <h4>C-Bet More Often When:</h4>
            <ul>
                <li><strong>Board Texture:</strong> Dry, disconnected boards</li>
                <li><strong>Position:</strong> You're in position</li>
                <li><strong>Opponents:</strong> Single opponent</li>
                <li><strong>Your Range:</strong> You have range advantage</li>
            </ul>
            
            <h4>C-Bet Less Often When:</h4>
            <ul>
                <li><strong>Board Texture:</strong> Wet, connected boards</li>
                <li><strong>Position:</strong> You're out of position</li>
                <li><strong>Opponents:</strong> Multiple opponents</li>
                <li><strong>Your Range:</strong> You have range disadvantage</li>
            </ul>
            
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
            },
            {
                question: "Flop: A♠ A♥ 5♣. What type of board texture is this?",
                scenario: "Board Texture Identification",
                options: [
                    { text: "Wet dynamic board", correct: false },
                    { text: "Static paired board", correct: true },
                    { text: "Connected board", correct: false },
                    { text: "Draw-heavy board", correct: false }
                ],
                explanation: "This is a static board - the paired aces mean few turn cards will change relative hand strengths. Use small bet sizes or check frequently as this board rarely hits either range hard."
            },
            {
                question: "You raised pre-flop. Flop: 8♠ 7♠ 6♦. How should you approach this board?",
                scenario: "Dynamic Board Strategy",
                options: [
                    { text: "Check always - too dangerous", correct: false },
                    { text: "Bet to protect equity", correct: true },
                    { text: "Small probe bet", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "This is a dynamic board where many turn cards change equity dramatically. You should bet to protect your equity and charge draws. Don't give free cards on boards like this."
            },
            {
                question: "Which factor suggests you should c-bet LESS frequently?",
                scenario: "C-Bet Frequency Adjustment",
                options: [
                    { text: "You're in position", correct: false },
                    { text: "Dry board texture", correct: false },
                    { text: "Multiple opponents", correct: true },
                    { text: "You have range advantage", correct: false }
                ],
                explanation: "Multiple opponents significantly reduce your c-bet frequency. More players mean someone is more likely to have hit the board. Be more selective with your c-bets in multi-way pots."
            },
            {
                question: "Flop: Q♠ Q♦ 2♣. You have A♠K♦. What's your strategy?",
                scenario: "Paired Board with Overcards",
                options: [
                    { text: "Bet large for value", correct: false },
                    { text: "Check or bet small", correct: true },
                    { text: "Go all-in", correct: false },
                    { text: "Always fold", correct: false }
                ],
                explanation: "On paired boards like QQ2, use small bets or check. This board rarely connects with either range strongly. Small bets accomplish your goals while risking less when behind."
            },
            {
                question: "Which board texture allows for the largest c-bet sizing?",
                scenario: "Bet Sizing by Board Texture",
                options: [
                    { text: "A♠ A♥ 2♦ - static paired", correct: false },
                    { text: "K♠ 7♣ 2♦ - dry disconnected", correct: true },
                    { text: "8♠ 7♠ 6♥ - wet connected", correct: false },
                    { text: "2♣ 2♦ 2♠ - trips on board", correct: false }
                ],
                explanation: "Dry boards like K72 rainbow allow for larger c-bet sizing (66-75% pot). You have range advantage, few draws exist, and larger bets generate more fold equity."
            },
            {
                question: "Flop: 7♠ 6♠ 5♥. Why does this favor the caller's range?",
                scenario: "Range Advantage Analysis",
                options: [
                    { text: "Callers have more premium hands", correct: false },
                    { text: "Hits suited connectors and small pairs", correct: true },
                    { text: "Callers always win on low boards", correct: false },
                    { text: "It doesn't favor anyone", correct: false }
                ],
                explanation: "Low, connected boards like 765 heavily favor the caller's range. They're more likely to have suited connectors, small pairs, and hands that connect with this texture."
            },
            {
                question: "You're out of position on a wet board. What's your general strategy?",
                scenario: "Position and Board Texture Interaction",
                options: [
                    { text: "Bet large to take it down", correct: false },
                    { text: "Check more frequently", correct: true },
                    { text: "Always c-bet for protection", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "Out of position on wet boards, you should check more frequently. The combination of positional disadvantage and a board that hits calling ranges makes aggressive play less profitable."
            }
        ]
    },
    {
        id: 8,
        title: "Bet Sizing Theory",
        description: "Master the art of choosing optimal bet sizes in different situations.",
        duration: "9 min",
        questions: 10,
        content: `
            <p><strong>Bet sizing</strong> is one of the most important skills in GTO poker. The size of your bet should accomplish specific goals and be balanced across your range.</p>
            
            <h3>Standard Bet Sizing Guide</h3>
            <h4>Flop Sizing:</h4>
            <ul>
                <li><strong>Small (33%):</strong> Use on dry boards</li>
                <li><strong>Medium (50-66%):</strong> Standard sizing</li>
                <li><strong>Large (75-100%):</strong> Use on wet boards</li>
            </ul>
            
            <h4>Turn Sizing:</h4>
            <ul>
                <li><strong>Small (33-50%):</strong> Pot control</li>
                <li><strong>Medium (66-75%):</strong> Standard sizing</li>
                <li><strong>Large (100-150%):</strong> Adjust based on board texture</li>
            </ul>
            
            <h4>River Sizing:</h4>
            <ul>
                <li><strong>Small (33-50%):</strong> Merged ranges</li>
                <li><strong>Medium (66-75%):</strong> Standard sizing</li>
                <li><strong>Large (100%+):</strong> Polarized ranges</li>
            </ul>
            
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
            <h4>Dry, Static Boards:</h4>
            <ul>
                <li><strong>Size:</strong> 33-50% pot</li>
                <li><strong>Reasoning:</strong> Few draws, range advantage</li>
                <li><strong>Example:</strong> K♠ 7♣ 2♦</li>
            </ul>
            
            <h4>Wet, Dynamic Boards:</h4>
            <ul>
                <li><strong>Size:</strong> 66-100% pot</li>
                <li><strong>Reasoning:</strong> Protect equity, charge draws</li>
                <li><strong>Example:</strong> J♠ T♠ 9♥</li>
            </ul>
            
            <h4>Paired Boards:</h4>
            <ul>
                <li><strong>Size:</strong> 25-33% pot</li>
                <li><strong>Reasoning:</strong> Rarely hits either range</li>
                <li><strong>Example:</strong> A♠ A♥ 5♣</li>
            </ul>
            
            <h4>High Card Heavy Boards:</h4>
            <ul>
                <li><strong>Size:</strong> 50-66% pot</li>
                <li><strong>Reasoning:</strong> Favors raiser's range</li>
                <li><strong>Example:</strong> A♠ K♥ Q♦</li>
            </ul>
            
            <div class="example-box">
                <h4>Bet Sizing Example - Wet Board</h4>
                <p>Flop: 8♠ 7♠ 6♦ | Pot: 10BB | You have A♠A♥ (overpair)</p>
                <p><strong>GTO Sizing:</strong> Bet 7-10BB (66-100% pot)</p>
                <p>On wet boards with many draws, bet larger to protect your hand and charge draws the correct price. Don't give free cards!</p>
            </div>
            
            <h3>Multi-Street Sizing Strategy</h3>
            <h4>Value Betting (Strong Hands):</h4>
            <ul>
                <li><strong>Flop:</strong> 50% pot - Start building</li>
                <li><strong>Turn:</strong> 66% pot - Increase pressure</li>
                <li><strong>River:</strong> 75-100% pot - Maximize value</li>
                <li><strong>Goal:</strong> Build pot gradually</li>
            </ul>
            
            <h4>Bluffing:</h4>
            <ul>
                <li><strong>Flop:</strong> 33% pot - Small risk</li>
                <li><strong>Turn:</strong> 50% pot - Maintain pressure</li>
                <li><strong>River:</strong> 66-75% pot - Force folds</li>
                <li><strong>Goal:</strong> Minimize risk early</li>
            </ul>
            
            <h4>Thin Value:</h4>
            <ul>
                <li><strong>Flop:</strong> 33% pot - Control pot size</li>
                <li><strong>Turn:</strong> 50% pot - Extract some value</li>
                <li><strong>River:</strong> 50% pot - Safe value bet</li>
                <li><strong>Goal:</strong> Extract value, control pot</li>
            </ul>
            
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
            },
            {
                question: "River: A♠K♦Q♣J♦2♥. Pot: 30BB. You have T♦9♦ (missed). What's your bluff sizing?",
                scenario: "River Bluff Sizing",
                options: [
                    { text: "5BB - small bluff", correct: false },
                    { text: "20-30BB (66-100% pot)", correct: true },
                    { text: "1BB - blocker bet", correct: false },
                    { text: "Never bluff", correct: false }
                ],
                explanation: "River bluffs should be polarized with larger sizing (66-100% pot). This puts maximum pressure on opponents and represents a strong value range credibly."
            },
            {
                question: "Turn: K♠7♣2♦3♥. Pot: 15BB. You have K♥J♥. What's the optimal bet size?",
                scenario: "Turn Value Bet Sizing",
                options: [
                    { text: "3BB (20% pot)", correct: false },
                    { text: "10BB (66% pot)", correct: true },
                    { text: "30BB (200% pot)", correct: false },
                    { text: "Check - pot control", correct: false }
                ],
                explanation: "On the turn with top pair decent kicker, bet 66% pot. This builds the pot with your value hand while keeping worse hands in. Standard turn sizing for value."
            },
            {
                question: "Flop: A♠A♥5♣ (paired). Pot: 8BB. What's the standard bet size here?",
                scenario: "Paired Board Sizing",
                options: [
                    { text: "8BB (100% pot)", correct: false },
                    { text: "2-3BB (25-33% pot)", correct: true },
                    { text: "16BB (200% pot)", correct: false },
                    { text: "Never bet paired boards", correct: false }
                ],
                explanation: "Paired boards like AA5 call for small sizing (25-33% pot). This board rarely hits either range hard, so small bets accomplish your goals efficiently."
            },
            {
                question: "What makes a poker strategy 'unexploitable'?",
                scenario: "Review from Lesson 1",
                options: [
                    { text: "Playing only premium hands", correct: false },
                    { text: "Being balanced so opponents can't exploit patterns", correct: true },
                    { text: "Always betting big", correct: false },
                    { text: "Never bluffing", correct: false }
                ],
                explanation: "From lesson 1: GTO is unexploitable because it's balanced. You mix strong and weak hands in similar ways, preventing opponents from exploiting predictable patterns."
            },
            {
                question: "When should you 3-bet with bluffs?",
                scenario: "Review from Lesson 6",
                options: [
                    { text: "Never - only 3-bet value", correct: false },
                    { text: "Sometimes, for balance", correct: true },
                    { text: "Always - be aggressive", correct: false },
                    { text: "Only against weak players", correct: false }
                ],
                explanation: "From lesson 6: Include bluffs in your 3-bet range for balance. If you only 3-bet premium hands, opponents can exploit by folding. Mix in hands like A5s for balance."
            },
            {
                question: "Which board texture favors the pre-flop raiser?",
                scenario: "Review from Lesson 7",
                options: [
                    { text: "7♠6♠5♥ - connected low", correct: false },
                    { text: "A♠K♥Q♦ - high cards", correct: true },
                    { text: "8♠8♥2♦ - paired middle", correct: false },
                    { text: "4♣3♦2♠ - wheel cards", correct: false }
                ],
                explanation: "From lesson 7: High card boards like AKQ heavily favor the raiser's range. Premium hands like AA, KK, QQ, AK all connect well with this texture."
            },
            {
                question: "You have a flush draw (35% equity). Pot odds give you 3:1. Should you call?",
                scenario: "Review from Lesson 5",
                options: [
                    { text: "No - not enough equity", correct: false },
                    { text: "Yes - you have enough equity", correct: true },
                    { text: "Always fold draws", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "From lesson 5: Getting 3:1 odds means you need 25% equity to call profitably. Your 35% equity exceeds this, making it a profitable call."
            }
        ]
    },
    {
        id: 9,
        title: "Bluffing Frequencies",
        description: "Learn the mathematical foundations of optimal bluffing in GTO poker.",
        duration: "10 min",
        questions: 10,
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
            <h4>Small Bets (33% Pot):</h4>
            <ul>
                <li><strong>Bluff Ratio:</strong> 1:4 (1 bluff for every 4 value bets)</li>
                <li><strong>Composition:</strong> 80% value, 20% bluffs</li>
                <li><strong>Strategy:</strong> Mostly value, few bluffs</li>
            </ul>
            
            <h4>Standard Bets (50% Pot):</h4>
            <ul>
                <li><strong>Bluff Ratio:</strong> 1:3 (1 bluff for every 3 value bets)</li>
                <li><strong>Composition:</strong> 75% value, 25% bluffs</li>
                <li><strong>Strategy:</strong> Standard balanced ratio</li>
            </ul>
            
            <h4>Medium Bets (66% Pot):</h4>
            <ul>
                <li><strong>Bluff Ratio:</strong> 2:5 (2 bluffs for every 5 value bets)</li>
                <li><strong>Composition:</strong> 71% value, 29% bluffs</li>
                <li><strong>Strategy:</strong> More bluffs with larger size</li>
            </ul>
            
            <h4>Large Bets (100% Pot):</h4>
            <ul>
                <li><strong>Bluff Ratio:</strong> 1:2 (1 bluff for every 2 value bets)</li>
                <li><strong>Composition:</strong> 67% value, 33% bluffs</li>
                <li><strong>Strategy:</strong> Polarized range</li>
            </ul>
            
            <h4>Overbet (150% Pot):</h4>
            <ul>
                <li><strong>Bluff Ratio:</strong> 3:5 (3 bluffs for every 5 value bets)</li>
                <li><strong>Composition:</strong> 63% value, 37% bluffs</li>
                <li><strong>Strategy:</strong> Highly polarized</li>
            </ul>
            
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
            <h4>Good Bluff Characteristics:</h4>
            <ul>
                <li><strong>Blockers:</strong> A♥5♥ (blocks AA, A5) - Reduces opponent's strong hands</li>
                <li><strong>Equity:</strong> Flush draw (9 outs) - Backup equity gives two ways to win</li>
                <li><strong>No Showdown Value:</strong> Complete air - Hands with showdown value should check</li>
                <li><strong>Credible Story:</strong> Consistent betting line - Your bets should tell a believable story</li>
            </ul>
            
            <h4>Bad Bluff Characteristics:</h4>
            <ul>
                <li><strong>No Blockers:</strong> 7♣2♦ (blocks nothing) - Doesn't reduce opponent's calling range</li>
                <li><strong>No Equity:</strong> Complete air (0 outs) - Only one way to win (fold)</li>
                <li><strong>Showdown Value:</strong> Weak pair - Better to check and realize equity</li>
                <li><strong>Inconsistent Story:</strong> Random betting pattern - Doesn't make sense</li>
            </ul>
            
            <h3>Multi-Street Bluffing</h3>
            <p>When bluffing multiple streets, your frequency should <strong>decrease</strong> each street:</p>
            
            <h4>Flop Bluffing:</h4>
            <ul>
                <li><strong>Frequency:</strong> High (30-40%)</li>
                <li><strong>Reasoning:</strong> Many bluff candidates, high fold equity</li>
            </ul>
            
            <h4>Turn Bluffing:</h4>
            <ul>
                <li><strong>Frequency:</strong> Medium (20-30%)</li>
                <li><strong>Reasoning:</strong> Some bluffs give up, continue with equity</li>
            </ul>
            
            <h4>River Bluffing:</h4>
            <ul>
                <li><strong>Frequency:</strong> Low (15-25%)</li>
                <li><strong>Reasoning:</strong> Only best bluff candidates remain</li>
            </ul>
            
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
            },
            {
                question: "You bet 100% pot. What percentage of your range should be bluffs?",
                scenario: "Pot-Sized Bet Bluffing Frequency",
                options: [
                    { text: "10% bluffs", correct: false },
                    { text: "25% bluffs", correct: false },
                    { text: "33% bluffs", correct: true },
                    { text: "50% bluffs", correct: false }
                ],
                explanation: "With a pot-sized bet (100%), you need 33% bluffs and 67% value (1:2 ratio). This frequency makes opponents indifferent to calling or folding with bluff catchers."
            },
            {
                question: "Which factor makes a hand a POOR bluff candidate?",
                scenario: "Bluff Selection Criteria",
                options: [
                    { text: "Has blockers to strong hands", correct: false },
                    { text: "Has showdown value", correct: true },
                    { text: "No equity when called", correct: false },
                    { text: "Blocks folding range", correct: false }
                ],
                explanation: "Hands with showdown value make poor bluffs. You should check these hands as they can win at showdown. Bluff with hands that have no showdown value but have blockers."
            },
            {
                question: "Your bluffing frequency should _____ as you move from flop to river.",
                scenario: "Multi-Street Bluffing Strategy",
                options: [
                    { text: "Increase", correct: false },
                    { text: "Decrease", correct: true },
                    { text: "Stay the same", correct: false },
                    { text: "Double each street", correct: false }
                ],
                explanation: "Bluffing frequency decreases from flop to river. Start with many bluff candidates on the flop (30-40%), continue with fewer on turn (20-30%), and only the best reach river (15-25%)."
            },
            {
                question: "What percentage of hands should you play from early position?",
                scenario: "Review from Lesson 3",
                options: [
                    { text: "40-50%", correct: false },
                    { text: "10-15%", correct: true },
                    { text: "25-30%", correct: false },
                    { text: "5% or less", correct: false }
                ],
                explanation: "From lesson 3: Early position requires playing only 10-15% of hands. This tight range compensates for your positional disadvantage throughout the hand."
            },
            {
                question: "On which board texture should you c-bet most frequently?",
                scenario: "Review from Lesson 7",
                options: [
                    { text: "J♠T♠9♥ - wet connected", correct: false },
                    { text: "K♠7♣2♦ - dry disconnected", correct: true },
                    { text: "8♠7♠6♦ - straight draw heavy", correct: false },
                    { text: "A♠A♥5♣ - paired board", correct: false }
                ],
                explanation: "From lesson 7: Dry boards like K72 rainbow are ideal for frequent c-betting. You have range advantage and opponents have few draws, making c-bets very effective."
            },
            {
                question: "You bet 33% pot. What's your optimal bluff-to-value ratio?",
                scenario: "Review from Lesson 8",
                options: [
                    { text: "1:2 (33% bluffs)", correct: false },
                    { text: "1:4 (20% bluffs)", correct: true },
                    { text: "1:1 (50% bluffs)", correct: false },
                    { text: "2:3 (40% bluffs)", correct: false }
                ],
                explanation: "From lesson 8: Small bets (33% pot) require fewer bluffs - 1:4 ratio (20% bluffs, 80% value). This is because opponents get good pot odds and call more often."
            },
            {
                question: "When should you include bluffs in your 3-betting range?",
                scenario: "Review from Lesson 6",
                options: [
                    { text: "Never - only 3-bet value", correct: false },
                    { text: "Always - for balance", correct: true },
                    { text: "Only vs weak players", correct: false },
                    { text: "Only in position", correct: false }
                ],
                explanation: "From lesson 6: Always include some bluffs in your 3-bet range for balance. Hands like A5s make good 3-bet bluffs due to blockers. This prevents opponents from exploiting you."
            }
        ]
    },
    {
        id: 10,
        title: "Defending Against 3-Bets",
        description: "Learn how to respond optimally when facing a 3-bet pre-flop.",
        duration: "9 min",
        questions: 10,
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
            <h4>Button vs Blinds:</h4>
            <ul>
                <li><strong>Continue Frequency:</strong> 45-50% of hands</li>
                <li><strong>4-Bet Frequency:</strong> 12-15% of hands</li>
                <li><strong>Call Frequency:</strong> 33-35% of hands</li>
            </ul>
            
            <h4>Cutoff vs Button:</h4>
            <ul>
                <li><strong>Continue Frequency:</strong> 40-45% of hands</li>
                <li><strong>4-Bet Frequency:</strong> 10-12% of hands</li>
                <li><strong>Call Frequency:</strong> 30-33% of hands</li>
            </ul>
            
            <h4>Early Position vs Any:</h4>
            <ul>
                <li><strong>Continue Frequency:</strong> 50-55% of hands</li>
                <li><strong>4-Bet Frequency:</strong> 15-18% of hands</li>
                <li><strong>Call Frequency:</strong> 35-37% of hands</li>
            </ul>
            
            <h3>Calling vs 4-Betting Guide</h3>
            <h4>Premium Hands:</h4>
            <ul>
                <li><strong>Action:</strong> 4-Bet for value</li>
                <li><strong>Examples:</strong> QQ+, AK</li>
                <li><strong>Reasoning:</strong> Too strong to fold, build pot</li>
            </ul>
            
            <h4>Strong Hands:</h4>
            <ul>
                <li><strong>Action:</strong> Call</li>
                <li><strong>Examples:</strong> JJ, TT, AQ</li>
                <li><strong>Reasoning:</strong> Good but not great, see flop</li>
            </ul>
            
            <h4>Playable Hands:</h4>
            <ul>
                <li><strong>Action:</strong> Call (in position) / Fold (out of position)</li>
                <li><strong>Examples:</strong> 99-77, suited connectors</li>
                <li><strong>Reasoning:</strong> Need position to realize equity</li>
            </ul>
            
            <h4>Bluff Candidates:</h4>
            <ul>
                <li><strong>Action:</strong> 4-Bet as bluff</li>
                <li><strong>Examples:</strong> A5s-A2s, K9s-K7s</li>
                <li><strong>Reasoning:</strong> Blockers + fold equity</li>
            </ul>
            
            <h4>Marginal Hands:</h4>
            <ul>
                <li><strong>Action:</strong> Fold</li>
                <li><strong>Examples:</strong> Weak aces, small pairs out of position</li>
                <li><strong>Reasoning:</strong> Poor playability, low equity</li>
            </ul>
            
            <div class="example-box">
                <h4>Defense Example - In Position</h4>
                <p>You raise to 2.5BB from button with J♠J♥. Small blind 3-bets to 8BB.</p>
                <p><strong>GTO Play: Call</strong></p>
                <p>JJ is too strong to fold but not strong enough to 4-bet for value (you're crushed by QQ+, AK). Calling keeps their bluffs in and lets you see a flop with position.</p>
            </div>
            
            <h3>4-Bet Sizing Strategy</h3>
            <h4>In Position:</h4>
            <ul>
                <li><strong>Standard Size:</strong> 2.2-2.5x the 3-bet</li>
                <li><strong>For Value:</strong> 2.2-2.5x - Build pot, get called</li>
                <li><strong>As Bluff:</strong> 2.2-2.5x - Same size for balance</li>
            </ul>
            
            <h4>Out of Position:</h4>
            <ul>
                <li><strong>Standard Size:</strong> 2.5-3x the 3-bet</li>
                <li><strong>For Value:</strong> 2.5-3x - Larger to compensate for position</li>
                <li><strong>As Bluff:</strong> 2.5-3x - Same size for balance</li>
            </ul>
            
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
            },
            {
                question: "Which hand makes a good 4-bet bluff candidate?",
                scenario: "4-Bet Bluff Selection",
                options: [
                    { text: "9♠9♦ - medium pair", correct: false },
                    { text: "A♠5♠ - suited ace blocker", correct: true },
                    { text: "K♦Q♦ - broadway cards", correct: false },
                    { text: "7♣2♦ - random hand", correct: false }
                ],
                explanation: "A5s is an ideal 4-bet bluff. It has blockers (reduces AA, AK combos), can make straights/flushes, and isn't strong enough to call. 99 and KQ should call. 72o has no blockers."
            },
            {
                question: "You're out of position facing a 3-bet. What sizing should your 4-bet be?",
                scenario: "4-Bet Sizing Out of Position",
                options: [
                    { text: "2x the 3-bet", correct: false },
                    { text: "2.5-3x the 3-bet", correct: true },
                    { text: "4x the 3-bet", correct: false },
                    { text: "All-in", correct: false }
                ],
                explanation: "Out of position, use larger 4-bet sizing (2.5-3x) to compensate for your positional disadvantage. This charges opponents more to see flops when you'll act first post-flop."
            },
            {
                question: "You raise, face a 3-bet. Your MDF is 45%. You have 60 hand combos in your range. How many must you defend?",
                scenario: "MDF Calculation",
                options: [
                    { text: "15 combos", correct: false },
                    { text: "27 combos", correct: true },
                    { text: "45 combos", correct: false },
                    { text: "60 combos", correct: false }
                ],
                explanation: "With 45% MDF and 60 combos, you must defend 60 × 0.45 = 27 combos. This prevents opponents from profitably 3-betting you with any two cards."
            },
            {
                question: "Why is position important in poker?",
                scenario: "Review from Lesson 2",
                options: [
                    { text: "You get dealt better cards", correct: false },
                    { text: "You act last and have more information", correct: true },
                    { text: "You can bet more", correct: false },
                    { text: "The dealer helps you", correct: false }
                ],
                explanation: "From lesson 2: Position gives you information advantage. Acting last means you see what everyone does before making your decision, making all plays more profitable."
            },
            {
                question: "What's the optimal c-bet frequency on dry boards?",
                scenario: "Review from Lesson 4",
                options: [
                    { text: "0-25%", correct: false },
                    { text: "50-70%", correct: true },
                    { text: "100%", correct: false },
                    { text: "Never c-bet", correct: false }
                ],
                explanation: "From lesson 4: On dry boards, c-bet 50-70% of the time. You have range advantage and few draws exist, making c-bets very effective. Don't c-bet 100% - that's exploitable."
            },
            {
                question: "You have a flush draw (35% equity). Pot odds are 2:1. Should you call?",
                scenario: "Review from Lesson 5",
                options: [
                    { text: "No - not enough equity", correct: false },
                    { text: "Yes - profitable call", correct: true },
                    { text: "Always fold draws", correct: false },
                    { text: "Go all-in", correct: false }
                ],
                explanation: "From lesson 5: Getting 2:1 odds means you need 33% equity to call profitably. Your 35% equity exceeds this threshold, making it a profitable call."
            },
            {
                question: "What percentage of your range should be bluffs when betting 100% pot?",
                scenario: "Review from Lesson 9",
                options: [
                    { text: "10%", correct: false },
                    { text: "25%", correct: false },
                    { text: "33%", correct: true },
                    { text: "50%", correct: false }
                ],
                explanation: "From lesson 9: Pot-sized bets (100%) require 33% bluffs and 67% value (1:2 ratio). This frequency makes opponents indifferent to calling or folding."
            }
        ]
    },
    {
        id: 11,
        title: "ICM Fundamentals",
        description: "Learn Independent Chip Model theory for tournament play.",
        duration: "12 min",
        questions: 10,
        content: `
            <p><strong>ICM (Independent Chip Model)</strong> is crucial for tournament success. It calculates the real money value of your chips based on payout structure and remaining players.</p>
            
            <h3>Key ICM Concepts</h3>
            <ul>
                <li><strong>Chip Value Decreases:</strong> Each additional chip is worth less than the previous one</li>
                <li><strong>Bubble Factor:</strong> Pressure increases near payouts</li>
                <li><strong>Big Stack Advantage:</strong> Chip leaders can apply maximum pressure</li>
                <li><strong>Short Stack Survival:</strong> Preserve equity when short</li>
            </ul>
            
            <div class="example-box">
                <h4>ICM Example</h4>
                <p>Final table, 4 players left. Payouts: 1st: $10,000, 2nd: $6,000, 3rd: $4,000, 4th: $2,000</p>
                <p>Your 20,000 chips aren't worth $5,000 (25% of total). Due to ICM, they're worth ~$4,200 because you can't win more than 1st place.</p>
            </div>
            
            <h3>ICM Applications</h3>
            <p><strong>Bubble Play:</strong> Tighten up significantly when approaching payouts</p>
            <p><strong>Final Table:</strong> Adjust ranges based on stack sizes and pay jumps</p>
            <p><strong>Satellite Tournaments:</strong> Focus on survival over chip accumulation</p>
        `,
        quiz: [
            {
                question: "Final table, 5 players left. You have 8BB in SB with A♠J♥. Chip leader raises button to 2.5BB. What's ICM optimal?",
                scenario: "Position: Small Blind | Stack: 8BB | Bubble: 4th place | Payout jump: $2,000",
                options: [
                    { text: "Fold - preserve ICM equity", correct: false },
                    { text: "Call - see flop with good hand", correct: false },
                    { text: "Shove all-in", correct: true },
                    { text: "Min-raise to 4BB", correct: false }
                ],
                explanation: "With 8BB and AJ, shoving is optimal. You need chips to survive and AJ has good equity vs button's wide range. ICM pressure means chip leader can't call light."
            },
            {
                question: "Satellite tournament, 45 players left, 40 get tickets. You have 15BB with K♠K♥ UTG. What should you do?",
                scenario: "Position: UTG | Stack: 15BB | Satellite bubble | Goal: Survive",
                options: [
                    { text: "Fold - preserve stack for bubble", correct: false },
                    { text: "Limp - see flop cheaply", correct: false },
                    { text: "Raise to 2.5BB", correct: true },
                    { text: "Shove all-in", correct: false }
                ],
                explanation: "Even in satellites, KK is too strong to fold. Standard raise allows you to fold to aggression if needed while building pot with premium hand. Shoving risks elimination unnecessarily."
            },
            {
                question: "Final 3, big pay jump to 2nd. You have 12BB, chip leader has 60BB, short stack has 8BB. You're dealt 9♠9♥ in SB vs chip leader. Action?",
                scenario: "Position: Small Blind | ICM pressure | Pay jump: $4,000 | Short stack present",
                options: [
                    { text: "Fold - let short stack bust first", correct: true },
                    { text: "Call - see flop with pair", correct: false },
                    { text: "Shove - maximize fold equity", correct: false },
                    { text: "Min-raise to 4BB", correct: false }
                ],
                explanation: "With a short stack about to bust, folding 99 is correct. The pay jump is huge and you're likely to move up by waiting. ICM makes survival more valuable than chip accumulation."
            },
            {
                question: "Tournament: 200BB effective, early stages. You have A♠A♥, opponent shoves 200BB. What's the decision?",
                scenario: "Position: Button | Early tournament | No ICM pressure | Standard play",
                options: [
                    { text: "Fold - preserve tournament life", correct: false },
                    { text: "Call - you have aces", correct: true },
                    { text: "Think for 2 minutes then fold", correct: false },
                    { text: "Call but be unhappy about it", correct: false }
                ],
                explanation: "Early in tournaments with deep stacks, ICM has minimal impact. AA vs any range is profitable. Don't overthink spots where you have massive equity advantage."
            },
            {
                question: "Heads-up for the title. You have 30BB, opponent has 50BB. You get A♠K♦ on button. Optimal play?",
                scenario: "Position: Button | Heads-up | Stacks: 30BB vs 50BB | Tournament final",
                options: [
                    { text: "Limp - control pot size", correct: false },
                    { text: "Raise to 2.5BB", correct: true },
                    { text: "Shove all-in", correct: false },
                    { text: "Fold - wait for better spot", correct: false }
                ],
                explanation: "Heads-up with 30BB, AK should be raised normally. You have position and a premium hand. Shoving is too aggressive with this stack depth, limping is too passive."
            },
            {
                question: "Bubble hand: 101 players left, 100 paid. You have 25BB with Q♠Q♥. UTG (40BB) raises to 3BB. Action?",
                scenario: "Position: Button | Money bubble | Medium stack | Clear pay jump",
                options: [
                    { text: "Fold - bubble too important", correct: false },
                    { text: "Call - control pot size", correct: false },
                    { text: "3-bet to 8BB", correct: true },
                    { text: "Shove all-in", correct: false }
                ],
                explanation: "QQ is too strong to fold even on bubble. 3-betting allows you to build pot while maintaining control. You can fold to 4-bet if needed, but QQ has great equity vs UTG range."
            },
            {
                question: "Final table, 6 left. Blinds 3000/6000. You have 45,000 (7.5BB) with A♠8♠ in CO. Folds to you. What's optimal?",
                scenario: "Position: Cutoff | Short stack | Final table ICM | Antes in play",
                options: [
                    { text: "Fold - wait for better hand", correct: false },
                    { text: "Limp - see flop cheap", correct: false },
                    { text: "Raise to 15,000", correct: false },
                    { text: "Shove all-in", correct: true }
                ],
                explanation: "With 7.5BB, A8s is strong enough to shove from CO. You need to accumulate chips and A8s has decent equity vs calling ranges. Folding burns blinds too quickly."
            },
            {
                question: "Satellite: 12 players left, 10 get seats. You have 8BB with 5♠5♥. Two shorter stacks (3BB, 4BB) at table. UTG action?",
                scenario: "Position: UTG | Satellite bubble | Multiple short stacks | Survival mode",
                options: [
                    { text: "Shove - need chips to survive", correct: false },
                    { text: "Fold - let short stacks bust", correct: true },
                    { text: "Limp - see cheap flop", correct: false },
                    { text: "Raise to 2BB", correct: false }
                ],
                explanation: "In satellites with shorter stacks present, folding 55 is correct. Your goal is a seat, not chips. Let the 3BB and 4BB stacks bust first - you're likely to get a seat by folding."
            },
            {
                question: "Final 4, huge chip leader (80BB), you have 15BB, two others have 12BB each. You get A♠Q♠ in BB vs chip leader's button raise. Action?",
                scenario: "Position: Big Blind | ICM spot | Chip leader aggression | Pay ladder",
                options: [
                    { text: "Fold - preserve position", correct: false },
                    { text: "Call - see flop in position", correct: false },
                    { text: "3-bet shove", correct: true },
                    { text: "3-bet to 6BB", correct: false }
                ],
                explanation: "AQs is strong enough to 3-bet shove vs chip leader's wide button range. You need chips to compete and can't let chip leader run you over. AQ has good equity vs their range."
            },
            {
                question: "Early tournament, 150BB deep. You have K♠K♥, face a 4-bet shove for 150BB. Opponent is tight player. Decision?",
                scenario: "Position: Button | Deep stacks | Early tournament | Tight opponent image",
                options: [
                    { text: "Call - KK is strong", correct: false },
                    { text: "Fold - preserve tournament life", correct: true },
                    { text: "Call but expect to be behind", correct: false },
                    { text: "Tank then call", correct: false }
                ],
                explanation: "Against tight players 150BB deep, KK can be folded to 4-bet shoves. Their range is heavily weighted toward AA/AK. Early tournament survival matters more than this marginal spot."
            }
        ]
    },
    {
        id: 12,
        title: "Multi-Way Pots",
        description: "Master the complexities of playing against multiple opponents.",
        duration: "11 min",
        questions: 10,
        content: `
            <p><strong>Multi-way pots</strong> occur when 3+ players see the flop. These situations require significant strategy adjustments from heads-up play.</p>
            
            <h3>Key Multi-Way Concepts</h3>
            <ul>
                <li><strong>Tighter Ranges:</strong> Someone likely has a strong hand</li>
                <li><strong>Less Bluffing:</strong> Harder to fold out multiple opponents</li>
                <li><strong>Value Bet Thinner:</strong> More opponents to pay you off</li>
                <li><strong>Draw Carefully:</strong> Implied odds change with more players</li>
            </ul>
            
            <div class="example-box">
                <h4>Multi-Way Example</h4>
                <p>You raise A♠K♥ from CO, button and BB call. Flop: A♣8♠3♦</p>
                <p>In heads-up, you'd c-bet 100%. Multi-way, bet smaller (33-50% pot) since someone likely has an ace or pocket pair.</p>
            </div>
            
            <h3>Multi-Way Adjustments</h3>
            <p><strong>Pre-flop:</strong> Tighten opening ranges, avoid marginal 3-bets</p>
            <p><strong>Post-flop:</strong> Value bet more, bluff less, size smaller</p>
            <p><strong>Drawing:</strong> Need better odds, more opponents to pay off</p>
        `,
        quiz: [
            {
                question: "You raise A♠K♥ from CO, button and both blinds call (4-way). Flop: A♣7♠2♦. What's your action?",
                scenario: "Position: Cutoff | 4-way pot | Top pair top kicker | Dry board",
                options: [
                    { text: "Check - too many opponents", correct: false },
                    { text: "Bet 33% pot", correct: true },
                    { text: "Bet 75% pot like heads-up", correct: false },
                    { text: "Bet 150% pot - charge draws", correct: false }
                ],
                explanation: "Multi-way, bet smaller for value. 33% pot gets calls from worse aces, pocket pairs, and draws. Larger sizing folds out hands that would call smaller bets."
            },
            {
                question: "3-way pot. You have 8♠8♥ on button. Flop: K♠Q♥J♦. UTG bets, MP calls. What should you do?",
                scenario: "Position: Button | 3-way action | Coordinated board | Pocket pair",
                options: [
                    { text: "Call - good pot odds", correct: false },
                    { text: "Fold - likely beaten", correct: true },
                    { text: "Raise - semi-bluff", correct: false },
                    { text: "Shove all-in", correct: false }
                ],
                explanation: "With bet and call ahead on KQJ, 88 is likely crushed. Someone has two pair, straight, or strong draw. Multi-way pots require stronger hands to continue."
            },
            {
                question: "You have 9♠8♠ in 4-way limped pot. Flop: T♠7♣2♠ (flush draw + gutshot). First player bets 50% pot. What's optimal?",
                scenario: "Position: Button | 4-way limped pot | Strong draw | Facing bet",
                options: [
                    { text: "Fold - too many opponents", correct: false },
                    { text: "Call - good draw", correct: true },
                    { text: "Raise - semi-bluff", correct: false },
                    { text: "Shove all-in", correct: false }
                ],
                explanation: "With 12 outs (9 spades + 3 jacks) and 3 opponents, you have excellent implied odds. Calling is profitable - if you hit, multiple opponents can pay you off."
            },
            {
                question: "5-way pot, you have A♠A♥. Flop: 9♠8♠7♥. You're first to act. What's your play?",
                scenario: "Position: UTG | 5-way pot | Coordinated board | Overpair",
                options: [
                    { text: "Check - control pot size", correct: false },
                    { text: "Bet 40% pot", correct: true },
                    { text: "Bet 100% pot - charge draws", correct: false },
                    { text: "Check-call any bet", correct: false }
                ],
                explanation: "AA needs protection on this draw-heavy board. Bet smaller (40% pot) to get calls from draws and weaker hands. Checking allows too many free cards."
            },
            {
                question: "3-way pot. You raised pre-flop with Q♠Q♥. Flop: A♠K♣J♦. Both opponents check to you. Action?",
                scenario: "Position: Button | 3-way pot | Overcard heavy board | Pocket queens",
                options: [
                    { text: "Bet 66% pot - represent strength", correct: false },
                    { text: "Check behind - give up", correct: true },
                    { text: "Bet 25% pot - small probe", correct: false },
                    { text: "Shove all-in", correct: false }
                ],
                explanation: "On AKJ with two opponents, QQ should check behind. Someone likely has an ace, king, or straight. Multi-way pots require stronger hands to barrel."
            },
            {
                question: "You have K♠Q♠ in 4-way pot. Flop: K♥8♣3♠. First player bets, second calls, third folds. Your action?",
                scenario: "Position: Button | 4-way to 3-way | Top pair decent kicker | Facing action",
                options: [
                    { text: "Fold - likely outkicked", correct: false },
                    { text: "Call - see what develops", correct: true },
                    { text: "Raise - build pot", correct: false },
                    { text: "Shove all-in", correct: false }
                ],
                explanation: "KQ is marginal facing bet and call. Calling keeps you in the hand cheaply. You could be ahead of draws or weaker kings, but raising risks facing stronger hands."
            },
            {
                question: "Multi-way limped pot (5 players). You have 6♠5♠ on button. Flop: 9♠4♠3♦. First player bets pot, gets 2 calls. Action?",
                scenario: "Position: Button | 5-way limped pot | Flush draw + gutshot | Heavy action",
                options: [
                    { text: "Fold - too much action", correct: false },
                    { text: "Call - great pot odds", correct: true },
                    { text: "Raise - semi-bluff", correct: false },
                    { text: "Shove all-in", correct: false }
                ],
                explanation: "With pot bet and 2 calls, you're getting 4:1 odds. Your flush draw + gutshot (12 outs) has ~48% equity. Easy call with multiple opponents to pay off if you hit."
            },
            {
                question: "You raise T♠T♥ from MP, get 3 callers. Flop: T♣9♠8♠. You bet 50% pot, get raised by button. Two others fold. Action?",
                scenario: "Position: MP | 4-way to heads-up | Top set | Facing raise on draw board",
                options: [
                    { text: "Call - control pot size", correct: false },
                    { text: "3-bet - protect your set", correct: true },
                    { text: "Fold - could be straight", correct: false },
                    { text: "Shove all-in", correct: false }
                ],
                explanation: "Top set on a draw-heavy board should 3-bet for value and protection. You're ahead of draws, two pairs, and straights. Build the pot while you likely have the best hand."
            },
            {
                question: "3-way pot, you have A♥J♥. Flop: A♠Q♣4♦. You bet 40% pot from position, both opponents call. Turn: 2♥. They check. Action?",
                scenario: "Position: Button | 3-way pot | Top pair weak kicker | Turn decision",
                options: [
                    { text: "Bet 60% pot - continue value betting", correct: false },
                    { text: "Check behind - control pot", correct: true },
                    { text: "Bet 25% pot - thin value", correct: false },
                    { text: "Shove all-in", correct: false }
                ],
                explanation: "AJ facing two calls on AQ4 should check behind on turn. You're likely behind better aces and don't want to face check-raises. Control pot size with marginal holding."
            },
            {
                question: "5-way limped pot. You have 2♠2♣ in BB. Flop: 2♥K♠Q♦ (bottom set). First player bets 75% pot. What's optimal?",
                scenario: "Position: Big Blind | 5-way limped pot | Bottom set | Coordinated board",
                options: [
                    { text: "Fold - dangerous board", correct: false },
                    { text: "Call - slow play the set", correct: false },
                    { text: "Raise 2.5x - build pot", correct: true },
                    { text: "Shove all-in", correct: false }
                ],
                explanation: "Bottom set is strong enough to raise for value. With KQ board and multiple opponents, someone has top pair or draws. Raise to build pot and charge draws."
            }
        ]
    },
    {
        id: 13,
        title: "Short Stack Strategy",
        description: "Master play with 20-40BB effective stacks.",
        duration: "10 min",
        questions: 10,
        content: `
            <p><strong>Short stack play</strong> (20-40BB) requires significant adjustments. Your decisions become more binary: fold or shove becomes common.</p>
            
            <h3>Short Stack Principles</h3>
            <ul>
                <li><strong>Tighter Ranges:</strong> Can't afford speculative hands</li>
                <li><strong>Aggression:</strong> Fold equity becomes crucial</li>
                <li><strong>Position Matters More:</strong> Limited post-flop play</li>
                <li><strong>Push/Fold Charts:</strong> Mathematical approach to decisions</li>
            </ul>
            
            <div class="example-box">
                <h4>Short Stack Example</h4>
                <p>25BB effective, you have A♠J♦ on button vs BB. Standard raise commits 12% of stack.</p>
                <p>Consider: If called, you're pot-committed on most flops. This makes pre-flop decision crucial.</p>
            </div>
            
            <h3>Key Adjustments</h3>
            <p><strong>Pre-flop:</strong> Wider shoving ranges, tighter calling ranges</p>
            <p><strong>Post-flop:</strong> Commit with top pair+, fold weak draws</p>
            <p><strong>Bubble Play:</strong> Extreme tightness near payouts</p>
        `,
        quiz: [
            {
                question: "You have 22BB with A♠Q♦ on button. Blinds fold to you. What's optimal?",
                scenario: "Position: Button | Stack: 22BB | Blinds: 1BB/2BB | Fold to you",
                options: [
                    { text: "Fold - preserve stack", correct: false },
                    { text: "Limp - see flop cheap", correct: false },
                    { text: "Raise to 4BB", correct: false },
                    { text: "Shove all-in", correct: true }
                ],
                explanation: "With 22BB, AQ should shove from button. You want fold equity from blinds and avoid difficult post-flop decisions. Standard raise commits too much of your stack."
            },
            {
                question: "30BB effective. You raise A♠K♥ to 2.5BB from CO, button shoves 30BB. What should you do?",
                scenario: "Position: Cutoff | Stack: 30BB | Facing shove | Premium hand",
                options: [
                    { text: "Fold - preserve stack", correct: false },
                    { text: "Call - AK is strong", correct: true },
                    { text: "Think for 2 minutes", correct: false },
                    { text: "Ask for count", correct: false }
                ],
                explanation: "AK vs 30BB shove is a clear call. You have great equity vs their shoving range (pairs, Ax, broadways). This is a standard spot to get it in."
            },
            {
                question: "You have 18BB with 7♠7♥ in MP. UTG (40BB) raises to 3BB. What's your decision?",
                scenario: "Position: Middle Position | Stack: 18BB | Facing raise | Pocket pair",
                options: [
                    { text: "Fold - not strong enough", correct: false },
                    { text: "Call - set mine", correct: false },
                    { text: "3-bet shove", correct: true },
                    { text: "3-bet to 8BB", correct: false }
                ],
                explanation: "With 18BB, 77 should shove vs UTG raise. You can't set mine profitably with this stack depth. Shoving gives fold equity and decent equity when called."
            },
            {
                question: "25BB stack. You shove A♠8♠ from SB, BB calls with K♠Q♥. Flop: K♣8♦3♠. What's your equity?",
                scenario: "All-in situation | Flop texture | Drawing to win | Equity calculation",
                options: [
                    { text: "About 15% - nearly dead", correct: false },
                    { text: "About 30% - some outs", correct: true },
                    { text: "About 45% - coin flip", correct: false },
                    { text: "About 60% - ahead", correct: false }
                ],
                explanation: "You have 5 outs (3 aces + 2 eights) = ~20% plus backdoor flush = ~30% total equity. You're behind but not dead. This is why A8s is a reasonable shove."
            },
            {
                question: "35BB effective. You have Q♠Q♥, opponent shoves 35BB over your raise. What factors matter most?",
                scenario: "Position: Button | Stack: 35BB | Premium pair | Facing shove",
                options: [
                    { text: "Opponent's image and stack size", correct: false },
                    { text: "Your hand strength vs their range", correct: true },
                    { text: "Tournament stage", correct: false },
                    { text: "Pot odds being offered", correct: false }
                ],
                explanation: "QQ vs 35BB shove is about hand strength vs range. Against most opponents, QQ has good equity vs shoving ranges. Don't overthink - focus on fundamental equity."
            },
            {
                question: "You have 28BB with A♠J♦ in BB. SB (25BB) shoves. Pot odds are 1.8:1. Should you call?",
                scenario: "Position: Big Blind | Stack: 28BB | Getting pot odds | Marginal hand",
                options: [
                    { text: "Fold - not strong enough", correct: false },
                    { text: "Call - getting good odds", correct: true },
                    { text: "Think about opponent's range", correct: false },
                    { text: "Fold to preserve stack", correct: false }
                ],
                explanation: "AJ getting 1.8:1 odds vs SB shove is a call. You need ~36% equity and have that vs most SB shoving ranges. Don't fold strong hands getting good odds."
            },
            {
                question: "20BB stack, you have K♠J♦ on button. CO raises to 2.5BB. What's your play?",
                scenario: "Position: Button | Stack: 20BB | Facing raise | Marginal hand",
                options: [
                    { text: "Fold - not strong enough", correct: true },
                    { text: "Call - see flop", correct: false },
                    { text: "3-bet shove", correct: false },
                    { text: "3-bet to 7BB", correct: false }
                ],
                explanation: "KJ with 20BB vs CO raise should fold. You can't call (commits too much stack) and shoving is too loose vs CO's tight range. Wait for better spots."
            },
            {
                question: "32BB effective. You raise A♠A♥ to 2.5BB, get 3-bet to 8BB. What should you do?",
                scenario: "Position: Cutoff | Stack: 32BB | Premium hand | Facing 3-bet",
                options: [
                    { text: "Call - control pot size", correct: false },
                    { text: "4-bet to 18BB", correct: false },
                    { text: "4-bet shove", correct: true },
                    { text: "Fold - preserve stack", correct: false }
                ],
                explanation: "AA with 32BB should shove vs 3-bet. You want to get maximum value and avoid difficult post-flop decisions. AA has great equity vs all 3-betting ranges."
            },
            {
                question: "You have 24BB with 9♠9♥. UTG limps, you're in CO. What's optimal?",
                scenario: "Position: Cutoff | Stack: 24BB | Pocket pair | Facing limp",
                options: [
                    { text: "Limp behind - see cheap flop", correct: false },
                    { text: "Raise to 4BB - isolate", correct: true },
                    { text: "Shove all-in", correct: false },
                    { text: "Fold - avoid limped pots", correct: false }
                ],
                explanation: "99 should isolate limpers even with 24BB. Raise to 4BB builds pot and gives you initiative. You can still fold to aggression if needed."
            },
            {
                question: "15BB stack in SB. Button raises to 2.5BB. You have A♠4♠. What's your decision?",
                scenario: "Position: Small Blind | Stack: 15BB | Suited ace | Facing steal",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Call - see flop", correct: false },
                    { text: "3-bet shove", correct: true },
                    { text: "3-bet to 7BB", correct: false }
                ],
                explanation: "A4s with 15BB should shove vs button steal. You have fold equity vs their wide range and decent equity when called. Never call from SB - you'll be out of position."
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
        if (titleEl) titleEl.textContent = 'Perfect Score!';
    } else if (percentage >= 75) {
        if (iconEl) iconEl.textContent = '🏆';
        if (titleEl) titleEl.textContent = 'Excellent Work!';
    } else if (percentage >= 66) {
        if (iconEl) iconEl.textContent = '✅';
        if (titleEl) titleEl.textContent = 'Quiz Finished';
    } else {
        if (iconEl) iconEl.textContent = '📊';
        if (titleEl) titleEl.textContent = 'Quiz Finished';
    }
    
    // Trigger enhanced confetti for scores 75% and above
    if (percentage >= 75) {
        triggerEnhancedConfetti();
    }
    
    // Store quiz scores for statistics
    const quizScores = JSON.parse(localStorage.getItem('quizScores') || '{}');
    quizScores[currentLessonId] = {
        correct: quizScore,
        total: lesson.quiz.length,
        percentage: percentage
    };
    localStorage.setItem('quizScores', JSON.stringify(quizScores));
    
    // Motivational messages for each lesson
    const motivationalMessages = [
        "♠ You played that hand like a pro—keep crushing the odds!",
        "♥ Every correct move gets you closer to GTO mastery!",
        "♣ You're reading ranges like a mind reader—nice work!",
        "♦ Flop, turn, river… and victory! You nailed it!",
        "🃏 That's EV-positive progress right there!",
        "💪 You're building poker muscle—one quiz at a time!",
        "🔥 Perfect play! Your opponents won't know what hit them.",
        "🧠 Smart moves = sharp mind. Keep those neurons betting!",
        "🎯 Bullseye! You're locking in optimal play, one hand at a time.",
        "🚀 You're leveling up your poker IQ—next stop: elite GTO wizard!",
        "♠ You're making GTO look easy—keep that streak going!",
        "♥ Another quiz, another win. You're on a heater!",
        "♣ That's how you balance your range like a champ!",
        "♦ Your decisions are pure value. Keep stacking that edge!",
        "🃏 You just bluffed variance itself—nice move!",
        "💪 Solid logic, perfect timing. You're in control of the table.",
        "🔥 The way you're playing, solvers might take notes from you!",
        "🧠 Each quiz = more brain equity. Keep investing!",
        "🎯 You're targeting perfection—and hitting it dead-on.",
        "🚀 Optimal play unlocked. Keep flying high!",
        "💎 You're thinking like a solver, acting like a shark.",
        "🃠 You're writing your own poker textbook right now!",
        "⚡ Your GTO instincts are getting sharper with every move.",
        "🎲 You don't need luck when you've got skill like that.",
        "💥 That's top-tier poker thinking—boom!",
        "🧩 Every correct answer fits perfectly into your strategy puzzle.",
        "🥇 You're outplaying 95% of the field—keep pushing!",
        "📈 Your poker IQ just leveled up again!",
        "🎓 Study. Apply. Dominate. You're on the right path.",
        "🕹️ You're mastering the game behind the game—GTO power-up!",
        "🧊 Cool under pressure and correct under fire—respect!",
        "🧮 Your calculations are cleaner than a solver's output!",
        "🧭 You're navigating GTO land like a true explorer.",
        "💸 EV gains detected—keep stacking them up!",
        "🦈 That's blood in the water for your future opponents.",
        "🧱 Another solid block in your GTO foundation.",
        "⏳ Great play—patience and precision always pay off.",
        "🎰 You're not gambling—you're optimizing. Big difference!",
        "🧤 You're handling variance with surgical precision.",
        "🧨 That quiz didn't stand a chance against your logic!",
        "🔮 You're seeing the future one range at a time.",
        "🧠 Solver-approved. Confidence confirmed.",
        "🥶 Ice-cold logic—perfect GTO flow.",
        "📊 You're turning theory into instinct—love to see it!",
        "🪙 Every answer adds EV to your mental bankroll.",
        "🎯 You're getting closer to mistake-free poker—keep aiming!",
        "💫 That was pure equilibrium magic right there.",
        "🏆 Another quiz crushed. Your edge just got sharper.",
        "⚙️ You're running smoother than a perfectly tuned solver.",
        "🌟 You're not guessing—you're calculating greatness."
    ];
    
    // Get the motivational message for this lesson (use modulo for lessons beyond 50)
    const lessonIndex = (currentLessonId - 1) % motivationalMessages.length;
    const motivationalMessage = motivationalMessages[lessonIndex];
    
    let message = '';
    if (percentage >= 66) {
        message = motivationalMessage;
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

// Trigger enhanced confetti animation for scores 75% and above
function triggerEnhancedConfetti() {
    // Get trophy icon position
    const iconEl = document.querySelector('.complete-icon');
    if (!iconEl) return;
    
    const iconRect = iconEl.getBoundingClientRect();
    const originX = iconRect.left + iconRect.width / 2;
    const originY = iconRect.top + iconRect.height / 2;
    
    // Create confetti container
    let confettiContainer = document.querySelector('.confetti-container');
    if (!confettiContainer) {
        confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        document.body.appendChild(confettiContainer);
    }

    // Clear any existing confetti
    confettiContainer.innerHTML = '';

    // Enhanced confetti emojis and shapes
    const confettiEmojis = ['🎉', '🎊', '✨', '🌟', '💫', '🎈', '🎁', '🏆', '🎯', '💎', '🔥', '⭐'];
    const shapeClasses = ['confetti-square', 'confetti-circle', 'confetti-diamond', 'confetti-triangle', 'confetti-star'];
    const colors = ['#dc2626', '#3b82f6', '#fbbf24', '#8b5cf6', '#10b981', '#f97316', '#ec4899', '#06b6d4'];

    // Create MORE confetti pieces with bigger burst
    for (let i = 0; i < 50; i++) {
        // Random emoji confetti
        if (Math.random() > 0.3) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece enhanced';
            piece.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
            
            // Start from trophy position
            piece.style.left = originX + 'px';
            piece.style.top = originY + 'px';
            piece.style.fontSize = (20 + Math.random() * 15) + 'px';
            
            // Random burst direction with more velocity
            const angle = (Math.random() * 360) * (Math.PI / 180);
            const velocity = 200 + Math.random() * 300;
            piece.style.setProperty('--burst-x', Math.cos(angle) * velocity + 'px');
            piece.style.setProperty('--burst-y', Math.sin(angle) * velocity - 150 + 'px');
            
            piece.style.animationDelay = Math.random() * 0.3 + 's';
            piece.style.animationDuration = (2.5 + Math.random() * 1.5) + 's';
            confettiContainer.appendChild(piece);
        }
        
        // Colorful shapes
        const shape = document.createElement('div');
        const shapeClass = shapeClasses[Math.floor(Math.random() * shapeClasses.length)];
        shape.className = `confetti-shape ${shapeClass} enhanced`;
        shape.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Start from trophy position
        shape.style.left = originX + 'px';
        shape.style.top = originY + 'px';
        shape.style.width = (12 + Math.random() * 8) + 'px';
        shape.style.height = (12 + Math.random() * 8) + 'px';
        
        // Random burst direction with more velocity
        const angle = (Math.random() * 360) * (Math.PI / 180);
        const velocity = 200 + Math.random() * 300;
        shape.style.setProperty('--burst-x', Math.cos(angle) * velocity + 'px');
        shape.style.setProperty('--burst-y', Math.sin(angle) * velocity - 150 + 'px');
        
        shape.style.animationDelay = Math.random() * 0.3 + 's';
        shape.style.animationDuration = (3 + Math.random() * 1.5) + 's';
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

// Merge additional lessons
if (typeof additionalLessons !== 'undefined') {
    lessons.push(...additionalLessons);
}

// Merge Phase 3 lessons
if (typeof phase3Lessons !== 'undefined') {
    lessons.push(...phase3Lessons);
}

// Merge Phase 4 lessons
if (typeof phase4Lessons !== 'undefined') {
    lessons.push(...phase4Lessons);
}

// Merge Phase 5 lessons
if (typeof phase5Lessons !== 'undefined') {
    lessons.push(...phase5Lessons);
}

// Initialize phase system
if (typeof checkPhaseCompletion !== 'undefined') {
    // Check for phase completion after each quiz
    const originalShowQuizComplete = showQuizComplete;
    showQuizComplete = function() {
        originalShowQuizComplete();
        setTimeout(checkPhaseCompletion, 1000);
    };
}

// Initialize on page load
init();
