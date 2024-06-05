let bubbles = [];
let competencias = [
    {title: 'Gestão de Tráfego pago', details: 'Meta ads e Google Ads para Captação e Venda: Negócio local, Afiliado/Produtor, E-commerce, Lançamentos'},
    {title: 'Social media e branding', details: 'Instagram e YouTube: Estratégia de conteúdo para criação de Posts e Vídeo Estratégicos para Crescimento, Construção de Audiência, Captação e Venda'},
    {title: 'Habilidades de Edição de Imagem e Vídeos', details: ''},
    {title: 'Copywritting para posts, páginas e anúncios', details: ''},
    {title: 'Programação', details: 'Longa experiência com programação, principalmente python, C e desenvolvimento Web'},
    {title: 'Idiomas', details: '🇧🇷 Português (Nativo), 🇺🇸 Inglês (Avançado), 🇪🇸 Espanhol e 🇮🇹 Italiano (Básico)'}
];

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('competencias-box');
    for (let i = 0; i < competencias.length; i++) {
        bubbles.push(new Bubble(random(width), random(height), competencias[i]));
    }
}

function draw() {
    background(255);
    for (let bubble of bubbles) {
        bubble.move();
        bubble.checkCollision();
        bubble.display();
    }
}

class Bubble {
    constructor(x, y, competencia) {
        this.x = x;
        this.y = y;
        this.competencia = competencia;
        this.radius = 50;
        this.vx = random(-2, 2);
        this.vy = random(-2, 2);
        this.expanded = false;
    }

    move() {
        if (!this.expanded) {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x > width - this.radius || this.x < this.radius) this.vx *= -1;
            if (this.y > height - this.radius || this.y < this.radius) this.vy *= -1;
        }
    }

    checkCollision() {
        for (let other of bubbles) {
            if (other != this) {
                let d = dist(this.x, this.y, other.x, other.y);
                if (d < this.radius + other.radius) {
                    let angle = atan2(this.y - other.y, this.x - other.x);
                    this.vx = cos(angle) * 2;
                    this.vy = sin(angle) * 2;
                }
            }
        }
    }

    display() {
        noStroke();
        fill(random(255), random(255), random(255), 200);
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);

        fill(0);
        textAlign(CENTER, CENTER);
        text(this.competencia.title, this.x, this.y);

        if (this.expanded) {
            fill(255);
            rect(this.x - 100, this.y + this.radius, 200, 100);
            fill(0);
            textSize(12);
            textAlign(LEFT, TOP);
            text(this.competencia.details, this.x - 90, this.y + this.radius + 10);
        }
    }

    mouseOver() {
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.radius) {
            this.expanded = true;
            this.vx = 0;
            this.vy = 0;
        } else {
            this.expanded = false;
        }
    }
}

function mouseMoved() {
    for (let bubble of bubbles) {
        bubble.mouseOver();
    }
}
