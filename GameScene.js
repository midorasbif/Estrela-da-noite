
class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    this.add.image(400, 300, 'background');
    this.add.image(200, 300, 'pikachu').setScale(2);
    this.add.image(400, 300, 'bulbasaur').setScale(2);
    this.add.image(600, 300, 'charmander').setScale(2);

    this.add.text(10, 10, 'Batalha Iniciada!', {
      font: '18px Arial',
      fill: '#ffffff'
    });
  }
}
