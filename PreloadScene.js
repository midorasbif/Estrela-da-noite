
class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.image('background', 'https://i.imgur.com/3e5pWnU.png');
    this.load.image('pikachu', 'https://img.pokemondb.net/sprites/red-blue/normal/pikachu.png');
    this.load.image('bulbasaur', 'https://img.pokemondb.net/sprites/red-blue/normal/bulbasaur.png');
    this.load.image('charmander', 'https://img.pokemondb.net/sprites/red-blue/normal/charmander.png');
  }

  create() {
    this.scene.start('BootScene');
  }
}
