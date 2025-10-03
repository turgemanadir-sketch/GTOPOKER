// Phase 5: Master Level - Lessons 41-50
const phase5Lessons = [
    {
        id: 41,
        title: "Solver Analysis",
        description: "Understand GTO solvers and how to interpret their solutions.",
        duration: "18 min",
        questions: 10,
        content: `
            <p><strong>GTO solvers</strong> are computer programs that calculate mathematically optimal poker strategies. Understanding solver output is crucial for modern poker study.</p>
            
            <h3>Key Solver Concepts</h3>
            <ul>
                <li><strong>Nash Equilibrium:</strong> Strategy where no player can improve by changing their play</li>
                <li><strong>Mixed Strategies:</strong> Playing different actions with specific frequencies</li>
                <li><strong>EV (Expected Value):</strong> Average profit/loss of each decision</li>
                <li><strong>Exploitability:</strong> How much opponents can gain by deviating optimally</li>
            </ul>
            
            <div class="example-box">
                <h4>Solver Output Example</h4>
                <p>Solver says: "Bet 75% pot with 60% frequency, check 40%"</p>
                <p>This means: Mix your strategy - sometimes bet, sometimes check with the same hand to stay balanced and unexploitable.</p>
            </div>
        `,
        quiz: [
            {
                question: "Solver shows you should bet AK 80% of the time, check 20%. What does this mean in practice?",
                scenario: "Solver interpretation | Mixed strategy | AK decision | Frequency mixing",
                options: [
                    { text: "Always bet AK", correct: false },
                    { text: "Randomly mix between bet and check", correct: true },
                    { text: "Bet only when you feel like it", correct: false },
                    { text: "Check more often than betting", correct: false }
                ],
                explanation: "Mixed strategies mean you should randomly choose between actions at the specified frequencies. Use a random method (like seconds on clock) to decide whether to bet or check AK."
            },
            {
                question: "Solver solution shows 0.05bb/hand EV for a bluff. What does this tell you?",
                scenario: "Solver analysis | EV interpretation | Bluff profitability | Expected value",
                options: [
                    { text: "The bluff loses money", correct: false },
                    { text: "The bluff is slightly profitable", correct: true },
                    { text: "The bluff is very profitable", correct: false },
                    { text: "EV doesn't matter", correct: false }
                ],
                explanation: "0.05bb/hand EV means the bluff is slightly profitable, gaining 0.05 big blinds per hand on average. Small positive EV indicates a marginally good play."
            },
            {
                question: "Solver shows you should 3-bet AA 100% and AK 80%. Why the difference?",
                scenario: "Solver interpretation | Premium hands | Mixed strategy | Frequency balancing",
                options: [
                    { text: "AK is weaker than AA", correct: false },
                    { text: "Balance and deception", correct: true },
                    { text: "AK plays better as call", correct: false },
                    { text: "Solver error", correct: false }
                ],
                explanation: "Mixing AK (80% 3-bet, 20% call) creates deception and balance. If you always 3-bet AK, opponents can exploit you. AA is strong enough to always 3-bet."
            },
            {
                question: "Solver solution shows 0.2bb/hand EV for calling vs 0.15bb/hand for folding. What should you do?",
                scenario: "Solver analysis | EV comparison | Decision making | Marginal spot",
                options: [
                    { text: "Always call", correct: true },
                    { text: "Always fold", correct: false },
                    { text: "Mix randomly", correct: false },
                    { text: "Doesn't matter", correct: false }
                ],
                explanation: "Call has higher EV (0.2bb vs 0.15bb), so always call. In solver analysis, always choose the action with highest expected value."
            },
            {
                question: "Solver shows you should bet 66% pot with 70% frequency. How do you implement this?",
                scenario: "Solver implementation | Mixed strategy | Frequency execution | Practical application",
                options: [
                    { text: "Always bet 66% pot", correct: false },
                    { text: "Use randomization method", correct: true },
                    { text: "Bet based on feeling", correct: false },
                    { text: "Ignore the frequency", correct: false }
                ],
                explanation: "Use randomization (like second hand on watch) to bet 70% of the time. If seconds 0-42, bet. If 43-59, check. This implements the mixed strategy correctly."
            },
            {
                question: "Solver shows your range has 15% bluffs, 85% value. Opponent calls 60%. Is this balanced?",
                scenario: "Solver analysis | Range balance | Bluff-to-value ratio | Opponent response",
                options: [
                    { text: "Yes - perfectly balanced", correct: false },
                    { text: "No - need more bluffs", correct: true },
                    { text: "No - need fewer bluffs", correct: false },
                    { text: "Balance doesn't matter", correct: false }
                ],
                explanation: "If opponent calls 60%, you need 60/40 = 1.5:1 bluff-to-value ratio. Currently 15:85 = 0.18:1. You need more bluffs to be unexploitable."
            },
            {
                question: "Solver shows exploitability of 0.5bb/100 hands. Is this acceptable?",
                scenario: "Solver analysis | Exploitability measurement | Strategy assessment | Performance metric",
                options: [
                    { text: "No - too exploitable", correct: false },
                    { text: "Yes - very low exploitability", correct: true },
                    { text: "Depends on stakes", correct: false },
                    { text: "Exploitability doesn't matter", correct: false }
                ],
                explanation: "0.5bb/100 hands exploitability is excellent. Most human strategies are exploitable for 2-5bb/100. Under 1bb/100 is considered very good."
            },
            {
                question: "Solver recommends different bet sizes on same board with same hand. Why?",
                scenario: "Solver interpretation | Bet sizing | Mixed strategies | Strategic complexity",
                options: [
                    { text: "Solver is confused", correct: false },
                    { text: "Creates unpredictability", correct: true },
                    { text: "Sizing doesn't matter", correct: false },
                    { text: "Always use same size", correct: false }
                ],
                explanation: "Mixing bet sizes with same hand creates unpredictability and prevents opponents from reading your hand strength based on sizing tells."
            },
            {
                question: "Solver shows check-raise frequency of 12%. You've been check-raising 5%. Adjustment?",
                scenario: "Solver comparison | Frequency adjustment | Check-raise strategy | Implementation gap",
                options: [
                    { text: "Keep current frequency", correct: false },
                    { text: "Increase check-raise frequency", correct: true },
                    { text: "Decrease check-raise frequency", correct: false },
                    { text: "Ignore solver recommendation", correct: false }
                ],
                explanation: "Increase check-raise frequency to match solver recommendation. Under-check-raising makes you exploitable - opponents can bet light knowing you won't raise enough."
            }
        ]
    },
    {
        id: 42,
        title: "Node Locking",
        description: "Advanced solver techniques for studying specific opponent tendencies.",
        duration: "16 min",
        questions: 10,
        content: `
            <p><strong>Node locking</strong> is an advanced solver technique where you force one player to use a specific strategy to see how the other should respond optimally.</p>
            
            <h3>Node Locking Applications</h3>
            <ul>
                <li><strong>Exploit Calculation:</strong> Lock opponent to their actual strategy, see optimal counter</li>
                <li><strong>Leak Analysis:</strong> Lock your strategy, see how much opponents can exploit you</li>
                <li><strong>Simplified Spots:</strong> Lock to pure strategies for easier implementation</li>
                <li><strong>Population Study:</strong> Lock to common population tendencies</li>
            </ul>
            
            <div class="example-box">
                <h4>Node Lock Example</h4>
                <p>Opponent c-bets 100% of flops (instead of GTO 60%).</p>
                <p>Lock their c-bet frequency to 100%, solver shows you should call much wider and check-raise more to exploit their over-betting.</p>
            </div>
        `,
        quiz: [
            {
                question: "You node lock opponent to fold 90% to river bets (GTO is 60%). How should you adjust?",
                scenario: "Node locking | Exploitative adjustment | Over-folding opponent | River strategy",
                options: [
                    { text: "Bet less for value", correct: false },
                    { text: "Bluff much more frequently", correct: true },
                    { text: "Play the same as GTO", correct: false },
                    { text: "Check more often", correct: false }
                ],
                explanation: "If opponent folds 90% to river bets, you should bluff much more frequently for pure fold equity. Their over-folding makes almost any two cards profitable bluffs."
            },
            {
                question: "Node locking your own strategy shows opponent can exploit you for +2bb/100. What should you do?",
                scenario: "Node locking | Self-analysis | Exploitability | Strategy adjustment",
                options: [
                    { text: "Ignore it - 2bb is small", correct: false },
                    { text: "Adjust strategy to be less exploitable", correct: true },
                    { text: "Exploit them back harder", correct: false },
                    { text: "Change games", correct: false }
                ],
                explanation: "2bb/100 exploitability is significant. You should adjust your strategy to be more balanced and less exploitable, especially against thinking opponents."
            },
            {
                question: "You node lock opponent to never fold top pair. How should you adjust your bluffing?",
                scenario: "Node locking | Never folds top pair | Bluff adjustment | Exploitative strategy",
                options: [
                    { text: "Bluff more often", correct: false },
                    { text: "Never bluff when they could have top pair", correct: true },
                    { text: "Bluff same frequency", correct: false },
                    { text: "Only bluff with draws", correct: false }
                ],
                explanation: "If opponent never folds top pair, don't bluff on boards where they likely have it (A-high, K-high flops). Save bluffs for boards that miss their range."
            },
            {
                question: "Node lock shows opponent 3-bets 15% vs your button opens (GTO is 8%). Counter-strategy?",
                scenario: "Node locking | Over-3-betting | Button defense | Counter-adjustment",
                options: [
                    { text: "Open tighter from button", correct: false },
                    { text: "4-bet more and call more 3-bets", correct: true },
                    { text: "Fold more to 3-bets", correct: false },
                    { text: "Open wider", correct: false }
                ],
                explanation: "vs over-3-betting, defend more by 4-betting strong hands and calling more with medium hands. Their wide 3-betting range is exploitable."
            },
            {
                question: "You node lock your own c-betting to 100%. Solver shows opponent should call 80%. Exploit?",
                scenario: "Node locking | Self-analysis | Over-c-betting | Opponent adjustment",
                options: [
                    { text: "Keep c-betting 100%", correct: false },
                    { text: "Reduce c-bet frequency", correct: true },
                    { text: "C-bet larger", correct: false },
                    { text: "C-bet smaller", correct: false }
                ],
                explanation: "If opponent optimally calls 80% vs your 100% c-betting, you're over-c-betting. Reduce frequency to balance your range and avoid exploitation."
            },
            {
                question: "Node lock opponent to check-raise 20% of flops (GTO is 8%). How do you adjust?",
                scenario: "Node locking | Over-check-raising | C-bet adjustment | Defensive strategy",
                options: [
                    { text: "C-bet more often", correct: false },
                    { text: "C-bet less and check more", correct: true },
                    { text: "C-bet larger", correct: false },
                    { text: "Always fold to check-raises", correct: false }
                ],
                explanation: "vs over-check-raising, c-bet less frequently and check back more. This reduces their check-raise opportunities and controls pot size."
            },
            {
                question: "Node locking shows if you always bet strong hands, opponent should fold 90%. Implication?",
                scenario: "Node locking | Predictable betting | Opponent counter-strategy | Balance importance",
                options: [
                    { text: "Always bet strong hands", correct: false },
                    { text: "Mix in some checks with strong hands", correct: true },
                    { text: "Bet larger with strong hands", correct: false },
                    { text: "Only bet weak hands", correct: false }
                ],
                explanation: "If opponent folds 90% when you always bet strong hands, you need balance. Check some strong hands to prevent them from exploiting your predictability."
            },
            {
                question: "You node lock opponent to call river bets 40% (GTO is 60%). Optimal adjustment?",
                scenario: "Node locking | Under-calling rivers | Bluff frequency | Exploitative adjustment",
                options: [
                    { text: "Bluff less", correct: false },
                    { text: "Bluff more", correct: true },
                    { text: "Value bet less", correct: false },
                    { text: "No adjustment needed", correct: false }
                ],
                explanation: "If opponent under-calls rivers (40% vs 60% GTO), bluff more frequently. Their over-folding makes bluffs more profitable."
            },
            {
                question: "Node lock analysis shows your strategy loses 1bb/100 vs optimal opponent. Action?",
                scenario: "Node locking | Strategy evaluation | Performance analysis | Improvement needed",
                options: [
                    { text: "Strategy is fine", correct: false },
                    { text: "Study and improve strategy", correct: true },
                    { text: "Change games", correct: false },
                    { text: "Ignore the analysis", correct: false }
                ],
                explanation: "Losing 1bb/100 vs optimal play indicates significant leaks. Study the node lock results to identify and fix the strategic weaknesses."
            }
        ]
    },
    {
        id: 43,
        title: "Population Tendencies",
        description: "Identify and exploit common leaks in the general player population.",
        duration: "17 min",
        questions: 10,
        content: `
            <p><strong>Population tendencies</strong> are systematic deviations from GTO that most players make. Identifying these patterns allows for profitable exploitative adjustments.</p>
            
            <h3>Common Population Leaks</h3>
            <ul>
                <li><strong>Under-bluffing:</strong> Most players don't bluff enough, especially on river</li>
                <li><strong>Over-folding:</strong> Recreational players fold too much to aggression</li>
                <li><strong>Positional Mistakes:</strong> Playing too many hands out of position</li>
                <li><strong>Sizing Tells:</strong> Bet sizing correlates too strongly with hand strength</li>
            </ul>
            
            <div class="example-box">
                <h4>Population Exploit</h4>
                <p>Online 6-max population folds ~70% to 3-bets (GTO is ~55%).</p>
                <p>Exploit: 3-bet bluff more frequently from all positions. Their over-folding makes light 3-bets immediately profitable.</p>
            </div>
        `,
        quiz: [
            {
                question: "Live $1/$2 players call pre-flop 40% of the time (GTO is 25%). How should you adjust?",
                scenario: "Population tendency | Live low stakes | Over-calling pre-flop | Exploitative adjustment",
                options: [
                    { text: "Bluff more pre-flop", correct: false },
                    { text: "Tighten opening ranges", correct: false },
                    { text: "Value bet wider ranges", correct: true },
                    { text: "Play more hands", correct: false }
                ],
                explanation: "If population calls too wide pre-flop, value bet wider ranges post-flop. They'll call light with weak hands, making thin value bets profitable."
            },
            {
                question: "Online population under-bluffs rivers by 50%. You have a bluff catcher. What's the adjustment?",
                scenario: "Population tendency | Online play | Under-bluffing | River decision",
                options: [
                    { text: "Call more often", correct: false },
                    { text: "Fold more often", correct: true },
                    { text: "Raise more often", correct: false },
                    { text: "No adjustment needed", correct: false }
                ],
                explanation: "If population under-bluffs rivers, fold bluff catchers more often. Their betting ranges are more value-heavy, making calls less profitable."
            },
            {
                question: "Online 6-max population 3-bets 12% from button (GTO is 8%). How to exploit?",
                scenario: "Population tendency | Over-3-betting | Button play | Exploitative adjustment",
                options: [
                    { text: "Fold more to 3-bets", correct: false },
                    { text: "4-bet more and call more", correct: true },
                    { text: "Open tighter", correct: false },
                    { text: "Play same strategy", correct: false }
                ],
                explanation: "vs over-3-betting population, defend more by 4-betting value hands and calling more with speculative hands. Their wide 3-betting is exploitable."
            },
            {
                question: "Live low stakes players limp 40% pre-flop. Optimal adjustment?",
                scenario: "Population tendency | Live poker | Over-limping | Pre-flop strategy",
                options: [
                    { text: "Limp behind more", correct: false },
                    { text: "Raise larger and more often", correct: true },
                    { text: "Play tighter", correct: false },
                    { text: "Fold more", correct: false }
                ],
                explanation: "vs limping population, raise larger (4-5BB) and more frequently to isolate. Build pots with position vs weak ranges."
            },
            {
                question: "Population check-raises flop 4% (GTO is 8%). How should you adjust c-betting?",
                scenario: "Population tendency | Under-check-raising | C-bet frequency | Exploitative play",
                options: [
                    { text: "C-bet less", correct: false },
                    { text: "C-bet more often", correct: true },
                    { text: "C-bet same frequency", correct: false },
                    { text: "Never c-bet", correct: false }
                ],
                explanation: "vs under-check-raising population, c-bet more frequently. They don't punish your c-bets enough, making more bluffs profitable."
            },
            {
                question: "Online population over-folds to turn barrels (70% vs 55% GTO). Exploit?",
                scenario: "Population tendency | Over-folding turns | Barrel frequency | Bluff adjustment",
                options: [
                    { text: "Barrel less", correct: false },
                    { text: "Barrel more with any two cards", correct: true },
                    { text: "Only barrel strong hands", correct: false },
                    { text: "Never barrel", correct: false }
                ],
                explanation: "vs over-folding to turn barrels, barrel more frequently with weak hands. Their over-folding makes bluffs immediately profitable."
            },
            {
                question: "Live players call pre-flop raises 45% (GTO is 25%). Post-flop adjustment?",
                scenario: "Population tendency | Over-calling pre-flop | Post-flop strategy | Value betting",
                options: [
                    { text: "Bluff more post-flop", correct: false },
                    { text: "Value bet thinner and wider", correct: true },
                    { text: "Check more often", correct: false },
                    { text: "Bet smaller", correct: false }
                ],
                explanation: "vs over-calling pre-flop population, value bet wider ranges post-flop. They call light, making thin value bets profitable."
            },
            {
                question: "Population 4-bets only 2% (GTO is 4%). You have QQ facing 3-bet. Adjustment?",
                scenario: "Population tendency | Under-4-betting | Premium pair | 4-bet decision",
                options: [
                    { text: "Always 4-bet QQ", correct: true },
                    { text: "Call more with QQ", correct: false },
                    { text: "Fold QQ sometimes", correct: false },
                    { text: "Play GTO", correct: false }
                ],
                explanation: "vs under-4-betting population, 4-bet QQ more often for value. They don't 4-bet light enough, so you can 4-bet wider for value."
            },
            {
                question: "Micro stakes population calls river bets 80% (GTO is 60%). Bluff frequency?",
                scenario: "Population tendency | Over-calling rivers | Micro stakes | Bluff adjustment",
                options: [
                    { text: "Bluff more", correct: false },
                    { text: "Bluff much less", correct: true },
                    { text: "Bluff same frequency", correct: false },
                    { text: "Never value bet", correct: false }
                ],
                explanation: "vs over-calling population on rivers, bluff much less. They call too light, making bluffs unprofitable but value bets more profitable."
            }
        ]
    },
    {
        id: 44,
        title: "Mental Game & GTO",
        description: "Integrate psychological aspects with optimal poker strategy.",
        duration: "15 min",
        questions: 10,
        content: `
            <p><strong>Mental game</strong> and GTO strategy work together. Emotional control allows you to execute optimal strategies, while GTO provides a framework for confident decision-making.</p>
            
            <h3>Mental Game Benefits of GTO</h3>
            <ul>
                <li><strong>Reduces Tilt:</strong> Knowing you played optimally regardless of results</li>
                <li><strong>Confidence:</strong> Mathematical backing for your decisions</li>
                <li><strong>Process Focus:</strong> Concentrate on decisions, not outcomes</li>
                <li><strong>Variance Acceptance:</strong> Understanding that bad beats are inevitable</li>
            </ul>
            
            <div class="example-box">
                <h4>Mental Game Application</h4>
                <p>You lose with AA vs 72o when opponent hits two pair.</p>
                <p>GTO mindset: "I played optimally getting it in with AA. The result doesn't change that this was the correct decision. Focus on the next hand."</p>
            </div>
        `,
        quiz: [
            {
                question: "You make a GTO-correct fold with AK, opponent shows a bluff. How should you feel?",
                scenario: "Mental game | GTO decision | Opponent shows bluff | Emotional response",
                options: [
                    { text: "Angry - you got bluffed", correct: false },
                    { text: "Satisfied - you made optimal play", correct: true },
                    { text: "Confused - maybe call next time", correct: false },
                    { text: "Tilted - change strategy", correct: false }
                ],
                explanation: "Feel satisfied with optimal play regardless of opponent's hand. GTO decisions are correct based on ranges, not specific holdings. Don't results-orient your strategy."
            },
            {
                question: "You're running bad and want to play looser to 'get even'. What's the GTO mental approach?",
                scenario: "Mental game | Running bad | Tilt control | Strategy discipline",
                options: [
                    { text: "Play looser to catch up", correct: false },
                    { text: "Stick to optimal strategy", correct: true },
                    { text: "Take bigger risks", correct: false },
                    { text: "Change stakes", correct: false }
                ],
                explanation: "Stick to optimal strategy regardless of recent results. Variance is part of poker - changing strategy due to short-term results leads to bigger losses."
            },
            {
                question: "You make a correct GTO fold but feel frustrated. How should you handle this emotion?",
                scenario: "Mental game | Correct decision | Frustration | Emotional control",
                options: [
                    { text: "Change strategy next time", correct: false },
                    { text: "Accept it as part of GTO", correct: true },
                    { text: "Take a break from poker", correct: false },
                    { text: "Play more aggressively", correct: false }
                ],
                explanation: "Accept frustration as part of GTO play. Correct folds sometimes feel bad, but they're mathematically optimal. Focus on process over results."
            },
            {
                question: "You're card dead for 2 hours and feeling impatient. GTO mental approach?",
                scenario: "Mental game | Card dead | Impatience | Discipline",
                options: [
                    { text: "Play looser to get action", correct: false },
                    { text: "Maintain discipline and ranges", correct: true },
                    { text: "Take bigger risks", correct: false },
                    { text: "Bluff more often", correct: false }
                ],
                explanation: "Maintain discipline regardless of card distribution. Being card dead doesn't change optimal ranges. Patience is crucial for GTO success."
            },
            {
                question: "Opponent shows a bluff after you fold. You feel embarrassed. Mental response?",
                scenario: "Mental game | Shown bluff | Embarrassment | Ego management",
                options: [
                    { text: "Call lighter next time", correct: false },
                    { text: "Analyze if fold was correct", correct: true },
                    { text: "Feel angry at opponent", correct: false },
                    { text: "Change your image", correct: false }
                ],
                explanation: "Analyze whether your fold was correct based on ranges and odds. Don't let ego affect future decisions. One result doesn't invalidate good process."
            },
            {
                question: "You're winning big and feeling invincible. How does this affect GTO play?",
                scenario: "Mental game | Big winner | Overconfidence | Risk management",
                options: [
                    { text: "Play more aggressively", correct: false },
                    { text: "Stick to same strategy", correct: true },
                    { text: "Take bigger risks", correct: false },
                    { text: "Move up stakes", correct: false }
                ],
                explanation: "Stick to optimal strategy regardless of results. Winning doesn't change correct play. Overconfidence leads to mistakes and giving back winnings."
            },
            {
                question: "Bad beat puts you on tilt. What's the GTO mental approach?",
                scenario: "Mental game | Bad beat | Tilt control | Emotional regulation",
                options: [
                    { text: "Play more hands to get even", correct: false },
                    { text: "Take a break or quit session", correct: true },
                    { text: "Bet larger to win back", correct: false },
                    { text: "Target the player who beat you", correct: false }
                ],
                explanation: "Take a break when tilted. Emotional decisions deviate from GTO and cost money. Return when you can think clearly and play optimally."
            },
            {
                question: "You're studying GTO but results are poor. Mental approach?",
                scenario: "Mental game | Learning phase | Poor results | Study motivation",
                options: [
                    { text: "Quit studying GTO", correct: false },
                    { text: "Trust the process and continue", correct: true },
                    { text: "Go back to old style", correct: false },
                    { text: "Study less theory", correct: false }
                ],
                explanation: "Trust the learning process. GTO implementation takes time and short-term results don't reflect long-term profitability. Stay committed to improvement."
            },
            {
                question: "Opponent makes a terrible call and wins. Your mental response?",
                scenario: "Mental game | Bad call wins | Variance acceptance | Emotional control",
                options: [
                    { text: "Get angry at their luck", correct: false },
                    { text: "Be happy they made a mistake", correct: true },
                    { text: "Question your own play", correct: false },
                    { text: "Try to punish them", correct: false }
                ],
                explanation: "Be happy when opponents make mistakes, even if they get lucky. Bad calls are profitable for you long-term. Focus on their errors, not short-term results."
            },
            {
                question: "You're in a downswing despite playing well. GTO mental framework?",
                scenario: "Mental game | Downswing | Good play | Variance management",
                options: [
                    { text: "Change your strategy", correct: false },
                    { text: "Focus on decision quality", correct: true },
                    { text: "Take bigger risks", correct: false },
                    { text: "Question GTO theory", correct: false }
                ],
                explanation: "Focus on decision quality during downswings. If you're playing well, results will follow. Variance is temporary, but good process is permanent."
            }
        ]
    },
    {
        id: 45,
        title: "Bankroll Management",
        description: "Protect your poker investment with proper risk management principles.",
        duration: "14 min",
        questions: 10,
        content: `
            <p><strong>Bankroll management</strong> is crucial for long-term poker success. Even perfect GTO play means nothing if you go broke due to poor risk management.</p>
            
            <h3>Bankroll Guidelines</h3>
            <ul>
                <li><strong>Cash Games:</strong> 20-30 buy-ins for your stake</li>
                <li><strong>Tournaments:</strong> 50-100 buy-ins depending on field size</li>
                <li><strong>Move Down:</strong> Drop stakes if bankroll falls below minimum</li>
                <li><strong>Move Up:</strong> Only when you have proper roll for higher stakes</li>
            </ul>
            
            <div class="example-box">
                <h4>Bankroll Example</h4>
                <p>Playing $1/$2 cash games with $100 buy-ins.</p>
                <p>Minimum bankroll: $2,000-$3,000 (20-30 buy-ins)</p>
                <p>If bankroll drops to $1,500, move down to $0.50/$1.00</p>
            </div>
        `,
        quiz: [
            {
                question: "You have $5,000 bankroll. What's the highest cash game stake you should play?",
                scenario: "Bankroll management | Cash games | Stake selection | Risk management",
                options: [
                    { text: "$1/$2 ($200 buy-in)", correct: true },
                    { text: "$2/$5 ($500 buy-in)", correct: false },
                    { text: "$5/$10 ($1000 buy-in)", correct: false },
                    { text: "$0.50/$1 ($100 buy-in)", correct: false }
                ],
                explanation: "With $5,000, you can afford $1/$2 with $200 buy-ins (25 buy-ins). $2/$5 would require $10,000+ bankroll for proper risk management."
            },
            {
                question: "Your tournament bankroll drops from $10,000 to $6,000. You've been playing $100 tournaments. What should you do?",
                scenario: "Bankroll management | Tournaments | Downswing | Stake adjustment",
                options: [
                    { text: "Keep playing $100s", correct: false },
                    { text: "Move down to $60 tournaments", correct: true },
                    { text: "Take a shot at $200s", correct: false },
                    { text: "Quit poker", correct: false }
                ],
                explanation: "With $6,000, you should play $60 tournaments (100 buy-ins). Moving down protects your bankroll during downswings and allows you to continue playing."
            }
        ]
    },
    {
        id: 46,
        title: "Game Selection",
        description: "Choose the most profitable games and seats for maximum win rate.",
        duration: "13 min",
        questions: 10,
        content: `
            <p><strong>Game selection</strong> is often more important than perfect strategy. Playing in the right games can dramatically increase your win rate.</p>
            
            <h3>Game Selection Factors</h3>
            <ul>
                <li><strong>Player Pool:</strong> Look for recreational players and weak regulars</li>
                <li><strong>Stack Depths:</strong> Deeper stacks favor skilled players</li>
                <li><strong>Table Dynamics:</strong> Aggressive vs passive, tight vs loose</li>
                <li><strong>Seat Selection:</strong> Position relative to strong/weak players</li>
            </ul>
            
            <div class="example-box">
                <h4>Game Selection Example</h4>
                <p>Table A: 5 tight regulars, 1 recreational player</p>
                <p>Table B: 3 regulars, 3 recreational players</p>
                <p>Choose Table B - more recreational money in play makes it more profitable despite similar skill level.</p>
            </div>
        `,
        quiz: [
            {
                question: "Two $2/$5 games available. Game A has 4 pros, 2 fish. Game B has 2 pros, 4 fish. Which should you choose?",
                scenario: "Game selection | Table comparison | Player types | Profitability",
                options: [
                    { text: "Game A - fewer total players", correct: false },
                    { text: "Game B - more recreational players", correct: true },
                    { text: "Doesn't matter", correct: false },
                    { text: "Avoid both games", correct: false }
                ],
                explanation: "Choose Game B with more recreational players. More fish means more money entering the ecosystem, making the game more profitable for skilled players."
            },
            {
                question: "You're in seat 3. Aggressive reg in seat 4, loose recreational player in seat 8. Best seat to move to?",
                scenario: "Seat selection | Position advantage | Player types | Table dynamics",
                options: [
                    { text: "Seat 2 - away from reg", correct: false },
                    { text: "Seat 7 - position on fish", correct: true },
                    { text: "Seat 5 - middle position", correct: false },
                    { text: "Stay in seat 3", correct: false }
                ],
                explanation: "Seat 7 gives you position on the recreational player in seat 8. Having position on the weakest player is more valuable than avoiding the reg."
            }
        ]
    },
    {
        id: 47,
        title: "Study Methods",
        description: "Develop effective study routines to continuously improve your GTO game.",
        duration: "16 min",
        questions: 10,
        content: `
            <p><strong>Effective study</strong> is essential for poker improvement. Combine theory, solver work, and hand review for optimal learning.</p>
            
            <h3>Study Components</h3>
            <ul>
                <li><strong>Solver Work:</strong> Study GTO solutions for common spots</li>
                <li><strong>Hand Reviews:</strong> Analyze your played hands for mistakes</li>
                <li><strong>Range Work:</strong> Practice pre-flop and post-flop ranges</li>
                <li><strong>Concept Study:</strong> Learn theoretical foundations</li>
            </ul>
            
            <div class="example-box">
                <h4>Study Schedule Example</h4>
                <p><strong>Daily (30 min):</strong> Review 5-10 hands from previous session</p>
                <p><strong>Weekly (2 hours):</strong> Solver study on specific scenarios</p>
                <p><strong>Monthly:</strong> Comprehensive leak review and strategy updates</p>
            </div>
        `,
        quiz: [
            {
                question: "You lost a big pot with top pair. What's the best study approach?",
                scenario: "Study methods | Hand review | Learning from losses | Analysis approach",
                options: [
                    { text: "Forget it - variance happens", correct: false },
                    { text: "Run it in solver to check decision", correct: true },
                    { text: "Ask friends what they think", correct: false },
                    { text: "Change your strategy immediately", correct: false }
                ],
                explanation: "Run the hand in a solver to see if your decision was correct. Focus on the process, not the result. Solver analysis gives objective feedback on your play."
            },
            {
                question: "You have 1 hour to study. How should you spend it most effectively?",
                scenario: "Study methods | Time management | Efficient learning | Study priorities",
                options: [
                    { text: "Watch poker videos", correct: false },
                    { text: "Review your recent hands", correct: true },
                    { text: "Read poker books", correct: false },
                    { text: "Play more hands", correct: false }
                ],
                explanation: "Hand review is the most effective use of limited study time. Analyzing your actual decisions helps identify specific leaks and improvement areas."
            }
        ]
    },
    {
        id: 48,
        title: "Common Mistakes",
        description: "Identify and avoid the most frequent GTO implementation errors.",
        duration: "14 min",
        questions: 10,
        content: `
            <p><strong>Common GTO mistakes</strong> prevent players from reaching their potential. Recognizing these errors is the first step to avoiding them.</p>
            
            <h3>Frequent GTO Errors</h3>
            <ul>
                <li><strong>Over-Bluffing:</strong> Bluffing too much without proper balance</li>
                <li><strong>Rigid Play:</strong> Following GTO without considering opponent adjustments</li>
                <li><strong>Sizing Mistakes:</strong> Using incorrect bet sizes for the situation</li>
                <li><strong>Range Imbalance:</strong> Not properly balancing value and bluff ranges</li>
            </ul>
            
            <div class="example-box">
                <h4>Common Mistake Example</h4>
                <p>Mistake: Always c-betting 66% pot regardless of board texture</p>
                <p>Correction: Use smaller sizes on dry boards, larger on wet boards. Adjust sizing based on your range advantage.</p>
            </div>
        `,
        quiz: [
            {
                question: "You've been 3-betting 15% from button (GTO is 10%) and getting 4-bet often. What's the mistake?",
                scenario: "Common mistakes | 3-bet frequency | Button play | Over-aggression",
                options: [
                    { text: "Opponents are too tight", correct: false },
                    { text: "You're 3-betting too wide", correct: true },
                    { text: "You should 4-bet more", correct: false },
                    { text: "Nothing wrong", correct: false }
                ],
                explanation: "3-betting 15% from button is too wide. Stick closer to GTO frequencies (10%) to avoid getting exploited by 4-bets. Over-aggression leads to difficult spots."
            },
            {
                question: "You always bet 75% pot with strong hands and 33% pot with bluffs. What's wrong with this approach?",
                scenario: "Common mistakes | Bet sizing | Sizing tells | Range balance",
                options: [
                    { text: "Sizing is too large", correct: false },
                    { text: "Creating exploitable sizing tells", correct: true },
                    { text: "Should bet smaller", correct: false },
                    { text: "Nothing wrong", correct: false }
                ],
                explanation: "Using different sizes for value and bluffs creates exploitable tells. Use similar sizing for both to maintain balance and prevent opponents from reading your hand strength."
            }
        ]
    },
    {
        id: 49,
        title: "Advanced Mathematics",
        description: "Deep dive into the mathematical foundations underlying GTO poker strategy.",
        duration: "19 min",
        questions: 10,
        content: `
            <p><strong>Advanced poker mathematics</strong> provides the foundation for understanding why GTO strategies work and how to calculate optimal plays.</p>
            
            <h3>Key Mathematical Concepts</h3>
            <ul>
                <li><strong>Game Theory:</strong> Nash equilibrium and minimax strategies</li>
                <li><strong>Combinatorics:</strong> Calculating hand combinations and ranges</li>
                <li><strong>Probability Theory:</strong> Equity calculations and variance</li>
                <li><strong>Expected Value:</strong> EV calculations for complex decisions</li>
            </ul>
            
            <div class="example-box">
                <h4>Mathematical Example</h4>
                <p>Pot: $100, opponent bets $75. You need 75/(75+175) = 30% equity to call.</p>
                <p>With A♠K♠ vs their range, you have 35% equity. Call is +EV by $3.75 per decision.</p>
            </div>
        `,
        quiz: [
            {
                question: "Pot is $200, opponent bets $150. What minimum equity do you need to call profitably?",
                scenario: "Poker mathematics | Pot odds | Equity calculation | Break-even point",
                options: [
                    { text: "30%", correct: false },
                    { text: "43%", correct: true },
                    { text: "50%", correct: false },
                    { text: "75%", correct: false }
                ],
                explanation: "Need 150/(150+350) = 150/500 = 30%... wait, that's wrong. Need 150/(150+200) = 150/350 = 43% equity to call profitably."
            },
            {
                question: "You have 15% equity vs opponent's range. Pot is $100, they bet $50. Should you call?",
                scenario: "Poker mathematics | EV calculation | Equity vs pot odds | Decision making",
                options: [
                    { text: "Yes - getting good odds", correct: false },
                    { text: "No - insufficient equity", correct: true },
                    { text: "Depends on position", correct: false },
                    { text: "Always call draws", correct: false }
                ],
                explanation: "You need 50/(50+150) = 25% equity to call. With only 15% equity, calling loses money. Fold and save chips for better spots."
            }
        ]
    },
    {
        id: 44,
        title: "Mental Game & GTO",
        description: "Integrate psychological aspects with optimal poker strategy.",
        duration: "15 min",
        questions: 10,
        content: `
            <p><strong>Mental game</strong> and GTO strategy work together. Emotional control allows you to execute optimal strategies, while GTO provides a framework for confident decision-making.</p>
            
            <h3>Mental Game Benefits of GTO</h3>
            <ul>
                <li><strong>Reduces Tilt:</strong> Knowing you played optimally regardless of results</li>
                <li><strong>Confidence:</strong> Mathematical backing for your decisions</li>
                <li><strong>Process Focus:</strong> Concentrate on decisions, not outcomes</li>
                <li><strong>Variance Acceptance:</strong> Understanding that bad beats are inevitable</li>
            </ul>
            
            <div class="example-box">
                <h4>Mental Game Application</h4>
                <p>You lose with AA vs 72o when opponent hits two pair.</p>
                <p>GTO mindset: "I played optimally getting it in with AA. The result doesn't change that this was the correct decision. Focus on the next hand."</p>
            </div>
        `,
        quiz: [
            {
                question: "You make a GTO-correct fold with AK, opponent shows a bluff. How should you feel?",
                scenario: "Mental game | GTO decision | Opponent shows bluff | Emotional response",
                options: [
                    { text: "Angry - you got bluffed", correct: false },
                    { text: "Satisfied - you made optimal play", correct: true },
                    { text: "Confused - maybe call next time", correct: false },
                    { text: "Tilted - change strategy", correct: false }
                ],
                explanation: "Feel satisfied with optimal play regardless of opponent's hand. GTO decisions are correct based on ranges, not specific holdings. Don't results-orient your strategy."
            },
            {
                question: "You're running bad and want to play looser to 'get even'. What's the GTO mental approach?",
                scenario: "Mental game | Running bad | Tilt control | Strategy discipline",
                options: [
                    { text: "Play looser to catch up", correct: false },
                    { text: "Stick to optimal strategy", correct: true },
                    { text: "Take bigger risks", correct: false },
                    { text: "Change stakes", correct: false }
                ],
                explanation: "Stick to optimal strategy regardless of recent results. Variance is part of poker - changing strategy due to short-term results leads to bigger losses."
            }
        ]
    },
    {
        id: 50,
        title: "Future of GTO",
        description: "Explore the evolution of poker strategy and what lies ahead for GTO theory.",
        duration: "17 min",
        questions: 10,
        content: `
            <p><strong>The future of GTO</strong> continues to evolve with advancing technology, deeper mathematical understanding, and changing player populations.</p>
            
            <h3>GTO Evolution</h3>
            <ul>
                <li><strong>Solver Advancement:</strong> More accurate and faster calculations</li>
                <li><strong>Real-time Analysis:</strong> Live GTO assistance tools</li>
                <li><strong>Population Adaptation:</strong> As players improve, strategies must evolve</li>
                <li><strong>New Formats:</strong> GTO applications to new poker variants</li>
            </ul>
            
            <div class="example-box">
                <h4>Future Trends</h4>
                <p><strong>AI Integration:</strong> Real-time coaching and analysis</p>
                <p><strong>Simplified Solutions:</strong> Easier-to-implement approximations</p>
                <p><strong>Dynamic Adjustment:</strong> Strategies that adapt to opponent tendencies automatically</p>
            </div>
        `,
        quiz: [
            {
                question: "As the poker population becomes more GTO-aware, what should skilled players focus on?",
                scenario: "Future of poker | Population evolution | Strategic adaptation | Skill development",
                options: [
                    { text: "Stick to pure GTO always", correct: false },
                    { text: "Develop better exploitative skills", correct: true },
                    { text: "Play more tournaments", correct: false },
                    { text: "Quit poker", correct: false }
                ],
                explanation: "As players become more GTO-aware, the edge comes from better exploitative adjustments and population reads. Pure GTO becomes baseline, not advantage."
            },
            {
                question: "What's the most important skill for future poker success?",
                scenario: "Future of poker | Skill development | Long-term success | Adaptation",
                options: [
                    { text: "Perfect GTO memorization", correct: false },
                    { text: "Adaptability and learning", correct: true },
                    { text: "Aggressive play", correct: false },
                    { text: "Tight play", correct: false }
                ],
                explanation: "Adaptability and continuous learning are most important. As the game evolves rapidly, players who can adapt and learn new concepts will have the biggest advantage."
            }
        ]
    }
];
