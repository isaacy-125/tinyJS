// 新建场景
class StartLayer extends Tiny.Container {
  constructor() {
    super();
    this.status = 'right';
    this.init();
  }
  init() {
    // 通过 fromImage 实例化精灵
    var sprite = Tiny.Sprite.fromImage('https://gw.alipayobjects.com/as/g/tiny/resources/1.0.0/images/logo.png');
    // 设置精灵的中心点
    sprite.setAnchor(0.5);
    // 设置精灵相对画布的位置，此处设置居中
    sprite.setPosition(Tiny.WIN_SIZE.width / 2, Tiny.WIN_SIZE.height / 2);
    // 新建 action
    const rotateTo360Action = Tiny.RotateTo(2000, {rotation: Tiny.deg2radian(360)});
    // 执行 action RepeatForever
    sprite.runAction(Tiny.RepeatForever(rotateTo360Action));
    // 设置精灵可交互的
    sprite.setEventEnabled(true);
    // 绑定 tap 和 mouseup 事件
    sprite.on('tap', () => {
      console.log(Tiny.app);
      // 是否暂停
      if (Tiny.app.isPaused()) {
        // 恢复
        Tiny.app.resume();
      } else {
        // 暂停
        Tiny.app.pause();
      }
      // true为销毁并清除canvas
      // Tiny.app.destroy(true);
    });
    // onUpdate 方法就可以设置一个调度逻辑
    Tiny.app.onUpdate(function (time) {
      if (this.status === 'right') {
        sprite.setPositionX(sprite.getPositionX() + 3 * time);
      } else {
        sprite.setPositionX(sprite.getPositionX() - 3 * time);
      }
      if (sprite.getPositionX() > Tiny.WIN_SIZE.width) {
        this.status = 'left';
      } else if (sprite.getPositionX() < 0) {
        console.log('right');
        this.status = 'right';
      }
    }.bind(this));
    // offUpdate 方法可以取消调度逻辑
    // 将精灵添加到场景中
    this.addChild(sprite);
  }
}

export default StartLayer;
