class SecondLayer extends Tiny.Container {
  constructor() {
    super();
    this.init();
    this.initRect();
    this.initCircle();
  }
  initCircle() {
    var circle = new Tiny.Graphics();
    circle.beginFill(0x9966FF);
    // x、y 的位置是它的中心点，下面我们创建一个半径是32像素的紫色圆
    circle.drawCircle(0.5, 0.5, 32);
    circle.endFill();
    circle.setPosition(100, 40);
    this.addChild(circle);
  }
  init() {
    var bg = Tiny.Sprite.fromImage('../../res/images/secondBg.jpeg');
    bg.width = Tiny.WIN_SIZE.width;
    bg.height = Tiny.WIN_SIZE.height;
    this.addChildAt(bg, 0);
    var txt = new Tiny.Text('场景2', {
      fontFamily: 'Arial',
      fontSize: 32,
      fill: 'white',
    });
    this.addChild(txt);
    var txt2 = new Tiny.Text('去场景3', {
      fontFamily: 'Arial',
      fontSize: 32,
      fill: 'white',
    });
    txt2.setAnchor(0.5, 0);
    txt2.setPositionX(Tiny.WIN_SIZE.width / 2);
    txt2.setEventEnabled(true);
    txt2.on('tap', () => {
      Tiny.app.replaceScene(Tiny.ThirdLayer, 'MoveInR');
    });
    this.addChild(txt2);
  }
  initRect() {
    var rectangle = new Tiny.Graphics();
    // 传入一个16进制的颜色值来设置矩形的填充色
    rectangle.beginFill(0x66CCFF);
    // 给图形加一个描边，使用 lineStyle 方法，下面我们添加一个4像素宽的红色边框，透明度是1：
    rectangle.lineStyle(4, 0xFF3300, 1);
    // drawRect 方法来绘制矩形，它的参数分别是 x，y，width 和 height
    rectangle.drawRect(0, 0, 64, 64);
    rectangle.endFill();
    rectangle.setPosition(0, 40);
    this.addChild(rectangle);
  }
}

export default SecondLayer;
