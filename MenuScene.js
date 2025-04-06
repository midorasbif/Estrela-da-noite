
class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    const title = this.add.text(100, 100, 'Pokémon Estrelas da Batalha', {
      font: '28px Arial',
      fill: '#ffffff'
    });
    
    this.add.text(100, 200, 'Toque para começar...', {
      font: '20px Arial',
      fill: '#aaaaaa'
    });

    this.input.once('pointerdown', () => {
      this.scene.start('GameScene');
    });
  }
}
