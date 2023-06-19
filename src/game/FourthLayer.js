class FourthLayer extends Tiny.Container {
  constructor() {
    super();
    this.init();
    this.initAction();
    // 时长是2000ms，旋转360度
    this.rotateAction = Tiny.RotateTo(2000, {rotation: Tiny.deg2radian(360)});
    this.moveAction = Tiny.MoveTo(1000, Tiny.point(100, Tiny.WIN_SIZE.height / 2));
  }
  init() {
    var txt = new Tiny.Text('场景4', {
      fontFamily: 'Arial',
      fontSize: 32,
      fill: 'white',
    });
    this.addChild(txt);
    var txt2 = new Tiny.Text('旋转', {
      fontFamily: 'Arial',
      fontSize: 32,
      fill: 'white',
    });
    txt2.setPosition(0, 50);
    txt2.setEventEnabled(true);
    txt2.on('tap', () => {
      this.rotate();
    });
    this.addChild(txt2);
    var txt3 = new Tiny.Text('移动', {
      fontFamily: 'Arial',
      fontSize: 32,
      fill: 'white',
    });
    txt3.setPosition(100, 50);
    txt3.setEventEnabled(true);
    txt3.on('tap', () => {
      this.move();
    });
    this.addChild(txt3);
    var txt4 = new Tiny.Text('自动', {
      fontFamily: 'Arial',
      fontSize: 32,
      fill: 'white',
    });
    txt4.setPosition(200, 50);
    txt4.setEventEnabled(true);
    txt4.on('tap', () => {
      this.autoAction();
    });
    this.addChild(txt4);
  }
  initAction() {
    var texture = Tiny.TextureCache['https://zos.alipayobjects.com/rmsportal/kkroUtIawGrWrqOLRmjq.jpg'];
    var sprite = new Tiny.Sprite(texture);
    sprite.setAnchor(0.5);
    sprite.setPosition(Tiny.WIN_SIZE.width / 2, Tiny.WIN_SIZE.height / 2);
    sprite.name = 'actionItem';
    this.addChild(sprite);
  }
  rotate() {
    // var action = Tiny.RotateTo(2000, {rotation: Tiny.deg2radian(360)});
    // 执行 action RepeatForever
    const sprite = this.children.find(i => i.name === 'actionItem');
    sprite.runAction(Tiny.RepeatForever(this.rotateAction));
  }
  move() {
    const sprite = this.children.find(i => i.name === 'actionItem');
    sprite.runAction(this.moveAction);
  }
  autoAction() {
    const sprite = this.children.find(i => i.name === 'actionItem');
    sprite.runSequenceAction(this.moveAction, this.rotateAction);
  }
}

export default FourthLayer;
