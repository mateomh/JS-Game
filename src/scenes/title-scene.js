/* eslint-disable import/prefer-default-export, no-undef */

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    const { game: { config: { width, height } } } = this;

    const userInput = document.getElementById('username');
    userInput.classList.toggle('hide');
    const logoScale = 0.65;
    const logo = this.add.image((680 * logoScale) / 1.5, (height / 2), 'mainlogo');
    logo.setScale(logoScale);

    const playbtn = this.add.sprite((width / 4) * 3 + 50, (height / 4) * 3, 'play');
    playbtn.setScale(1);
    playbtn.setInteractive();

    playbtn.on('pointerdown', this.playClick.bind(this));

    playbtn.on('pointerover', () => {
      playbtn.setTexture('play2');
    });

    playbtn.on('pointerout', () => {
      playbtn.setTexture('play');
    });
  }

  playClick() {
    const userInput = document.getElementById('username');
    if (userInput.value === '') userInput.value = 'Player';

    userInput.classList.toggle('hide');
    this.sys.game.globals.username = userInput.value;
    userInput.value = '';
    this.scene.start('Game');
  }
}