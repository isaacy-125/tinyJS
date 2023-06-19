import StartLayer from './game/StartLayer';
import SecondLayer from './game/SecondLayer';
import ThirdLayer from './game/ThirdLayer';
import FourthLayer from './game/FourthLayer';
require('./css/index.less');

Tiny.app = new Tiny.Application({
  // // 显示帧频
  showFPS: true,
  // 使用调试模式
  debug: true,
  referWidth: 375,
  // 分辨率
  dpi: 2,
  // height: 300, // 固定高度为 300
  // width: 300, // 固定宽度为 300
  // fixSize: true, // 固定尺寸为传入的宽高
  // renderType: Tiny.RENDERER_TYPE.CANVAS, // 强制使用 CANVAS 渲染
  renderOptions: {
    // 画布背景色
    backgroundColor: 0x71d737,
    // antialias: true, // 抗锯齿
    // transparent: false, // canvas 不透明
    // clearBeforeRender: true, // 每次渲染之前都清空画布
    // roundPixels: false,
  },
  // autoRender: 1, // 自动渲染
});

// 声明资源文件
const resources = [
  'https://zos.alipayobjects.com/rmsportal/nJBojwdMJfUqpCWvwyoA.png',
  'https://zos.alipayobjects.com/rmsportal/kkroUtIawGrWrqOLRmjq.jpg',
  'https://zos.alipayobjects.com/rmsportal/jkgwjYSFHRkorsKaZbng.jpeg',
  'https://zos.alipayobjects.com/rmsportal/HAacythTETlcsPxEePbk.webp',
  // '../assets/text.txt',
  'https://os.alipayobjects.com/rmsportal/atrIuwPurrBiNEyWNdQA.ogg',
  'https://gw.alipayobjects.com/as/g/tiny/resources/1.0.0/images/hao/hao0.png',
  'https://gw.alipayobjects.com/as/g/tiny/resources/1.0.0/images/hao/hao1.png',
  'https://gw.alipayobjects.com/as/g/tiny/resources/1.0.0/images/hao/hao2.png',
  'https://gw.alipayobjects.com/as/g/tiny/resources/1.0.0/images/hao/hao3.png',
];
//执行加载
Tiny.Loader.run({
  resources,
  // 加载进度
  onProgress: (per) => {
    console.log('percent:', per + '%');
  },
  // 单个资源加载完成后的回调
  onComplete: (resourceLoader, resource) => {
    console.log(resource.url);
  },
  // 所有资源加载完成后的回调
  onAllComplete: (resourceLoader, object) => {
    console.log('all complete');
    // 这里执行应用的主场景，如：
    // app.run(new StartLayer());
    // 设置帧率
    Tiny.Application.FPS = 120;
    const startLayer = new StartLayer();
    const secondLayer = new SecondLayer();
    const thirdLayer = new ThirdLayer();
    const fourthLayer = new FourthLayer();

    Tiny.StartLayer = startLayer;
    Tiny.SecondLayer = secondLayer;
    Tiny.ThirdLayer = thirdLayer;
    Tiny.FourthLayer = fourthLayer;
    Tiny.app.run(startLayer);
  },
});
