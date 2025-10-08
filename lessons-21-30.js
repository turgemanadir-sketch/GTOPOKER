// Phase 3: Specific Situations - Lessons 21-30
const phase3Lessons = [
    {
        id: 21,
        title: "Defending Big Blind",
        description: "Master the most difficult position with optimal BB defense strategies.",
        duration: "14 min",
        questions: 10,
        content: `
            <p><strong>Big Blind defense</strong> is crucial since you're getting excellent pot odds but will be out of position post-flop. Balance is key.</p>
            
            <h3>BB Defense Principles</h3>
            <ul>
                <li><strong>Pot Odds:</strong> You're getting 2:1 or better vs most raises</li>
                <li><strong>Position Disadvantage:</strong> You'll act first on all streets</li>
                <li><strong>Range Advantage:</strong> Defend with hands that play well vs raiser's range</li>
                <li><strong>3-Bet or Fold:</strong> Avoid calling with hands that play poorly OOP</li>
            </ul>
            
            <div class="example-box">
                <h4>BB Defense Example</h4>
                <p>Button raises to 2.5BB. You're getting 3.5:1.5 = 2.3:1 pot odds.</p>
                <p>Defend: 22+, A2s+, K5s+, Q8s+, J9s+, T9s, 98s, A7o+, K9o+, QTo+</p>
                <p>This is roughly 40% of hands - much wider than other positions!</p>
            </div>
        `,
        quiz: [
            {
                question: "Button raises to 2.5BB. You're in BB with K♠7♠. What should you do?",
                scenario: "Position: Big Blind | vs Button steal | Suited king | Pot odds: 2.3:1",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Call - good pot odds", correct: true },
                    { text: "3-bet to 8BB", correct: false },
                    { text: "3-bet to 12BB", correct: false }
                ],
                explanation: "K7s should call vs button raise. You're getting 2.3:1 pot odds and K7s has decent playability vs button's wide range. It's a standard BB defense."
            },
            {
                question: "CO raises to 3BB. You're in BB with A♠5♦. Action?",
                scenario: "Position: Big Blind | vs CO raise | Weak ace | Pot odds: 2.25:1",
                options: [
                    { text: "Call - ace high", correct: false },
                    { text: "Fold - plays poorly OOP", correct: true },
                    { text: "3-bet to 9BB", correct: false },
                    { text: "3-bet to 12BB", correct: false }
                ],
                explanation: "A5o should fold vs CO raise. Weak offsuit aces play poorly out of position and you're often dominated. Save this hand for defending vs later position raises."
            },
            {
                question: "SB completes (calls 1BB). You're in BB with 9♠6♠. Check or raise?",
                scenario: "Position: Big Blind | SB limp | Suited connector | Heads-up",
                options: [
                    { text: "Check - see free flop", correct: false },
                    { text: "Raise to 3BB", correct: true },
                    { text: "Raise to 5BB", correct: false },
                    { text: "Fold", correct: false }
                ],
                explanation: "When SB limps, BB should raise most playable hands. 96s is strong enough to raise for value and to take initiative. Standard sizing is 3BB."
            },
            {
                question: "UTG raises to 3BB. You're in BB with Q♠J♠. What's optimal?",
                scenario: "Position: Big Blind | vs UTG raise | Strong suited hand | Tight range",
                options: [
                    { text: "Call - good hand", correct: true },
                    { text: "3-bet to 9BB", correct: false },
                    { text: "Fold - UTG too tight", correct: false },
                    { text: "3-bet to 12BB", correct: false }
                ],
                explanation: "QJs should call vs UTG raise. It's strong enough to defend but not strong enough to 3-bet for value vs UTG's tight range. Good playability out of position."
            },
            {
                question: "Button raises, SB calls. You're in BB with 8♠8♥. What should you do?",
                scenario: "Position: Big Blind | Multi-way pot | Pocket pair | Good pot odds",
                options: [
                    { text: "Call - set mine", correct: true },
                    { text: "3-bet to isolate", correct: false },
                    { text: "Fold - avoid multi-way", correct: false },
                    { text: "3-bet large", correct: false }
                ],
                explanation: "88 should call in this multi-way spot. You're getting excellent pot odds (4.5:1) and can set mine profitably. 3-betting gets you in tough spots vs stronger ranges."
            },
            {
                question: "CO raises to 2.5BB. You're in BB with A♠K♦. Action?",
                scenario: "Position: Big Blind | vs CO raise | Premium hand | 3-bet decision",
                options: [
                    { text: "Call - see flop", correct: false },
                    { text: "3-bet to 8BB", correct: true },
                    { text: "3-bet to 12BB", correct: false },
                    { text: "Fold - out of position", correct: false }
                ],
                explanation: "AK should 3-bet vs CO raise. It's strong enough for value and plays well vs their continuing range. Standard 3-bet sizing from BB is 3.2x (8BB)."
            },
            {
                question: "Button raises, you call with 7♠6♠. Flop: A♠8♣3♠. Button c-bets 3BB into 5BB. Action?",
                scenario: "Position: Big Blind | Flush draw | Facing c-bet | Draw decision",
                options: [
                    { text: "Fold - weak draw", correct: false },
                    { text: "Call - good draw", correct: true },
                    { text: "Check-raise to 9BB", correct: false },
                    { text: "Check-raise to 12BB", correct: false }
                ],
                explanation: "Flush draws should call vs c-bets. You have 9 outs and are getting 2.7:1 pot odds. Check-raising is too aggressive with a weak flush draw."
            },
            {
                question: "MP raises to 3BB. You're in BB with K♠Q♦. Defend?",
                scenario: "Position: Big Blind | vs MP raise | Strong offsuit hand | Pot odds: 2.25:1",
                options: [
                    { text: "Call - strong hand", correct: true },
                    { text: "Fold - plays poorly OOP", correct: false },
                    { text: "3-bet to 9BB", correct: false },
                    { text: "3-bet to 12BB", correct: false }
                ],
                explanation: "KQo should call vs MP raise. It's strong enough to defend with good pot odds and has decent playability vs MP's range. Not quite strong enough to 3-bet."
            },
            {
                question: "You defend BB with 5♠4♠. Flop: K♠7♣2♠. You check, opponent bets, you call. Turn: Q♥. Both check. River: 9♠. Action?",
                scenario: "Position: Big Blind | Made flush | River decision | Out of position",
                options: [
                    { text: "Check - let them bluff", correct: false },
                    { text: "Bet 60% pot", correct: true },
                    { text: "Bet 120% pot", correct: false },
                    { text: "Check-call", correct: false }
                ],
                explanation: "With a flush, bet for value on the river. Opponent can have many hands that call (pairs, two pairs). 60% pot sizing gets calls from weaker hands."
            },
            {
                question: "SB raises to 3BB. You're in BB with A♠2♠. What's your play?",
                scenario: "Position: Big Blind | vs SB raise | Suited ace | Heads-up pot",
                options: [
                    { text: "Call - suited ace", correct: false },
                    { text: "3-bet to 9BB", correct: true },
                    { text: "Fold - too weak", correct: false },
                    { text: "3-bet to 12BB", correct: false }
                ],
                explanation: "A2s should 3-bet vs SB raise. You have blocker value and good playability. SB vs BB is the most aggressive spot in poker - 3-bet or fold, don't call."
            }
        ]
    },
    {
        id: 22,
        title: "Button vs Blinds",
        description: "Maximize your profit from poker's most advantageous position.",
        duration: "13 min",
        questions: 10,
        content: `
            <p><strong>Button play</strong> is the most profitable position in poker. You act last on all post-flop streets and can steal blinds with a wide range.</p>
            
            <h3>Button Advantages</h3>
            <ul>
                <li><strong>Position:</strong> Act last on flop, turn, and river</li>
                <li><strong>Steal Opportunity:</strong> Blinds fold frequently</li>
                <li><strong>Range Advantage:</strong> Can play more hands profitably</li>
                <li><strong>Initiative:</strong> Control pot size and betting action</li>
            </ul>
            
            <div class="example-box">
                <h4>Button Steal Range</h4>
                <p>When folded to you on the button, raise with:</p>
                <p><strong>~45% of hands:</strong> 22+, A2s+, K2s+, Q5s+, J7s+, T7s+, 97s+, 87s, 76s, A2o+, K7o+, Q9o+, J9o+, T9o</p>
                <p>This wide range is profitable due to fold equity and position.</p>
            </div>
        `,
        quiz: [
            {
                question: "Folded to you on button with K♠5♠. What should you do?",
                scenario: "Position: Button | Steal spot | Suited king | Blinds: 1/2",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Raise to 2.5BB", correct: true },
                    { text: "Limp - see cheap flop", correct: false },
                    { text: "Raise to 4BB", correct: false }
                ],
                explanation: "K5s is a standard button steal. You have good fold equity vs the blinds and the hand plays well when called. Standard raise sizing is 2.5BB."
            },
            {
                question: "You raise button to 2.5BB with A♠7♠. SB folds, BB calls. Flop: K♣9♠4♠. BB checks. Action?",
                scenario: "Position: Button | Flush draw + overcards | Facing check | C-bet decision",
                options: [
                    { text: "Check behind - weak hand", correct: false },
                    { text: "Bet 2BB", correct: true },
                    { text: "Bet 4BB", correct: false },
                    { text: "Bet 6BB", correct: false }
                ],
                explanation: "A7s with flush draw should c-bet. You have 12 outs (9 spades + 3 aces) and good fold equity. Small sizing (2BB) is optimal with draws."
            },
            {
                question: "Button vs SB heads-up. SB raises to 3BB. You have Q♠J♠. What's optimal?",
                scenario: "Position: Button | vs SB 3-bet | Strong hand | Heads-up",
                options: [
                    { text: "Call - see flop with position", correct: true },
                    { text: "4-bet to 9BB", correct: false },
                    { text: "Fold - avoid confrontation", correct: false },
                    { text: "4-bet to 12BB", correct: false }
                ],
                explanation: "QJs should call vs SB 3-bet. You have position and good equity vs their range. 4-betting is too aggressive - save that for premium hands."
            },
            {
                question: "You raise button, both blinds call. Flop: A♠8♣3♦. You have 6♠5♠. Both check to you. Action?",
                scenario: "Position: Button | Multi-way pot | Weak hand | Dry board",
                options: [
                    { text: "Check behind - weak hand", correct: true },
                    { text: "C-bet 3BB", correct: false },
                    { text: "C-bet 5BB", correct: false },
                    { text: "Bet 1BB", correct: false }
                ],
                explanation: "With 65s on A83, check behind in multi-way pot. You have no equity and someone likely has an ace. Save your chips for better spots."
            },
            {
                question: "Folded to you on button with 9♠7♦. Raise or fold?",
                scenario: "Position: Button | Marginal hand | Steal decision | Offsuit connector",
                options: [
                    { text: "Fold - too weak", correct: true },
                    { text: "Raise to 2.5BB", correct: false },
                    { text: "Limp", correct: false },
                    { text: "Raise to 3BB", correct: false }
                ],
                explanation: "97o should fold from button. While you can steal with many hands, 97o is too weak and plays poorly when called. Stick to suited hands and stronger offsuit hands."
            },
            {
                question: "You raise button with A♠K♥. BB 3-bets to 8BB. What should you do?",
                scenario: "Position: Button | Premium hand | Facing 3-bet | 4-bet decision",
                options: [
                    { text: "Call - see flop", correct: false },
                    { text: "4-bet to 18BB", correct: true },
                    { text: "Fold - avoid big pot", correct: false },
                    { text: "4-bet to 24BB", correct: false }
                ],
                explanation: "AK should 4-bet vs BB 3-bet. It's strong enough for value and you have position. Standard 4-bet sizing is 2.25x the 3-bet (18BB)."
            },
            {
                question: "You raise button, SB calls. Flop: Q♠J♠T♦. SB checks. You have A♠9♠. Action?",
                scenario: "Position: Button | Coordinated board | Flush draw + gutshot | Strong draw",
                options: [
                    { text: "Check behind - dangerous board", correct: false },
                    { text: "Bet 3BB", correct: true },
                    { text: "Bet 6BB", correct: false },
                    { text: "Bet 1BB", correct: false }
                ],
                explanation: "A9s with flush draw and gutshot should bet. You have 12 outs plus fold equity. This is a strong semi-bluff spot with good equity."
            },
            {
                question: "Button steal with T♠8♠. BB calls. Flop: A♣K♠5♠. BB checks. C-bet?",
                scenario: "Position: Button | Flush draw | Overcard board | C-bet decision",
                options: [
                    { text: "Check behind - missed flop", correct: false },
                    { text: "Bet 2BB", correct: true },
                    { text: "Bet 4BB", correct: false },
                    { text: "Bet 6BB", correct: false }
                ],
                explanation: "T8s with flush draw should c-bet small. You have 9 outs and the board favors your range. Small sizing (2BB) is optimal with draws."
            },
            {
                question: "You raise button to 2.5BB with 3♠3♥. SB folds, BB calls. Flop: 3♦8♠K♣. BB checks. Bet size?",
                scenario: "Position: Button | Bottom set | Dry board | Value betting",
                options: [
                    { text: "Check behind - slow play", correct: false },
                    { text: "Bet 2BB", correct: true },
                    { text: "Bet 4BB", correct: false },
                    { text: "Bet 6BB", correct: false }
                ],
                explanation: "Bottom set should bet small for value. The board is dry and you want to get called by pairs and draws. Small sizing (2BB) keeps weaker hands in."
            },
            {
                question: "Folded to you on button with A♠2♦. Standard play?",
                scenario: "Position: Button | Weak ace | Steal opportunity | Range decision",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Raise to 2.5BB", correct: true },
                    { text: "Limp", correct: false },
                    { text: "Raise to 4BB", correct: false }
                ],
                explanation: "A2o is a standard button steal. Any ace is strong enough to raise from button due to fold equity and decent playability when called."
            }
        ]
    },
    {
        id: 23,
        title: "Small Blind Strategy",
        description: "Navigate poker's most challenging position with optimal SB play.",
        duration: "15 min",
        questions: 10,
        content: `
            <p><strong>Small Blind</strong> is the worst position in poker. You're out of position, have dead money invested, and face difficult decisions constantly.</p>
            
            <h3>SB Strategy Principles</h3>
            <ul>
                <li><strong>3-Bet or Fold:</strong> Avoid calling raises - you'll be out of position</li>
                <li><strong>Complete Aggressively:</strong> When folded to SB, raise most hands vs BB</li>
                <li><strong>Tight vs Early Position:</strong> Fold most hands vs UTG/MP raises</li>
                <li><strong>Wide vs Late Position:</strong> 3-bet more vs CO/Button steals</li>
            </ul>
            
            <div class="example-box">
                <h4>SB vs Button Strategy</h4>
                <p>Button raises to 2.5BB. From SB you should:</p>
                <p><strong>3-bet:</strong> 88+, A5s+, K9s+, QJs, A9o+, KQo (~12% of hands)</p>
                <p><strong>Call:</strong> Never call from SB - always 3-bet or fold</p>
                <p><strong>Fold:</strong> Everything else (~88% of hands)</p>
            </div>
        `,
        quiz: [
            {
                question: "Button raises to 2.5BB. You're in SB with A♠8♠. What should you do?",
                scenario: "Position: Small Blind | vs Button steal | Suited ace | 3-bet or fold",
                options: [
                    { text: "Call - decent hand", correct: false },
                    { text: "3-bet to 8BB", correct: true },
                    { text: "Fold - too weak", correct: false },
                    { text: "3-bet to 12BB", correct: false }
                ],
                explanation: "A8s should 3-bet vs button raise. Never call from SB - you'll be out of position. A8s has blocker value and plays well vs button's wide range."
            },
            {
                question: "Folded to you in SB. You have K♠9♠. What's optimal?",
                scenario: "Position: Small Blind | Heads-up vs BB | Suited king | Steal opportunity",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Call 1BB - see cheap flop", correct: false },
                    { text: "Raise to 3BB", correct: true },
                    { text: "Raise to 4BB", correct: false }
                ],
                explanation: "K9s should raise vs BB. SB should raise most playable hands heads-up rather than limping. Standard sizing is 3BB to build pot and take initiative."
            },
            {
                question: "UTG raises to 3BB. You're in SB with Q♠J♦. Action?",
                scenario: "Position: Small Blind | vs UTG raise | Strong offsuit hand | Tight range",
                options: [
                    { text: "Call - strong hand", correct: false },
                    { text: "3-bet to 9BB", correct: false },
                    { text: "Fold - UTG too tight", correct: true },
                    { text: "3-bet to 12BB", correct: false }
                ],
                explanation: "QJo should fold vs UTG raise. UTG's range is very tight and QJo plays poorly out of position vs strong ranges. Save this hand for later position raises."
            },
            {
                question: "CO raises to 2.5BB. You're in SB with 7♠7♥. What's your play?",
                scenario: "Position: Small Blind | vs CO raise | Pocket pair | 3-bet decision",
                options: [
                    { text: "Call - set mine", correct: false },
                    { text: "3-bet to 8BB", correct: true },
                    { text: "Fold - avoid confrontation", correct: false },
                    { text: "3-bet to 12BB", correct: false }
                ],
                explanation: "77 should 3-bet vs CO raise. It's strong enough for value and you want to avoid playing out of position. Never call from SB with pocket pairs."
            },
            {
                question: "You complete SB with 6♠5♠. BB raises to 4BB. What should you do?",
                scenario: "Position: Small Blind | Facing BB raise | Suited connector | Pot odds",
                options: [
                    { text: "Call - good pot odds", correct: false },
                    { text: "Fold - too weak vs raise", correct: true },
                    { text: "3-bet to 12BB", correct: false },
                    { text: "Call and see flop", correct: false }
                ],
                explanation: "65s should fold vs BB raise. When BB raises your limp, they have a strong range. 65s doesn't have good enough equity to continue profitably."
            },
            {
                question: "Button raises, you 3-bet from SB with A♠K♥, button 4-bets. What's optimal?",
                scenario: "Position: Small Blind | Premium hand | Facing 4-bet | 5-bet decision",
                options: [
                    { text: "Call - see flop", correct: false },
                    { text: "5-bet shove", correct: true },
                    { text: "Fold - avoid big pot", correct: false },
                    { text: "5-bet to 40BB", correct: false }
                ],
                explanation: "AK should 5-bet shove vs button 4-bet. You have great equity vs their 4-betting range and want to get maximum value. Don't play AK passively."
            },
            {
                question: "MP raises to 3BB. You're in SB with A♠4♠. Action?",
                scenario: "Position: Small Blind | vs MP raise | Suited ace | Marginal hand",
                options: [
                    { text: "Call - suited ace", correct: false },
                    { text: "3-bet to 9BB", correct: false },
                    { text: "Fold - too weak vs MP", correct: true },
                    { text: "3-bet to 12BB", correct: false }
                ],
                explanation: "A4s should fold vs MP raise. MP's range is tighter than button/CO, and A4s doesn't have enough equity to 3-bet profitably. Save this for later position raises."
            },
            {
                question: "You 3-bet SB vs button with K♠Q♠. Button calls. Flop: A♠8♣3♠. What's your play?",
                scenario: "Position: Small Blind | Flush draw | Overcard board | C-bet decision",
                options: [
                    { text: "Check - missed flop", correct: false },
                    { text: "Bet 60% pot", correct: true },
                    { text: "Bet 100% pot", correct: false },
                    { text: "Check-call", correct: false }
                ],
                explanation: "KQs with flush draw should c-bet. You have 9 outs plus overcards and the board favors your 3-betting range. Standard c-bet sizing after 3-betting."
            },
            {
                question: "Folded to you in SB with 2♠2♥. Raise or fold?",
                scenario: "Position: Small Blind | Small pair | Heads-up vs BB | Marginal hand",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Call 1BB - set mine", correct: false },
                    { text: "Raise to 3BB", correct: true },
                    { text: "Raise to 4BB", correct: false }
                ],
                explanation: "22 should raise vs BB. Any pocket pair is strong enough to raise heads-up from SB. You want to take initiative rather than playing passively out of position."
            },
            {
                question: "Button raises, you 3-bet SB, BB cold 4-bets. You have 9♠9♥. What should you do?",
                scenario: "Position: Small Blind | Pocket pair | Facing cold 4-bet | Difficult decision",
                options: [
                    { text: "Call - see flop", correct: false },
                    { text: "Fold - likely dominated", correct: true },
                    { text: "5-bet shove", correct: false },
                    { text: "5-bet to 40BB", correct: false }
                ],
                explanation: "99 should fold vs BB cold 4-bet. BB's range is very strong (likely QQ+, AK) and you're getting poor odds. This is a clear fold to preserve chips."
            }
        ]
    },
    {
        id: 24,
        title: "UTG Opening Ranges",
        description: "Master early position play with tight, balanced opening ranges.",
        duration: "12 min",
        questions: 10,
        content: `
            <p><strong>UTG (Under The Gun)</strong> is the first position to act pre-flop. You need the tightest ranges since you'll be out of position against most opponents.</p>
            
            <h3>UTG Principles</h3>
            <ul>
                <li><strong>Tight Range:</strong> Only ~10-12% of hands in 9-max, ~15% in 6-max</li>
                <li><strong>Strong Holdings:</strong> Hands that play well out of position</li>
                <li><strong>Avoid Marginal Hands:</strong> Suited connectors and weak aces are unprofitable</li>
                <li><strong>Standard Sizing:</strong> 2.5-3BB to build pot with strong range</li>
            </ul>
            
            <div class="example-box">
                <h4>UTG Opening Range (9-max)</h4>
                <p><strong>Raise:</strong> 88+, ATs+, KQs, AJo+, KQo (~10% of hands)</p>
                <p><strong>Fold:</strong> Everything else (~90% of hands)</p>
                <p>This tight range compensates for positional disadvantage and ensures profitability against multiple opponents.</p>
            </div>
        `,
        quiz: [
            {
                question: "You're UTG in 9-max game with A♠J♠. What should you do?",
                scenario: "Position: UTG | 9-max table | Suited ace-jack | Opening decision",
                options: [
                    { text: "Fold - too weak for UTG", correct: false },
                    { text: "Raise to 3BB", correct: true },
                    { text: "Limp - see cheap flop", correct: false },
                    { text: "Raise to 4BB", correct: false }
                ],
                explanation: "AJs is strong enough to open from UTG. It's in the top ~10% of hands and plays reasonably well out of position. Standard 3BB sizing."
            },
            {
                question: "UTG in 6-max with K♠Q♦. What's optimal?",
                scenario: "Position: UTG | 6-max table | Strong offsuit hand | Tighter game",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Raise to 2.5BB", correct: true },
                    { text: "Limp", correct: false },
                    { text: "Raise to 4BB", correct: false }
                ],
                explanation: "KQo is strong enough to open UTG in 6-max. With fewer opponents, you can open slightly wider (~15% vs 10% in 9-max). Standard sizing is 2.5BB."
            },
            {
                question: "You open UTG with A♠A♥. MP 3-bets to 9BB. What should you do?",
                scenario: "Position: UTG | Premium hand | Facing 3-bet | 4-bet decision",
                options: [
                    { text: "Call - slow play aces", correct: false },
                    { text: "4-bet to 22BB", correct: true },
                    { text: "Fold - could be dominated", correct: false },
                    { text: "4-bet to 30BB", correct: false }
                ],
                explanation: "AA should always 4-bet vs 3-bets. You have the best possible hand and want to build the pot. Standard 4-bet sizing is 2.5x the 3-bet (22BB)."
            },
            {
                question: "UTG with 6♠5♠ in 9-max game. Open or fold?",
                scenario: "Position: UTG | 9-max table | Suited connector | Marginal hand",
                options: [
                    { text: "Open - suited connector", correct: false },
                    { text: "Fold - too weak for UTG", correct: true },
                    { text: "Limp - see cheap flop", correct: false },
                    { text: "Open small - 2BB", correct: false }
                ],
                explanation: "65s should fold from UTG in 9-max. It's too weak for early position and doesn't play well out of position vs multiple opponents. Save this for later positions."
            },
            {
                question: "You raise UTG with Q♠Q♥. Button 3-bets, blinds fold. What's your play?",
                scenario: "Position: UTG | Premium pair | vs Button 3-bet | 4-bet decision",
                options: [
                    { text: "Call - see flop", correct: true },
                    { text: "4-bet for value", correct: false },
                    { text: "Fold - avoid big pot", correct: false },
                    { text: "4-bet shove", correct: false }
                ],
                explanation: "QQ should call vs button 3-bet. You're ahead of their range but not by enough to 4-bet for value. Calling keeps their bluffs in and lets you see a flop."
            },
            {
                question: "UTG with A♠8♦ in 6-max. Open?",
                scenario: "Position: UTG | 6-max table | Weak ace | Opening decision",
                options: [
                    { text: "Open - any ace is strong", correct: false },
                    { text: "Fold - too weak", correct: true },
                    { text: "Limp", correct: false },
                    { text: "Open small", correct: false }
                ],
                explanation: "A8o should fold from UTG even in 6-max. Weak offsuit aces play poorly out of position and are often dominated. Stick to ATo+ from early position."
            },
            {
                question: "You open UTG with K♠K♥, get 4 callers. Flop: A♠8♣3♦. What's your action?",
                scenario: "Position: UTG | Pocket kings | Overcard flop | Multi-way pot",
                options: [
                    { text: "Check - dangerous flop", correct: false },
                    { text: "Bet 60% pot", correct: true },
                    { text: "Bet 100% pot", correct: false },
                    { text: "Check-fold", correct: false }
                ],
                explanation: "KK should bet on A83 even multi-way. You still have a strong hand and someone could have worse. Bet for value and protection - many hands will call."
            },
            {
                question: "UTG in 9-max with 9♠9♥. Standard play?",
                scenario: "Position: UTG | 9-max table | Medium pair | Opening decision",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Raise to 3BB", correct: true },
                    { text: "Limp - set mine", correct: false },
                    { text: "Raise to 4BB", correct: false }
                ],
                explanation: "99 is strong enough to open from UTG. It's in the top 10% of hands and plays well even out of position. Standard 3BB sizing builds pot with strong hand."
            },
            {
                question: "You open UTG, MP calls, CO 3-bets. You have A♠K♦. What should you do?",
                scenario: "Position: UTG | Premium hand | Facing 3-bet with caller | Complex spot",
                options: [
                    { text: "Call - see flop", correct: false },
                    { text: "4-bet to isolate", correct: true },
                    { text: "Fold - too many opponents", correct: false },
                    { text: "4-bet large", correct: false }
                ],
                explanation: "AK should 4-bet vs CO 3-bet even with MP caller. You have a premium hand and want to play heads-up vs CO. Standard 4-bet sizing isolates effectively."
            },
            {
                question: "UTG with A♠Q♠ in 9-max. Open or fold?",
                scenario: "Position: UTG | 9-max table | Suited ace-queen | Strong hand",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Raise to 3BB", correct: true },
                    { text: "Limp", correct: false },
                    { text: "Raise to 2BB", correct: false }
                ],
                explanation: "AQs is definitely strong enough to open from UTG. It's a premium hand that plays well out of position and is profitable vs multiple opponents."
            }
        ]
    },
    {
        id: 25,
        title: "Middle Position Play",
        description: "Navigate the transitional positions between early and late position.",
        duration: "13 min",
        questions: 10,
        content: `
            <p><strong>Middle Position (MP)</strong> includes MP1, MP2, and sometimes Lojack. You can open wider than UTG but must still be selective with marginal hands.</p>
            
            <h3>MP Strategy</h3>
            <ul>
                <li><strong>Wider Than UTG:</strong> ~15-18% opening range vs UTG's 10-12%</li>
                <li><strong>Position Dependent:</strong> Open wider in later MP positions</li>
                <li><strong>3-Bet Selectively:</strong> Tighter 3-betting vs early position</li>
                <li><strong>Avoid Marginal Calls:</strong> Don't call raises with weak hands out of position</li>
            </ul>
            
            <div class="example-box">
                <h4>MP Opening Range</h4>
                <p><strong>Early MP:</strong> 77+, A9s+, KTs+, QJs, ATo+, KQo (~15% of hands)</p>
                <p><strong>Late MP:</strong> 66+, A8s+, K9s+, QTs+, J9s+, A9o+, KJo+ (~18% of hands)</p>
                <p>Add suited connectors and small pairs as you get closer to the button.</p>
            </div>
        `,
        quiz: [
            {
                question: "You're in MP2 with K♠J♠. UTG raises to 3BB. What should you do?",
                scenario: "Position: MP2 | vs UTG raise | Suited king-jack | Facing tight range",
                options: [
                    { text: "Call - strong suited hand", correct: false },
                    { text: "3-bet to 9BB", correct: false },
                    { text: "Fold - UTG too strong", correct: true },
                    { text: "Call and see flop", correct: false }
                ],
                explanation: "KJs should fold vs UTG raise. UTG's range is very tight and KJs doesn't have good enough equity to call profitably out of position vs such a strong range."
            },
            {
                question: "Folded to you in MP1 with 8♠8♥. What's optimal?",
                scenario: "Position: MP1 | Pocket pair | Opening decision | 9-max table",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Raise to 2.5BB", correct: true },
                    { text: "Limp - set mine", correct: false },
                    { text: "Raise to 4BB", correct: false }
                ],
                explanation: "88 is strong enough to open from MP1. It's in your opening range and plays well even out of position. Standard 2.5BB sizing is optimal."
            },
            {
                question: "You open MP with A♠J♦. Button 3-bets to 8BB. What should you do?",
                scenario: "Position: MP | vs Button 3-bet | Strong offsuit hand | 3-bet defense",
                options: [
                    { text: "Call - strong hand", correct: true },
                    { text: "4-bet to 20BB", correct: false },
                    { text: "Fold - avoid confrontation", correct: false },
                    { text: "4-bet to 24BB", correct: false }
                ],
                explanation: "AJo should call vs button 3-bet. It's strong enough to continue but not strong enough to 4-bet. You have decent equity vs their 3-betting range."
            },
            {
                question: "MP2 with Q♠T♠. Folded to you. Open or fold?",
                scenario: "Position: MP2 | Suited queen-ten | Opening decision | Marginal hand",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Raise to 2.5BB", correct: true },
                    { text: "Limp", correct: false },
                    { text: "Raise to 3BB", correct: false }
                ],
                explanation: "QTs is strong enough to open from MP2. It's a playable suited hand with good connectivity. You can open wider from later middle positions."
            },
            {
                question: "UTG raises, you're in MP with K♠Q♠. CO and button still to act. Action?",
                scenario: "Position: MP | vs UTG raise | Strong suited hand | Players behind",
                options: [
                    { text: "Call - good hand", correct: false },
                    { text: "3-bet to 9BB", correct: false },
                    { text: "Fold - squeeze potential", correct: true },
                    { text: "Call and see flop", correct: false }
                ],
                explanation: "KQs should fold vs UTG raise with players behind. You risk getting squeezed by CO/button, and KQs doesn't play well vs UTG's tight range out of position."
            },
            {
                question: "You open MP with 9♠9♥, get 3 callers. Flop: K♠7♣2♦. What's your play?",
                scenario: "Position: MP | Pocket pair | Overcard flop | Multi-way pot",
                options: [
                    { text: "Check - dangerous flop", correct: false },
                    { text: "Bet 50% pot", correct: true },
                    { text: "Bet 100% pot", correct: false },
                    { text: "Check-fold", correct: false }
                ],
                explanation: "99 should bet on K72 even multi-way. You likely have the best hand and should bet for value and protection. Many worse hands will call (77, 22, draws)."
            },
            {
                question: "MP1 with A♠5♠. UTG limps. What should you do?",
                scenario: "Position: MP1 | Suited ace | Facing limp | Isolation opportunity",
                options: [
                    { text: "Limp behind", correct: false },
                    { text: "Raise to 4BB - isolate", correct: true },
                    { text: "Fold - too weak", correct: false },
                    { text: "Raise to 6BB", correct: false }
                ],
                explanation: "A5s should isolate the UTG limper. Raise to 4BB (larger vs limper) to build pot and play heads-up vs a weak range. A5s plays well vs limping ranges."
            },
            {
                question: "You're in MP2 with 6♠6♥. CO raises to 2.5BB. What's optimal?",
                scenario: "Position: MP2 | Small pair | vs CO raise | Set mining decision",
                options: [
                    { text: "Call - set mine", correct: true },
                    { text: "3-bet to 8BB", correct: false },
                    { text: "Fold - too weak", correct: false },
                    { text: "3-bet to 10BB", correct: false }
                ],
                explanation: "66 should call vs CO raise. You're getting good implied odds to set mine and 66 isn't strong enough to 3-bet for value vs CO's range."
            },
            {
                question: "MP with A♠K♥. You raise to 2.5BB, button 3-bets to 8BB, blinds fold. Action?",
                scenario: "Position: MP | Premium hand | vs Button 3-bet | 4-bet decision",
                options: [
                    { text: "Call - see flop", correct: false },
                    { text: "4-bet to 18BB", correct: true },
                    { text: "Fold - out of position", correct: false },
                    { text: "4-bet to 24BB", correct: false }
                ],
                explanation: "AK should 4-bet vs button 3-bet. It's strong enough for value vs their wide 3-betting range. Standard 4-bet sizing is 2.25x (18BB)."
            },
            {
                question: "Folded to you in MP2 with J♠9♠. Open?",
                scenario: "Position: MP2 | Suited connector | Opening decision | Playable hand",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Raise to 2.5BB", correct: true },
                    { text: "Limp", correct: false },
                    { text: "Raise to 3BB", correct: false }
                ],
                explanation: "J9s is strong enough to open from MP2. It's a playable suited connector with good post-flop potential. You can open wider from later middle positions."
            }
        ]
    },
    {
        id: 26,
        title: "Cutoff Strategy",
        description: "Master the second-best position with aggressive late position play.",
        duration: "12 min",
        questions: 10,
        content: `
            <p><strong>Cutoff (CO)</strong> is the second-best position in poker. You can open wide, steal blinds effectively, and have position on most opponents post-flop.</p>
            
            <h3>CO Advantages</h3>
            <ul>
                <li><strong>Wide Opening Range:</strong> ~25-30% of hands when folded to</li>
                <li><strong>Steal Opportunity:</strong> Good fold equity vs button and blinds</li>
                <li><strong>Position:</strong> Act after most opponents post-flop</li>
                <li><strong>3-Bet Frequency:</strong> Can 3-bet wider than earlier positions</li>
            </ul>
            
            <div class="example-box">
                <h4>CO Opening Range</h4>
                <p><strong>Raise:</strong> 22+, A2s+, K7s+, Q9s+, J9s+, T8s+, 98s, 87s, A8o+, K9o+, QTo+, JTo (~28% of hands)</p>
                <p>This wide range is profitable due to position and fold equity vs remaining opponents.</p>
            </div>
        `,
        quiz: [
            {
                question: "Folded to you in CO with Q♠9♠. What should you do?",
                scenario: "Position: Cutoff | Opening decision | Suited queen-nine | Late position",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Raise to 2.5BB", correct: true },
                    { text: "Limp", correct: false },
                    { text: "Raise to 3BB", correct: false }
                ],
                explanation: "Q9s is a standard CO open. You have good fold equity vs button and blinds, and the hand plays well when called. Standard 2.5BB sizing."
            },
            {
                question: "You open CO with A♠7♠. Button 3-bets to 8BB. What's optimal?",
                scenario: "Position: Cutoff | vs Button 3-bet | Suited ace | Defense decision",
                options: [
                    { text: "Call - decent hand", correct: true },
                    { text: "4-bet to 20BB", correct: false },
                    { text: "Fold - too weak", correct: false },
                    { text: "4-bet to 24BB", correct: false }
                ],
                explanation: "A7s should call vs button 3-bet. It has decent equity vs their range and good playability in position. Not strong enough to 4-bet but too good to fold."
            }
        ]
    },
    {
        id: 27,
        title: "Heads-Up Play",
        description: "Master two-player dynamics with aggressive ranges and position play.",
        duration: "14 min",
        questions: 10,
        content: `
            <p><strong>Heads-up poker</strong> requires the most aggressive strategy. With only two players, you must play much wider ranges and be more aggressive than in full ring games.</p>
            
            <h3>Heads-Up Principles</h3>
            <ul>
                <li><strong>Wide Ranges:</strong> Play 60-80% of hands from button</li>
                <li><strong>Aggression:</strong> Bet and raise frequently - passivity is punished</li>
                <li><strong>Position Critical:</strong> Button has massive advantage</li>
                <li><strong>Bluff More:</strong> Opponent folds much more often</li>
            </ul>
            
            <div class="example-box">
                <h4>Heads-Up Button Range</h4>
                <p><strong>Raise:</strong> Any two cards except the worst 20% (72o, 83o, 94o, etc.)</p>
                <p><strong>Limp/Fold:</strong> Weakest hands like 72o, 82o can be limped or folded</p>
                <p>This ultra-wide range is profitable due to position and fold equity.</p>
            </div>
        `,
        quiz: [
            {
                question: "Heads-up on button with K♠4♦. What should you do?",
                scenario: "Position: Button | Heads-up | Weak king | Aggressive play",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Raise to 2.5BB", correct: true },
                    { text: "Limp", correct: false },
                    { text: "Raise to 3BB", correct: false }
                ],
                explanation: "K4o should raise heads-up from button. Any king is strong enough in heads-up play. You have position and fold equity vs big blind's range."
            },
            {
                question: "Heads-up in BB. Button raises to 2.5BB. You have 9♠6♠. Action?",
                scenario: "Position: Big Blind | Heads-up | vs Button raise | Suited connector",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Call - decent hand", correct: true },
                    { text: "3-bet to 8BB", correct: false },
                    { text: "3-bet to 10BB", correct: false }
                ],
                explanation: "96s should call vs button raise heads-up. You're getting good pot odds and 96s has decent playability. It's not strong enough to 3-bet but good enough to defend."
            },
            {
                question: "Heads-up, you raise button with A♠8♠. BB 3-bets to 8BB. What's optimal?",
                scenario: "Position: Button | Heads-up | vs 3-bet | Suited ace",
                options: [
                    { text: "Call - see flop", correct: true },
                    { text: "4-bet to 20BB", correct: false },
                    { text: "Fold - too aggressive", correct: false },
                    { text: "4-bet to 24BB", correct: false }
                ],
                explanation: "A8s should call vs BB 3-bet heads-up. You have position and decent equity. 4-betting is too aggressive with A8s even heads-up."
            },
            {
                question: "Heads-up on button with 7♠2♦. Standard play?",
                scenario: "Position: Button | Heads-up | Worst hand | Marginal decision",
                options: [
                    { text: "Always fold", correct: false },
                    { text: "Mix between fold and limp", correct: true },
                    { text: "Always raise", correct: false },
                    { text: "Always limp", correct: false }
                ],
                explanation: "72o should mix between folding and limping heads-up. It's the worst hand but can still be played occasionally for balance. Never raise with 72o."
            },
            {
                question: "Heads-up in BB with A♠A♥. Button raises to 2.5BB. What should you do?",
                scenario: "Position: Big Blind | Heads-up | Premium hand | vs Button raise",
                options: [
                    { text: "Call - slow play", correct: false },
                    { text: "3-bet to 8BB", correct: true },
                    { text: "3-bet to 12BB", correct: false },
                    { text: "Shove all-in", correct: false }
                ],
                explanation: "AA should 3-bet vs button raise heads-up. You want to build the pot with the best hand. Standard 3-bet sizing heads-up is 3.2x (8BB)."
            },
            {
                question: "Heads-up, button limps. You're in BB with Q♠J♦. Action?",
                scenario: "Position: Big Blind | Heads-up | vs Button limp | Strong hand",
                options: [
                    { text: "Check - see free flop", correct: false },
                    { text: "Raise to 3BB", correct: true },
                    { text: "Raise to 4BB", correct: false },
                    { text: "Raise to 5BB", correct: false }
                ],
                explanation: "QJ should raise vs button limp heads-up. You have a strong hand and want to take initiative. Standard sizing vs limp is 3BB."
            },
            {
                question: "Heads-up, you raise button, BB calls. Flop: A♠8♣3♦. You have K♠Q♥. C-bet?",
                scenario: "Position: Button | Heads-up | Missed flop | C-bet decision",
                options: [
                    { text: "Check behind - missed", correct: false },
                    { text: "Bet 60% pot", correct: true },
                    { text: "Bet 100% pot", correct: false },
                    { text: "Bet 33% pot", correct: false }
                ],
                explanation: "KQ should c-bet on A83 heads-up. You have overcards and the board favors your range. Standard c-bet sizing heads-up is 60% pot."
            },
            {
                question: "Heads-up in BB. Button raises, you 3-bet with 5♠5♥, button 4-bets. Action?",
                scenario: "Position: Big Blind | Heads-up | Small pair | Facing 4-bet",
                options: [
                    { text: "Call - see flop", correct: true },
                    { text: "5-bet shove", correct: false },
                    { text: "Fold - too weak", correct: false },
                    { text: "5-bet to 40BB", correct: false }
                ],
                explanation: "55 should call vs 4-bet heads-up. You have decent equity vs their 4-betting range and good implied odds. Folding is too tight heads-up."
            },
            {
                question: "Heads-up on button with J♠9♠. BB is very tight (folds 70% to raises). Action?",
                scenario: "Position: Button | Heads-up | vs Tight opponent | Exploitative play",
                options: [
                    { text: "Fold - respect tightness", correct: false },
                    { text: "Raise to 2.5BB", correct: true },
                    { text: "Limp - see cheap flop", correct: false },
                    { text: "Raise to 4BB", correct: false }
                ],
                explanation: "J9s should raise vs tight BB heads-up. If they fold 70% to raises, you have massive fold equity. Exploit their tightness by raising wide."
            },
            {
                question: "Heads-up, effective stacks 15BB. You're on button with A♠7♦. Standard play?",
                scenario: "Position: Button | Heads-up | Short stacks | Push/fold territory",
                options: [
                    { text: "Fold - too short", correct: false },
                    { text: "Raise to 2.5BB", correct: false },
                    { text: "Shove all-in", correct: true },
                    { text: "Limp", correct: false }
                ],
                explanation: "A7o should shove with 15BB heads-up. You're in push/fold territory and A7o has good equity vs BB's calling range. Standard play with short stacks."
            }
        ]
    },
    {
        id: 28,
        title: "Multi-Table Tournaments",
        description: "Master tournament-specific GTO adjustments for MTT success.",
        duration: "16 min",
        questions: 10,
        content: `
            <p><strong>Multi-Table Tournaments (MTTs)</strong> require different strategies than cash games due to changing blinds, ICM pressure, and varying stack depths.</p>
            
            <h3>MTT Key Concepts</h3>
            <ul>
                <li><strong>Early Stages:</strong> Play tight, build stack slowly</li>
                <li><strong>Middle Stages:</strong> Increase aggression, steal blinds</li>
                <li><strong>Bubble Play:</strong> Extreme ICM considerations</li>
                <li><strong>Final Table:</strong> Stack sizes and pay jumps matter most</li>
            </ul>
            
            <div class="example-box">
                <h4>MTT Stage Adjustments</h4>
                <p><strong>Early (100BB+):</strong> Play like deep cash game, avoid marginal spots</p>
                <p><strong>Middle (20-50BB):</strong> Increase steal frequency, 3-bet more</p>
                <p><strong>Late (10-20BB):</strong> Push/fold strategy, ICM considerations</p>
            </div>
        `,
        quiz: [
            {
                question: "Early MTT, 150BB deep. You have A♠J♦ UTG. What should you do?",
                scenario: "Tournament: Early stage | Stack: 150BB | Position: UTG | Deep play",
                options: [
                    { text: "Fold - too deep for AJ", correct: false },
                    { text: "Raise to 2.5BB", correct: true },
                    { text: "Limp", correct: false },
                    { text: "Raise to 3BB", correct: false }
                ],
                explanation: "AJ should open UTG even in early MTT. With 150BB, play similar to cash games. AJ is strong enough for UTG opening range."
            },
            {
                question: "MTT bubble, 101 players left, 100 paid. You have 25BB with K♠K♥ UTG. Action?",
                scenario: "Tournament: Money bubble | Stack: 25BB | Premium hand | ICM spot",
                options: [
                    { text: "Fold - preserve bubble", correct: false },
                    { text: "Raise to 2.5BB", correct: true },
                    { text: "Shove all-in", correct: false },
                    { text: "Limp", correct: false }
                ],
                explanation: "KK should raise normally even on bubble. It's too strong to fold and shoving is unnecessary with 25BB. Play for value with premium hands."
            }
        ]
    },
    {
        id: 29,
        title: "Cash Game Dynamics",
        description: "Master ring game strategy with deep stacks and constant pressure.",
        duration: "13 min",
        questions: 10,
        content: `
            <p><strong>Cash games</strong> differ from tournaments with constant blinds, deep stacks, and the ability to rebuy. This creates unique strategic considerations.</p>
            
            <h3>Cash Game Principles</h3>
            <ul>
                <li><strong>Deep Stack Play:</strong> Usually 100BB+ effective stacks</li>
                <li><strong>No ICM Pressure:</strong> Chips = money, no tournament considerations</li>
                <li><strong>Constant Aggression:</strong> Blinds never increase, steal constantly</li>
                <li><strong>Table Selection:</strong> Choose profitable games and seats</li>
            </ul>
            
            <div class="example-box">
                <h4>Cash vs Tournament</h4>
                <p><strong>Cash:</strong> Play for maximum EV, take all profitable spots</p>
                <p><strong>Tournament:</strong> Consider ICM, survival, and pay jumps</p>
                <p>In cash games, you can always rebuy, so take thin value spots and profitable gambles.</p>
            </div>
        `,
        quiz: [
            {
                question: "Cash game, 100BB deep. You have 6♠5♠ in CO vs UTG raise. Call?",
                scenario: "Format: Cash game | Stack: 100BB | Suited connector | Implied odds",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Call - good implied odds", correct: true },
                    { text: "3-bet", correct: false },
                    { text: "Fold - out of position", correct: false }
                ],
                explanation: "65s should call vs UTG in cash games. With 100BB+ stacks, you have excellent implied odds to hit straights and flushes. Cash games reward speculative hands."
            },
            {
                question: "Cash game river. You have A♠Q♠ on A♣Q♥8♠4♦2♣. Opponent bets 75% pot. Call?",
                scenario: "Format: Cash game | Two pair | River decision | Thin value spot",
                options: [
                    { text: "Fold - could be beaten", correct: false },
                    { text: "Call - strong hand", correct: true },
                    { text: "Raise for value", correct: false },
                    { text: "Think for 2 minutes", correct: false }
                ],
                explanation: "AQ two pair should call in cash games. You're near the top of your range and getting good odds. In cash, take all profitable spots - you can rebuy if wrong."
            }
        ]
    },
    {
        id: 30,
        title: "Live vs Online",
        description: "Adapt your GTO strategy for different poker formats and environments.",
        duration: "14 min",
        questions: 10,
        content: `
            <p><strong>Live and online poker</strong> require different adjustments despite using the same fundamental GTO principles. Player pools, pace, and dynamics vary significantly.</p>
            
            <h3>Format Differences</h3>
            <table class="strategy-table">
                <thead>
                    <tr>
                        <th>Aspect</th>
                        <th>Live Poker</th>
                        <th>Online Poker</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Player Pool</strong></td>
                        <td>Recreational heavy</td>
                        <td>More regulars</td>
                    </tr>
                    <tr>
                        <td><strong>Pace</strong></td>
                        <td>25-30 hands/hour</td>
                        <td>60-80 hands/hour</td>
                    </tr>
                    <tr>
                        <td><strong>Tells</strong></td>
                        <td>Physical tells available</td>
                        <td>Betting patterns only</td>
                    </tr>
                    <tr>
                        <td><strong>Multi-tabling</strong></td>
                        <td>One table only</td>
                        <td>Multiple tables possible</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="example-box">
                <h4>Live Adjustments</h4>
                <p><strong>Value bet thinner:</strong> Recreational players call light</p>
                <p><strong>Bluff less:</strong> Live players don't fold enough</p>
                <p><strong>Play tighter pre-flop:</strong> More multiway pots</p>
            </div>
        `,
        quiz: [
            {
                question: "Live $1/$2, recreational table. You have A♠Q♠ on A♣8♠3♦. Opponent bets $15 into $25. Action?",
                scenario: "Format: Live cash | Recreational opponents | Top pair | Thin value",
                options: [
                    { text: "Call - control pot size", correct: false },
                    { text: "Raise to $45", correct: true },
                    { text: "Fold - could be beaten", correct: false },
                    { text: "Raise to $60", correct: false }
                ],
                explanation: "AQ should raise vs recreational live players. They call light with worse aces, pairs, and draws. Live players don't fold enough, so value bet thinner."
            },
            {
                question: "Online 6-max, you have 7♠2♦ on button vs tight regulars in blinds. Steal attempt?",
                scenario: "Format: Online | vs Regulars | Worst hand | Steal opportunity",
                options: [
                    { text: "Fold - too weak vs regs", correct: true },
                    { text: "Raise - position matters", correct: false },
                    { text: "Limp", correct: false },
                    { text: "Raise small", correct: false }
                ],
                explanation: "72o should fold vs tight regulars online. Online regs defend properly and don't fold enough to button steals. Save this hand for recreational opponents."
            },
            {
                question: "Live tournament, you notice opponent has strong hand tell (sits up straight). You have A♠K♥, they bet. Action?",
                scenario: "Format: Live tournament | Physical tell | Premium hand | Tell-based decision",
                options: [
                    { text: "Ignore tells - play GTO", correct: false },
                    { text: "Fold based on tell", correct: true },
                    { text: "Raise - AK is strong", correct: false },
                    { text: "Call - see what happens", correct: false }
                ],
                explanation: "If you have a reliable tell that opponent has a strong hand, fold AK. Live poker allows you to deviate from GTO when you have additional information."
            },
            {
                question: "Online cash game, 4-tabling. You have marginal spot with K♠J♦. Time pressure. What should you do?",
                scenario: "Format: Online | Multi-tabling | Time pressure | Marginal decision",
                options: [
                    { text: "Take time - make optimal play", correct: false },
                    { text: "Default to tight/fold", correct: true },
                    { text: "Default to aggressive", correct: false },
                    { text: "Random decision", correct: false }
                ],
                explanation: "When multi-tabling online with time pressure, default to tighter decisions in marginal spots. Better to make a slightly suboptimal tight fold than a bad loose call."
            },
            {
                question: "Live $2/$5, loose passive table. You have 9♠9♥, 5 players see flop K♣7♠2♦. First to act, what's optimal?",
                scenario: "Format: Live cash | Loose passive opponents | Pocket pair | Multiway pot",
                options: [
                    { text: "Check - control pot", correct: false },
                    { text: "Bet $25 - value bet", correct: true },
                    { text: "Check-fold", correct: false },
                    { text: "Bet $40 - protection", correct: false }
                ],
                explanation: "99 should bet for value vs loose passive live players. They call with worse pairs, draws, and weak hands. Live recreational players don't fold enough to give up value."
            },
            {
                question: "Online tournament, 15BB effective. HUD shows opponent folds 85% to 3-bets. You have A♠4♠ in SB vs their CO raise. Action?",
                scenario: "Format: Online tournament | HUD data | Short stack | Exploitative spot",
                options: [
                    { text: "Call - see flop", correct: false },
                    { text: "3-bet - exploit fold frequency", correct: true },
                    { text: "Fold - too weak", correct: false },
                    { text: "Shove all-in", correct: false }
                ],
                explanation: "With HUD showing 85% fold to 3-bets, A4s should 3-bet for pure fold equity. Online tools let you exploit opponents more precisely than live play."
            },
            {
                question: "Live home game, very loose players. You have A♠A♥ pre-flop. 6 players limp, you're on button. Sizing?",
                scenario: "Format: Live home game | Premium hand | Multiple limpers | Loose opponents",
                options: [
                    { text: "Raise to 4BB - standard", correct: false },
                    { text: "Raise to 8BB - larger vs limpers", correct: false },
                    { text: "Raise to 12BB - very loose game", correct: true },
                    { text: "Just call - trap", correct: false }
                ],
                explanation: "AA should raise large (12BB+) vs multiple limpers in loose live games. They'll call anyway, so maximize value. Live recreational players call much larger sizes."
            },
            {
                question: "Online 6-max, you're playing 8 tables. Opponent takes long time then bets river. What does this likely mean?",
                scenario: "Format: Online | Multi-tabling | Timing tell | River decision",
                options: [
                    { text: "Strong hand - they're value betting", correct: false },
                    { text: "Bluff - they're thinking", correct: true },
                    { text: "No information", correct: false },
                    { text: "Connection issues", correct: false }
                ],
                explanation: "Online, long think then bet usually indicates a bluff. Strong hands bet quickly for value. This timing tell is reliable online but opposite of live tells."
            },
            {
                question: "Live casino, tight image. You've been folding for an hour. Now you have 7♠6♠ on button. Steal attempt?",
                scenario: "Format: Live casino | Tight image | Suited connector | Image-based play",
                options: [
                    { text: "Fold - too weak", correct: false },
                    { text: "Raise - exploit tight image", correct: true },
                    { text: "Limp", correct: false },
                    { text: "Wait for better hand", correct: false }
                ],
                explanation: "With tight image in live play, 76s becomes a profitable steal. Live opponents give more credit to tight players' raises. Exploit your image when it's favorable."
            },
            {
                question: "Online high-stakes, facing unknown opponent. You have Q♠Q♥ vs their 4-bet. What's the key difference from live?",
                scenario: "Format: Online high-stakes | Unknown opponent | Premium pair | No physical reads",
                options: [
                    { text: "Play more aggressively", correct: false },
                    { text: "Stick closer to GTO", correct: true },
                    { text: "Play more passively", correct: false },
                    { text: "Make random decision", correct: false }
                ],
                explanation: "Online vs unknowns, stick closer to GTO since you have no physical reads or table image. Live poker allows more exploitative adjustments based on additional information."
            }
        ]
    }
];
