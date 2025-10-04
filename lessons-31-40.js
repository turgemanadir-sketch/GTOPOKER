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
            },
            {
                question: "Flop: K♠8♣3♦. You have K♥Q♥ and K♠J♠. How should you play these hands?",
                scenario: "Position: Button | Range merging | Different kicker strength | Flop decision",
                options: [
                    { text: "Bet KQ, check KJ", correct: false },
                    { text: "Bet both at same frequency", correct: true },
                    { text: "Check both", correct: false },
                    { text: "Bet KQ larger, KJ smaller", correct: false }
                ],
                explanation: "Merge similar strength hands (both top pair) by playing them identically. This prevents opponents from reading your hand strength based on your actions."
            },
            {
                question: "River: A♠K♣Q♦J♥T♠. You want to bluff with 9♠8♠. What value hands should you merge with?",
                scenario: "Position: Button | River bluff | Range construction | Straight board",
                options: [
                    { text: "All straights", correct: false },
                    { text: "Only nut straights", correct: true },
                    { text: "Medium straights", correct: false },
                    { text: "Don't bluff here", correct: false }
                ],
                explanation: "Merge bluffs with your strongest value hands (nut straights). This creates a polarized range that's hard to exploit - nuts + air, checking medium strength."
            },
            {
                question: "Turn: 9♠8♣7♦6♥. You have T♠J♠ (nut straight) and 5♠4♠ (low straight). Range merge?",
                scenario: "Position: Button | Turn decision | Different straight strengths | Value betting",
                options: [
                    { text: "Bet TJ large, 54 small", correct: false },
                    { text: "Bet TJ, check 54", correct: true },
                    { text: "Bet both same size", correct: false },
                    { text: "Check both", correct: false }
                ],
                explanation: "Don't merge vastly different hand strengths. Bet nut straight for value, check low straight for pot control. Merging works for similar strength hands."
            },
            {
                question: "Pre-flop: You're 3-betting from CO. Should you merge A♠A♥ and A♠K♠?",
                scenario: "Position: Cutoff | Pre-flop 3-betting | Premium hands | Range construction",
                options: [
                    { text: "Yes - both premium hands", correct: true },
                    { text: "No - different hand types", correct: false },
                    { text: "Play AA differently", correct: false },
                    { text: "Only 3-bet AA", correct: false }
                ],
                explanation: "Merge premium hands (AA, KK, QQ, AK) in your 3-betting range. They're all strong enough for value and should be played similarly to maintain balance."
            },
            {
                question: "Flop: A♠9♣4♦. You c-bet with A♥K♥ and get raised. Should you merge this with A♠Q♠?",
                scenario: "Position: Button | Facing check-raise | Top pair different kickers | Decision merging",
                options: [
                    { text: "Yes - both top pair", correct: true },
                    { text: "No - AK is stronger", correct: false },
                    { text: "Call with AK, fold AQ", correct: false },
                    { text: "4-bet AK, call AQ", correct: false }
                ],
                explanation: "Merge similar strength hands vs check-raises. Both AK and AQ are top pair good kicker and should be played identically to prevent exploitation."
            },
            {
                question: "River: K♠Q♥J♦T♣9♠. You have A♠8♠ (nut straight). What bluffs merge best?",
                scenario: "Position: Button | River betting | Nut hand | Bluff selection",
                options: [
                    { text: "Random weak hands", correct: false },
                    { text: "Hands with straight blockers", correct: true },
                    { text: "All missed draws", correct: false },
                    { text: "Pocket pairs", correct: false }
                ],
                explanation: "Merge bluffs that have blocker value. Hands like 8♥7♥ or 6♠5♠ block some straights, making opponents more likely to fold when you bet."
            },
            {
                question: "Flop: 8♠7♣6♦. You have 9♠T♠ (straight) and 8♥8♣ (set). How should you play these?",
                scenario: "Position: Button | Coordinated flop | Different strong hands | Action merging",
                options: [
                    { text: "Bet both aggressively", correct: true },
                    { text: "Slow play the set", correct: false },
                    { text: "Bet straight, check set", correct: false },
                    { text: "Different bet sizes", correct: false }
                ],
                explanation: "Merge very strong hands on coordinated boards. Both straight and set should bet aggressively for value and protection against draws."
            },
            {
                question: "Turn: A♠K♣Q♦J♥. You have T♠9♠ (straight). Should you merge with A♠A♥ (set)?",
                scenario: "Position: Button | Turn decision | Very strong hands | Coordinated board",
                options: [
                    { text: "Yes - both very strong", correct: true },
                    { text: "No - different hand types", correct: false },
                    { text: "Bet straight larger", correct: false },
                    { text: "Check the set", correct: false }
                ],
                explanation: "Merge very strong hands on coordinated boards. Both straight and top set should bet large for value and protection. Similar strength merges together."
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
            },
            {
                question: "River: A♠A♣K♦Q♥J♠. You have A♥K♥ (full house). Opponent checks. Bet size?",
                scenario: "Position: Button | River decision | Full house | Nut advantage",
                options: [
                    { text: "Bet 75% pot", correct: false },
                    { text: "Overbet 150% pot", correct: true },
                    { text: "Check behind", correct: false },
                    { text: "Bet 50% pot", correct: false }
                ],
                explanation: "With full house on AAK, overbet for maximum value. You have many strong hands opponent doesn't, and they can have straights/flushes that call large bets."
            },
            {
                question: "Turn: 7♠7♣7♦8♠. You 3-bet pre-flop and have 7♥6♥ (quads). What's optimal?",
                scenario: "Position: Cutoff | Turn decision | Quads | Massive nut advantage",
                options: [
                    { text: "Check - slow play", correct: false },
                    { text: "Bet 66% pot", correct: false },
                    { text: "Overbet 200% pot", correct: true },
                    { text: "Bet 33% pot", correct: false }
                ],
                explanation: "With quads, overbet huge for maximum value. Opponent can have full houses, straights, and flushes that will call massive bets. Extract maximum."
            },
            {
                question: "River: K♠Q♠J♠T♠9♠. You have A♠2♠ (royal flush). Opponent bets 75% pot. Action?",
                scenario: "Position: Big Blind | River decision | Royal flush | Facing bet",
                options: [
                    { text: "Call - don't scare them", correct: false },
                    { text: "Raise to 200% pot", correct: false },
                    { text: "Shove all-in", correct: true },
                    { text: "Raise to 150% pot", correct: false }
                ],
                explanation: "With royal flush, shove all-in. You have the absolute nuts and opponent is betting into you. They likely have a strong hand that calls any size."
            },
            {
                question: "Flop: A♠A♥A♣. You have A♦K♦ (quads). Opponent checks. What's your play?",
                scenario: "Position: Button | Flop decision | Quads | Dry board",
                options: [
                    { text: "Check - board too dry", correct: true },
                    { text: "Overbet 150% pot", correct: false },
                    { text: "Bet 33% pot", correct: false },
                    { text: "Bet 75% pot", correct: false }
                ],
                explanation: "On AAA, check even with quads. Opponent has almost nothing and won't call any bet. Let them bluff or improve on later streets."
            },
            {
                question: "Turn: 9♠8♠7♠6♠5♠. You have T♠J♠ (straight flush). Standard play?",
                scenario: "Position: Button | Turn decision | Straight flush | Coordinated board",
                options: [
                    { text: "Check - too obvious", correct: false },
                    { text: "Bet 75% pot", correct: false },
                    { text: "Overbet 125% pot", correct: true },
                    { text: "Bet 50% pot", correct: false }
                ],
                explanation: "With straight flush, overbet for value. Many hands have strong equity (flushes, straights, sets) and will call large bets. Maximize value."
            },
            {
                question: "River: K♠K♥Q♦Q♣J♠. You have K♣Q♠ (full house). When should you overbet?",
                scenario: "Position: Button | River decision | Full house | Board texture analysis",
                options: [
                    { text: "Always overbet full houses", correct: false },
                    { text: "When you have nut advantage", correct: true },
                    { text: "Never on paired boards", correct: false },
                    { text: "Only with nuts", correct: false }
                ],
                explanation: "Overbet when you have range/nut advantage. On KKQQ, you have more full houses than opponent as the pre-flop aggressor. Exploit this advantage."
            },
            {
                question: "Flop: T♠9♠8♠. You have J♠7♠ (straight flush draw). Should you overbet?",
                scenario: "Position: Button | Flop decision | Monster draw | Semi-bluff sizing",
                options: [
                    { text: "Yes - huge equity", correct: true },
                    { text: "No - still a draw", correct: false },
                    { text: "Bet small", correct: false },
                    { text: "Check", correct: false }
                ],
                explanation: "With straight flush draw (21 outs), overbet as semi-bluff. You have massive equity plus fold equity. This is profitable even if called."
            },
            {
                question: "River: A♠8♣3♦2♥7♠. You have A♥A♣ (set). Opponent checks. Overbet?",
                scenario: "Position: Button | River decision | Set | Dry board",
                options: [
                    { text: "Yes - strong hand", correct: false },
                    { text: "No - board too dry", correct: true },
                    { text: "Overbet small", correct: false },
                    { text: "Always overbet sets", correct: false }
                ],
                explanation: "Don't overbet on dry A8327. Opponent has very few hands that call large bets. Use standard sizing to get calls from weaker aces and pairs."
            },
            {
                question: "Turn: Q♠Q♥Q♦J♠. You 3-bet pre-flop with Q♣K♣ (quads). Opponent calls your c-bet. Action?",
                scenario: "Position: Cutoff | Turn decision | Quads | Opponent shows interest",
                options: [
                    { text: "Check - slow play", correct: false },
                    { text: "Bet 75% pot", correct: false },
                    { text: "Overbet 150% pot", correct: true },
                    { text: "Bet 33% pot", correct: false }
                ],
                explanation: "With quads and opponent calling flop, overbet turn. They've shown interest and likely have a strong hand that calls big bets. Extract maximum value."
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
            },
            {
                question: "Flop: A♠7♣2♦. You have A♥J♥ in position. Opponent checks. Check back or bet?",
                scenario: "Position: Button | Flop decision | Top pair decent kicker | Dry board",
                options: [
                    { text: "Bet for value", correct: false },
                    { text: "Check back - control pot", correct: true },
                    { text: "Bet large", correct: false },
                    { text: "Bet small", correct: false }
                ],
                explanation: "AJ should check back on dry A72. You have showdown value but board doesn't connect with many hands. Control pot size with medium strength."
            },
            {
                question: "Turn: K♠8♣3♦5♥. You have K♥Q♥, opponent checks. Action?",
                scenario: "Position: Button | Turn decision | Top pair | Dry runout",
                options: [
                    { text: "Bet for thin value", correct: false },
                    { text: "Check behind", correct: true },
                    { text: "Bet large", correct: false },
                    { text: "Bet small", correct: false }
                ],
                explanation: "KQ should check behind on K835. Board is very dry and opponent likely has nothing that calls. Take showdown value."
            },
            {
                question: "River: 9♠8♣7♦6♥5♠. You have A♠K♠ (missed). Opponent checks. Bluff or check?",
                scenario: "Position: Button | River decision | Ace high | Straight board",
                options: [
                    { text: "Bluff - represent straight", correct: false },
                    { text: "Check behind - take showdown", correct: true },
                    { text: "Bet small", correct: false },
                    { text: "Bet large", correct: false }
                ],
                explanation: "AK should check behind on straight board. You have decent showdown value and opponent could have straights or be check-calling with pairs."
            },
            {
                question: "Flop: Q♠J♠T♦. You have Q♥Q♣ (top set). Opponent checks. Check back?",
                scenario: "Position: Button | Flop decision | Top set | Coordinated board",
                options: [
                    { text: "Yes - protect checking range", correct: false },
                    { text: "No - bet for value", correct: true },
                    { text: "Check - slow play", correct: false },
                    { text: "Depends on opponent", correct: false }
                ],
                explanation: "Top set should never check back on QJT. You need to bet for value and protection against draws. Don't slow play strong hands on wet boards."
            },
            {
                question: "Turn: A♠8♣3♦K♥. You have A♥9♥. Opponent checks. Bet or check?",
                scenario: "Position: Button | Turn decision | Top pair weak kicker | Two overcard turn",
                options: [
                    { text: "Bet - still top pair", correct: false },
                    { text: "Check - pot control", correct: true },
                    { text: "Bet large", correct: false },
                    { text: "Bet small", correct: false }
                ],
                explanation: "A9 should check behind after K turn. The king helps opponent's range and you have a marginal hand. Control pot size and see river."
            },
            {
                question: "River: K♠Q♥J♦T♣9♠. You have 8♠8♥ (pair). Opponent checks. Action?",
                scenario: "Position: Button | River decision | Low pair | Straight board",
                options: [
                    { text: "Bet - might be best", correct: false },
                    { text: "Check behind", correct: true },
                    { text: "Bluff", correct: false },
                    { text: "Bet small", correct: false }
                ],
                explanation: "88 should check behind on KQJT9. You have no showdown value on this straight board. Don't turn your hand into a bluff."
            },
            {
                question: "Flop: 7♠6♣2♦. You have 7♥7♣ (middle set). Opponent checks. Check back?",
                scenario: "Position: Button | Flop decision | Middle set | Dry board",
                options: [
                    { text: "Yes - slow play set", correct: false },
                    { text: "No - bet for value", correct: true },
                    { text: "Check - board too dry", correct: false },
                    { text: "Depends on stack size", correct: false }
                ],
                explanation: "Middle set should bet on 762. Even on dry boards, sets need to bet for value. Opponent can have overpairs, top pair, and draws that call."
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
            },
            {
                question: "You c-bet K♠7♣2♦ with A♠Q♠, get called. Turn: J♠. Continue betting?",
                scenario: "Position: Button | Turn decision | Overcards + flush draw | Good turn",
                options: [
                    { text: "Check - weak hand", correct: false },
                    { text: "Bet - improved equity", correct: true },
                    { text: "Check-call", correct: false },
                    { text: "Bet small only", correct: false }
                ],
                explanation: "AQ should barrel the J♠ turn. You picked up nut flush draw plus overcards (12+ outs) and have fold equity. Strong semi-bluff continuation."
            },
            {
                question: "Flop: 9♠8♣3♦ (you c-bet with K♠Q♠). Turn: 2♥. Opponent calls flop. Action?",
                scenario: "Position: Button | Turn decision | Overcards | Brick turn",
                options: [
                    { text: "Bet - continue story", correct: false },
                    { text: "Check - give up", correct: true },
                    { text: "Bet large", correct: false },
                    { text: "Bet small", correct: false }
                ],
                explanation: "KQ should check behind on 9832. The turn doesn't help your range and you have minimal equity. Give up the bluff and take showdown value."
            },
            {
                question: "You c-bet A♠7♣2♦ with Q♠J♠. Turn: T♠ (flush draw + gutshot). Continue?",
                scenario: "Position: Button | Turn decision | Strong draw | Improved equity",
                options: [
                    { text: "Check - missed flop", correct: false },
                    { text: "Bet - strong draw", correct: true },
                    { text: "Check-call", correct: false },
                    { text: "Bet small", correct: false }
                ],
                explanation: "QJ should barrel the T♠ turn. You have flush draw plus gutshot (12 outs) and fold equity. This is a profitable semi-bluff spot."
            },
            {
                question: "Flop: K♠Q♣J♦ (you c-bet). Turn: 2♥. You have A♠T♠ (gutshot). Barrel?",
                scenario: "Position: Button | Turn decision | Gutshot draw | Coordinated board",
                options: [
                    { text: "Yes - have outs", correct: true },
                    { text: "No - weak draw", correct: false },
                    { text: "Check-call", correct: false },
                    { text: "Check-fold", correct: false }
                ],
                explanation: "AT should barrel turn on KQJ2. You have gutshot to nuts (4 outs) plus fold equity. The turn doesn't help opponent's range much."
            },
            {
                question: "You c-bet 8♠7♣6♦ with A♠K♠. Turn: A♥. Opponent calls flop. Action?",
                scenario: "Position: Button | Turn decision | Top pair | Coordinated board",
                options: [
                    { text: "Check - dangerous board", correct: false },
                    { text: "Bet - now have top pair", correct: true },
                    { text: "Bet small", correct: false },
                    { text: "Check-call", correct: false }
                ],
                explanation: "AK should bet turn after hitting top pair. You improved significantly and need to bet for value and protection against draws."
            },
            {
                question: "Flop: Q♠T♣9♦ (you c-bet with A♠J♠). Turn: 8♥. Continue betting?",
                scenario: "Position: Button | Turn decision | Gutshot to nuts | Straight board",
                options: [
                    { text: "Check - too many straights", correct: false },
                    { text: "Bet - gutshot to nuts", correct: true },
                    { text: "Check-call", correct: false },
                    { text: "Check-fold", correct: false }
                ],
                explanation: "AJ should barrel QT98. You have gutshot to nut straight (4 outs) plus fold equity. The 8 doesn't help opponent's range much."
            },
            {
                question: "You c-bet A♠8♣3♦ with K♠Q♠, called. Turn: K♥. Opponent checks. Bet size?",
                scenario: "Position: Button | Turn decision | Hit top pair | Value betting",
                options: [
                    { text: "Check - control pot", correct: false },
                    { text: "Bet 66% pot", correct: true },
                    { text: "Bet 33% pot", correct: false },
                    { text: "Bet 100% pot", correct: false }
                ],
                explanation: "KQ should bet 66% pot after hitting top pair. You improved significantly and want value from worse kings, aces, and draws. Standard sizing."
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
            },
            {
                question: "River: T♠9♣8♣7♣6♠. You have A♠K♠ (missed). Opponent checks. Bluff?",
                scenario: "Position: Button | River decision | Ace high | Straight board",
                options: [
                    { text: "Yes - represent straight", correct: true },
                    { text: "No - take showdown", correct: false },
                    { text: "Bet small", correct: false },
                    { text: "Check behind", correct: false }
                ],
                explanation: "AK should bluff on T9876. You block some straights and have decent fold equity. Size large to fold out pairs and weak hands."
            },
            {
                question: "River: A♠K♣Q♦J♥T♠. You have 9♠9♥ (missed). Good bluff candidate?",
                scenario: "Position: Button | River decision | Low pair | Straight board",
                options: [
                    { text: "Yes - blocks some straights", correct: false },
                    { text: "No - have showdown value", correct: true },
                    { text: "Bluff small", correct: false },
                    { text: "Bluff large", correct: false }
                ],
                explanation: "99 should not bluff on AKQJT. You have showdown value against opponent's bluffs and missed draws. Don't turn showdown value into bluffs."
            },
            {
                question: "River: K♠Q♥J♦T♣9♠. You have 8♠7♠ (straight). Opponent bets 75% pot. Action?",
                scenario: "Position: Big Blind | River decision | Low straight | Facing bet",
                options: [
                    { text: "Fold - could be beaten", correct: false },
                    { text: "Call - have straight", correct: true },
                    { text: "Raise for value", correct: false },
                    { text: "Think for long time", correct: false }
                ],
                explanation: "87 straight should call on KQJT9. You have a legitimate hand and opponent could be value betting worse straights or bluffing with missed draws."
            },
            {
                question: "River: 9♠8♣7♣6♣5♠. You have A♠Q♠ (missed flush). Opponent checks. Bluff size?",
                scenario: "Position: Button | River decision | Missed draw | Straight board",
                options: [
                    { text: "Don't bluff", correct: false },
                    { text: "Bet 75% pot", correct: true },
                    { text: "Bet 33% pot", correct: false },
                    { text: "Overbet 150% pot", correct: false }
                ],
                explanation: "AQ should bluff 75% pot on straight board. You need large sizing to fold out pairs and weak hands. Small bets get called too often."
            },
            {
                question: "River: A♠A♣K♦Q♥J♠. You have T♠9♠ (straight). Opponent checks. Action?",
                scenario: "Position: Button | River decision | Nut straight | Paired board",
                options: [
                    { text: "Check - could be chopped", correct: false },
                    { text: "Bet 66% pot for value", correct: true },
                    { text: "Bet 33% pot", correct: false },
                    { text: "Overbet", correct: false }
                ],
                explanation: "T9 nut straight should bet for value. Opponent can have full houses, worse straights, and two pairs that call. Extract value with standard sizing."
            },
            {
                question: "River: K♠K♥Q♦Q♣J♠. You have A♠5♠ (missed). Opponent checks. Bluff?",
                scenario: "Position: Button | River decision | Ace high | Paired board",
                options: [
                    { text: "Yes - represent full house", correct: false },
                    { text: "No - paired board too strong", correct: true },
                    { text: "Bet small", correct: false },
                    { text: "Bet large", correct: false }
                ],
                explanation: "A5 should not bluff on KKQQ. Paired boards are hard to bluff because opponent could have full houses or be check-calling with strong hands."
            },
            {
                question: "River: 7♠6♣5♣4♣3♠. You have A♠K♠ (missed). Opponent bets 50% pot. Call?",
                scenario: "Position: Big Blind | River decision | Ace high | Straight board",
                options: [
                    { text: "Call - ace high good", correct: false },
                    { text: "Fold - no showdown value", correct: true },
                    { text: "Raise - bluff", correct: false },
                    { text: "Think long time", correct: false }
                ],
                explanation: "AK should fold to bet on 76543. You have no showdown value on this straight board and opponent is unlikely to be bluffing into such a coordinated board."
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
            },
            {
                question: "River: Q♠J♣8♣4♣2♠. You have Q♥T♥ vs calling station. Thin value bet?",
                scenario: "Position: Button | River decision | Top pair weak kicker | Loose opponent",
                options: [
                    { text: "Check - too weak", correct: false },
                    { text: "Bet 50% pot for thin value", correct: true },
                    { text: "Check-call only", correct: false },
                    { text: "Bet large", correct: false }
                ],
                explanation: "QT should bet thin vs calling stations. They call with worse queens, jacks, and sometimes pairs. Loose opponents make thin value profitable."
            },
            {
                question: "River: A♠K♣7♣3♣2♥. You have A♥8♥ vs tight opponent. Value bet?",
                scenario: "Position: Button | River decision | Top pair weak kicker | Tight opponent",
                options: [
                    { text: "Yes - top pair is strong", correct: false },
                    { text: "No - opponent too tight", correct: true },
                    { text: "Bet small", correct: false },
                    { text: "Bet large", correct: false }
                ],
                explanation: "A8 should check vs tight opponents. They don't call with worse aces or pairs frequently enough. Thin value requires loose calling opponents."
            },
            {
                question: "River: K♠Q♣9♣5♣2♠. You have K♥J♥ in position. Opponent checks. Action?",
                scenario: "Position: Button | River decision | Top pair decent kicker | Thin value spot",
                options: [
                    { text: "Check behind", correct: false },
                    { text: "Bet 55% pot", correct: true },
                    { text: "Bet 75% pot", correct: false },
                    { text: "Bet 33% pot", correct: false }
                ],
                explanation: "KJ should bet for thin value. You're ahead of worse kings, queens, and pairs. Standard thin value sizing is 50-60% pot."
            },
            {
                question: "River: 9♠8♣7♣4♣2♥. You have 9♥A♥ vs recreational player. Thin value?",
                scenario: "Position: Button | River decision | Top pair top kicker | Recreational opponent",
                options: [
                    { text: "Check - board too dry", correct: false },
                    { text: "Bet for value", correct: true },
                    { text: "Check-call only", correct: false },
                    { text: "Bet small", correct: false }
                ],
                explanation: "A9 should bet for value vs recreational players. They call with worse nines, eights, pairs, and random hands. Extract value from loose opponents."
            },
            {
                question: "River: A♠J♣6♣4♣2♠. You have A♥Q♥ vs unknown opponent. Bet?",
                scenario: "Position: Button | River decision | Top pair good kicker | Unknown opponent",
                options: [
                    { text: "Always bet - strong hand", correct: false },
                    { text: "Check - unknown opponent", correct: true },
                    { text: "Bet large", correct: false },
                    { text: "Bet small", correct: false }
                ],
                explanation: "AQ should check vs unknown opponents. Without reads on their calling frequency, avoid thin value bets. Play more straightforward vs unknowns."
            },
            {
                question: "River: K♠T♣8♣5♣2♥. You have K♥Q♥. Opponent is loose passive. Action?",
                scenario: "Position: Button | River decision | Top pair good kicker | Loose passive opponent",
                options: [
                    { text: "Check - control pot", correct: false },
                    { text: "Bet 60% pot", correct: true },
                    { text: "Bet 33% pot", correct: false },
                    { text: "Bet 100% pot", correct: false }
                ],
                explanation: "KQ should bet vs loose passive opponents. They call light with worse kings, tens, and pairs. Standard value sizing extracts maximum."
            },
            {
                question: "River: Q♠T♣9♣6♣3♠. You have Q♥J♥ vs aggressive regular. Thin value?",
                scenario: "Position: Button | River decision | Top pair decent kicker | Aggressive opponent",
                options: [
                    { text: "Bet - good hand", correct: false },
                    { text: "Check - might get raised", correct: true },
                    { text: "Bet small", correct: false },
                    { text: "Bet large", correct: false }
                ],
                explanation: "QJ should check vs aggressive regulars. They might raise with bluffs and worse hands don't call often enough. Avoid thin value vs aggressive opponents."
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
            },
            {
                question: "Flop: K♠J♠T♦. You have K♥Q♥ out of position. Opponent bets. Pot control?",
                scenario: "Position: Big Blind | Flop decision | Top pair | Coordinated board",
                options: [
                    { text: "Call - pot control", correct: false },
                    { text: "Raise - build pot", correct: true },
                    { text: "Fold - too dangerous", correct: false },
                    { text: "Check-call", correct: false }
                ],
                explanation: "KQ should raise on KJT. You have top pair + straight draw and need to build pot vs opponent's range. Don't use pot control with strong hands."
            },
            {
                question: "Turn: A♠K♣8♣4♥. You have A♥J♥ out of position. Opponent bets 66% pot. Action?",
                scenario: "Position: Big Blind | Turn decision | Top pair | Facing bet",
                options: [
                    { text: "Raise - build pot", correct: false },
                    { text: "Call - pot control", correct: true },
                    { text: "Fold - too weak", correct: false },
                    { text: "Check-raise", correct: false }
                ],
                explanation: "AJ should call for pot control. You have decent hand but are out of position vs aggression. Control pot size and evaluate river."
            },
            {
                question: "Flop: 9♠8♣7♦. You have 9♥A♥ in position. Opponent checks. Pot control?",
                scenario: "Position: Button | Flop decision | Top pair | Coordinated board",
                options: [
                    { text: "Check - pot control", correct: false },
                    { text: "Bet - value and protection", correct: true },
                    { text: "Bet small", correct: false },
                    { text: "Check behind", correct: false }
                ],
                explanation: "A9 should bet on 987. You have top pair top kicker and need protection vs draws. Don't use pot control with strong hands on wet boards."
            },
            {
                question: "Turn: Q♠J♠8♣5♥. You have Q♥T♥ out of position. Opponent bets. Action?",
                scenario: "Position: Big Blind | Turn decision | Top pair weak kicker | Facing bet",
                options: [
                    { text: "Raise - top pair", correct: false },
                    { text: "Call - pot control", correct: true },
                    { text: "Fold - too weak", correct: false },
                    { text: "Check-raise", correct: false }
                ],
                explanation: "QT should call for pot control. You have marginal hand out of position vs aggression. Control pot size with medium strength."
            },
            {
                question: "River: K♠Q♣9♣6♣2♥. You have K♥J♥ out of position. Opponent bets 75% pot. Action?",
                scenario: "Position: Big Blind | River decision | Top pair | Large bet",
                options: [
                    { text: "Raise - strong hand", correct: false },
                    { text: "Call - pot control worked", correct: true },
                    { text: "Fold - too much", correct: false },
                    { text: "Think long time", correct: false }
                ],
                explanation: "KJ should call river bet. Your pot control strategy worked - you kept pot manageable and can call with top pair vs opponent's range."
            },
            {
                question: "Flop: A♠T♣5♦. You have A♥K♥ out of position vs 3 opponents. Pot control?",
                scenario: "Position: Big Blind | Multi-way pot | Top pair | Strong hand",
                options: [
                    { text: "Check - pot control", correct: false },
                    { text: "Bet - value and protection", correct: true },
                    { text: "Check-call", correct: false },
                    { text: "Check-fold", correct: false }
                ],
                explanation: "AK should bet vs 3 opponents. You have strong hand that needs protection. Multi-way pots require betting strong hands, not pot control."
            },
            {
                question: "Turn: 8♠7♣6♣5♥. You have 8♥A♥ out of position. Opponent bets. Pot control?",
                scenario: "Position: Big Blind | Turn decision | Top pair | Straight board",
                options: [
                    { text: "Raise - top pair", correct: false },
                    { text: "Call - pot control", correct: true },
                    { text: "Fold - dangerous board", correct: false },
                    { text: "Check-raise", correct: false }
                ],
                explanation: "A8 should call for pot control on 8765. You have marginal hand on dangerous board. Control pot size and see if you improve."
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
            },
            {
                question: "Opponent bets 25% pot on flop, 75% pot on turn, 150% pot on river. What information?",
                scenario: "Information analysis | Betting pattern | Escalating sizes | Hand reading",
                options: [
                    { text: "Bluffing - trying to steal", correct: false },
                    { text: "Strong hand - building pot", correct: true },
                    { text: "Weak hand - blocking", correct: false },
                    { text: "No pattern", correct: false }
                ],
                explanation: "Escalating bet sizes (25% → 75% → 150%) usually indicate strong hand building pot. They start small and increase as pot grows."
            },
            {
                question: "Opponent checks flop, bets turn, checks river. You have bluff catcher. Action?",
                scenario: "Information analysis | Check-bet-check pattern | River decision | Bluff catcher",
                options: [
                    { text: "Bet - opponent is weak", correct: false },
                    { text: "Check - likely win showdown", correct: true },
                    { text: "Fold - they're strong", correct: false },
                    { text: "Raise", correct: false }
                ],
                explanation: "Check-bet-check often indicates opponent had draw or marginal hand. They gave up on river, so check behind with bluff catchers."
            },
            {
                question: "Opponent takes 45 seconds then bets 33% pot on river. Information?",
                scenario: "Information gathering | Long think + small bet | River decision | Timing tell",
                options: [
                    { text: "Strong hand - value betting", correct: false },
                    { text: "Weak hand - blocking bet", correct: true },
                    { text: "Bluff - trying to steal", correct: false },
                    { text: "No information", correct: false }
                ],
                explanation: "Long think + small bet usually indicates weak hand making blocking bet. They're trying to see showdown cheaply while preventing larger bets."
            },
            {
                question: "Opponent bets same size (66% pot) on all three streets. Information?",
                scenario: "Information analysis | Consistent sizing | Three streets | Betting pattern",
                options: [
                    { text: "Very strong hand", correct: false },
                    { text: "Balanced approach or draw", correct: true },
                    { text: "Pure bluff", correct: false },
                    { text: "Weak hand", correct: false }
                ],
                explanation: "Consistent sizing across streets suggests balanced approach or draw that turned into bluff. Strong hands often vary sizing."
            },
            {
                question: "Opponent quickly bets 75% pot on river after long turn decision. Information?",
                scenario: "Information gathering | Quick river bet | Previous hesitation | Timing pattern",
                options: [
                    { text: "Bluff - decided to go for it", correct: true },
                    { text: "Strong hand - value betting", correct: false },
                    { text: "Weak hand - blocking", correct: false },
                    { text: "No information", correct: false }
                ],
                explanation: "Long think on turn then quick large river bet often indicates bluff. They decided to go for it after considering their options."
            },
            {
                question: "Opponent checks all streets then calls your river bet. Information about their hand?",
                scenario: "Information analysis | Check-call pattern | Passive play | Hand reading",
                options: [
                    { text: "Very strong hand - trapping", correct: false },
                    { text: "Medium strength - pot control", correct: true },
                    { text: "Weak hand - bluff catching", correct: false },
                    { text: "Draw that missed", correct: false }
                ],
                explanation: "Check-call all streets usually indicates medium strength hand using pot control. They have showdown value but don't want to build big pot."
            },
            {
                question: "Opponent bets large on dry board, small on wet board. What does this tell you?",
                scenario: "Information analysis | Board texture correlation | Bet sizing pattern | Strategy read",
                options: [
                    { text: "Random sizing", correct: false },
                    { text: "Good understanding of board texture", correct: true },
                    { text: "Always bluffing", correct: false },
                    { text: "Bad player", correct: false }
                ],
                explanation: "Adjusting bet size based on board texture shows good understanding. Large bets on dry boards, smaller on wet boards is optimal strategy."
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
            },
            {
                question: "Opponent always bets when they have top pair, checks when they don't. What level?",
                scenario: "Opponent analysis | Predictable play | Level assessment | Exploitable pattern",
                options: [
                    { text: "Level 1 - only sees own hand", correct: true },
                    { text: "Level 2 - considers ranges", correct: false },
                    { text: "Level 3 - considers image", correct: false },
                    { text: "Level 4 - advanced", correct: false }
                ],
                explanation: "Playing based purely on hand strength without considering ranges or balance indicates Level 1 thinking. Very exploitable pattern."
            },
            {
                question: "You're thinking: 'They think I think they're bluffing, so they're value betting.' What level?",
                scenario: "Self-analysis | Complex thinking | Level assessment | Meta-game",
                options: [
                    { text: "Level 2", correct: false },
                    { text: "Level 3", correct: false },
                    { text: "Level 4 - overthinking", correct: true },
                    { text: "Level 1", correct: false }
                ],
                explanation: "This is Level 4+ thinking and likely overthinking. In most spots, Level 2-3 thinking is optimal. Don't go too deep down the rabbit hole."
            },
            {
                question: "Opponent 3-bets more vs your opens after you showed a bluff. What level thinking?",
                scenario: "Opponent analysis | Image exploitation | Adjustment | Level assessment",
                options: [
                    { text: "Level 1 - hand strength", correct: false },
                    { text: "Level 2 - range consideration", correct: false },
                    { text: "Level 3 - image exploitation", correct: true },
                    { text: "Level 4 - overthinking", correct: false }
                ],
                explanation: "Adjusting based on your shown bluff demonstrates Level 3 thinking. They're exploiting your loose image by 3-betting more frequently."
            },
            {
                question: "New player calls every bet with any pair. How should you adjust your level?",
                scenario: "Opponent analysis | Calling station | Level adjustment | Exploitative play",
                options: [
                    { text: "Play Level 3 - consider their image", correct: false },
                    { text: "Play Level 1 - bet strong hands", correct: true },
                    { text: "Play Level 4 - complex strategy", correct: false },
                    { text: "Play balanced GTO", correct: false }
                ],
                explanation: "vs Level 1 players, use Level 1 strategy. Bet strong hands for value, don't bluff much. Match their level for maximum exploitation."
            },
            {
                question: "You're in a tough game with good regulars. What thinking level is optimal?",
                scenario: "Game selection | Skilled opponents | Level optimization | Strategy choice",
                options: [
                    { text: "Level 1 - simple", correct: false },
                    { text: "Level 2-3 - balanced", correct: true },
                    { text: "Level 4+ - complex", correct: false },
                    { text: "Level 5 - maximum", correct: false }
                ],
                explanation: "vs good regulars, Level 2-3 thinking is optimal. Consider ranges and some image play, but don't overthink. Stay balanced and unexploitable."
            },
            {
                question: "Opponent thinks you're tight, so you bluff more. They adjust by calling more. Next move?",
                scenario: "Leveling war | Adjustment battle | Counter-adjustment | Strategic thinking",
                options: [
                    { text: "Bluff even more", correct: false },
                    { text: "Value bet more, bluff less", correct: true },
                    { text: "Keep same strategy", correct: false },
                    { text: "Randomize completely", correct: false }
                ],
                explanation: "When they adjust to call more vs your bluffs, counter-adjust by value betting more and bluffing less. Exploit their loose calling."
            },
            {
                question: "You're overthinking every decision and taking too long. What should you do?",
                scenario: "Self-analysis | Overthinking | Time management | Level adjustment",
                options: [
                    { text: "Think even deeper", correct: false },
                    { text: "Simplify to Level 2 thinking", correct: true },
                    { text: "Use random strategy", correct: false },
                    { text: "Copy opponent's play", correct: false }
                ],
                explanation: "When overthinking, simplify to Level 2. Consider ranges and basic strategy. Overthinking leads to mistakes and timing tells."
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
            },
            {
                question: "Opponent folds to c-bets 85% of the time (GTO is 40%). How should you exploit?",
                scenario: "Exploitative play | Over-folding opponent | C-bet frequency | Pure exploitation",
                options: [
                    { text: "C-bet less often", correct: false },
                    { text: "C-bet 100% of range", correct: true },
                    { text: "Play GTO", correct: false },
                    { text: "C-bet only strong hands", correct: false }
                ],
                explanation: "vs opponents who overfold to c-bets, c-bet your entire range for pure fold equity. Print money until they adjust their folding frequency."
            },
            {
                question: "Loose player calls pre-flop 60% of the time. You have A♠8♠ on button. Exploit?",
                scenario: "Exploitative play | Loose opponent | Pre-flop adjustment | Range widening",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Raise - they call light", correct: true },
                    { text: "Play tighter", correct: false },
                    { text: "Limp", correct: false }
                ],
                explanation: "vs loose callers, widen your opening range. A8s becomes profitable because they call with worse hands and you have position post-flop."
            },
            {
                question: "Opponent never bluffs rivers. You have K♠J♠ on A♠8♣3♦2♥7♠. They bet 75% pot. Action?",
                scenario: "Exploitative play | Never bluffs | River decision | Bluff catcher",
                options: [
                    { text: "Call - decent hand", correct: false },
                    { text: "Fold - they never bluff", correct: true },
                    { text: "Raise - bluff", correct: false },
                    { text: "Think long time", correct: false }
                ],
                explanation: "vs opponents who never bluff rivers, fold all bluff catchers. If they bet, they have it. Exploit their unbalanced strategy by folding light."
            },
            {
                question: "Aggressive player 3-bets 25% of the time. You have 9♠9♥ in CO. Exploit?",
                scenario: "Exploitative play | Over-aggressive opponent | Pocket pair | 4-bet decision",
                options: [
                    { text: "Fold - avoid 3-bets", correct: false },
                    { text: "Call more 3-bets", correct: true },
                    { text: "4-bet more", correct: false },
                    { text: "Play tighter", correct: false }
                ],
                explanation: "vs over-aggressive 3-bettors, call more with medium pairs. 99 has good equity vs their wide 3-betting range. Exploit their aggression."
            },
            {
                question: "Tight player only opens 8% of hands UTG. They raise, you have A♠Q♠ in BB. Action?",
                scenario: "Exploitative play | Very tight opponent | Strong hand | Range exploitation",
                options: [
                    { text: "3-bet - strong hand", correct: false },
                    { text: "Fold - their range too strong", correct: true },
                    { text: "Call - see flop", correct: false },
                    { text: "4-bet", correct: false }
                ],
                explanation: "vs extremely tight UTG ranges (8%), fold AQ. Their range is likely JJ+, AK only. You're dominated too often to continue profitably."
            },
            {
                question: "Opponent always continuation bets but gives up on turn. You have A♠5♠, call flop. Turn bricks. They check. Action?",
                scenario: "Exploitative play | Always c-bets then gives up | Turn decision | Bluff opportunity",
                options: [
                    { text: "Check behind", correct: false },
                    { text: "Bet - they gave up", correct: true },
                    { text: "Check-call", correct: false },
                    { text: "Check-fold", correct: false }
                ],
                explanation: "vs opponents who always c-bet then give up, bet when they check turn. They're weak and will fold to aggression. Exploit their predictable pattern."
            },
            {
                question: "Recreational player calls any bet with top pair, no matter the size. You have A♠A♥ on A♣8♠3♦. Bet size?",
                scenario: "Exploitative play | Calling station | Top set | Sizing exploitation",
                options: [
                    { text: "Bet 33% pot", correct: false },
                    { text: "Bet 66% pot", correct: false },
                    { text: "Bet 100% pot", correct: true },
                    { text: "Check", correct: false }
                ],
                explanation: "vs calling stations who call any size with top pair, bet large for maximum value. They'll call 100% pot with worse aces, so extract maximum."
            }
        ]
    }
];
