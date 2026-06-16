// Lista ampliada con más frases románticas
const messages = [
    "Te amo muchísimo ❤️",
    "Gracias por estar en mi vida 🌟",
    "Eres mi persona favorita 💕",
    "Juntos por siempre 🥰",
    "Tú y yo, para siempre 💞",
    "Tu sonrisa me ilumina 💫",
    "Eres lo mejor que me ha pasado 🤩",
    "Cada momento contigo es mágico ✨",
    "Siempre pienso en ti 💭",
    "Mi corazón es tuyo 💘",
    "Eres mi pensamiento favorito 🤔💗",
    "Haces mi mundo más bonito 🌍✨",
    "Mi lugar favorito es a tu lado 📍❤️",
    "Eres mi sol en días nublados ☀️☁️",
    "Te elijo hoy y siempre 🌹",
    "Contigo todo es mejor 🧸💖",
    "Eres el dueño de mis sonrisas 😊💞",
    "Cada día te amo más 🥰📈"
];

// Tipos de corazones para la lluvia
const heartsTypes = ["❤️", "💖", "💝", "💕", "💘", "💓"];

// --- 1. LÓGICA PARA LAS FRASES FLOTANTES ALEATORIAS ---
function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("hearts");

    const randomIndex = Math.floor(Math.random() * messages.length);
    bubble.innerText = messages[randomIndex];

    // Detectar si es móvil para recortar el área horizontal y que no se corte el texto
    const isMobile = window.innerWidth <= 480;
    const randomX = Math.random() * (isMobile ? 65 : 80); 
    const randomY = Math.random() * 85; 
    
    bubble.style.left = `${randomX}%`;
    bubble.style.top = `${randomY}%`;
    bubble.style.position = "absolute";
    bubble.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
    bubble.style.opacity = "0";
    bubble.style.transform = "scale(0.5)";

    document.body.appendChild(bubble);

    // Animación de aparición suave
    setTimeout(() => {
        bubble.style.opacity = "1";
        bubble.style.transform = "scale(1)";
    }, 50);

    // Animación de desaparición suave
    setTimeout(() => {
        bubble.style.opacity = "0";
        bubble.style.transform = "scale(0.8)";
    }, 2500);

    // Eliminar completamente el elemento del HTML
    setTimeout(() => { 
        bubble.remove(); 
    }, 3500);
}

// Las frases aparecen continuamente cada 400ms
setInterval(createTextBubble, 400);


// --- 2. LÓGICA PARA LA LLUVIA DE CORAZONES (Ráfagas de 5s activo, 5s pausado) ---
let fallingInterval = null;

function createFallingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    
    heart.innerText = heartsTypes[Math.floor(Math.random() * heartsTypes.length)];
    heart.style.left = `${Math.random() * 100}%`;
    
    // Tamaños aleatorios para dar profundidad (15px a 35px)
    const size = Math.random() * 20 + 15;
    heart.style.fontSize = `${size}px`;
    
    // Velocidades de caída aleatorias (3 a 6 segundos)
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = `${duration}s`;

    document.body.appendChild(heart);

    setTimeout(() => { 
        heart.remove(); 
    }, duration * 1000);
}

function startHeartStorm() {
    // Inicia la ráfaga creando un corazón cada 150ms
    fallingInterval = setInterval(createFallingHeart, 150);
    
    // Detiene la creación de corazones a los 5 segundos
    setTimeout(() => {
        clearInterval(fallingInterval);
    }, 5000);
}

// Ejecuta el ciclo: ráfaga al cargar y se repite cada 10 segundos (5s activo + 5s apagado)
startHeartStorm();
setInterval(startHeartStorm, 10000);
