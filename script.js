// Lista de mensajes ampliada con más frases románticas
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

// Arreglo con diferentes estilos de corazones para la lluvia
const heartsTypes = ["❤️", "💖", "💝", "💕", "💘", "💓"];

// --- 1. LÓGICA PARA LAS FRASES FLOTANTES ---
function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("hearts"); // Mantiene la clase de tu CSS

    const randomIndex = Math.floor(Math.random() * messages.length);
    bubble.innerText = messages[randomIndex];

    // Aparecen en cualquier punto de la pantalla
    const randomX = Math.random() * 85; 
    const randomY = Math.random() * 85; 
    
    bubble.style.left = `${randomX}%`;
    bubble.style.top = `${randomY}%`;
    bubble.style.position = "absolute";
    bubble.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
    bubble.style.opacity = "0";
    bubble.style.transform = "scale(0.5)";

    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.style.opacity = "1";
        bubble.style.transform = "scale(1)";
    }, 50);

    setTimeout(() => {
        bubble.style.opacity = "0";
        bubble.style.transform = "scale(0.8)";
    }, 2500);

    setTimeout(() => { bubble.remove(); }, 3500);
}

// Las frases aparecen continuamente cada 400ms
setInterval(createTextBubble, 400);


// --- 2. LÓGICA PARA LA LLUVIA DE CORAZONES (Cae 5s, para 5s) ---
let fallingInterval = null;

function createFallingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    
    // Elige un emoji de corazón aleatorio
    heart.innerText = heartsTypes[Math.floor(Math.random() * heartsTypes.length)];
    
    // Posición horizontal aleatoria en el techo (0% al 100%)
    heart.style.left = `${Math.random() * 100}%`;
    
    // Tamaño aleatorio para dar profundidad (de 15px a 35px)
    const size = Math.random() * 20 + 15;
    heart.style.fontSize = `${size}px`;
    
    // Duración de caída aleatoria (entre 3 y 6 segundos) para que no caigan todos iguales
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = `${duration}s`;

    document.body.appendChild(heart);

    // Se elimina al terminar de caer
    setTimeout(() => { heart.remove(); }, duration * 1000);
}

function startHeartStorm() {
    // 1. Activa la lluvia: crea un corazón cada 150 milisegundos (caen bastantes)
    fallingInterval = setInterval(createFallingHeart, 150);
    
    // 2. Apaga la lluvia exactamente a los 5 segundos (5000ms)
    setTimeout(() => {
        clearInterval(fallingInterval);
    }, 5000);
}

// Ejecuta el ciclo: Lluvia por 5 segundos, se detiene, y a los 10 segundos inicia otra vez
startHeartStorm(); // Primera ráfaga al cargar
setInterval(startHeartStorm, 10000); // Se repite el ciclo completo cada 10 segundos (5 activo + 5 pausado)