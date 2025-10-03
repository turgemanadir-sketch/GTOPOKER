// Learning Phases Configuration
const learningPhases = [
    {
        id: 1,
        name: "Fundamentals",
        description: "Master the core concepts of GTO poker strategy",
        lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        unlockMessage: "🎉 Congratulations! You've mastered the fundamentals of GTO poker!",
        nextPhasePreview: "Next: Advanced Concepts - Learn ICM, multi-way pots, and stack-specific strategies",
        icon: "🎯"
    },
    {
        id: 2,
        name: "Advanced Concepts", 
        description: "Dive deeper into complex GTO scenarios and stack considerations",
        lessons: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        unlockMessage: "🏆 Amazing! You've conquered advanced GTO concepts!",
        nextPhasePreview: "Next: Specific Situations - Master position-specific play and format differences",
        icon: "🧠"
    },
    {
        id: 3,
        name: "Specific Situations",
        description: "Master position-specific play and format considerations", 
        lessons: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        unlockMessage: "🎯 Excellent! You're now a situational poker expert!",
        nextPhasePreview: "Next: Advanced Techniques - Learn range merging, overbetting, and exploitative play",
        icon: "🎲"
    },
    {
        id: 4,
        name: "Advanced Techniques",
        description: "Master sophisticated betting patterns and range construction",
        lessons: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 
        unlockMessage: "🚀 Outstanding! You've mastered advanced poker techniques!",
        nextPhasePreview: "Next: Master Level - Solver analysis, mental game, and cutting-edge strategy",
        icon: "⚡"
    },
    {
        id: 5,
        name: "Master Level",
        description: "Achieve poker mastery with solver analysis and advanced theory",
        lessons: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
        unlockMessage: "👑 LEGENDARY! You are now a GTO poker master!",
        nextPhasePreview: "You've completed the entire curriculum - time to dominate the tables!",
        icon: "👑"
    }
];

// Phase completion detection
function checkPhaseCompletion() {
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || [];
    
    for (let phase of learningPhases) {
        const phaseCompleted = phase.lessons.every(lessonId => completedLessons.includes(lessonId));
        const phaseUnlocked = localStorage.getItem(`phase_${phase.id}_unlocked`) === 'true';
        
        if (phaseCompleted && !phaseUnlocked) {
            showPhaseCompletion(phase);
            localStorage.setItem(`phase_${phase.id}_unlocked`, 'true');
            return;
        }
    }
}

// Enhanced confetti with poker card emojis
function triggerPhaseCompletionConfetti() {
    let confettiContainer = document.querySelector('.confetti-container');
    if (!confettiContainer) {
        confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        document.body.appendChild(confettiContainer);
    }

    confettiContainer.innerHTML = '';

    const pokerEmojis = ['🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂨', '🂩', '🂪', '🂫', '🂬', '🂭', '🂮'];
    const celebrationEmojis = ['🎉', '🎊', '✨', '🌟', '💫', '🎈', '🎁', '🏆', '👑', '💎'];
    const shapeClasses = ['confetti-square', 'confetti-circle', 'confetti-diamond', 'confetti-triangle', 'confetti-star'];

    for (let i = 0; i < 40; i++) {
        if (Math.random() > 0.3) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece phase-confetti';
            piece.textContent = Math.random() > 0.4 ? 
                pokerEmojis[Math.floor(Math.random() * pokerEmojis.length)] :
                celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
            piece.style.left = Math.random() * 100 + '%';
            piece.style.animationDelay = Math.random() * 3 + 's';
            piece.style.animationDuration = (3 + Math.random() * 2) + 's';
            confettiContainer.appendChild(piece);
        }
        
        const shape = document.createElement('div');
        const shapeClass = shapeClasses[Math.floor(Math.random() * shapeClasses.length)];
        shape.className = `confetti-shape ${shapeClass}`;
        shape.style.left = Math.random() * 100 + '%';
        shape.style.animationDelay = Math.random() * 3 + 's';
        shape.style.animationDuration = (4 + Math.random() * 1.5) + 's';
        confettiContainer.appendChild(shape);
    }

    setTimeout(() => {
        if (confettiContainer && confettiContainer.parentNode) {
            confettiContainer.remove();
        }
    }, 8000);
}

// Show phase completion celebration
function showPhaseCompletion(phase) {
    // Create phase completion modal
    const modal = document.createElement('div');
    modal.className = 'phase-completion-modal';
    modal.innerHTML = `
        <div class="phase-completion-content">
            <div class="phase-completion-header">
                <div class="phase-icon">${phase.icon}</div>
                <h2>Phase ${phase.id} Complete!</h2>
                <h3>${phase.name}</h3>
            </div>
            
            <div class="phase-stats">
                <div class="stat-item">
                    <span class="stat-number">${phase.lessons.length}</span>
                    <span class="stat-label">Lessons Mastered</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${phase.lessons.length * 10}</span>
                    <span class="stat-label">Questions Answered</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${Math.round((phase.id / 5) * 100)}%</span>
                    <span class="stat-label">Course Progress</span>
                </div>
            </div>
            
            <div class="phase-message">
                <p>${phase.unlockMessage}</p>
            </div>
            
            <div class="next-phase-preview">
                <h4>What's Next?</h4>
                <p>${phase.nextPhasePreview}</p>
            </div>
            
            <button class="continue-btn" onclick="closePhaseCompletion()">
                Continue Learning 🚀
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Trigger enhanced confetti with poker cards
    triggerPhaseCompletionConfetti();
    
    // Auto-close after 10 seconds
    setTimeout(() => {
        if (document.body.contains(modal)) {
            closePhaseCompletion();
        }
    }, 10000);
}

// Close phase completion modal
function closePhaseCompletion() {
    const modal = document.querySelector('.phase-completion-modal');
    if (modal) {
        modal.remove();
    }
    
    // Refresh lessons display to show newly unlocked content
    if (typeof renderLessons !== 'undefined') {
        renderLessons();
    }
}
