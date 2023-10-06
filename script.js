const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const sentences = [
    "Czy to już koniec miesiąca?",
    "Nie martw się, to tylko przesunięcie księgowe!",
    // ... (tutaj dodaj resztę zdań)
    "Księgowy w sklepie: Czy mogę prosić o fakturę VAT?"
];

class Drop {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() + 1;
        this.text = sentences[Math.floor(Math.random() * sentences.length)];
    }

    draw() {
        ctx.fillText(this.text, this.x, this.y);
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = 0;
            this.text = sentences[Math.floor(Math.random() * sentences.length)];
        }
    }
}

const drops = [];
for (let i = 0; i < 100; i++) {
    drops.push(new Drop());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let drop of drops) {
        drop.draw();
    }
    requestAnimationFrame(animate);
}

animate();
