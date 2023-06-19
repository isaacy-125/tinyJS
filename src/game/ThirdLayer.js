class ThirdLayer extends Tiny.Container {
  constructor() {
    super();
    this.init();
    this.initAnimate();
  }
  init() {
    var txt = new Tiny.Text('场景3', {
      fontFamily: 'Arial',
      fontSize: 32,
      fill: 'white',
    });
    this.addChild(txt);
  }
  initAnimate() {
    var textures = [];
    for (var i = 0; i < 4; i++) {
      // 将帧图挨个添加到纹理数组中
      textures.push(Tiny.Texture.fromImage('https://gw.alipayobjects.com/as/g/tiny/resources/1.0.0/images/hao/hao' + i + '.png'));
    }

    // 这个纹理数组就是类初始化的入参
    var mc = new Tiny.AnimatedSprite(textures);
    // 设置动画速度，值越大速度越快
    mc.animationSpeed = 0.08;
    mc.setAnchor(0.5);
    mc.setPosition(Tiny.WIN_SIZE.width / 2, Tiny.WIN_SIZE.height / 2);
    // 立即播放
    mc.play();
    this.addChild(mc);
  }
}

export default ThirdLayer;
