<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { texts } from '../lang.js'
import { defineProps } from 'vue'

const canvas = ref(null);
const gridSize = 20;
const tileCount = 20;

// État du jeu
const snake = ref([{ x: 10, y: 10 }]);
const velocity = ref({ x: 0, y: 0 });
const food = ref({ x: 15, y: 15 });
const score = ref(0);
const highScore = ref(parseInt(localStorage.getItem('snakeHighScore')) || 0);
const level = ref(1);
const gameSpeed = ref(100);
const isPaused = ref(false);
const isGameOver = ref(false);
const isPlaying = ref(false);

let gameLoop = null;
let ctx = null;
const props = defineProps({
  lang: {
    type: String,
    default: 'fr'
  }
})

const currentTexts = texts[props.lang]

// Détection mobile
const isMobile = ref(false)

onMounted(() => {
    isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
})

// Contrôles tactiles
const moveUp = () => {
    if (!isGameOver.value && !isPaused.value && isPlaying.value && velocity.value.y === 0) {
        velocity.value = { x: 0, y: -1 }
    }
}

const moveDown = () => {
    if (!isGameOver.value && !isPaused.value && isPlaying.value && velocity.value.y === 0) {
        velocity.value = { x: 0, y: 1 }
    }
}

const moveLeft = () => {
    if (!isGameOver.value && !isPaused.value && isPlaying.value && velocity.value.x === 0) {
        velocity.value = { x: -1, y: 0 }
    }
}

const moveRight = () => {
    if (!isGameOver.value && !isPaused.value && isPlaying.value && velocity.value.x === 0) {
        velocity.value = { x: 1, y: 0 }
    }
}

// Badges calculés
const badges = computed(() => {
    const result = [];
    if (score.value >= 100) result.push('🏆 Champion');
    if (score.value >= 50) result.push('⭐ Pro');
    if (level.value >= 3) result.push('🚀 Rapide');
    if (score.value === highScore.value && score.value > 0) {
        result.push('👑 Nouveau Record');
    }
    return result;
});

// Contrôles clavier
const handleKeyPress = (e) => {
    if (isGameOver.value || isPaused.value || !isPlaying.value) return;

    const key = e.key.toLowerCase();
    const vel = velocity.value;

    if ((key === 'arrowup' || key === 'z') && vel.y === 0) {
        velocity.value = { x: 0, y: -1 };
    } else if ((key === 'arrowdown' || key === 's') && vel.y === 0) {
        velocity.value = { x: 0, y: 1 };
    } else if ((key === 'arrowleft' || key === 'q') && vel.x === 0) {
        velocity.value = { x: -1, y: 0 };
    } else if ((key === 'arrowright' || key === 'd') && vel.x === 0) {
        velocity.value = { x: 1, y: 0 };
    }
};

// Placer la nourriture
const placeFood = () => {
    const newFood = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
    };

    // Vérifier collision avec serpent
    const onSnake = snake.value.some(s => s.x === newFood.x && s.y === newFood.y);
    if (onSnake) {
        placeFood();
    } else {
        food.value = newFood;
    }
};

// Dessiner le jeu
const draw = () => {
    if (!ctx) return;

    // Background avec grille
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);

    // Grille
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.value.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.value.width, i * gridSize);
        ctx.stroke();
    }

    // Serpent
    snake.value.forEach((segment, index) => {
        const gradient = ctx.createLinearGradient(
            segment.x * gridSize,
            segment.y * gridSize,
            segment.x * gridSize + gridSize,
            segment.y * gridSize + gridSize
        );

        if (index === 0) {
            gradient.addColorStop(0, '#00d9ff');
            gradient.addColorStop(1, '#0099cc');
        } else {
            const opacity = 1 - (index / snake.value.length) * 0.5;
            gradient.addColorStop(0, `rgba(0, 217, 255, ${opacity})`);
            gradient.addColorStop(1, `rgba(0, 153, 204, ${opacity})`);
        }

        ctx.fillStyle = gradient;
        ctx.fillRect(
            segment.x * gridSize + 1,
            segment.y * gridSize + 1,
            gridSize - 2,
            gridSize - 2
        );

        // Brillance
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fillRect(
            segment.x * gridSize + 2,
            segment.y * gridSize + 2,
            gridSize - 8,
            4
        );
    });

    // Nourriture
    const foodGradient = ctx.createRadialGradient(
        food.value.x * gridSize + gridSize / 2,
        food.value.y * gridSize + gridSize / 2,
        0,
        food.value.x * gridSize + gridSize / 2,
        food.value.y * gridSize + gridSize / 2,
        gridSize / 2
    );
    foodGradient.addColorStop(0, '#ff6b6b');
    foodGradient.addColorStop(1, '#e94560');

    ctx.fillStyle = foodGradient;
    ctx.beginPath();
    ctx.arc(
        food.value.x * gridSize + gridSize / 2,
        food.value.y * gridSize + gridSize / 2,
        gridSize / 2 - 2,
        0,
        Math.PI * 2
    );
    ctx.fill();

    ctx.strokeStyle = 'rgba(233, 69, 96, 0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();
};

// Update du jeu
const gameUpdate = () => {
    if (isPaused.value || isGameOver.value) return;

    const head = {
        x: snake.value[0].x + velocity.value.x,
        y: snake.value[0].y + velocity.value.y
    };

    // Collision murs
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        endGame();
        return;
    }

    // Collision corps
    if (snake.value.some(s => s.x === head.x && s.y === head.y)) {
        endGame();
        return;
    }

    snake.value.unshift(head);

    // Manger nourriture
    if (head.x === food.value.x && head.y === food.value.y) {
        score.value += 10;

        // Augmenter niveau
        if (score.value % 50 === 0) {
            level.value++;
            gameSpeed.value = Math.max(50, gameSpeed.value - 10);
            clearInterval(gameLoop);
            gameLoop = setInterval(gameUpdate, gameSpeed.value);
        }

        placeFood();
    } else {
        snake.value.pop();
    }

    draw();
};

// Fin du jeu
const endGame = () => {
    isGameOver.value = true;
    isPlaying.value = false;
    clearInterval(gameLoop);

    if (score.value > highScore.value) {
        highScore.value = score.value;
        localStorage.setItem('snakeHighScore', score.value);
    }
};

// Démarrer
const startGame = () => {
    if (!isPlaying.value && !isGameOver.value) {
        isPlaying.value = true;
        velocity.value = { x: 1, y: 0 };
        gameLoop = setInterval(gameUpdate, gameSpeed.value);
    }
};

// Pause
const togglePause = () => {
    isPaused.value = !isPaused.value;
};

// Reset
const resetGame = () => {
    clearInterval(gameLoop);
    snake.value = [{ x: 10, y: 10 }];
    velocity.value = { x: 0, y: 0 };
    food.value = { x: 15, y: 15 };
    score.value = 0;
    level.value = 1;
    gameSpeed.value = 100;
    isPaused.value = false;
    isGameOver.value = false;
    isPlaying.value = false;
    draw();
};

// Lifecycle
onMounted(() => {
    ctx = canvas.value.getContext('2d');
    draw();
    window.addEventListener('keydown', handleKeyPress);
    isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
});

onUnmounted(() => {
    clearInterval(gameLoop);
    window.removeEventListener('keydown', handleKeyPress);
});
</script>

<template>
    <div id="app">
        <h1>Snake Game Vue</h1>
        <p class="subtitle">{{ currentTexts.SecretPageH1 }}</p>
        <div class="game-container">
            <div class="stats">
                <div class="stat-item">
                    <div class="stat-label">{{ currentTexts.Score }}</div>
                    <div class="stat-value">{{ score }}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">{{ currentTexts.record }}</div>
                    <div class="stat-value">{{ highScore }}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">{{ currentTexts.Level }}</div>
                    <div class="stat-value">{{ level }}</div>
                </div>
            </div>

            <canvas ref="canvas" width="400" height="400"></canvas>

            <div class="controls">
                <button class="btn-primary" @click="startGame" :disabled="isPlaying">
                    {{ isPlaying ? currentTexts.InProgress : currentTexts.start }}
                </button>
                <button class="btn-secondary" @click="togglePause" :disabled="!isPlaying || isGameOver">
                    {{ isPaused ? currentTexts.resume : currentTexts.pause }}
                </button>
                <button class="btn-secondary" @click="resetGame">
                    {{ currentTexts.reset }}
                </button>
            </div>
        </div>

        <div class="instructions">
            <h3>{{ currentTexts.controls }}</h3>
            <p>
                <span class="key-hint">↑</span>
                <span class="key-hint">↓</span>
                <span class="key-hint">←</span>
                <span class="key-hint">→</span>
                /
                <span class="key-hint">Z</span>
                <span class="key-hint">Q</span>
                <span class="key-hint">S</span>
                <span class="key-hint">D</span>
            </p>
            <p style="margin-top: 10px;">{{ currentTexts.instructions }}</p>
        </div>

        <!-- Contrôles tactiles pour mobile -->
        <div v-if="isMobile" class="mobile-controls">
            <div class="d-pad">
                <button class="d-pad-btn up" @click="moveUp" :disabled="!isPlaying || isGameOver || isPaused">
                    <span>↑</span>
                </button>
                <div class="d-pad-middle">
                    <button class="d-pad-btn left" @click="moveLeft" :disabled="!isPlaying || isGameOver || isPaused">
                        <span>←</span>
                    </button>
                    <div class="d-pad-center"></div>
                    <button class="d-pad-btn right" @click="moveRight" :disabled="!isPlaying || isGameOver || isPaused">
                        <span>→</span>
                    </button>
                </div>
                <button class="d-pad-btn down" @click="moveDown" :disabled="!isPlaying || isGameOver || isPaused">
                    <span>↓</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
:root {
    --color-bg-dark: #0f0f1e;
    --color-bg-light: #1a1f3a;
    --color-surface: #252b48;
    --color-surface-light: #2d3561;
    --color-primary: #5b5fc7;
    --color-primary-dark: #4a4eb8;
    --color-accent: #ff6584;
    --color-accent-glow: #ff4d73;
    --color-success: #26e7a6;
    --color-success-glow: #1fd49b;
    --color-warning: #ffd93d;
    --color-text: #f0f4f8;
    --color-text-dim: #a8b2c0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    background: radial-gradient(ellipse at top, var(--color-bg-light) 0%, var(--color-bg-dark) 100%);
    background-attachment: fixed;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-text);
    padding: 40px 20px;
    position: relative;
    overflow-x: hidden;
}

#app::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
        radial-gradient(circle at 20% 30%, rgba(91, 95, 199, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(255, 101, 132, 0.15) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
}

#app > * {
    position: relative;
    z-index: 1;
}

h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 15px;
    background: linear-gradient(135deg, var(--color-success) 0%, var(--color-primary) 50%, var(--color-accent) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    text-shadow: 0 0 40px rgba(38, 231, 166, 0.3);
    letter-spacing: -1px;
    animation: titlePulse 3s ease-in-out infinite;
}

@keyframes titlePulse {
    0%, 100% {
        filter: drop-shadow(0 0 20px rgba(38, 231, 166, 0.4)) brightness(1);
    }
    50% {
        filter: drop-shadow(0 0 40px rgba(255, 101, 132, 0.6)) brightness(1.1);
    }
}

.subtitle {
    font-size: 1.15rem;
    font-weight: 500;
    color: var(--color-text-dim);
    margin-bottom: 40px;
    letter-spacing: 0.5px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.game-container {
    background: linear-gradient(145deg, var(--color-surface) 0%, var(--color-surface-light) 100%);
    border-radius: 24px;
    padding: 40px;
    box-shadow:
        0 20px 60px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(255, 255, 255, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    margin-bottom: 30px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
    max-width: 560px;
}

.game-container:hover {
    box-shadow:
        0 25px 70px rgba(0, 0, 0, 0.6),
        0 0 0 1px rgba(255, 255, 255, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    gap: 15px;
}

.stat-item {
    flex: 1;
    background: linear-gradient(135deg, rgba(91, 95, 199, 0.2) 0%, rgba(91, 95, 199, 0.05) 100%);
    padding: 20px;
    border-radius: 16px;
    border: 1px solid rgba(91, 95, 199, 0.3);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.stat-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--color-success), var(--color-primary));
    opacity: 0;
    transition: opacity 0.3s ease;
}

.stat-item:hover {
    transform: translateY(-3px);
    border-color: var(--color-primary);
    box-shadow: 0 10px 30px rgba(91, 95, 199, 0.3);
}

.stat-item:hover::before {
    opacity: 1;
}

.stat-label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--color-text-dim);
    margin-bottom: 8px;
}

.stat-value {
    font-size: 2.2rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--color-success) 0%, var(--color-success-glow) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    line-height: 1;
}

canvas {
    border: 2px solid rgba(255, 101, 132, 0.3);
    border-radius: 16px;
    background: #0a0a0a;
    display: block;
    margin: 25px auto;
    box-shadow:
        0 0 60px rgba(255, 101, 132, 0.2),
        0 10px 40px rgba(0, 0, 0, 0.5),
        inset 0 0 0 1px rgba(255, 255, 255, 0.03);
    transition: all 0.3s ease;
}

canvas:hover {
    border-color: rgba(255, 101, 132, 0.5);
    box-shadow:
        0 0 80px rgba(255, 101, 132, 0.3),
        0 10px 50px rgba(0, 0, 0, 0.6);
}

.controls {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 25px;
    flex-wrap: wrap;
}

button {
    padding: 14px 32px;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
}

button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

button:hover::before {
    width: 300px;
    height: 300px;
}

.btn-primary {
    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-glow) 100%);
    color: white;
    border: 2px solid transparent;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow:
        0 10px 30px rgba(255, 101, 132, 0.4),
        0 0 20px rgba(255, 101, 132, 0.3);
}

.btn-primary:active {
    transform: translateY(-1px);
}

.btn-secondary {
    background: rgba(91, 95, 199, 0.2);
    color: var(--color-success);
    border: 2px solid var(--color-primary);
    backdrop-filter: blur(10px);
}

.btn-secondary:hover {
    background: var(--color-primary);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(91, 95, 199, 0.4);
}

button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none !important;
}

button:disabled:hover::before {
    width: 0;
    height: 0;
}

.instructions {
    margin-top: 30px;
    padding: 30px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    max-width: 560px;
}

.instructions h3 {
    color: var(--color-accent);
    margin-bottom: 15px;
    font-size: 1.3rem;
    font-weight: 700;
}

.instructions p {
    line-height: 1.8;
    color: var(--color-text-dim);
}

.key-hint {
    display: inline-block;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    padding: 8px 14px;
    border-radius: 8px;
    margin: 5px;
    font-weight: 700;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow:
        0 4px 12px rgba(91, 95, 199, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transition: all 0.2s ease;
}

.key-hint:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 6px 16px rgba(91, 95, 199, 0.5);
}

.game-over-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.92);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.game-over-content {
    background: linear-gradient(145deg, var(--color-surface) 0%, var(--color-surface-light) 100%);
    padding: 50px 60px;
    border-radius: 24px;
    text-align: center;
    border: 2px solid var(--color-accent);
    box-shadow:
        0 0 100px rgba(255, 101, 132, 0.5),
        0 20px 60px rgba(0, 0, 0, 0.8),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    animation: popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    max-width: 500px;
}

@keyframes popIn {
    0% {
        transform: scale(0.5) rotate(-5deg);
        opacity: 0;
    }
    70% {
        transform: scale(1.05) rotate(2deg);
    }
    100% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
    }
}

.game-over-content h2 {
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-warning) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 25px;
    text-shadow: 0 0 40px rgba(255, 101, 132, 0.5);
}

.final-score {
    font-size: 4rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--color-success) 0%, var(--color-primary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 30px 0;
    animation: scoreCount 0.8s ease-out;
}

@keyframes scoreCount {
    from {
        transform: scale(0);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

.badge {
    display: inline-block;
    padding: 10px 20px;
    background: linear-gradient(135deg, var(--color-warning) 0%, #ffb800 100%);
    color: #1a1a2e;
    border-radius: 24px;
    font-weight: 700;
    font-size: 0.9rem;
    margin: 12px 6px;
    box-shadow:
        0 8px 20px rgba(255, 217, 61, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.5);
    animation: badgeBounce 2s ease-in-out infinite;
    border: 2px solid rgba(255, 255, 255, 0.3);
}

@keyframes badgeBounce {
    0%, 100% {
        transform: translateY(0) scale(1);
    }
    50% {
        transform: translateY(-8px) scale(1.05);
    }
}

/* Contrôles tactiles mobile */
.mobile-controls {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.d-pad {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 20px;
    background: linear-gradient(145deg, rgba(37, 43, 72, 0.6) 0%, rgba(45, 53, 97, 0.6) 100%);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.d-pad-middle {
    display: flex;
    align-items: center;
    gap: 8px;
}

.d-pad-center {
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, rgba(91, 95, 199, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    border: 2px solid rgba(91, 95, 199, 0.2);
}

.d-pad-btn {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    color: white;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow:
        0 4px 15px rgba(91, 95, 199, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    -webkit-tap-highlight-color: transparent;
    user-select: none;
}

.d-pad-btn:active:not(:disabled) {
    transform: scale(0.95);
    box-shadow:
        0 2px 8px rgba(91, 95, 199, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
}

.d-pad-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.d-pad-btn span {
    pointer-events: none;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

@media (max-width: 600px) {
    h1 {
        font-size: 2.5rem;
    }

    .game-container {
        padding: 25px 20px;
    }

    .stats {
        flex-direction: column;
        gap: 10px;
    }

    .stat-item {
        padding: 15px;
    }

    .stat-value {
        font-size: 1.8rem;
    }

    canvas {
        max-width: 100%;
        height: auto;
    }

    .controls {
        flex-direction: column;
    }

    button {
        width: 100%;
    }

    .d-pad-btn {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
    }

    .d-pad-center {
        width: 50px;
        height: 50px;
    }

    .game-over-content {
        padding: 35px 30px;
        margin: 20px;
    }

    .game-over-content h2 {
        font-size: 2rem;
    }

    .final-score {
        font-size: 3rem;
    }
}

</style>

