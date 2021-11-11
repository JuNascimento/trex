// crio as variaveis
var trex
var trexCorrendo
var bordas


// serve para precarregar imagens/animacoes/sons
function preload(){
    trexCorrendo = loadAnimation('trex1.png', 'trex2.png', 'trex3.png')
}


// serve pra fazer a configuracao inicial (só é executada 1 vez quando o jogo começar)
function setup() {
    createCanvas(600, 200)

    trex = createSprite(50, 150, 20, 50)
    trex.addAnimation('correndo', trexCorrendo)

    bordas = createEdgeSprites()
}

// serve para fazer o jogo funcionar o tempo todo (é executada o tempo todo, infinitamente até eu parar o jogo)
function draw() {
    background('white')

    if (keyDown('space')) {
        trex.velocityY = -10
    }

    trex.velocityY = trex.velocityY + 0.5

    trex.collide(bordas[3])

    drawSprites()
}
