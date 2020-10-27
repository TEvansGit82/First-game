const gameState = {
}

function preload() {
  this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
}

function create() {
  gameState.codey = this.add.sprite(50, 50, 'codey');
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (gameState.cursors.down.isDown) {
    gameState.codey.y += 2;
  }
    
  if (gameState.cursors.up.isDown) {
    gameState.codey.y -= 2;
  }

  if (gameState.cursors.left.isDown) {
    gameState.codey.x -= 2;
  }

  if (gameState.cursors.right.isDown) {
    gameState.codey.x += 2;
  }
}

const config = {
  width: 420,
  height: 500,
  backgroundColor: 0xFF0000,
  scene: {
    preload,
    create,
    update
  } 
}

const game = new Phaser.Game(config);
