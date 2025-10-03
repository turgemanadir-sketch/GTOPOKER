// Phase 2: Advanced Concepts - Lessons 14-20
const additionalLessons = [
    {
        id: 14,
        title: "Deep Stack Play",
        description: "Master strategy with 150BB+ effective stacks.",
        duration: "13 min",
        questions: 10,
        content: `
            <p><strong>Deep stack play</strong> (150BB+) allows for more complex post-flop strategies and requires different approaches than standard 100BB play.</p>
            
            <h3>Deep Stack Principles</h3>
            <ul>
                <li><strong>More Speculative Hands:</strong> Better implied odds for suited connectors and small pairs</li>
                <li><strong>Smaller Bet Sizes:</strong> Use smaller c-bets and value bets to control pot growth</li>
                <li><strong>Multi-Street Planning:</strong> Think in terms of turn and river play</li>
                <li><strong>Position Premium:</strong> Position becomes even more valuable with deeper stacks</li>
            </ul>
            
            <div class="example-box">
                <h4>Deep Stack Example</h4>
                <p>200BB effective, you have 6♠5♠ in CO vs UTG raise. This call becomes profitable due to:</p>
                <p>• 20:1 implied odds if you flop strong draws or two pair+</p>
                <p>• Ability to win opponent's entire stack with hidden hands</p>
            </div>
        `,
        quiz: [
            {
                question: "200BB deep, you have 7♠6♠ in CO. UTG raises to 3BB. What should you do?",
                scenario: "Position: Cutoff | Stack: 200BB | Suited connector | Deep stacks",
                options: [
                    { text: "Fold - too weak vs UTG", correct: false },
                    { text: "Call - good implied odds", correct: true },
                    { text: "3-bet to 9BB", correct: false },
                    { text: "Shove all-in", correct: false }
                ],
                explanation: "With 200BB, suited connectors become profitable calls vs UTG due to massive implied odds. You can win their entire stack when you hit two pair, straights, or flushes."
            },
            {
                question: "150BB effective. You have A♠A♥, opponent bets 15BB into 20BB pot on flop A♣8♠3♦. What's optimal sizing?",
                scenario: "Position: Button | Deep stacks | Top set | Facing bet",
                options: [
                    { text: "Call - slow play the nuts", correct: false },
                    { text: "Raise to 35BB", correct: false },
                    { text: "Raise to 45BB", correct: true },
                    { text: "Shove 150BB", correct: false }
                ],
                explanation: "With deep stacks and top set, raise to 3x their bet (45BB). This builds a big pot while keeping worse hands in. Shoving folds out everything; calling wastes value."
            }
        ]
    },
    {
        id: 15,
        title: "Polarized vs Linear Ranges",
        description: "Understand range construction theory and when to use each approach.",
        duration: "14 min",
        questions: 10,
        content: `
            <p><strong>Range construction</strong> is fundamental to GTO play. Understanding when to use polarized vs linear ranges is crucial for optimal strategy.</p>
            
            <h3>Range Types</h3>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Range Type</th>
                        <th>Composition</th>
                        <th>When to Use</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Linear</strong></td>
                        <td>Best X% of hands</td>
                        <td>Value betting, calling</td>
                        <td>AA-77, AK-AT for value</td>
                    </tr>
                    <tr>
                        <td><strong>Polarized</strong></td>
                        <td>Nuts + air, no medium</td>
                        <td>Bluffing, river betting</td>
                        <td>AA/KK + A5s/K2s bluffs</td>
                    </tr>
                </tbody>
            </table>
        `,
        quiz: [
            {
                question: "River: A♠K♣Q♦J♥T♠. You're first to act with A♥J♥ (straight). What range should you bet?",
                scenario: "Position: UTG | River decision | Medium strength hand | Range construction",
                options: [
                    { text: "Linear range - bet for thin value", correct: false },
                    { text: "Polarized range - check this hand", correct: true },
                    { text: "Always bet straights", correct: false },
                    { text: "Always check on paired boards", correct: false }
                ],
                explanation: "AJ (jack-high straight) should be checked in a polarized range. Bet stronger straights (KQ+) for value and weak hands as bluffs. AJ has showdown value but isn't strong enough to bet."
            },
            {
                question: "You 3-bet from button. Which range construction is optimal for 3-betting?",
                scenario: "Position: Button | Pre-flop 3-betting | Range construction theory",
                options: [
                    { text: "Linear - best hands only", correct: false },
                    { text: "Polarized - premiums + bluffs", correct: true },
                    { text: "Condensed - medium pairs only", correct: false },
                    { text: "Random - any two cards", correct: false }
                ],
                explanation: "3-betting ranges should be polarized: premium hands (QQ+, AK) for value plus bluffs (A5s, K9s) with good playability. Avoid medium hands like AJ, KQ that play poorly vs 4-bets."
            }
        ]
    },
    {
        id: 16,
        title: "Blockers & Removal Effects",
        description: "Learn how card removal impacts opponent ranges and your decisions.",
        duration: "12 min",
        questions: 10,
        content: `
            <p><strong>Blockers</strong> are cards in your hand that reduce the combinations of certain hands your opponent can have. This concept is crucial for advanced GTO play.</p>
            
            <h3>Types of Blockers</h3>
            <ul>
                <li><strong>Nut Blockers:</strong> Block opponent's strongest hands (A♠ blocks AA, nut flush)</li>
                <li><strong>Key Card Blockers:</strong> Block important parts of opponent's range</li>
                <li><strong>Straight Blockers:</strong> Block straight combinations</li>
                <li><strong>Flush Blockers:</strong> Block flush draws and made flushes</li>
            </ul>
            
            <div class="example-box">
                <h4>Blocker Example</h4>
                <p>Board: A♠K♣Q♦J♥. You have A♥2♥ facing a river bet.</p>
                <p>Your A♥ blocks AA, AK, AQ, AJ - reducing opponent's value combinations. This makes calling more profitable.</p>
            </div>
        `,
        quiz: [
            {
                question: "Board: A♠K♠Q♦8♣3♥. You have A♥5♥ facing a large river bet. How do blockers affect your decision?",
                scenario: "Position: Big Blind | River decision | Blocker effects | Facing bet",
                options: [
                    { text: "Blockers don't matter - fold weak ace", correct: false },
                    { text: "A♥ blocks strong aces - more likely to call", correct: true },
                    { text: "5♥ blocks bluffs - should fold", correct: false },
                    { text: "Always call with any ace", correct: false }
                ],
                explanation: "A♥ blocks AA, AK, AQ combinations, making opponent more likely to be bluffing. This blocker effect makes calling more profitable than it appears."
            },
            {
                question: "You want to bluff on K♠Q♠J♦T♣2♠. Which hand makes the best bluff?",
                scenario: "Position: Button | River bluff selection | Blocker considerations",
                options: [
                    { text: "7♣6♣ - no blockers", correct: false },
                    { text: "A♠8♠ - blocks nut flush", correct: true },
                    { text: "9♥8♥ - blocks straights", correct: false },
                    { text: "Any two cards work equally", correct: false }
                ],
                explanation: "A♠ blocks the nut flush (A♠x♠), making opponent less likely to have the nuts. This makes A♠8♠ a better bluff than hands without key blockers."
            }
        ]
    },
    {
        id: 17,
        title: "River Play Theory",
        description: "Master the most important street in poker with optimal river strategy.",
        duration: "15 min",
        questions: 10,
        content: `
            <p><strong>River play</strong> is where the biggest pots are won and lost. With no more cards to come, decisions are purely about hand strength vs opponent ranges.</p>
            
            <h3>River Decision Framework</h3>
            <ul>
                <li><strong>Value Betting:</strong> Bet hands that are ahead of opponent's calling range</li>
                <li><strong>Bluff Betting:</strong> Bet hands that can't win at showdown</li>
                <li><strong>Check-Calling:</strong> Medium hands with showdown value</li>
                <li><strong>Check-Folding:</strong> Weak hands that can't call bets</li>
            </ul>
            
            <div class="example-box">
                <h4>River Value Betting</h4>
                <p>Board: A♣K♠8♦4♥2♠. You have A♥Q♥.</p>
                <p>Question: Will worse hands call your bet? If yes (A9, A8, 88), bet for value. If no, check.</p>
            </div>
        `,
        quiz: [
            {
                question: "River: 9♠8♣7♦6♥5♠. You have T♠J♠ (nut straight). Opponent checks. What should you do?",
                scenario: "Position: Button | River decision | Nuts | Opponent checks",
                options: [
                    { text: "Check - no value to extract", correct: false },
                    { text: "Bet small - 33% pot", correct: false },
                    { text: "Bet large - 75% pot", correct: true },
                    { text: "Overbet - 150% pot", correct: false }
                ],
                explanation: "With the nuts on a straight board, bet large for value. Opponent can have many straights, two pairs, and sets that will call. Extract maximum value with strong sizing."
            },
            {
                question: "Board: A♠K♣Q♦J♥T♠. You have 9♠9♥ (straight). Opponent bets 80% pot. Decision?",
                scenario: "Position: Big Blind | River decision | Nut straight | Facing large bet",
                options: [
                    { text: "Fold - could be chopped", correct: false },
                    { text: "Call - you have the nuts", correct: true },
                    { text: "Raise - build bigger pot", correct: false },
                    { text: "Think for 2 minutes", correct: false }
                ],
                explanation: "You have the nut straight (9-high straight is best possible). Easy call regardless of bet size. No hand can beat you on this runout."
            }
        ]
    },
    {
        id: 18,
        title: "Check-Raising Strategy",
        description: "Master when and how to check-raise for maximum value and bluffs.",
        duration: "13 min",
        questions: 10,
        content: `
            <p><strong>Check-raising</strong> is a powerful weapon that combines deception with aggression. It's essential for balanced GTO play.</p>
            
            <h3>Check-Raise Types</h3>
            <ul>
                <li><strong>Value Check-Raise:</strong> Strong hands that want to build big pots</li>
                <li><strong>Bluff Check-Raise:</strong> Weak hands with fold equity</li>
                <li><strong>Semi-Bluff Check-Raise:</strong> Draws with equity + fold equity</li>
                <li><strong>Protection Check-Raise:</strong> Medium hands vs multiple opponents</li>
            </ul>
            
            <div class="example-box">
                <h4>Check-Raise Example</h4>
                <p>Flop: A♠8♣3♦. You have A♥K♥ in BB vs button c-bet.</p>
                <p>Check-raise for value - you have top pair top kicker and want to build pot vs weaker aces, pocket pairs, and draws.</p>
            </div>
        `,
        quiz: [
            {
                question: "Flop: K♠Q♥J♦. You have K♣K♥ in BB. Button c-bets 4BB into 6BB. What should you do?",
                scenario: "Position: Big Blind | Flop decision | Top set | Coordinated board",
                options: [
                    { text: "Call - slow play the set", correct: false },
                    { text: "Check-raise to 12BB", correct: true },
                    { text: "Fold - too dangerous", correct: false },
                    { text: "Check-raise to 20BB", correct: false }
                ],
                explanation: "Top set on KQJ should check-raise for value and protection. Many draws and two pairs will call. Standard sizing is 3x the c-bet (12BB)."
            },
            {
                question: "You have 9♠8♠ in BB. Flop: T♠7♣2♠ (flush draw + gutshot). CO c-bets 3BB into 5BB. Action?",
                scenario: "Position: Big Blind | Strong draw | Semi-bluff spot",
                options: [
                    { text: "Call - see turn card", correct: false },
                    { text: "Check-raise to 9BB", correct: true },
                    { text: "Fold - too weak", correct: false },
                    { text: "Check-raise to 15BB", correct: false }
                ],
                explanation: "Strong draws should check-raise as semi-bluffs. You have 15 outs (9 spades + 6 straight cards) plus fold equity. 3x sizing (9BB) is optimal."
            },
            {
                question: "Flop: A♣9♠4♦. You have A♥J♥ in BB vs button c-bet. Should you check-raise?",
                scenario: "Position: Big Blind | Top pair good kicker | Dry board",
                options: [
                    { text: "Yes - build pot with strong hand", correct: false },
                    { text: "No - call and see turn", correct: true },
                    { text: "Yes - always check-raise aces", correct: false },
                    { text: "Fold - could be dominated", correct: false }
                ],
                explanation: "On dry boards like A94, calling is often better than check-raising. The board doesn't connect with many hands, so check-raising folds out bluffs and gets called by better aces."
            },
            {
                question: "You check-raise flop with A♠5♠ on 8♠7♣2♠. Turn: K♥. Opponent calls your check-raise then bets turn. Action?",
                scenario: "Position: Big Blind | Nut flush draw | Turn decision | Facing bet",
                options: [
                    { text: "Fold - give up the bluff", correct: false },
                    { text: "Call - see river", correct: false },
                    { text: "Raise - continue semi-bluff", correct: true },
                    { text: "Shove all-in", correct: false }
                ],
                explanation: "With nut flush draw, continue the aggression. You have 9 outs plus fold equity. The turn bet could be a bluff or weak value hand that folds to pressure."
            },
            {
                question: "Flop: Q♠J♠T♦. You have Q♥Q♣ in BB. UTG c-bets, MP calls. What's your play?",
                scenario: "Position: Big Blind | Top set | Multi-way pot | Coordinated board",
                options: [
                    { text: "Call - control pot size", correct: false },
                    { text: "Check-raise large", correct: true },
                    { text: "Fold - too dangerous", correct: false },
                    { text: "Check-raise small", correct: false }
                ],
                explanation: "Top set on QJT with two opponents should check-raise large. Many hands have equity (straights, two pairs, draws). Charge them maximum to continue."
            },
            {
                question: "You have 6♣5♣ in BB. Flop: A♠K♣3♣. Button c-bets 3BB into 5BB. Check-raise as bluff?",
                scenario: "Position: Big Blind | Flush draw | Bluff check-raise decision",
                options: [
                    { text: "No - too weak to bluff", correct: false },
                    { text: "Yes - good semi-bluff", correct: true },
                    { text: "Call - see turn", correct: false },
                    { text: "Fold - save chips", correct: false }
                ],
                explanation: "Flush draws make excellent check-raise bluffs. You have 9 outs plus fold equity. AK3 is a good board to represent strength from the big blind."
            },
            {
                question: "Flop: 9♠8♠7♥. You have T♠T♣ in BB vs CO c-bet. What's the best play?",
                scenario: "Position: Big Blind | Overpair | Coordinated board | Draw heavy",
                options: [
                    { text: "Call - control pot", correct: false },
                    { text: "Check-raise - protect hand", correct: true },
                    { text: "Fold - too many draws", correct: false },
                    { text: "Check-raise huge", correct: false }
                ],
                explanation: "Overpairs on draw-heavy boards should check-raise for protection. Many draws and weaker hands will call. You need to charge them and build pot while ahead."
            },
            {
                question: "You check-raise bluff on flop, get called. Turn bricks. Opponent checks. Continue bluffing?",
                scenario: "Position: Big Blind | Turn decision | Bluff continuation | Opponent checks",
                options: [
                    { text: "Always bet - maintain aggression", correct: false },
                    { text: "Check - take free card", correct: false },
                    { text: "Bet if you have equity", correct: true },
                    { text: "Give up - opponent has strong hand", correct: false }
                ],
                explanation: "Continue bluffing on turn based on your equity and board texture. With draws, keep betting. With air on bad runouts, check and give up the bluff."
            },
            {
                question: "Flop: A♥A♠K♦. You have A♣Q♣ in BB. Button c-bets. Check-raise or call?",
                scenario: "Position: Big Blind | Trips | Paired board | Strong hand",
                options: [
                    { text: "Check-raise - build pot", correct: false },
                    { text: "Call - slow play", correct: true },
                    { text: "Fold - could be dominated", correct: false },
                    { text: "Check-raise huge", correct: false }
                ],
                explanation: "On AAK with trips, calling is better than check-raising. Opponent rarely has worse hands that call a check-raise. Let them bluff turn and river."
            },
            {
                question: "You're in BB with 4♠4♥. Flop: 4♣J♠8♠. Three opponents, first player bets. Check-raise?",
                scenario: "Position: Big Blind | Bottom set | Multi-way pot | Flush draw board",
                options: [
                    { text: "Call - slow play set", correct: false },
                    { text: "Check-raise - charge draws", correct: true },
                    { text: "Fold - dangerous board", correct: false },
                    { text: "Check-raise small", correct: false }
                ],
                explanation: "Bottom set in multi-way pot should check-raise. With flush draws and multiple opponents, you need to charge them maximum. Someone likely has a strong draw or pair."
            }
        ]
    },
    {
        id: 19,
        title: "Squeeze Play",
        description: "Master 3-betting when facing a raise and call(s) before you.",
        duration: "12 min",
        questions: 10,
        content: `
            <p><strong>Squeeze play</strong> is 3-betting when there's a raise and one or more calls before you. It's a powerful tool for winning pots without seeing flops.</p>
            
            <h3>Squeeze Advantages</h3>
            <ul>
                <li><strong>Fold Equity:</strong> Multiple opponents must fold to continue</li>
                <li><strong>Dead Money:</strong> Callers have already invested chips</li>
                <li><strong>Range Advantage:</strong> Your 3-bet range is stronger than calling ranges</li>
                <li><strong>Initiative:</strong> Take control of the hand</li>
            </ul>
            
            <div class="example-box">
                <h4>Squeeze Example</h4>
                <p>UTG raises to 3BB, MP calls, you're on button with A♠5♠.</p>
                <p>Squeeze to 12BB - you have fold equity vs both opponents and A5s plays well if called.</p>
            </div>
        `,
        quiz: [
            {
                question: "UTG raises to 3BB, MP calls. You're on button with K♠Q♠. What should you do?",
                scenario: "Position: Button | Squeeze spot | Strong hand | Two opponents",
                options: [
                    { text: "Call - see flop", correct: false },
                    { text: "Squeeze to 12BB", correct: true },
                    { text: "Fold - too many opponents", correct: false },
                    { text: "Squeeze to 18BB", correct: false }
                ],
                explanation: "KQs is perfect for squeezing. You have good equity vs their ranges and excellent fold equity. Standard squeeze sizing is 4x the original raise (12BB)."
            },
            {
                question: "CO raises to 2.5BB, button calls. You're in SB with 8♠8♥. What's optimal?",
                scenario: "Position: Small Blind | Pocket pair | Squeeze decision",
                options: [
                    { text: "Call - set mine", correct: false },
                    { text: "Squeeze to 10BB", correct: true },
                    { text: "Fold - avoid multi-way", correct: false },
                    { text: "Squeeze to 15BB", correct: false }
                ],
                explanation: "88 should squeeze for value. You're ahead of both opponents' ranges and have good equity even when called. 4x sizing (10BB) is standard."
            },
            {
                question: "UTG raises, MP calls, CO calls. You're on button with A♠J♦. Action?",
                scenario: "Position: Button | Three opponents | Marginal hand | Multiple callers",
                options: [
                    { text: "Squeeze - good fold equity", correct: false },
                    { text: "Call - close decision", correct: false },
                    { text: "Fold - too many opponents", correct: true },
                    { text: "Squeeze large", correct: false }
                ],
                explanation: "With three opponents, AJo should fold. Your fold equity decreases significantly with multiple callers, and AJ doesn't play well multi-way out of position."
            },
            {
                question: "MP raises to 3BB, CO calls. You're in BB with A♠4♠. Squeeze or call?",
                scenario: "Position: Big Blind | Suited ace | Squeeze vs call decision",
                options: [
                    { text: "Call - good pot odds", correct: false },
                    { text: "Squeeze to 12BB", correct: true },
                    { text: "Fold - too weak", correct: false },
                    { text: "Squeeze to 18BB", correct: false }
                ],
                explanation: "A4s should squeeze from BB. You have blocker value (blocks AA, AK) and good playability. Better than calling out of position in a multi-way pot."
            },
            {
                question: "You squeeze A♠K♥ to 12BB, get called by original raiser only. Flop: 8♠7♣2♦. Action?",
                scenario: "Position: Button | Missed flop | Heads-up after squeeze | C-bet decision",
                options: [
                    { text: "Check - give up", correct: false },
                    { text: "C-bet 8BB", correct: true },
                    { text: "C-bet 15BB", correct: false },
                    { text: "Check-call", correct: false }
                ],
                explanation: "After squeezing, you should c-bet most flops. AK has good equity vs their calling range and the dry board favors your range. Standard c-bet sizing."
            },
            {
                question: "UTG raises, three players call. You're in BB with Q♠Q♥. What's your play?",
                scenario: "Position: Big Blind | Premium pair | Four opponents | Multi-way squeeze",
                options: [
                    { text: "Call - avoid bloating pot", correct: false },
                    { text: "Squeeze large - 18BB+", correct: true },
                    { text: "Squeeze normal - 12BB", correct: false },
                    { text: "Fold - too many opponents", correct: false }
                ],
                explanation: "QQ should squeeze large with four opponents. You want to thin the field and build pot with a premium hand. Size up to 18-20BB to reduce callers."
            },
            {
                question: "CO raises, button calls. You squeeze from SB, both fold. What did you accomplish?",
                scenario: "Position: Small Blind | Successful squeeze | Hand analysis",
                options: [
                    { text: "Won dead money immediately", correct: true },
                    { text: "Nothing - should have called", correct: false },
                    { text: "Wasted chips on bluff", correct: false },
                    { text: "Got lucky", correct: false }
                ],
                explanation: "Successful squeezes win immediate dead money (4.5BB in this case) without seeing a flop. This is profitable even when you have a weak hand."
            },
            {
                question: "MP raises, CO calls, button calls. You're in BB with 5♠5♥. Squeeze?",
                scenario: "Position: Big Blind | Small pair | Three opponents | Squeeze decision",
                options: [
                    { text: "Yes - good squeeze spot", correct: false },
                    { text: "No - call and set mine", correct: true },
                    { text: "Fold - too weak", correct: false },
                    { text: "Squeeze huge", correct: false }
                ],
                explanation: "With three opponents, small pairs should call rather than squeeze. Your fold equity is low and 55 plays better as a set mine with good pot odds."
            },
            {
                question: "You squeeze K♠J♠, get called. Flop: A♠Q♣4♠. You have nut flush draw + gutshot. Action?",
                scenario: "Position: Button | Strong draw | Post-squeeze c-bet | Good equity",
                options: [
                    { text: "Check - missed flop", correct: false },
                    { text: "C-bet 60% pot", correct: true },
                    { text: "C-bet 120% pot", correct: false },
                    { text: "Check-call", correct: false }
                ],
                explanation: "With nut flush draw + gutshot (12 outs), c-bet for value. You have great equity vs their range and should bet aggressively with strong draws."
            },
            {
                question: "Early position raises, gets two callers. You're in late position with A♠A♥. Sizing?",
                scenario: "Position: Cutoff | Premium hand | Two callers | Squeeze sizing",
                options: [
                    { text: "Standard squeeze - 12BB", correct: false },
                    { text: "Large squeeze - 15-18BB", correct: true },
                    { text: "Small squeeze - 9BB", correct: false },
                    { text: "Just call - trap", correct: false }
                ],
                explanation: "AA should squeeze large with multiple callers. You want maximum value and to thin the field. Size up to 15-18BB to get called by one opponent with a strong hand."
            }
        ]
    },
    {
        id: 20,
        title: "Float Betting",
        description: "Learn to call with the intention of taking the pot on later streets.",
        duration: "11 min",
        questions: 10,
        content: `
            <p><strong>Float betting</strong> means calling a bet with a weak hand, planning to win the pot on later streets when opponent shows weakness.</p>
            
            <h3>Float Requirements</h3>
            <ul>
                <li><strong>Position:</strong> Must have position on the bettor</li>
                <li><strong>Opponent Type:</strong> Works best vs tight, straightforward players</li>
                <li><strong>Board Texture:</strong> Better on dry boards that don't help many hands</li>
                <li><strong>Stack Depth:</strong> Need enough chips to make credible turn/river bets</li>
            </ul>
            
            <div class="example-box">
                <h4>Float Example</h4>
                <p>You have 6♠5♠ on button. Flop: A♣8♦3♠. Opponent c-bets.</p>
                <p>Float call - if they check turn, you can bet and often win the pot. Dry ace-high boards are perfect for floating.</p>
            </div>
        `,
        quiz: [
            {
                question: "Flop: A♠7♣2♦. You have 9♠8♠ on button. Opponent c-bets 4BB into 6BB. Float call?",
                scenario: "Position: Button | Weak hand | Dry board | Float decision",
                options: [
                    { text: "No - fold weak hand", correct: false },
                    { text: "Yes - good float spot", correct: true },
                    { text: "Raise - semi-bluff", correct: false },
                    { text: "Call - draw to straight", correct: false }
                ],
                explanation: "Perfect float spot. Dry A72 board, you have position, and can win pot if opponent checks turn. 98s has some equity with backdoor draws."
            },
            {
                question: "You float called flop. Turn: A♠7♣2♦K♥. Opponent checks. What should you do?",
                scenario: "Position: Button | Turn decision | Opponent shows weakness | Float follow-through",
                options: [
                    { text: "Check behind - take free card", correct: false },
                    { text: "Bet 60% pot", correct: true },
                    { text: "Bet 120% pot", correct: false },
                    { text: "Check-call if bet", correct: false }
                ],
                explanation: "When opponent checks turn after c-betting flop, follow through with your float. Bet 60% pot - they often fold having given up on their bluff."
            },
            {
                question: "Flop: 8♠7♠6♥. You have A♣4♣ on button vs c-bet. Good float spot?",
                scenario: "Position: Button | Coordinated board | Float evaluation",
                options: [
                    { text: "Yes - have position", correct: false },
                    { text: "No - board too coordinated", correct: true },
                    { text: "Yes - have overcards", correct: false },
                    { text: "Raise instead", correct: false }
                ],
                explanation: "876 two-tone is too coordinated for floating. Many hands have equity (draws, pairs) and opponent is less likely to give up on later streets."
            },
            {
                question: "You have K♠J♠ in BB. Flop: A♣9♠4♦. Button c-bets. Float call out of position?",
                scenario: "Position: Big Blind | Out of position | Float decision",
                options: [
                    { text: "Yes - have backdoor draws", correct: false },
                    { text: "No - need position to float", correct: true },
                    { text: "Yes - opponent could be bluffing", correct: false },
                    { text: "Raise instead", correct: false }
                ],
                explanation: "Floating requires position. Out of position, you can't control the action on later streets. Opponent can bet again when you check, making floating unprofitable."
            },
            {
                question: "Flop: Q♠5♣2♦. You float with T♠9♠. Turn: 8♥. Opponent checks. Bet size?",
                scenario: "Position: Button | Turn bet | Float follow-through | Sizing decision",
                options: [
                    { text: "Bet 33% pot", correct: false },
                    { text: "Bet 66% pot", correct: true },
                    { text: "Bet 100% pot", correct: false },
                    { text: "Check behind", correct: false }
                ],
                explanation: "Standard turn bet after floating is 60-70% pot. This size gets folds from weak hands while not risking too much when called by strong hands."
            },
            {
                question: "You float flop, bet turn, get called. River bricks. Opponent checks. Continue bluffing?",
                scenario: "Position: Button | River decision | Float line | Triple barrel decision",
                options: [
                    { text: "Always bet - maintain story", correct: false },
                    { text: "Check - give up bluff", correct: true },
                    { text: "Bet huge - maximum pressure", correct: false },
                    { text: "Bet small - cheap bluff", correct: false }
                ],
                explanation: "After floating flop and betting turn, give up on river when called. Opponent has shown strength by calling turn, making river bluffs less profitable."
            },
            {
                question: "Opponent is very aggressive and barrels frequently. Good candidate for floating?",
                scenario: "Opponent profiling | Float target selection | Player type analysis",
                options: [
                    { text: "Yes - they bluff a lot", correct: true },
                    { text: "No - too dangerous", correct: false },
                    { text: "Only with strong hands", correct: false },
                    { text: "Never float vs aggressive players", correct: false }
                ],
                explanation: "Aggressive players who barrel frequently are perfect float targets. They often give up when you show resistance, making floating profitable."
            },
            {
                question: "Flop: K♥Q♠J♦. You have A♠5♠ on button. Opponent c-bets. Float?",
                scenario: "Position: Button | Coordinated board | Ace high | Float decision",
                options: [
                    { text: "Yes - have ace high", correct: false },
                    { text: "No - board too wet", correct: true },
                    { text: "Yes - have gutshot", correct: false },
                    { text: "Raise - semi-bluff", correct: false }
                ],
                explanation: "KQJ is too coordinated for floating. Many hands have strong equity and opponent is likely to continue betting with draws, pairs, and made hands."
            },
            {
                question: "You float A♣8♦3♠ with 6♠5♠. Turn: 7♥ (gives you gutshot). Opponent checks. Action?",
                scenario: "Position: Button | Turn decision | Improved equity | Float follow-through",
                options: [
                    { text: "Check - take free card", correct: false },
                    { text: "Bet - follow through", correct: true },
                    { text: "Bet huge - have draw", correct: false },
                    { text: "Check-call", correct: false }
                ],
                explanation: "Follow through with your float bet. You now have a gutshot draw plus fold equity. The turn card doesn't help opponent's range much."
            },
            {
                question: "Stack sizes: 40BB effective. Good for floating?",
                scenario: "Stack depth consideration | Float viability | Bet sizing implications",
                options: [
                    { text: "Yes - perfect depth", correct: false },
                    { text: "No - too shallow", correct: true },
                    { text: "Yes - easier to bluff", correct: false },
                    { text: "Depends on opponent", correct: false }
                ],
                explanation: "40BB is too shallow for effective floating. You need deeper stacks to make credible turn and river bets. Floating works best with 80BB+ effective stacks."
            }
        ]
    }
];
