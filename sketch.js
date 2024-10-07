let posX, posY;
let velX, velY;
let diametro;
let rad;
let bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rad = ceil(random(20, 50));
  diametro = rad * 2;

  posX = random(rad, width - rad);
  posY = random(rad, height - rad);

  velX = random(5, 20);
  velY = random(5, 20);

  bgColor = color(20); // Inicializar el color de fondo
}

function draw() {
  background(bgColor);
  fill(255);
  noStroke();
  posX += velX;
  posY += velY;
  circle(posX, posY, diametro);

  // Cambiar de dirección y color de fondo al rebotar
  if (posX > width - rad || posX < rad) {
    velX *= -1;
    cambiarColorFondo();
  }
  if (posY > height - rad || posY < rad) {
    velY *= -1;
    cambiarColorFondo();
  }
}

function cambiarColorFondo() {
  bgColor = color(random(255), random(255), random(255)); // Generar un color aleatorio
}
