// Phase 4: Advanced Techniques - Lessons 31-40
const phase4Lessons = [
    {
        id: 31,
        title: "Range Merging",
        description: "Master the art of combining value bets and bluffs in balanced ranges.",
        duration: "15 min",
        questions: 10,
        content: `
            <p><strong>Range merging</strong> is combining different hand strengths into the same betting action to create balanced, unexploitable strategies.</p>
            
            <h3>Merging Concepts</h3>
            <ul>
                <li><strong>Value + Bluff Merge:</strong> Bet strong hands and bluffs together</li>
                <li><strong>Strength Merge:</strong> Bet different value hand strengths at same frequency</li>
                <li><strong>Draw Merge:</strong> Combine made hands with draws in betting ranges</li>
                <li><strong>Position Merge:</strong> Similar actions from different positions</li>
            </ul>
            
            <div class="example-box">
                <h4>Range Merge Example</h4>
                <p>River bet range: AA-QQ (value) + A5s-A2s (bluffs)</p>
                <p>This creates a balanced range where opponent can't exploit you by always calling or always folding.</p>
            </div>
        `,
        quiz: [
            {
                question: "River: K♠Q♥J♦8♣3♠. You want to bet for value with A♠T♠ (nut straight). What bluffs should you merge?",
                scenario: "Position: Button | River decision | Nuts | Range construction",
                options: [
                    { text: "Random weak hands", correct: false },
                    { text: "Hands with blockers (A♥x, T♥x)", correct: true },
                    { text: "All missed draws", correct: false },
                    { text: "Don't bluff with nuts", correct: false }
                ],
                explanation: "Merge bluffs that block opponent's calling range. A♥x and T♥x block straights, making opponent more likely to fold. This creates a balanced betting range."
            },
            {
                question: "Flop: A♠8♣3♦. You have both A♥K♥ and A♠5♠. How should you play these hands?",
                scenario: "Position: Button | Flop decision | Different ace strengths | Range merging",
                options: [
                    { text: "Bet AK, check A5", correct: false },
                    { text: "Bet both at same frequency", correct: true },
                    { text: "Check AK, bet A5", correct: false },
                    { text: "Always bet AK, mix with A5", correct: false }
                ],
                explanation: "Merge different strength aces by betting them at the same frequency. This prevents opponents from exploiting you based on bet sizing or frequency tells."
            }
        ]
    },
    {
        id: 32,
        title: "Overbetting Strategy",
        description: "Learn when and how to use oversized bets for maximum value and fold equity.",
        duration: "14 min",
        questions: 10,
        content: `
            <p><strong>Overbetting</strong> (betting more than pot size) is a powerful tool for polarizing ranges and maximizing value in specific situations.</p>
            
            <h3>Overbet Situations</h3>
            <ul>
                <li><strong>Nut Advantage:</strong> When you have more nuts than opponent</li>
                <li><strong>Range Advantage:</strong> Board favors your range heavily</li>
                <li><strong>Stack Depth:</strong> Deep stacks allow for larger bets</li>
                <li><strong>Polarization:</strong> When you want to bet nuts + air only</li>
            </ul>
            
            <div class="example-box">
                <h4>Overbet Example</h4>
                <p>River: A♠A♣K♦Q♥J♠. You 3-bet pre-flop and have TT (straight).</p>
                <p>Overbet 150% pot - you have many straights, opponent has few. Force them to make tough decisions with one pair hands.</p>
            </div>
        `,
        quiz: [
            {
                question: "River: 9♠9♣9♦8♣7♠. You have 9♥8♥ (quads). Opponent likely has straights/flushes. Bet size?",
                scenario: "Position: Button | River decision | Quads | Nut advantage",
                options: [
                    { text: "Bet 50% pot - keep them in", correct: false },
                    { text: "Bet 75% pot - standard size", correct: false },
                    { text: "Overbet 150% pot", correct: true },
                    { text: "Check - slow play", correct: false }
                ],
                explanation: "With quads on this board, overbet for maximum value. Opponent has many strong hands (straights, flushes) that will call large bets. Extract maximum value."
            },
            {
                question: "Turn: K♠K♣K♦8♠. You 3-bet pre-flop and c-bet flop. You have A♠A♥. Opponent calls. Bet size?",
                scenario: "Position: Cutoff | Turn decision | Overpair | Dry board",
                options: [
                    { text: "Check - board too dry", correct: false },
                    { text: "Bet 33% pot", correct: false },
                    { text: "Bet 66% pot", correct: false },
                    { text: "Overbet 125% pot", correct: true }
                ],
                explanation: "On KKK8, you have massive range advantage as the 3-bettor. Overbet to polarize your range - you have more sets and overpairs than opponent."
            }
        ]
    },
    {
        id: 33,
        title: "Check-Back Ranges",
        description: "Master when to check behind for pot control and range protection.",
        duration: "13 min",
        questions: 10,
        content: `
            <p><strong>Check-back ranges</strong> are crucial for balanced play. Knowing when to check behind protects your checking range and controls pot size.</p>
            
            <h3>Check-Back Reasons</h3>
            <ul>
                <li><strong>Pot Control:</strong> Keep pot manageable with medium hands</li>
                <li><strong>Range Protection:</strong> Don't make checking range too weak</li>
                <li><strong>Showdown Value:</strong> Hands that win at showdown but can't call bets</li>
                <li><strong>Board Texture:</strong> Dry boards favor checking back</li>
            </ul>
            
            <div class="example-box">
                <h4>Check-Back Example</h4>
                <p>Turn: A♠8♣3♦2♥. You have A♥J♥ in position, opponent checks.</p>
                <p>Check back - you have showdown value but don't want to face check-raises. Control pot size with medium strength.</p>
            </div>
        `,
        quiz: [
            {
                question: "Turn: K♠7♣2♦4♥. You have K♥Q♥ on button, opponent checks. What should you do?",
                scenario: "Position: Button | Turn decision | Top pair decent kicker | Dry board",
                options: [
                    { text: "Bet for value", correct: false },
                    { text: "Check behind", correct: true },
                    { text: "Bet small", correct: false },
                    { text: "Bet large", correct: false }
                ],
                explanation: "KQ should check behind on this dry turn. You have showdown value but the board is too dry to get value from worse hands. Control pot size."
            },
            {
                question: "River: 9♠8♣7♦6♥5♠. You have T♠J♠ (nut straight) in position. Opponent checks. Action?",
                scenario: "Position: Button | River decision | Nuts | Straight board",
                options: [
                    { text: "Check behind - protect range", correct: false },
                    { text: "Bet 75% pot for value", correct: true },
                    { text: "Bet 33% pot", correct: false },
                    { text: "Overbet 150% pot", correct: false }
                ],
                explanation: "With the nuts, always bet for value. Don't check back the nuts - you want to extract maximum value from worse straights and two pairs."
            }
        ]
    },
    {
        id: 34,
        title: "Turn Barreling",
        description: "Master second barrel strategy for value and as bluffs on turn cards.",
        duration: "14 min",
        questions: 10,
        content: `
            <p><strong>Turn barreling</strong> (second barrel) requires careful consideration of board texture, opponent's range, and your own hand strength.</p>
            
            <h3>Turn Barrel Factors</h3>
            <ul>
                <li><strong>Equity:</strong> Do you have enough outs if called?</li>
                <li><strong>Board Texture:</strong> Does turn card help your range?</li>
                <li><strong>Opponent Range:</strong> What hands can they call flop with?</li>
                <li><strong>Position:</strong> In position allows more aggressive barreling</li>
            </ul>
            
            <div class="example-box">
                <h4>Turn Barrel Example</h4>
                <p>Flop: A♠8♣3♦ (you c-bet). Turn: K♥. You have Q♠J♠.</p>
                <p>Good barrel spot - turn helps your range more than theirs, and you have backdoor equity plus fold equity.</p>
            </div>
        `,
        quiz: [
            {
                question: "You c-bet A♠8♣3♦ with K♠Q♠, get called. Turn: 7♥. Continue betting?",
                scenario: "Position: Button | Turn decision | Overcards | Dry turn",
                options: [
                    { text: "Bet - continue story", correct: false },
                    { text: "Check - give up", correct: true },
                    { text: "Bet small", correct: false },
                    { text: "Bet large", correct: false }
                ],
                explanation: "KQ should check behind on A837. The turn doesn't help your range and you have minimal equity. Give up the bluff and take your showdown value."
            },
            {
                question: "Flop: 9♠8♣2♦ (you c-bet with A♠5♠). Turn: 7♠. Opponent calls flop. Action?",
                scenario: "Position: Cutoff | Turn decision | Flush draw + gutshot | Good turn",
                options: [
                    { text: "Check - weak hand", correct: false },
                    { text: "Bet - improved equity", correct: true },
                    { text: "Check-call", correct: false },
                    { text: "Bet small only", correct: false }
                ],
                explanation: "A5s should barrel the 7♠ turn. You picked up a flush draw plus gutshot (12 outs) and have good fold equity. Strong semi-bluff spot."
            }
        ]
    },
    {
        id: 35,
        title: "River Bluffing",
        description: "Master the art of final street bluffs with optimal sizing and selection.",
        duration: "16 min",
        questions: 10,
        content: `
            <p><strong>River bluffing</strong> is the most advanced skill in poker. With no more cards to come, it's pure hand reading and range analysis.</p>
            
            <h3>River Bluff Selection</h3>
            <ul>
                <li><strong>Blockers:</strong> Block opponent's strong hands</li>
                <li><strong>Story:</strong> Does your line make sense?</li>
                <li><strong>Sizing:</strong> Large enough to fold out marginal hands</li>
                <li><strong>Frequency:</strong> Balance with value bets</li>
            </ul>
            
            <div class="example-box">
                <h4>River Bluff Example</h4>
                <p>River: A♠K♣Q♦J♥T♠. You have 9♠8♠ (missed draw).</p>
                <p>Good bluff - you block straights with 9, and your betting line represents a strong hand. Size large to fold out pairs.</p>
            </div>
        `,
        quiz: [
            {
                question: "River: K♠Q♥J♦T♣9♠. You have 8♠7♠ (missed). Opponent likely has pairs. Bluff?",
                scenario: "Position: Button | River decision | Missed draw | Straight board",
                options: [
                    { text: "Check - no equity", correct: false },
                    { text: "Bluff 75% pot", correct: true },
                    { text: "Bluff 33% pot", correct: false },
                    { text: "Check-call", correct: false }
                ],
                explanation: "87s should bluff on this straight board. You block some straights and opponent likely has pairs that will fold to a large bet. Good bluff spot with proper sizing."
            },
            {
                question: "River: A♠A♣8♦4♥2♠. You have K♠Q♠ (missed). Opponent checks. Bluff?",
                scenario: "Position: Button | River decision | Paired board | Opponent shows weakness",
                options: [
                    { text: "Bluff - opponent is weak", correct: false },
                    { text: "Check - take showdown", correct: true },
                    { text: "Bluff small", correct: false },
                    { text: "Bluff large", correct: false }
                ],
                explanation: "KQ should check behind on AA842. You have showdown value and the paired board is hard to bluff. Opponent could have trips or be check-calling with pairs."
            }
        ]
    },
    {
        id: 36,
        title: "Thin Value Betting",
        description: "Extract maximum value from marginal hands in close spots.",
        duration: "15 min",
        questions: 10,
        content: `
            <p><strong>Thin value betting</strong> is betting marginal hands that are ahead of opponent's calling range by a small margin. It's crucial for maximizing win rate.</p>
            
            <h3>Thin Value Criteria</h3>
            <ul>
                <li><strong>Hand Strength:</strong> Better than 50% of opponent's calling range</li>
                <li><strong>Position:</strong> Easier to value bet thin in position</li>
                <li><strong>Opponent Type:</strong> Loose callers allow thinner value bets</li>
                <li><strong>Board Texture:</strong> Static boards favor thin value</li>
            </ul>
            
            <div class="example-box">
                <h4>Thin Value Example</h4>
                <p>River: A♠8♣4♦2♥7♠. You have A♥9♥ vs loose opponent.</p>
                <p>Bet thin for value - they call with A6, A5, worse aces, and sometimes pairs. Extract value from weaker holdings.</p>
            </div>
        `,
        quiz: [
            {
                question: "River: K♠9♣6♦3♥2♠. You have K♥T♥ vs loose recreational player. Bet for thin value?",
                scenario: "Position: Button | River decision | Top pair weak kicker | Loose opponent",
                options: [
                    { text: "Check - too weak", correct: false },
                    { text: "Bet 60% pot for thin value", correct: true },
                    { text: "Check-call only", correct: false },
                    { text: "Bet 100% pot", correct: false }
                ],
                explanation: "KT should bet thin vs loose players. They call with K8, K7, worse kings, and sometimes pairs. Recreational players call light, making thin value profitable."
            },
            {
                question: "River: A♣Q♥8♠5♦4♠. You have A♠J♠ vs tight regular. Thin value bet?",
                scenario: "Position: Cutoff | River decision | Top pair decent kicker | Tight opponent",
                options: [
                    { text: "Bet - AJ is strong", correct: false },
                    { text: "Check - opponent too tight", correct: true },
                    { text: "Bet small", correct: false },
                    { text: "Bet large", correct: false }
                ],
                explanation: "AJ should check vs tight regulars. They don't call light enough to make thin value profitable. Save thin value bets for loose opponents who call wider."
            }
        ]
    },
    {
        id: 37,
        title: "Pot Control",
        description: "Master strategic pot size management for optimal risk-reward ratios.",
        duration: "13 min",
        questions: 10,
        content: `
            <p><strong>Pot control</strong> is managing pot size to optimize your risk-reward ratio based on hand strength and position.</p>
            
            <h3>Pot Control Situations</h3>
            <ul>
                <li><strong>Medium Hands:</strong> Control pot with showdown value but vulnerable hands</li>
                <li><strong>Out of Position:</strong> Harder to control action, so control pot size</li>
                <li><strong>Deep Stacks:</strong> More important with larger effective stacks</li>
                <li><strong>Volatile Boards:</strong> Coordinated boards require more pot control</li>
            </ul>
            
            <div class="example-box">
                <h4>Pot Control Example</h4>
                <p>Turn: K♠J♠8♦4♥. You have K♥Q♥ out of position vs aggressive opponent.</p>
                <p>Check for pot control - you have top pair but are vulnerable to draws and better kings. Let them bet or take free river.</p>
            </div>
        `,
        quiz: [
            {
                question: "Turn: Q♠J♠T♦7♣. You have Q♥Q♣ out of position. Opponent is aggressive. Action?",
                scenario: "Position: Big Blind | Turn decision | Top set | Coordinated board",
                options: [
                    { text: "Check for pot control", correct: false },
                    { text: "Bet for value and protection", correct: true },
                    { text: "Check-call only", correct: false },
                    { text: "Check-fold", correct: false }
                ],
                explanation: "Top set should bet for value and protection. Don't use pot control with very strong hands - build the pot and charge draws. You want maximum value."
            },
            {
                question: "Flop: A♠8♣3♦. You have A♥J♥ in BB vs button c-bet. Call, then turn: K♥. Opponent bets again. Action?",
                scenario: "Position: Big Blind | Turn decision | Top pair | Facing second barrel",
                options: [
                    { text: "Call - pot control", correct: true },
                    { text: "Raise - build pot", correct: false },
                    { text: "Fold - too dangerous", correct: false },
                    { text: "Check-raise", correct: false }
                ],
                explanation: "AJ should call for pot control. You have a decent hand but the turn could help opponent's range. Control pot size and see river before committing more chips."
            }
        ]
    },
    {
        id: 38,
        title: "Information Theory",
        description: "Use opponent actions and betting patterns to gain maximum information.",
        duration: "14 min",
        questions: 10,
        content: `
            <p><strong>Information theory</strong> in poker involves extracting maximum information from opponent actions while giving away minimal information about your own hand.</p>
            
            <h3>Information Sources</h3>
            <ul>
                <li><strong>Bet Sizing:</strong> Size often correlates with hand strength</li>
                <li><strong>Timing:</strong> Quick vs slow decisions reveal information</li>
                <li><strong>Betting Patterns:</strong> Consistent patterns across streets</li>
                <li><strong>Position Play:</strong> How they use position advantage</li>
            </ul>
            
            <div class="example-box">
                <h4>Information Example</h4>
                <p>Opponent bets 33% pot on flop, 75% pot on turn, 150% pot on river.</p>
                <p>Information: Likely has strong hand that improved. Small flop bet, building to large river bet suggests value line with nuts or near-nuts.</p>
            </div>
        `,
        quiz: [
            {
                question: "Opponent takes 30 seconds then bets 25% pot on river. What information does this give you?",
                scenario: "Information gathering | River decision | Opponent timing tell | Small bet",
                options: [
                    { text: "Strong hand - value betting", correct: false },
                    { text: "Weak hand - blocking bet", correct: true },
                    { text: "Bluff - trying to steal", correct: false },
                    { text: "No information", correct: false }
                ],
                explanation: "Long think + small bet usually indicates a weak hand making a blocking bet. They're trying to see showdown cheaply while preventing you from betting larger."
            },
            {
                question: "Opponent bets 66% pot on flop, 66% pot on turn, checks river. You have bluff catcher. Action?",
                scenario: "Information analysis | River decision | Consistent sizing | Opponent gives up",
                options: [
                    { text: "Bet - opponent is weak", correct: false },
                    { text: "Check - take showdown", correct: true },
                    { text: "Fold - they're strong", correct: false },
                    { text: "Bet small", correct: false }
                ],
                explanation: "Consistent betting then river check suggests opponent had a draw or marginal hand that gave up. Check behind with bluff catchers - you likely win at showdown."
            }
        ]
    },
    {
        id: 39,
        title: "Leveling Theory",
        description: "Understand thinking levels and avoid overthinking in poker decisions.",
        duration: "12 min",
        questions: 10,
        content: `
            <p><strong>Leveling theory</strong> describes the different levels of thinking in poker. Understanding what level your opponent operates on is crucial for optimal play.</p>
            
            <h3>Thinking Levels</h3>
            <ul>
                <li><strong>Level 1:</strong> "What do I have?" - Only considers own hand</li>
                <li><strong>Level 2:</strong> "What does opponent have?" - Considers opponent's range</li>
                <li><strong>Level 3:</strong> "What does opponent think I have?" - Considers your image</li>
                <li><strong>Level 4+:</strong> Higher meta-game considerations</li>
            </ul>
            
            <div class="example-box">
                <h4>Leveling Example</h4>
                <p>vs Level 1 player: Bet strong hands for value, don't bluff much</p>
                <p>vs Level 2 player: Balance ranges, use standard GTO approach</p>
                <p>vs Level 3 player: Consider your image and exploit their adjustments</p>
            </div>
        `,
        quiz: [
            {
                question: "Recreational player calls your flop c-bet with any pair. You have air on turn. What level are they thinking?",
                scenario: "Opponent analysis | Turn decision | Recreational player | Level assessment",
                options: [
                    { text: "Level 1 - only sees own hand", correct: true },
                    { text: "Level 2 - considers your range", correct: false },
                    { text: "Level 3 - considers image", correct: false },
                    { text: "Level 4 - meta game", correct: false }
                ],
                explanation: "Calling with any pair regardless of board texture indicates Level 1 thinking. They only consider their own hand strength, not your range or betting patterns."
            },
            {
                question: "Good regular 3-bets you more after you've been tight for an hour. What level thinking?",
                scenario: "Opponent analysis | Image-based play | Regular player | Adjustment",
                options: [
                    { text: "Level 1 - hand strength only", correct: false },
                    { text: "Level 2 - considers your range", correct: false },
                    { text: "Level 3 - exploiting your image", correct: true },
                    { text: "Level 4 - reverse psychology", correct: false }
                ],
                explanation: "Adjusting 3-bet frequency based on your tight image shows Level 3 thinking. They're considering what you think they think, and exploiting your tight image."
            }
        ]
    },
    {
        id: 40,
        title: "Exploitative Adjustments",
        description: "Learn when and how to deviate from GTO to exploit opponent weaknesses.",
        duration: "16 min",
        questions: 10,
        content: `
            <p><strong>Exploitative adjustments</strong> involve deviating from GTO strategy to take advantage of opponent mistakes and tendencies.</p>
            
            <h3>Common Exploits</h3>
            <ul>
                <li><strong>vs Tight Players:</strong> Bluff more, value bet thinner</li>
                <li><strong>vs Loose Players:</strong> Bluff less, value bet wider</li>
                <li><strong>vs Aggressive Players:</strong> Call lighter, trap more</li>
                <li><strong>vs Passive Players:</strong> Bet thinner, bluff more</li>
            </ul>
            
            <div class="example-box">
                <h4>Exploitative Example</h4>
                <p>Opponent folds to c-bets 80% of the time (GTO is ~40%).</p>
                <p>Exploit: C-bet 100% of your range for pure fold equity. Print money until they adjust.</p>
            </div>
        `,
        quiz: [
            {
                question: "Opponent calls river bets 90% of the time. You have A♠8♠ on A♣7♠2♦4♥K♠. Exploit how?",
                scenario: "Exploitative play | River decision | Calling station | Value betting",
                options: [
                    { text: "Check - hand too weak", correct: false },
                    { text: "Bet for value - they call light", correct: true },
                    { text: "Bluff more often", correct: false },
                    { text: "Play GTO", correct: false }
                ],
                explanation: "vs calling stations, bet thinner for value. A8 on AK742 should bet because they call with worse aces, pairs, and random hands. Exploit their loose calling."
            },
            {
                question: "Tight player folds to 3-bets 85% of the time. You have 7♠6♠ in CO vs their UTG raise. Exploit?",
                scenario: "Exploitative play | Pre-flop decision | Tight opponent | 3-bet bluff",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "3-bet bluff - high fold equity", correct: true },
                    { text: "Call - see flop", correct: false },
                    { text: "Play GTO", correct: false }
                ],
                explanation: "vs tight players who overfold to 3-bets, 3-bet bluff with any two cards for pure fold equity. 76s becomes profitable due to their exploitable folding frequency."
            }
        ]
    }
];
